import type { Metadata } from "next";
import Link from "next/link";
import { Home, Send, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Страница не найдена",
  description: "К сожалению, такой страницы на сайте UltraCRM нет.",
  robots: { index: false, follow: true },
};

const quickLinks = [
  { label: "Возможности", href: "/#vozmozhnosti" },
  { label: "Как это работает", href: "/#scenariy" },
  { label: "Тарифы", href: "/#tarify" },
  { label: "FAQ", href: "/#faq" },
];

export default function NotFound() {
  return (
    <>
      <header className="border-b border-ink-line">
        <div className="container-x flex h-16 items-center justify-between">
          <Link href="/" aria-label="UltraCRM на главную">
            <Logo />
          </Link>
          <Link href="/" className="btn-ghost text-sm">
            <Home className="h-4 w-4" /> На главную
          </Link>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <div className="bg-aurora pointer-events-none absolute inset-0 -z-10 opacity-70" />
        <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />

        <div className="container-x flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
          <span className="section-eyebrow">Ошибка 404</span>

          <p className="mt-6 font-display text-[5.5rem] font-extrabold leading-none tracking-tight sm:text-[8rem]">
            <span className="gradient-text">404</span>
          </p>

          <h1 className="mt-2 text-balance font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Такой страницы нет
          </h1>
          <p className="mt-4 max-w-md text-pretty text-base text-ink-muted sm:text-lg">
            Похоже, страница уехала в ремонт или её адрес изменился. Вернитесь на
            главную или загляните в один из разделов.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Link href="/" className="btn-primary w-full sm:w-auto">
              Вернуться на главную
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={SITE.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              <Send className="h-4 w-4 text-brand-magenta" />
              Написать в Telegram
            </a>
          </div>

          <div className="mt-12 w-full max-w-2xl border-t border-ink-line pt-8">
            <p className="text-sm font-semibold text-ink-muted">Популярные разделы</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
              {quickLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="rounded-full border border-ink-line bg-white px-4 py-2 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-pink/40 hover:text-brand-magenta hover:shadow-soft"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
