"use client";

import {
  NotebookPen,
  PhoneOff,
  PackageX,
  Calculator,
  UserX,
  EyeOff,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealGroup, RevealItem } from "./ui/Reveal";

const problems = [
  {
    icon: NotebookPen,
    title: "Заказы в тетради и мессенджерах",
    text: "Квитанции теряются, статусы ремонта никто не видит, а история по клиенту разбросана по чатам и блокнотам.",
  },
  {
    icon: PhoneOff,
    title: "Клиенты не знают, что с ремонтом",
    text: "Постоянные звонки «ну что там?», забытые обещания перезвонить и недовольные клиенты из-за тишины.",
  },
  {
    icon: PackageX,
    title: "Запчасти и склад вне контроля",
    text: "Непонятно, что есть в наличии, что заказано и сколько реально стоит ремонт с учётом деталей.",
  },
  {
    icon: Calculator,
    title: "Деньги считаются «на глаз»",
    text: "Выручка есть, а прибыли не видно. Где зарабатываете, а где теряете — остаётся загадкой.",
  },
  {
    icon: UserX,
    title: "Непрозрачная работа мастеров",
    text: "Сложно понять, кто сколько закрыл заказов, какая нагрузка и кто реально приносит результат.",
  },
  {
    icon: EyeOff,
    title: "Нет цельной картины бизнеса",
    text: "Чтобы собрать отчёт, приходится вручную сводить данные из разных источников — и всё равно неточно.",
  },
];

export function Problems() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader
          eyebrow="Знакомо?"
          title={
            <>
              Сервисный центр растёт, а{" "}
              <span className="gradient-text">хаоса всё больше</span>
            </>
          }
          subtitle="Пока учёт ведётся вручную, бизнес теряет деньги, клиентов и время на рутине. Вот с чем чаще всего сталкиваются мастерские."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <RevealItem key={p.title}>
              <div className="card group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-coral/10 text-brand-coral transition-colors group-hover:bg-brand-coral group-hover:text-white">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
