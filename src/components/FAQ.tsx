"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

const faqs = [
  {
    q: "Что такое UltraCRM?",
    a: "UltraCRM — это CRM-система от компании Lab301 для сервисных центров и мастерских по ремонту электроники, телефонов, ноутбуков, компьютеров и бытовой техники. Она объединяет заказы, клиентов, склад, финансы и аналитику в одном окне.",
  },
  {
    q: "Подойдёт ли система частному мастеру?",
    a: "Да. На тарифе «Старт» можно работать в одиночку: вести заказы, клиентов, справочник услуг и запчастей и видеть финансы. По мере роста легко перейти на «Бизнес» или «Сеть».",
  },
  {
    q: "Нужно ли что-то устанавливать?",
    a: "Нет. UltraCRM работает в браузере — на компьютере, ноутбуке, планшете или телефоне. Достаточно открыть систему и войти в свой аккаунт.",
  },
  {
    q: "Какие статусы заказов есть в системе?",
    a: "Воронка ремонта включает статусы: Принят, Диагностика, Ожидание согласования, Ожидание запчастей, В ремонте, Готов и Выдан, а также Отказ и Утиль. Каждый заказ проходит путь от приёмки до выдачи.",
  },
  {
    q: "Можно ли вести учёт запчастей и склада?",
    a: "Да. В справочнике хранятся услуги и запчасти с ценами, которые подставляются в заказ. Статус «Ожидание запчастей» помогает контролировать, какие ремонты ждут детали.",
  },
  {
    q: "Как работает аналитика и финансы?",
    a: "Система автоматически считает выручку и чистую прибыль за день, месяц, год и всё время. На дашборде есть KPI, диаграмма заказов по статусам и график выручки и прибыли — отчёты не нужно сводить вручную.",
  },
  {
    q: "Уведомляет ли система клиентов?",
    a: "Готовые заказы попадают в список клиентов на обзвон, а клиент получает уведомление, что устройство можно забрать. Это снижает количество входящих звонков «ну что там с ремонтом».",
  },
  {
    q: "Можно ли разграничить доступ сотрудников?",
    a: "Да, в системе есть роли (например, администратор). Каждый сотрудник видит то, что нужно для его работы, а руководитель — полную картину сервиса.",
  },
  {
    q: "Подходит ли UltraCRM для сети сервисов?",
    a: "Да. Тариф «Сеть» рассчитан на несколько точек: сводная аналитика, гибкие роли и неограниченное число рабочих мест.",
  },
  {
    q: "Есть ли бесплатный период?",
    a: "Да, вы можете попробовать UltraCRM бесплатно и оценить работу на реальных заказах, прежде чем выбрать тариф.",
  },
  {
    q: "Сложно ли перейти со своих таблиц и тетрадей?",
    a: "Нет. Интерфейс простой и понятный, начать можно сразу. При необходимости мы поможем с переносом данных и настройкой под ваш сервис.",
  },
  {
    q: "Есть ли тёмная тема?",
    a: "Да. UltraCRM поддерживает светлую и тёмную темы — удобно работать в течение всей смены.",
  },
];

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={Math.min(index * 0.04, 0.3)}>
      <div
        className={`overflow-hidden rounded-2xl border transition-colors ${
          open ? "border-brand-pink/30 bg-white shadow-soft" : "border-ink-line bg-white"
        }`}
      >
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
          aria-expanded={open}
        >
          <span className="text-base font-semibold text-ink">{q}</span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              open ? "rotate-45 bg-brand-gradient text-white" : "bg-ink/5 text-ink-muted"
            }`}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted">{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[#FAFAFC]" />
      <div className="container-x">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Частые <span className="gradient-text">вопросы</span>
            </>
          }
          subtitle="Не нашли ответ? Оставьте заявку — мы расскажем, как UltraCRM подойдёт именно вашему сервису."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-3 md:grid-cols-2">
          {faqs.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
