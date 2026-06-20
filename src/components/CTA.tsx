"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  User,
  Building2,
  Send,
  Loader2,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SITE } from "@/lib/site";

type Status = "idle" | "loading" | "sent" | "error";

export function CTA() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    const data = new FormData(form);
    data.append("_subject", "Новая заявка с сайта UltraCRM");
    data.append("_captcha", "false");
    data.append("_template", "table");
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="cta" className="relative py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 shadow-card sm:px-12 lg:px-16">
            {/* glow / aurora */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-brand-orange opacity-30 blur-3xl" />
              <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-brand-magenta opacity-30 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-blue opacity-20 blur-3xl" />
            </div>

            <div className="relative grid items-stretch gap-10 lg:grid-cols-2">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
                  Старт за один день
                </span>
                <h2 className="mt-5 text-balance font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  Наведите порядок в сервисе{" "}
                  <span className="bg-gradient-to-r from-brand-amber via-brand-pink to-brand-orange bg-clip-text text-transparent">
                    вместе с UltraCRM
                  </span>
                </h2>
                <p className="mt-4 text-pretty text-white/70">
                  Оставьте заявку — покажем систему на ваших задачах и поможем
                  перенести данные. Бесплатный пробный период без обязательств.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70 lg:justify-start">
                  {["Без установки", "Бесплатный старт", "Поддержка при переходе"].map((t) => (
                    <span key={t} className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-brand-green" /> {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex w-full justify-center pt-8">
                  <a
                    href={SITE.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-running is-blue"
                  >
                    <span className="btn-running__inner">
                      <Send className="h-4 w-4 text-brand-blue" />
                      Написать в Telegram
                    </span>
                  </a>
                </div>
              </div>

              {/* Form */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:backdrop-blur-xl">
                {status === "sent" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/20 text-brand-green">
                      <CheckCircle2 className="h-8 w-8" />
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-white">Заявка отправлена!</h3>
                    <p className="mt-2 text-sm text-white/70">
                      Менеджер Lab301 свяжется с вами в ближайшее время.
                    </p>
                    <a
                      href={SITE.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-pink hover:underline"
                    >
                      <Send className="h-4 w-4" /> Или напишите нам в Telegram
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <h3 className="text-lg font-bold text-white">Получить демо</h3>
                    <Field name="name" icon={User} placeholder="Ваше имя" type="text" />
                    <Field name="phone" icon={Phone} placeholder="Телефон" type="tel" />
                    <Field
                      name="service"
                      icon={Building2}
                      placeholder="Название сервиса (необязательно)"
                      type="text"
                      required={false}
                    />
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-running mt-1 w-full disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      <span className="btn-running__inner">
                        {status === "loading" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Отправляем…
                          </>
                        ) : (
                          <>
                            Оставить заявку
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </span>
                    </button>
                    {status === "error" && (
                      <p className="text-center text-xs text-red-300">
                        Не удалось отправить. Напишите нам в Telegram:{" "}
                        <a href={SITE.telegramUrl} className="font-semibold underline">
                          {SITE.telegram}
                        </a>
                      </p>
                    )}
                    <p className="text-center text-[11px] text-white/50">
                      Нажимая кнопку, вы соглашаетесь с{" "}
                      <a href="/privacy" className="underline hover:text-white/80">
                        политикой конфиденциальности
                      </a>
                      .
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  placeholder,
  type,
  name,
  required = true,
}: {
  icon: typeof User;
  placeholder: string;
  type: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-brand-pink/60 focus:bg-white/10"
      />
    </div>
  );
}
