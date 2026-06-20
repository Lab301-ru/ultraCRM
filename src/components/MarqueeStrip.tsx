"use client";

const items = [
  "Приём заказов",
  "Воронка статусов",
  "Клиентская база",
  "Справочник услуг и запчастей",
  "Складской учёт",
  "Финансы и прибыль",
  "Аналитика в реальном времени",
  "Уведомления клиентов",
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
