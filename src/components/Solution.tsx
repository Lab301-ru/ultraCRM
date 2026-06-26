"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  Users,
  BookOpen,
  BarChart3,
  Wallet,
  ArrowRight,
  Phone,
  Plus,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

type Key = "orders" | "clients" | "catalog" | "analytics" | "finance";

const tabs: {
  key: Key;
  icon: typeof ClipboardList;
  title: string;
  text: string;
}[] = [
  {
    key: "orders",
    icon: ClipboardList,
    title: "Заказы",
    text: "Каждый ремонт — карточка с устройством, неисправностью, статусом и историей. Воронка из 10 статусов: от приёмки до выдачи с ремонтом или без.",
  },
  {
    key: "clients",
    icon: Users,
    title: "Клиенты",
    text: "Единая база клиентов с историей обращений, устройствами и контактами. Видно, кто постоянный, а кому пора перезвонить.",
  },
  {
    key: "catalog",
    icon: BookOpen,
    title: "Справочник",
    text: "Каталог услуг и запчастей с ценами. Подставляйте позиции в заказ в пару кликов — стоимость и склад считаются автоматически.",
  },
  {
    key: "analytics",
    icon: BarChart3,
    title: "Аналитика",
    text: "Дашборд с KPI, диаграммой заказов по статусам и графиком выручки. Вся картина центра — на одном экране.",
  },
  {
    key: "finance",
    icon: Wallet,
    title: "Финансы",
    text: "Выручка и чистая прибыль за день, месяц, год и всё время. Видно, сколько реально зарабатывает сервис.",
  },
];

const statusBadge: Record<string, string> = {
  Принят: "bg-brand-blue/10 text-brand-blue",
  Диагностика: "bg-[#9B5BFA]/10 text-[#9B5BFA]",
  "В ремонте": "bg-[#22B8CF]/10 text-[#22B8CF]",
  "Ожидание запчастей": "bg-brand-orange/10 text-brand-orange",
  Готов: "bg-brand-green/10 text-brand-green",
  Выдан: "bg-brand-pink/10 text-brand-magenta",
};

function Panel({ active }: { active: Key }) {
  if (active === "orders") {
    const rows = [
      { id: "10231", device: "iPhone 13 Pro", issue: "Замена дисплея", st: "В ремонте", sum: "8 900" },
      { id: "10230", device: "MacBook Air M1", issue: "Не включается", st: "Диагностика", sum: "—" },
      { id: "10229", device: "Samsung S22", issue: "Замена АКБ", st: "Готов", sum: "3 200" },
      { id: "10228", device: "Lenovo IdeaPad", issue: "Чистка, термопаста", st: "Выдан", sum: "2 500" },
      { id: "10227", device: "Кофемашина DeLonghi", issue: "Не греет воду", st: "Ожидание запчастей", sum: "—" },
    ];
    return (
      <div>
        <PanelHead title="Заказы" action="Новый заказ" />
        <div className="space-y-2">
          {rows.map((r) => (
            <div key={r.id} className="flex items-center gap-3 rounded-xl border border-ink-line bg-white p-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-gradient-soft text-xs font-bold text-brand-magenta">
                №{r.id.slice(-2)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold text-ink">{r.device}</div>
                <div className="truncate text-xs text-ink-muted">{r.issue}</div>
              </div>
              <span className={`hidden rounded-full px-2.5 py-1 text-[11px] font-medium sm:inline ${statusBadge[r.st]}`}>
                {r.st}
              </span>
              <div className="w-16 shrink-0 text-right text-sm font-semibold text-ink">{r.sum} ₽</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (active === "clients") {
    const rows = [
      { name: "Алексей Морозов", phone: "+7 995 250-77-72", orders: 7, tag: "Постоянный" },
      { name: "Ирина Соколова", phone: "+7 912 044-18-03", orders: 3, tag: "Перезвонить" },
      { name: "ООО «ТехноЛайн»", phone: "+7 800 700-12-21", orders: 24, tag: "B2B" },
      { name: "Дмитрий Кузнецов", phone: "+7 903 551-90-14", orders: 1, tag: "Новый" },
    ];
    return (
      <div>
        <PanelHead title="Клиенты" action="Добавить" />
        <div className="space-y-2">
          {rows.map((r) => (
            <div key={r.name} className="flex items-center gap-3 rounded-xl border border-ink-line bg-white p-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white">
                {r.name[0]}
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold text-ink">{r.name}</div>
                <div className="flex items-center gap-1 text-xs text-ink-muted">
                  <Phone className="h-3 w-3" /> {r.phone}
                </div>
              </div>
              <div className="hidden text-right text-xs text-ink-muted sm:block">
                {r.orders} заказов
              </div>
              <span className="rounded-full bg-ink/5 px-2.5 py-1 text-[11px] font-medium text-ink-muted">
                {r.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (active === "catalog") {
    const services = [
      { name: "Замена дисплея iPhone 13 Pro", price: "8 900", type: "Услуга" },
      { name: "Аккумулятор Samsung S22", price: "1 800", type: "Запчасть" },
      { name: "Диагностика ноутбука", price: "0–500", type: "Услуга" },
      { name: "Чистка от пыли + термопаста", price: "1 500", type: "Услуга" },
      { name: "Шлейф зарядки Type-C", price: "650", type: "Запчасть" },
    ];
    return (
      <div>
        <PanelHead title="Справочник" action="Позиция" />
        <div className="space-y-2">
          {services.map((s) => (
            <div key={s.name} className="flex items-center gap-3 rounded-xl border border-ink-line bg-white p-3">
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold text-ink">{s.name}</div>
                <span className={`text-[11px] font-medium ${s.type === "Услуга" ? "text-brand-blue" : "text-brand-orange"}`}>
                  {s.type}
                </span>
              </div>
              <div className="shrink-0 text-right text-sm font-semibold text-ink">{s.price} ₽</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (active === "finance") {
    const cards = [
      { t: "Выручка за месяц", v: "161 050 ₽", d: "+18% к прошлому", c: "text-brand-green" },
      { t: "Чистая прибыль", v: "161 050 ₽", d: "маржа 64%", c: "text-brand-blue" },
      { t: "Средний чек", v: "4 320 ₽", d: "по 96 заказам", c: "text-brand-magenta" },
      { t: "Выручка за год", v: "1 702 400 ₽", d: "нарастающим итогом", c: "text-brand-orange" },
    ];
    return (
      <div>
        <PanelHead title="Финансы" />
        <div className="grid grid-cols-2 gap-3">
          {cards.map((c) => (
            <div key={c.t} className="rounded-xl border border-ink-line bg-white p-4">
              <div className="text-xs font-medium text-ink-muted">{c.t}</div>
              <div className={`mt-1.5 text-lg font-extrabold ${c.c}`}>{c.v}</div>
              <div className="mt-1 text-[11px] text-ink-muted">{c.d}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // analytics
  const kpis = [
    { v: "8", l: "В ремонте", c: "text-brand-magenta" },
    { v: "9", l: "Ждут запчасти", c: "text-brand-orange" },
    { v: "4", l: "Готовы к выдаче", c: "text-brand-green" },
    { v: "915", l: "Выдано всего", c: "text-brand-pink" },
  ];
  const bars = [50, 80, 35, 90, 60, 72, 48, 86, 64, 95, 70];
  return (
    <div>
      <PanelHead title="Дашборд" />
      <div className="mb-3 grid grid-cols-4 gap-2">
        {kpis.map((k) => (
          <div key={k.l} className="rounded-xl border border-ink-line bg-white p-2.5 text-center">
            <div className={`text-base font-extrabold ${k.c}`}>{k.v}</div>
            <div className="mt-0.5 text-[10px] leading-tight text-ink-muted">{k.l}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-ink-line bg-white p-4">
        <div className="mb-3 text-xs font-semibold text-ink">Выручка и прибыль</div>
        <div className="flex h-28 items-end gap-1.5">
          {bars.map((h, i) => (
            <div key={i} className="flex h-full flex-1 items-end justify-center gap-[2px]">
              <motion.span
                className="w-1/2 origin-bottom rounded-t bg-brand-green"
                style={{ height: `${h}%` }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
              />
              <motion.span
                className="w-1/2 origin-bottom rounded-t bg-brand-blue"
                style={{ height: `${Math.max(12, h - 10)}%` }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: i * 0.04 + 0.05 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PanelHead({ title, action }: { title: string; action?: string }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h4 className="text-base font-bold text-ink">{title}</h4>
      {action && (
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-gradient px-3 py-1.5 text-xs font-semibold text-white">
          <Plus className="h-3.5 w-3.5" /> {action}
        </span>
      )}
    </div>
  );
}

export function Solution() {
  const [active, setActive] = useState<Key>("orders");

  return (
    <section id="reshenie" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[#FAFAFC]" />
      <div className="container-x">
        <SectionHeader
          eyebrow="Решение"
          title={
            <>
              Весь сервис в <span className="gradient-text">одной системе</span>
            </>
          }
          subtitle="Выберите модуль — и посмотрите, как UltraCRM наводит порядок в каждом участке работы сервисного центра."
        />

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          {/* Tabs */}
          <Reveal direction="right">
            <div className="flex flex-col gap-2.5">
              {tabs.map((t) => {
                const on = t.key === active;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActive(t.key)}
                    className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                      on
                        ? "border-brand-pink/30 bg-white shadow-card"
                        : "border-ink-line bg-white/60 hover:border-brand-pink/20 hover:bg-white"
                    }`}
                  >
                    {on && (
                      <motion.span
                        layoutId="sol-active"
                        className="absolute inset-y-0 left-0 w-1 rounded-r-full bg-brand-gradient"
                      />
                    )}
                    <div className="flex items-start gap-3">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                          on ? "bg-brand-gradient text-white" : "bg-ink/5 text-ink-muted group-hover:text-ink"
                        }`}
                      >
                        <t.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="flex items-center gap-2 text-base font-bold text-ink">
                          {t.title}
                          {on && <ArrowRight className="h-4 w-4 text-brand-magenta" />}
                        </div>
                        <AnimatePresence initial={false}>
                          {on && (
                            <motion.p
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden text-sm leading-relaxed text-ink-muted"
                            >
                              <span className="mt-1.5 block">{t.text}</span>
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Preview */}
          <Reveal direction="left" delay={0.1}>
            <div className="relative rounded-[1.5rem] border border-ink-line bg-[#F7F7FB] p-3 shadow-card">
              <div className="pointer-events-none absolute -inset-6 -z-10 bg-brand-gradient opacity-10 blur-3xl" />
              <div className="flex items-center gap-2 px-2 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              </div>
              <div className="min-h-[24rem] rounded-2xl bg-[#F7F7FB] p-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Panel active={active} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
