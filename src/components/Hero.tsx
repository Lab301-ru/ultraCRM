"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, Sparkles, TrendingUp, Bell, CheckCircle2 } from "lucide-react";
import { DashboardMockup } from "./DashboardMockup";
import { AnimatedCounter } from "./ui/AnimatedCounter";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yCards = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Параллакс/затухание только на десктопе — на мобильных это вызывает рывки
  // и «полупрозрачный» дашборд при скролле.
  const [parallax, setParallax] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine)"
    );
    const update = () => setParallax(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
      <div className="bg-aurora pointer-events-none absolute inset-0 -z-10" />
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />

      <div className="container-x grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        {/* Copy */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex lg:mx-0"
          >
            <span className="section-eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              Продукт компании Lab301
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.65rem]"
          >
            CRM для сервисных центров{" "}
            <span className="gradient-text">нового поколения</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto mt-5 max-w-xl text-pretty text-base text-ink-muted sm:text-lg lg:mx-0"
          >
            Автоматизируйте приём заказов, работу мастеров, складской учёт,
            финансы и аналитику в одной системе. UltraCRM ведёт ремонт от
            приёмки до выдачи и показывает прибыль в реальном времени.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <a href="#cta" className="btn-primary w-full sm:w-auto">
              Получить демо
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#cta" className="btn-secondary w-full sm:w-auto">
              <Play className="h-4 w-4 text-brand-magenta" />
              Попробовать бесплатно
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-ink-line pt-6 lg:max-w-none"
          >
            {[
              { v: 915, s: "+", label: "заказов закрыто" },
              { v: 9, s: "", label: "статусов воронки" },
              { v: 1, s: "", label: "окно для сервиса" },
            ].map((x) => (
              <div key={x.label} className="text-center lg:text-left">
                <div className="font-display text-2xl font-extrabold leading-none text-ink">
                  <AnimatedCounter value={x.v} suffix={x.s} />
                </div>
                <div className="mt-1.5 text-xs leading-snug text-ink-muted">{x.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mockup */}
        <motion.div
          style={parallax ? { y, opacity } : undefined}
          className="relative z-0"
        >
          <div className="pointer-events-none absolute -inset-10 -z-10 bg-brand-gradient opacity-20 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[1.5rem] border border-ink-line bg-white shadow-card"
            style={{ perspective: 1000 }}
          >
            {/* browser chrome */}
            <div className="flex items-center gap-2 rounded-t-[1.5rem] border-b border-ink-line bg-white/80 px-4 py-3 lg:backdrop-blur">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <div className="ml-3 flex-1">
                <div className="mx-auto w-fit rounded-md bg-ink/5 px-3 py-1 text-[11px] text-ink-muted">
                  app.ultracrm-sc.ru
                </div>
              </div>
            </div>
            <div className="h-[26rem] p-2 sm:h-[28rem]">
              <DashboardMockup />
            </div>
          </motion.div>

          {/* Floating stat cards */}
          <motion.div
            style={parallax ? { y: yCards } : undefined}
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute -left-4 top-24 hidden sm:block"
          >
            <div className="animate-float-slow rounded-2xl border border-ink-line bg-white/90 p-3 shadow-float backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green">
                  <TrendingUp className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-extrabold text-ink">
                    +<AnimatedCounter value={37} suffix="%" />
                  </div>
                  <div className="text-[10px] text-ink-muted">выручка за квартал</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={parallax ? { y: yCards } : undefined}
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="absolute -right-3 top-44 hidden sm:block"
          >
            <div className="animate-float rounded-2xl border border-ink-line bg-white/90 p-3 shadow-float backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-pink/15 text-brand-magenta">
                  <Bell className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm font-extrabold text-ink">Заказ готов</div>
                  <div className="text-[10px] text-ink-muted">клиент уведомлён</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={parallax ? { y: yCards } : undefined}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="absolute -bottom-5 left-10 hidden md:block"
          >
            <div className="animate-float-slow flex items-center gap-2 rounded-2xl border border-ink-line bg-white/90 px-3.5 py-2.5 shadow-float backdrop-blur">
              <CheckCircle2 className="h-4 w-4 text-brand-green" />
              <span className="text-xs font-semibold text-ink">№10005 выдан · 6 000 ₽</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
