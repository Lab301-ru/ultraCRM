"use client";

import {
  Building2,
  Smartphone,
  Tablet,
  Laptop,
  MonitorSmartphone,
  WashingMachine,
  Network,
  User,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealGroup, RevealItem } from "./ui/Reveal";

const audience = [
  { icon: Building2, title: "Сервисные центры", text: "Полный учёт заказов, мастеров и финансов." },
  { icon: Smartphone, title: "Ремонт телефонов", text: "Быстрый приём и воронка статусов под поток." },
  { icon: Tablet, title: "Ремонт планшетов", text: "Экраны, АКБ и платы — всё под учётом." },
  { icon: Laptop, title: "Ремонт ноутбуков", text: "Диагностика, запчасти и согласование работ." },
  { icon: MonitorSmartphone, title: "Ремонт компьютеров", text: "Сборки, апгрейды и история по клиенту." },
  { icon: WashingMachine, title: "Бытовая техника", text: "Выездной и стационарный ремонт под контролем." },
  { icon: Network, title: "Сети сервисов", text: "Несколько точек, роли сотрудников и общая аналитика." },
  { icon: User, title: "Частные мастера", text: "Простой старт без бумаг — всё в телефоне и браузере." },
];

export function Audience() {
  return (
    <section id="dlya-kogo" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[#FAFAFC]" />
      <div className="container-x">
        <SectionHeader
          eyebrow="Для кого"
          title={
            <>
              UltraCRM подходит{" "}
              <span className="gradient-text">любой мастерской</span>
            </>
          }
          subtitle="От частного мастера до сети сервисных центров — система масштабируется вместе с вами."
        />

        <RevealGroup
          stagger={0.06}
          className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {audience.map((a) => (
            <RevealItem key={a.title}>
              <div className="group flex h-full flex-col rounded-3xl border border-ink-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-pink/30 hover:shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient-soft text-brand-magenta transition-transform duration-300 group-hover:scale-110">
                  <a.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{a.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
