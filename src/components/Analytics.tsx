"use client";

import { motion } from "framer-motion";
import { TrendingUp, PieChart, Wallet, Activity, Check } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { DashboardMockup } from "./DashboardMockup";

const points = [
  "Выручка и чистая прибыль за день, месяц, год и всё время",
  "Диаграмма заказов по статусам — видно, где «застряли» ремонты",
  "График выручки и прибыли по дням месяца",
  "KPI-карточки: принято, в ремонте, ждут запчасти, готовы к выдаче",
];

const stats = [
  { icon: Wallet, value: 1702400, suffix: " ₽", label: "Выручка за год", color: "text-brand-green" },
  { icon: TrendingUp, value: 64, suffix: "%", label: "Маржинальность", color: "text-brand-blue" },
  { icon: Activity, value: 915, suffix: "", label: "Заказов закрыто", color: "text-brand-magenta" },
  { icon: PieChart, value: 9, suffix: "", label: "Статусов воронки", color: "text-brand-orange" },
];

export function Analytics() {
  return (
    <section id="analitika" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[#FAFAFC]" />
      <div className="container-x">
        <SectionHeader
          eyebrow="Аналитика"
          title={
            <>
              Принимайте решения{" "}
              <span className="gradient-text">по цифрам, а не на ощупь</span>
            </>
          }
          subtitle="Встроенная аналитика UltraCRM собирает данные по всем заказам и финансам автоматически — отчёты не нужно сводить вручную."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <ul className="space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-base text-ink">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="card p-5">
                  <s.icon className={`h-5 w-5 ${s.color}`} />
                  <div className={`mt-3 font-display text-2xl font-extrabold ${s.color}`}>
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-ink-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative rounded-[1.5rem] border border-ink-line bg-white p-2 shadow-card"
            >
              <div className="pointer-events-none absolute -inset-6 -z-10 bg-brand-gradient opacity-10 blur-3xl" />
              <div className="h-[30rem] overflow-hidden rounded-2xl">
                <DashboardMockup />
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
