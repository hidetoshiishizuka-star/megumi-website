import { NextResponse } from "next/server";
import { Resend } from "resend";

// Security: No hardcoded fallbacks - fail fast if env vars missing
const TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
// 許可ドメインは環境変数で管理（カンマ区切り）
const ALLOWED_ORIGINS = (process.env.CONTACT_ALLOWED_ORIGINS || "").split(",").filter(Boolean);

// --- Security: HTML escape ---
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// --- Security: Simple in-memory rate limiter ---
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // max 3 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// --- Security: Input validation ---
const MAX_NAME = 100;
const MAX_KANA = 100;
const MAX_EMAIL = 254;
const MAX_PHONE = 30;
const MAX_MESSAGE = 5000;
const MAX_PURPOSE = 100;

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export async function POST(request: Request) {
  try {
    // --- Security: Origin check (CSRF protection) ---
    const origin = request.headers.get("origin");
    if (origin && !ALLOWED_ORIGINS.includes(origin) && !origin.includes("localhost")) {
      return NextResponse.json({ error: "不正なリクエストです" }, { status: 403 });
    }

    // --- Security: Rate limiting (prefer x-real-ip on Vercel, fallback to x-forwarded-for) ---
    const ip = request.headers.get("x-real-ip")
      || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
      || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "送信回数の上限に達しました。しばらく経ってから再度お試しください。" },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { purpose, name, kana, email, phone, message } = body;

    // --- Security: Required field check ---
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // --- Security: Input length validation ---
    if (
      (typeof name === "string" && name.length > MAX_NAME) ||
      (typeof kana === "string" && kana.length > MAX_KANA) ||
      (typeof email === "string" && email.length > MAX_EMAIL) ||
      (typeof phone === "string" && phone.length > MAX_PHONE) ||
      (typeof message === "string" && message.length > MAX_MESSAGE) ||
      (typeof purpose === "string" && purpose.length > MAX_PURPOSE)
    ) {
      return NextResponse.json(
        { error: "入力内容が長すぎます" },
        { status: 400 }
      );
    }

    // --- Security: Email format validation ---
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "メールアドレスの形式が正しくありません" },
        { status: 400 }
      );
    }

    const resend = getResend();
    if (!resend || !TO_EMAIL || !FROM_EMAIL) {
      console.error("Email configuration is incomplete");
      return NextResponse.json(
        { error: "メール送信の設定が完了していません。お電話（045-300-6630）でお問い合わせください。" },
        { status: 503 }
      );
    }

    // --- Security: Escape all user input before embedding in HTML ---
    const safePurpose = escapeHtml(purpose || "未選択");
    const safeName = escapeHtml(name);
    const safeKana = escapeHtml(kana || "未入力");
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "未入力");
    const safeMessage = escapeHtml(message);

    // メール送信（クリニック宛）
    const { error } = await resend.emails.send({
      from: `めぐみ在宅クリニック お問い合わせ <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `【お問い合わせ】${safePurpose} - ${safeName}様`,
      html: `
        <h2>めぐみ在宅クリニック お問い合わせ</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;width:120px;">ご用件</td><td style="padding:8px;border:1px solid #ddd;">${safePurpose}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">お名前</td><td style="padding:8px;border:1px solid #ddd;">${safeName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">フリガナ</td><td style="padding:8px;border:1px solid #ddd;">${safeKana}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">メール</td><td style="padding:8px;border:1px solid #ddd;">${safeEmail}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">電話番号</td><td style="padding:8px;border:1px solid #ddd;">${safePhone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">お問い合わせ内容</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap;">${safeMessage}</td></tr>
        </table>
        <p style="color:#888;font-size:12px;margin-top:16px;">このメールはめぐみ在宅クリニック公式サイトのお問い合わせフォームから送信されました。</p>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return NextResponse.json(
        { error: "メール送信に失敗しました。しばらく経ってから再度お試しください。" },
        { status: 500 }
      );
    }

    // 自動返信メール（お客様宛） — クリニック宛送信が成功した場合のみ送信
    await resend.emails.send({
      from: `めぐみ在宅クリニック <${FROM_EMAIL}>`,
      to: [email],
      subject: "【めぐみ在宅クリニック】お問い合わせを受け付けました",
      html: `
        <p>${safeName} 様</p>
        <p>このたびはめぐみ在宅クリニックにお問い合わせいただき、誠にありがとうございます。</p>
        <p>以下の内容でお問い合わせを受け付けいたしました。<br/>担当者より折り返しご連絡させていただきますので、今しばらくお待ちください。</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0;"/>
        <p><strong>ご用件：</strong>${safePurpose}</p>
        <p><strong>お問い合わせ内容：</strong></p>
        <p style="white-space:pre-wrap;">${safeMessage}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0;"/>
        <p style="font-size:12px;color:#888;">
          めぐみ在宅クリニック<br/>
          〒246-0037 神奈川県横浜市瀬谷区橋戸2-4-3<br/>
          TEL: 045-300-6630（月〜金 9:00〜17:00）
        </p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
