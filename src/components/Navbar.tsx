"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./ui/Logo";

const links = [
  { href: "#vozmozhnosti", label: "Возможности" },
  { href: "#scenariy", label: "Как это работает" },
  { href: "#analitika", label: "Аналитика" },
  { href: "#tarify", label: "Тарифы" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto mt-3 flex w-[min(100%-1.5rem,72rem)] items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border-ink-line bg-white/95 shadow-soft lg:bg-white/80 lg:backdrop-blur-xl"
            : "border-transparent bg-white/0"
        }`}
      >
        <a href="#top" className="flex items-center" aria-label="UltraCRM на главную">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href="#cta" className="btn-ghost text-sm">
            Войти
          </a>
          <a href="#cta" className="btn-running">
            <span className="btn-running__inner">
              Получить демо
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-line bg-white text-ink lg:hidden"
          aria-label="Открыть меню"
        >
          <Menu className="h-5 w-5" />
        </button>
      </motion.div>

      {/* Полноэкранное мобильное меню — непрозрачный оверлей поверх всего
          контента. Рендерится мгновенно (без transform/AnimatePresence),
          чтобы исключить «исчезновение» меню на iOS. */}
      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-white lg:hidden">
          <div className="flex items-center justify-between px-5 pt-4">
            <a
              href="#top"
              onClick={() => setOpen(false)}
              aria-label="UltraCRM на главную"
            >
              <Logo />
            </a>
            <button
              onClick={() => setOpen(false)}
              aria-label="Закрыть меню"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-line bg-white text-ink"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-4 pt-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3.5 text-lg font-semibold text-ink transition-colors hover:bg-ink/5"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 border-t border-ink-line p-5">
            <a href="#cta" onClick={() => setOpen(false)} className="btn-secondary w-full">
              Войти
            </a>
            <a href="#cta" onClick={() => setOpen(false)} className="btn-running w-full">
              <span className="btn-running__inner">
                Получить демо <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
