"use client";

const items = [
  "Приём заказов",
  "Воронка из 10 статусов",
  "Клиентская база",
  "Справочник услуг",
  "Запчасти и склад",
  "Финансы и прибыль",
  "Аналитика в реальном времени",
  "Управление сайтом",
  "Видеонаблюдение",
  "IP-телефония",
  "Карты и маршруты",
  "WhatsApp и Telegram",
  "Счёт онлайн",
  "Эквайринг и СБП",
  "Роли сотрудников",
  "Тёмная тема",
];

export function MarqueeStrip() {
  return (
    <section aria-hidden className="border-y border-ink-line bg-white/60 py-5">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-3">
          {[...items, ...items].map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-ink-line bg-white px-4 py-2 text-sm font-medium text-ink-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
