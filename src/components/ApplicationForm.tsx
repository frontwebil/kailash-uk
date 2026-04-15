import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { X, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ApplicationForm({ isOpen, onClose }: ApplicationFormProps) {
  const navigate = useNavigate();
  const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_BOT_API_KEY;
  const TELEGRAM_CHAT_ID = import.meta.env.VITE_CHAT_ID;
  const URI_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const inputContents = [
      "*Заявка з сайту Манасовар/Кайлаш",
      "",
      `*Ім'я: ${formData.name}`,
      `*Номер телефону: ${formData.contact}`,
      `*Пошта: ${formData.email ?? "Не вказано"}`,
    ];

    const message = inputContents.join("\n");

    try {
      await fetch(URI_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }),
      });

      setFormData({
        name: "",
        contact: "",
        email: "",
      });
      navigate("/thank");
      return;
    } catch (error) {
      console.error("Telegram notification error:", error);
      throw new Error("Failed to send booking notification");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[rgba(45,34,18,0.7)]"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl border border-[#e4d7b6] bg-[#fffdf8] shadow-[0_20px_60px_rgba(91,69,24,0.28)]"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[#8a7443] transition-colors hover:text-[#2d2212]"
        >
          <X size={24} />
        </button>

        <div className="p-4 py-6 sm:p-8">
          {!isSuccess && (
            <h3 className="mb-6 text-center text-2xl font-light text-[#2d2212] md:text-3xl mt-5">
              {t.form.title}
            </h3>
          )}

          {isSuccess ? (
            <div className="pt-8 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#e4d7b6] bg-[#f3ead7]">
                <Send className="text-[#b8964f]" size={32} />
              </div>
              <p className="text-lg text-[#5b4518]">{t.form.success}</p>
              <a
                href="/"
                className="block w-full mt-5 rounded-lg bg-[#c6a75e] px-6 py-4 font-medium text-white transition-all hover:scale-105 hover:bg-[#b8964f] disabled:cursor-not-allowed disabled:bg-[#cbb98e] disabled:hover:scale-100 shadow-[0_12px_24px_rgba(184,150,79,0.22)]"
              >
                На головну
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#5b4518]"
                >
                  {t.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#e4d7b6] bg-[#fffdf8] px-4 py-3 text-[#2d2212] placeholder-[#b7a27a] outline-none transition-colors focus:border-[#c6a75e]"
                  placeholder={t.form.name}
                />
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className="mb-2 block text-sm font-medium text-[#5b4518]"
                >
                  {t.form.contact}
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#e4d7b6] bg-[#fffdf8] px-4 py-3 text-[#2d2212] placeholder-[#b7a27a] outline-none transition-colors focus:border-[#c6a75e]"
                  placeholder="38(000)-000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#5b4518]"
                >
                  {t.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#e4d7b6] bg-[#fffdf8] px-4 py-3 text-[#2d2212] placeholder-[#b7a27a] outline-none transition-colors focus:border-[#c6a75e]"
                  placeholder={t.form.email}
                />
              </div>

              {error && (
                <div className="rounded-lg border border-[#d9b4a7] bg-[#fff4f1] p-3">
                  <p className="text-sm text-[#9b4b3f]">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-[#c6a75e] px-6 py-4 font-medium text-white transition-all hover:scale-105 hover:bg-[#b8964f] disabled:cursor-not-allowed disabled:bg-[#cbb98e] disabled:hover:scale-100 shadow-[0_12px_24px_rgba(184,150,79,0.22)]"
              >
                {isSubmitting ? "..." : t.form.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
