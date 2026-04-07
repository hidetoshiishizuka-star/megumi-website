import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "megumi_zaitaku@miracle.ocn.ne.jp";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "noreply@megumizaitaku.jp";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { purpose, name, kana, email, phone, message } = body;

    // バリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    const resend = getResend();
    if (!resend) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "メール送信の設定が完了していません。お電話（045-300-6630）でお問い合わせください。" },
        { status: 503 }
      );
    }

    // メール送信（クリニック宛）
    const { error } = await resend.emails.send({
      from: `めぐみ在宅クリニック お問い合わせ <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `【お問い合わせ】${purpose || "その他"} - ${name}様`,
      html: `
        <h2>めぐみ在宅クリニック お問い合わせ</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;width:120px;">ご用件</td><td style="padding:8px;border:1px solid #ddd;">${purpose || "未選択"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">お名前</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">フリガナ</td><td style="padding:8px;border:1px solid #ddd;">${kana || "未入力"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">メール</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">電話番号</td><td style="padding:8px;border:1px solid #ddd;">${phone || "未入力"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">お問い合わせ内容</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap;">${message}</td></tr>
        </table>
        <p style="color:#888;font-size:12px;margin-top:16px;">このメールはめぐみ在宅クリニック公式サイトのお問い合わせフォームから送信されました。</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "メール送信に失敗しました" },
        { status: 500 }
      );
    }

    // 自動返信メール（お客様宛）
    await resend.emails.send({
      from: `めぐみ在宅クリニック <${FROM_EMAIL}>`,
      to: [email],
      subject: "【めぐみ在宅クリニック】お問い合わせを受け付けました",
      html: `
        <p>${name} 様</p>
        <p>このたびはめぐみ在宅クリニックにお問い合わせいただき、誠にありがとうございます。</p>
        <p>以下の内容でお問い合わせを受け付けいたしました。<br/>担当者より折り返しご連絡させていただきますので、今しばらくお待ちください。</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0;"/>
        <p><strong>ご用件：</strong>${purpose || "未選択"}</p>
        <p><strong>お問い合わせ内容：</strong></p>
        <p style="white-space:pre-wrap;">${message}</p>
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
