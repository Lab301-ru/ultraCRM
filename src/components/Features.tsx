"use client";

import {
  ClipboardList,
  Users,
  BookOpen,
  Boxes,
  Wallet,
  BarChart3,
  BellRing,
  ShieldCheck,
  Moon,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealGroup, RevealItem } from "./ui/Reveal";

const features = [
  {
    icon: ClipboardList,
    title: "Заказы и воронка ремонта",
    text: "Карточка заказа с устройством, неисправностью и работами. Статусы от «Принят» до «Выдан» — никакой ремонт не потеряется.",
    span: "lg:col-span-2",
    accent: "from-brand-orange to-brand-coral",
  },
  {
    icon: Users,
    title: "Клиенты",
    text: "База клиентов с историей обращений и устройств.",
    span: "",
    accent: "from-brand-pink to-brand-magenta",
  },
  {
    icon: BookOpen,
    title: "Справочник услуг и запчастей",
    text: "Каталог работ и деталей с ценами — подставляется в заказ в пару кликов.",
    span: "",
    accent: "from-brand-blue to-[#7C5BFA]",
  },
  {
    icon: Boxes,
    title: "Складской учёт",
    text: "Контроль запчастей: что в наличии, что заказано, что ждёт ремонт.",
    span: "",
    accent: "from-brand-orange to-brand-amber",
  },
  {
    icon: Wallet,
    title: "Финансы: выручка и прибыль",
    text: "Доход и чистая прибыль за день, месяц, год и всё время — в реальном времени.",
    span: "lg:col-span-2",
    accent: "from-brand-green to-[#22B8CF]",
  },
  {
    icon: BarChart3,
    title: "Аналитика и дашборд",
    text: "KPI, диаграмма заказов по статусам и график выручки на одном экране.",
    span: "lg:col-span-2",
    accent: "from-brand-magenta to-brand-pink",
  },
  {
    icon: BellRing,
    title: "Уведомления клиентов",
    text: "Список «позвонить клиентам» и оповещения о готовности заказа.",
    span: "",
    accent: "from-brand-pink to-brand-orange",
  },
  {
    icon: ShieldCheck,
    title: "Роли сотрудников",
    text: "Доступы по ролям: администратор, мастер, приёмщик.",
    span: "",
    accent: "from-brand-blue to-brand-magenta",
  },
  {
    icon: Moon,
    title: "Светлая и тёмная тема",
    text: "Удобный интерфейс, который не устаёт глаз даже за смену.",
    span: "",
    accent: "from-ink to-ink-soft",
  },
];

export function Features() {
  return (
    <section id="vozmozhnosti" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader
          eyebrow="Возможности"
          title={
            <>
              Всё, что нужно сервисному центру —{" "}
              <span className="gradient-text">в одном продукте</span>
            </>
          }
          subtitle="Реальные модули UltraCRM, которыми пользуются мастерские каждый день."
        />

        <RevealGroup
          stagger={0.06}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f, i) => (
            <RevealItem
              key={f.title}
              className={i === features.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <div className="card group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${f.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
                />
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${f.accent} text-white shadow-soft`}
                >
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
