import { Logo } from "./ui/Logo";
import { Mail, MapPin, Send } from "lucide-react";
import { SITE } from "@/lib/site";

const columns = [
  {
    title: "Продукт",
    links: [
      { label: "Возможности", href: "/#vozmozhnosti" },
      { label: "Как это работает", href: "/#scenariy" },
      { label: "Аналитика", href: "/#analitika" },
      { label: "Тарифы", href: "/#tarify" },
    ],
  },
  {
    title: "Решения",
    links: [
      { label: "Сервисные центры", href: "/#dlya-kogo" },
      { label: "Ремонт телефонов", href: "/#dlya-kogo" },
      { label: "Ремонт ноутбуков", href: "/#dlya-kogo" },
      { label: "Частным мастерам", href: "/#dlya-kogo" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "Отзывы", href: "/#otzyvy" },
      { label: "FAQ", href: "/#faq" },
      { label: "Получить демо", href: "/#cta" },
      { label: "Политика конфиденциальности", href: "/privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-line bg-white">
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              CRM-система для сервисных центров и мастерских по ремонту
              электроники. Заказы, клиенты, склад, финансы и аналитика в одном окне.
            </p>
            <div className="mt-5 space-y-2 text-sm text-ink-muted">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 transition-colors hover:text-ink"
              >
                <Mail className="h-4 w-4" /> {SITE.email}
              </a>
              <a
                href={SITE.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-ink"
              >
                <Send className="h-4 w-4" /> Telegram {SITE.telegram}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Компания Lab301
              </span>
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-bold text-ink">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-ink-muted transition-colors hover:text-brand-magenta"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-line pt-6 text-sm text-ink-muted sm:flex-row">
          <p>© {new Date().getFullYear()} UltraCRM. Продукт компании Lab301.</p>
          <p>
            Сайт создан в{" "}
            <a
              href={SITE.studioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink transition-colors hover:text-brand-magenta"
            >
              Lab301 Digital Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
