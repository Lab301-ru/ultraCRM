"use client";

import { Zap, Clock, ShieldCheck, TrendingUp, Smile, Layers } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealGroup, RevealItem } from "./ui/Reveal";

const benefits = [
  {
    icon: Zap,
    title: "Автоматизация процессов",
    text: "Статусы, расчёт стоимости, списание запчастей и финансы считаются сами — меньше рутины и ошибок.",
  },
  {
    icon: Clock,
    title: "Экономия времени",
    text: "Приём заказа и поиск истории клиента — за секунды. Сотрудники заняты ремонтом, а не бумагами.",
  },
  {
    icon: ShieldCheck,
    title: "Надёжность данных",
    text: "Вся информация о заказах, клиентах и деньгах хранится в одном месте и не теряется.",
  },
  {
    icon: TrendingUp,
    title: "Рост прибыли",
    text: "Прозрачные финансы и аналитика показывают, где вы зарабатываете, а где теряете.",
  },
  {
    icon: Smile,
    title: "Довольные клиенты",
    text: "Уведомления о готовности и быстрый сервис — клиенты возвращаются и рекомендуют вас.",
  },
  {
    icon: Layers,
    title: "Всё в одном окне",
    text: "Заказы, клиенты, склад, финансы и аналитика — без десятка таблиц и чатов.",
  },
];

export function Benefits() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader
          eyebrow="Преимущества"
          title={
            <>
              Почему сервисы выбирают{" "}
              <span className="gradient-text">UltraCRM</span>
            </>
          }
          subtitle="Удобно. Просто. Эффективно. Всё, что нужно вашему сервисному центру — в одной системе."
        />

        <RevealGroup
          stagger={0.07}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((b) => (
            <RevealItem key={b.title}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-ink-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-gradient transition-transform duration-300 group-hover:scale-x-100" />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient-soft text-brand-magenta transition-all duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{b.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
