# UltraCRM — лендинг

Современный продуктовый лендинг для **UltraCRM** — CRM-системы для сервисных
центров и мастерских по ремонту электроники, телефонов, ноутбуков, компьютеров
и бытовой техники. Продукт компании **Lab301**.

Контент построен на реальном функционале продукта (разделы, воронка статусов
ремонта, финансы и аналитика дашборда).

## Технологии

- **Next.js 15** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** — scroll reveal, parallax, micro-interactions, animated counters
- **Lucide React** — иконки
- SEO-ready: `metadata`, Open Graph, JSON-LD, `robots.txt`, `sitemap.xml`

## Структура секций

Hero · Проблемы · Решение (интерактивная демонстрация) · Возможности ·
Сценарий работы (приёмка → выдача) · Аналитика · Преимущества · Для кого ·
Отзывы · Тарифы · FAQ · Финальный CTA.

## Локальный запуск

```bash
npm install
npm run dev      # http://localhost:3000
```

## Сборка

```bash
npm run build
npm run start
```

## Деплой на Vercel

1. Импортируйте репозиторий в [Vercel](https://vercel.com/new).
2. Framework Preset определится автоматически (Next.js).
3. Build command `next build`, output — по умолчанию. Деплой готов.

## Брендинг

Фирменные ассеты (логотип, favicon, og-image, манифест) — в `public/`.
Палитра построена по логотипу: белый фон + фирменный градиент оранжевый → розовый,
синий и зелёный как акценты данных (`tailwind.config.ts`).

---

© Lab301 · UltraCRM
