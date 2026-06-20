"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  BookOpen,
  Settings,
  Moon,
} from "lucide-react";
import { AnimatedCounter } from "./ui/AnimatedCounter";

const nav = [
  { icon: LayoutDashboard, label: "Дашборд", active: true },
  { icon: ClipboardList, label: "Заказы" },
  { icon: Users, label: "Клиенты" },
  { icon: BookOpen, label: "Справочник" },
  { icon: Settings, label: "Настройки" },
];

const kpis = [
  { value: 1, label: "Принято сегодня", color: "text-brand-blue" },
  { value: 8, label: "В ремонте", color: "text-brand-magenta" },
  { value: 9, label: "Ожидают запчасти", color: "text-brand-orange" },
  { value: 4, label: "Готовы к выдаче", color: "text-brand-green" },
  { value: 2, label: "Выдано сегодня", color: "text-brand-pink" },
  { value: 915, label: "Выдано за всё время", color: "text-brand-magenta" },
];

const statuses = [
  { label: "Принят", value: 6, color: "#5B7CFA" },
  { label: "Диагностика", value: 13, color: "#9B5BFA" },
  { label: "Ожидание согласования", value: 2, color: "#FBB040" },
  { label: "Ожидание запчастей", value: 9, color: "#FF7A1A" },
  { label: "В ремонте", value: 8, color: "#22B8CF" },
  { label: "Готов", value: 4, color: "#3FC56B" },
  { label: "Выдан", value: 915, color: "#F43F8E" },
  { label: "Отказ", value: 52, color: "#FB5C4C" },
  { label: "Утиль", value: 50, color: "#8A8A9A" },
];

// Donut built from the real status distribution.
function Donut() {
  const total = statuses.reduce((s, x) => s + x.value, 0);
  const r = 52;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <svg viewBox="0 0 140 140" className="h-32 w-32 -rotate-90">
      <circle cx="70" cy="70" r={r} fill="none" stroke="#F1F1F6" strokeWidth="16" />
      {statuses.map((s, i) => {
        const len = (s.value / total) * c;
        const seg = (
          <motion.circle
            key={s.label}
            cx="70"
            cy="70"
            r={r}
            fill="none"
            stroke={s.color}
            strokeWidth="16"
            strokeDasharray={`${len} ${c - len}`}
            strokeDashoffset={-offset}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.05 }}
          />
        );
        offset += len;
        return seg;
      })}
    </svg>
  );
}

const bars = [62, 95, 40, 96, 30, 44, 52, 60, 78, 50, 64, 70, 58, 30, 74, 80, 72, 88, 48, 46, 38];

function RevenueChart() {
  return (
    <div className="flex h-28 items-end gap-1.5">
      {bars.map((h, i) => (
        <div key={i} className="flex flex-1 items-end justify-center gap-[2px]">
          <motion.span
            className="w-1/2 rounded-t-sm bg-brand-green"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.03, ease: "easeOut" }}
          />
          <motion.span
            className="w-1/2 rounded-t-sm bg-brand-blue"
            initial={{ height: 0 }}
            whileInView={{ height: `${Math.max(10, h - 6)}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.03 + 0.06, ease: "easeOut" }}
          />
        </div>
      ))}
    </div>
  );
}

export function DashboardMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex h-full w-full overflow-hidden rounded-2xl bg-[#F7F7FB] text-left">
      {/* Sidebar */}
      <aside className="hidden w-44 shrink-0 flex-col border-r border-ink-line bg-white p-3 sm:flex">
        <div className="mb-5 flex items-center gap-2 px-1.5 pt-1">
          <svg viewBox="0 0 40 40" className="h-6 w-6" aria-hidden>
            <path d="M20 9 L29 33 L20 33 Z" fill="#5B7CFA" />
            <rect x="5.5" y="8" width="8.6" height="27" rx="4.3" transform="rotate(-22 9.8 21.5)" fill="#FB5C4C" />
            <rect x="22.5" y="6.5" width="8.6" height="22" rx="4.3" transform="rotate(20 26.8 17.5)" fill="#FBB040" />
            <circle cx="27" cy="31.5" r="4.6" fill="#3FC56B" />
          </svg>
          <span className="text-sm font-extrabold">
            Ultra<span className="gradient-text">CRM</span>
          </span>
        </div>
        <nav className="flex flex-col gap-1">
          {nav.map((n) => (
            <div
              key={n.label}
              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium ${
                n.active
                  ? "bg-brand-gradient-soft text-brand-magenta"
                  : "text-ink-muted"
              }`}
            >
              <n.icon className="h-4 w-4" />
              {n.label}
            </div>
          ))}
        </nav>
        <div className="mt-auto flex items-center justify-between border-t border-ink-line pt-3 text-[11px] text-ink-muted">
          <span>Администратор</span>
          <Moon className="h-3.5 w-3.5" />
        </div>
      </aside>

      {/* Content */}
      <div className="thin-scroll flex-1 overflow-hidden p-3 sm:p-4">
        <div className="mb-3 text-base font-bold">Дашборд</div>

        {/* KPI cards */}
        <div className="mb-3 grid grid-cols-3 gap-2">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="rounded-xl border border-ink-line bg-white px-2.5 py-2 shadow-[0_1px_2px_rgba(11,11,18,0.04)]"
            >
              <div className={`text-lg font-extrabold leading-none ${k.color}`}>
                <AnimatedCounter value={k.value} />
              </div>
              <div className="mt-1 text-[10px] leading-tight text-ink-muted">
                {k.label}
              </div>
            </div>
          ))}
        </div>

        {/* Finance row */}
        <div className="mb-3 grid grid-cols-2 gap-2">
          {[
            { title: "Выручка", value: "1 702 400", accent: "text-brand-green" },
            { title: "Чистая прибыль", value: "1 702 400", accent: "text-brand-blue" },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-ink-line bg-white p-2.5">
              <div className="text-[11px] font-semibold text-ink-muted">{f.title}</div>
              <div className={`mt-1 text-sm font-extrabold ${f.accent}`}>{f.value} ₽</div>
              <div className="text-[9px] text-ink-muted">за год</div>
            </div>
          ))}
        </div>

        {!compact && (
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {/* Donut */}
            <div className="rounded-xl border border-ink-line bg-white p-3">
              <div className="mb-2 text-[11px] font-semibold">Заказы по статусам</div>
              <div className="flex items-center gap-3">
                <Donut />
                <div className="grid flex-1 grid-cols-1 gap-1">
                  {statuses.slice(0, 6).map((s) => (
                    <div key={s.label} className="flex items-center gap-1.5 text-[9.5px]">
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{ background: s.color }}
                      />
                      <span className="truncate text-ink-muted">{s.label}</span>
                      <span className="ml-auto font-semibold">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Revenue chart */}
            <div className="rounded-xl border border-ink-line bg-white p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-semibold">Выручка и прибыль</span>
                <span className="rounded-md bg-ink/5 px-2 py-0.5 text-[9px] text-ink-muted">
                  Июнь 2026
                </span>
              </div>
              <RevenueChart />
              <div className="mt-2 flex items-center gap-3 text-[9.5px]">
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-brand-green" /> Выручка
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-brand-blue" /> Прибыль
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
