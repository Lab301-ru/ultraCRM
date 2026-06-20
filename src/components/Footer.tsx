import { Logo } from "./ui/Logo";
import { Mail, MapPin } from "lucide-react";

const columns = [
  {
    title: "Продукт",
    links: [
      { label: "Возможности", href: "#vozmozhnosti" },
      { label: "Как это работает", href: "#scenariy" },
      { label: "Аналитика", href: "#analitika" },
      { label: "Тарифы", href: "#tarify" },
    ],
  },
  {
    title: "Решения",
    links: [
      { label: "Сервисные центры", href: "#dlya-kogo" },
      { label: "Ремонт телефонов", href: "#dlya-kogo" },
      { label: "Ремонт ноутбуков", href: "#dlya-kogo" },
      { label: "Частным мастерам", href: "#dlya-kogo" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "Отзывы", href: "#otzyvy" },
      { label: "FAQ", href: "#faq" },
      { label: "Получить демо", href: "#cta" },
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
              <a href="mailto:hello@lab301.ru" className="flex items-center gap-2 hover:text-ink">
                <Mail className="h-4 w-4" /> hello@lab301.ru
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
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-ink">Политика конфиденциальности</a>
            <a href="#" className="hover:text-ink">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
