"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

const plans = [
  {
    name: "Старт",
    tagline: "Для частных мастеров",
    monthly: 990,
    features: [
      "Заказы и воронка статусов",
      "База клиентов",
      "Справочник услуг и запчастей",
      "Финансы: выручка и прибыль",
      "1 рабочее место",
      "Тёмная тема",
    ],
    cta: "Начать бесплатно",
    highlight: false,
  },
  {
    name: "Бизнес",
    tagline: "Для сервисных центров",
    monthly: 2490,
    features: [
      "Всё из тарифа «Старт»",
      "Складской учёт запчастей",
      "Аналитика и дашборд",
      "Уведомления клиентов и обзвон",
      "Роли сотрудников",
      "До 10 рабочих мест",
      "Приоритетная поддержка",
    ],
    cta: "Получить демо",
    highlight: true,
  },
  {
    name: "Сеть",
    tagline: "Для сетей сервисов",
    monthly: 5900,
    features: [
      "Всё из тарифа «Бизнес»",
      "Несколько точек",
      "Сводная аналитика по сети",
      "Гибкие роли и доступы",
      "Неограниченно рабочих мест",
      "Персональный менеджер",
    ],
    cta: "Обсудить внедрение",
    highlight: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  const price = (m: number) =>
    yearly ? Math.round(m * 0.8) : m; // -20% при оплате за год

  return (
    <section id="tarify" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader
          eyebrow="Тарифы"
          title={
            <>
              Прозрачные цены —{" "}
              <span className="gradient-text">без скрытых платежей</span>
            </>
          }
          subtitle="Начните бесплатно и выберите тариф под размер вашего сервиса. Можно сменить в любой момент."
        />

        {/* Billing toggle */}
        <Reveal className="mt-8 flex items-center justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-ink-line bg-white p-1">
            <button
              onClick={() => setYearly(false)}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                !yearly ? "text-white" : "text-ink-muted"
              }`}
            >
              {!yearly && (
                <motion.span
                  layoutId="billing-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-brand-gradient"
                />
              )}
              Помесячно
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                yearly ? "text-white" : "text-ink-muted"
              }`}
            >
              {yearly && (
                <motion.span
                  layoutId="billing-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-brand-gradient"
                />
              )}
              За год
              <span className={`ml-1.5 text-xs ${yearly ? "text-white/90" : "text-brand-magenta"}`}>
                −20%
              </span>
            </button>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} direction="up">
              <div
                className={`relative flex h-full flex-col rounded-[1.75rem] p-7 transition-all duration-300 ${
                  p.highlight
                    ? "border-2 border-transparent bg-white shadow-float lg:-translate-y-4 lg:scale-[1.03]"
                    : "border border-ink-line bg-white hover:-translate-y-1 hover:shadow-card"
                }`}
                style={
                  p.highlight
                    ? {
                        backgroundImage:
                          "linear-gradient(white, white), linear-gradient(100deg, #FF7A1A, #F43F8E)",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                      }
                    : undefined
                }
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-brand-gradient px-3.5 py-1 text-xs font-bold text-white shadow-float">
                    <Sparkles className="h-3.5 w-3.5" /> Популярный
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-extrabold text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{p.tagline}</p>
                </div>

                <div className="mt-5 flex items-end gap-1.5">
                  <span className="font-display text-4xl font-extrabold text-ink">
                    {price(p.monthly).toLocaleString("ru-RU")} ₽
                  </span>
                  <span className="mb-1 text-sm text-ink-muted">/ мес</span>
                </div>
                {yearly && (
                  <p className="mt-1 text-xs text-brand-magenta">
                    при оплате за год
                  </p>
                )}

                <a
                  href="#cta"
                  className={`mt-6 w-full ${p.highlight ? "btn-primary" : "btn-secondary"}`}
                >
                  {p.cta}
                </a>

                <ul className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          p.highlight ? "bg-brand-gradient text-white" : "bg-brand-gradient-soft text-brand-magenta"
                        }`}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-sm text-ink-muted">
            Не уверены, какой тариф нужен?{" "}
            <a href="#cta" className="font-semibold text-brand-magenta hover:underline">
              Оставьте заявку — подберём под ваш сервис
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
