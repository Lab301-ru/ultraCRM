"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  UserPlus,
  ClipboardList,
  Stethoscope,
  Wrench,
  BellRing,
  PackageCheck,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

const steps = [
  {
    icon: UserPlus,
    title: "Клиент",
    badge: "Новый клиент",
    text: "Клиент обращается в сервис. Приёмщик заводит его в базу или находит по телефону — вся история под рукой.",
    color: "#5B7CFA",
  },
  {
    icon: ClipboardList,
    title: "Заказ",
    badge: "Статус: Принят",
    text: "Создаётся заказ: устройство, неисправность, комплектация и срок. Клиент получает номер заказа.",
    color: "#FF7A1A",
  },
  {
    icon: Stethoscope,
    title: "Диагностика",
    badge: "Статус: Диагностика",
    text: "Мастер выявляет причину, подбирает работы и запчасти из справочника. Стоимость согласовывается с клиентом.",
    color: "#9B5BFA",
  },
  {
    icon: Wrench,
    title: "Ремонт",
    badge: "Статус: В ремонте",
    text: "Заказ в работе. Списываются запчасти со склада, фиксируются работы — всё видно в карточке.",
    color: "#22B8CF",
  },
  {
    icon: BellRing,
    title: "Уведомление",
    badge: "Статус: Готов",
    text: "Ремонт готов — клиент попадает в список на обзвон и получает уведомление, что можно забирать.",
    color: "#F43F8E",
  },
  {
    icon: PackageCheck,
    title: "Выдача",
    badge: "Статус: Выдан",
    text: "Устройство выдано, оплата проведена. Выручка и прибыль сразу попадают в аналитику и финансы.",
    color: "#3FC56B",
  },
];

export function Workflow() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { margin: "-20% 0px" });

  useEffect(() => {
    // авто-прокрутка шагов только когда секция на экране — не тратим ресурсы вне вида
    if (!auto || !inView) return;
    const t = setInterval(() => setActive((a) => (a + 1) % steps.length), 3200);
    return () => clearInterval(t);
  }, [auto, inView]);

  const step = steps[active];
  const Icon = step.icon;

  return (
    <section ref={sectionRef} id="scenariy" className="relative overflow-hidden py-20 sm:py-28">
      <div className="bg-aurora pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="container-x">
        <SectionHeader
          eyebrow="Как это работает"
          title={
            <>
              Один путь ремонта —{" "}
              <span className="gradient-text">от приёмки до выдачи</span>
            </>
          }
          subtitle="UltraCRM ведёт заказ по всей воронке статусов. Ничего не теряется, клиент всегда в курсе."
        />

        {/* Stepper */}
        <Reveal className="mt-14">
          <div className="relative">
            <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-ink-line md:block" />
            <motion.div
              className="absolute left-0 top-7 hidden h-0.5 bg-brand-gradient md:block"
              animate={{ width: `${(active / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
              {steps.map((s, i) => {
                const on = i === active;
                const done = i < active;
                const SIcon = s.icon;
                return (
                  <button
                    key={s.title}
                    onClick={() => {
                      setActive(i);
                      setAuto(false);
                    }}
                    className="group relative flex flex-col items-center gap-2 text-center"
                  >
                    <span
                      className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border-2 bg-white transition-all duration-300 ${
                        on
                          ? "scale-110 border-transparent shadow-float"
                          : done
                            ? "border-brand-pink/40"
                            : "border-ink-line"
                      }`}
                      style={on ? { background: s.color, borderColor: s.color } : undefined}
                    >
                      <SIcon
                        className="h-6 w-6 transition-colors"
                        style={{ color: on ? "#fff" : done ? s.color : "#9A9AAB" }}
                      />
                    </span>
                    <span
                      className={`text-xs font-semibold transition-colors sm:text-sm ${
                        on ? "text-ink" : "text-ink-muted"
                      }`}
                    >
                      {s.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Detail card */}
        <div className="mx-auto mt-10 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="card flex flex-col items-center gap-5 p-8 text-center sm:flex-row sm:text-left"
            >
              <span
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-white shadow-float"
                style={{ background: step.color }}
              >
                <Icon className="h-7 w-7" />
              </span>
              <div>
                <span
                  className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ background: `${step.color}1A`, color: step.color }}
                >
                  {step.badge}
                </span>
                <h3 className="mt-2 font-display text-2xl font-extrabold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-pretty text-ink-muted">{step.text}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-2">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActive(i);
                  setAuto(false);
                }}
                aria-label={`Шаг ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-brand-gradient" : "w-2 bg-ink-line hover:bg-ink-muted/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
