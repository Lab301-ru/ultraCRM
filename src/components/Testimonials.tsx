"use client";

import { Star, Quote } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealGroup, RevealItem } from "./ui/Reveal";

const reviews = [
  {
    name: "Андрей Лагутин",
    role: "Владелец сервиса «МобиФикс», Воронеж",
    text: "Перешли с тетрадей и Excel за один день. Теперь вижу каждый заказ, статус и реальную прибыль. Клиенты перестали звонить «ну что там» — мы сами их уведомляем.",
    rating: 5,
    initial: "А",
    color: "from-brand-orange to-brand-coral",
  },
  {
    name: "Марина Власова",
    role: "Управляющая сети «ГаджетДоктор»",
    text: "У нас три точки. Раньше сводить отчёты было адом. В UltraCRM аналитика по выручке и статусам собирается сама — экономлю несколько часов в неделю.",
    rating: 5,
    initial: "М",
    color: "from-brand-pink to-brand-magenta",
  },
  {
    name: "Игорь Селезнёв",
    role: "Частный мастер, ремонт ноутбуков",
    text: "Работаю один, но порядок как в большом сервисе. Справочник услуг и запчастей подставляет цены в заказ — больше не считаю в калькуляторе.",
    rating: 5,
    initial: "И",
    color: "from-brand-blue to-[#7C5BFA]",
  },
  {
    name: "Денис Корнеев",
    role: "Сервис по ремонту бытовой техники",
    text: "Воронка статусов — то, чего не хватало. Видно, какие заказы зависли в ожидании запчастей, и ничего не теряется. Выдача стала быстрее.",
    rating: 5,
    initial: "Д",
    color: "from-brand-green to-[#22B8CF]",
  },
  {
    name: "Светлана Рыжова",
    role: "Приёмщик, сервисный центр «ТехноПойнт»",
    text: "Приём заказа занимает минуту. Нахожу клиента по телефону, вижу всю историю устройств. Очень удобный и быстрый интерфейс, есть тёмная тема.",
    rating: 5,
    initial: "С",
    color: "from-brand-magenta to-brand-pink",
  },
  {
    name: "Рустам Хабибуллин",
    role: "Владелец «iService», Казань",
    text: "Главное — финансы. Чистая прибыль в реальном времени открыла глаза: убрал убыточные позиции и поднял средний чек. Окупилось в первый месяц.",
    rating: 5,
    initial: "Р",
    color: "from-brand-orange to-brand-amber",
  },
];

export function Testimonials() {
  return (
    <section id="otzyvy" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader
          eyebrow="Отзывы"
          title={
            <>
              Сервисы уже работают в{" "}
              <span className="gradient-text">UltraCRM</span>
            </>
          }
          subtitle="Что говорят владельцы и сотрудники сервисных центров о работе в системе."
        />

        <RevealGroup
          stagger={0.07}
          className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
        >
          {reviews.map((r) => (
            <RevealItem key={r.name} className="break-inside-avoid">
              <figure className="card relative p-6">
                <Quote className="absolute right-5 top-5 h-8 w-8 text-brand-pink/15" />
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-amber text-brand-amber" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-ink">
                  {r.text}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${r.color} text-sm font-bold text-white`}
                  >
                    {r.initial}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{r.name}</span>
                    <span className="block text-xs text-ink-muted">{r.role}</span>
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
