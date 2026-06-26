"use client";

import {
  ClipboardList,
  Users,
  BookOpen,
  Boxes,
  Wallet,
  BarChart3,
  Wrench,
  Globe,
  Video,
  Phone,
  Map,
  MessageCircle,
  Receipt,
  CreditCard,
  BellRing,
  ShieldCheck,
  Moon,
  Settings,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealGroup, RevealItem } from "./ui/Reveal";

const features = [
  {
    icon: ClipboardList,
    title: "Заказы и воронка ремонта",
    text: "Карточка заказа с устройством, неисправностью и работами. 10 статусов: от «Не принят» до «Выдан с ремонтом» — никакой ремонт не потеряется.",
    accent: "from-brand-orange to-brand-coral",
  },
  {
    icon: BarChart3,
    title: "Аналитика и дашборд",
    text: "KPI, диаграмма заказов по статусам и график выручки и прибыли по дням — вся картина бизнеса на одном экране.",
    accent: "from-brand-magenta to-brand-pink",
  },
  {
    icon: Wallet,
    title: "Финансы",
    text: "Выручка и чистая прибыль за сегодня, месяц, год и всё время — в реальном времени.",
    accent: "from-brand-green to-[#22B8CF]",
  },
  {
    icon: Users,
    title: "Клиенты",
    text: "База клиентов с историей обращений, устройствами и контактами. Быстрый поиск по телефону.",
    accent: "from-brand-pink to-brand-magenta",
  },
  {
    icon: Wrench,
    title: "Запчасти",
    text: "Каталог запчастей с ценами и остатками — подставляются в заказ в пару кликов.",
    accent: "from-brand-blue to-[#7C5BFA]",
  },
  {
    icon: Boxes,
    title: "Склад",
    text: "Учёт деталей: что в наличии, что заказано, что списано в ремонт. Контроль остатков.",
    accent: "from-brand-orange to-brand-amber",
  },
  {
    icon: BookOpen,
    title: "Справочник",
    text: "Каталог услуг и работ с ценами для быстрого формирования заказа и сметы.",
    accent: "from-brand-blue to-brand-magenta",
  },
  {
    icon: Globe,
    title: "Управление сайтом",
    text: "Управляйте контентом и заявками с вашего сайта прямо из CRM, без отдельной админки.",
    accent: "from-[#5B7CFA] to-brand-magenta",
  },
  {
    icon: Video,
    title: "Видеонаблюдение",
    text: "Подключение камер сервиса прямо в CRM — мониторинг приёмки и ремонтного цеха в один клик.",
    accent: "from-ink to-ink-soft",
  },
  {
    icon: Phone,
    title: "Телефония",
    text: "Интеграция с IP-телефонией: всплывающая карточка клиента при звонке, история разговоров.",
    accent: "from-brand-green to-brand-blue",
  },
  {
    icon: Map,
    title: "Карты",
    text: "Точки сервиса на карте, маршруты выездных мастеров и адреса клиентов в одном окне.",
    accent: "from-brand-amber to-brand-orange",
  },
  {
    icon: MessageCircle,
    title: "Мессенджеры",
    text: "Уведомления и переписка с клиентами через WhatsApp / Telegram прямо из карточки заказа.",
    accent: "from-brand-pink to-brand-orange",
  },
  {
    icon: Receipt,
    title: "Счёт онлайн",
    text: "Выставляйте клиенту счёт по ссылке — он оплачивает онлайн, оплата сразу попадает в финансы.",
    accent: "from-brand-magenta to-brand-pink",
  },
  {
    icon: CreditCard,
    title: "Оплата",
    text: "Эквайринг и приём платежей: наличные, карта, СБП, онлайн-оплата — всё в одном модуле.",
    accent: "from-brand-blue to-brand-green",
  },
  {
    icon: BellRing,
    title: "Уведомления клиентов",
    text: "Автоматические уведомления о смене статуса заказа и список «позвонить клиентам».",
    accent: "from-brand-pink to-brand-amber",
  },
  {
    icon: ShieldCheck,
    title: "Роли сотрудников",
    text: "Доступы по ролям: администратор, мастер, приёмщик. Каждый видит только своё.",
    accent: "from-brand-blue to-brand-magenta",
  },
  {
    icon: Settings,
    title: "Настройки и интеграции",
    text: "Гибкая настройка статусов, шаблонов документов, прав доступа и интеграций.",
    accent: "from-ink-muted to-ink",
  },
  {
    icon: Moon,
    title: "Светлая и тёмная тема",
    text: "Удобный интерфейс, который не утомляет глаза даже за всю смену.",
    accent: "from-[#0B0B12] to-[#16161F]",
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
          subtitle="Реальные модули UltraCRM: от приёмки заказа до видеонаблюдения, телефонии и онлайн-оплаты."
        />

        <RevealGroup
          stagger={0.05}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <RevealItem key={f.title}>
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
