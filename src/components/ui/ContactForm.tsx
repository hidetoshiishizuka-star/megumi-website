"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    purpose: "",
    name: "",
    kana: "",
    email: "",
    phone: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("必須項目をご入力ください。");
      return;
    }
    if (!agreed) {
      alert("プライバシーポリシーに同意してください。");
      return;
    }

    setSubmitting(true);
    setResult(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResult("success");
        setFormData({ purpose: "", name: "", kana: "", email: "", phone: "", message: "" });
        setAgreed(false);
      } else {
        setResult("error");
      }
    } catch {
      setResult("error");
    } finally {
      setSubmitting(false);
    }
  };

  if (result === "success") {
    return (
      <div className="bg-navy-light rounded-2xl p-12 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-navy mb-3">
          お問い合わせを受け付けました
        </h3>
        <p className="text-text-secondary text-sm mb-2">
          ご入力いただいたメールアドレスに確認メールをお送りしました。
        </p>
        <p className="text-text-secondary text-sm mb-6">
          担当者より折り返しご連絡いたしますので、今しばらくお待ちください。
        </p>
        <button
          onClick={() => setResult(null)}
          className="btn-pill btn-pill-secondary text-sm"
        >
          新しいお問い合わせ
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          ご用件 <span className="text-sunrise">*</span>
        </label>
        <select
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
        >
          <option value="">選択してください</option>
          <option value="診療について">診療について</option>
          <option value="求人に関する問い合わせ">求人に関する問い合わせ</option>
          <option value="研修会・勉強会について">研修会・勉強会について</option>
          <option value="在宅医療・緩和ケアを学びたい">在宅医療・緩和ケアを学びたい</option>
          <option value="講演依頼">講演依頼</option>
          <option value="取材の申し込み">取材の申し込み</option>
          <option value="その他">その他</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            お名前 <span className="text-sunrise">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
            placeholder="例：山田 太郎"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">フリガナ</label>
          <input
            type="text"
            name="kana"
            value={formData.kana}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
            placeholder="例：ヤマダ タロウ"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            メールアドレス <span className="text-sunrise">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">電話番号</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          お問い合わせ内容 <span className="text-sunrise">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
        />
      </div>

      <div className="flex items-start gap-3 bg-warm-gray rounded-lg p-4">
        <input
          type="checkbox"
          id="privacy"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1"
        />
        <label htmlFor="privacy" className="text-sm text-text-secondary">
          <Link
            href="/privacy"
            className="text-navy underline hover:text-navy-dark"
            target="_blank"
          >
            プライバシーポリシー
          </Link>
          に同意の上、送信してください。
        </label>
      </div>

      {result === "error" && (
        <div className="bg-red-50 text-red-700 rounded-lg p-4 text-sm">
          送信に失敗しました。しばらくしてからもう一度お試しいただくか、お電話（045-300-6630）でお問い合わせください。
        </div>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={submitting}
          className="btn-pill btn-pill-primary disabled:opacity-50"
        >
          {submitting ? "送信中..." : "送信する"}
        </button>
      </div>
    </form>
  );
}
