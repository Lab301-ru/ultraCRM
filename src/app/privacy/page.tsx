import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Политика конфиденциальности UltraCRM (Lab301): какие данные мы собираем через форму заявки, как обрабатываем и защищаем, ваши права.",
  alternates: { canonical: `${SITE.url}/privacy` },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Общие положения",
    body: [
      "Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты персональных данных пользователей сайта UltraCRM (далее — «Сайт»), принадлежащего компании Lab301 (далее — «Компания», «мы»).",
      "Используя Сайт и отправляя заявку через форму обратной связи, вы подтверждаете согласие с условиями настоящей Политики и даёте согласие на обработку ваших персональных данных в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».",
    ],
  },
  {
    title: "2. Какие данные мы собираем",
    body: [
      "Мы обрабатываем только те данные, которые вы добровольно указываете в форме заявки:",
    ],
    list: [
      "имя;",
      "номер телефона;",
      "название сервисного центра (необязательно).",
    ],
    after: [
      "Также при использовании Сайта могут автоматически собираться технические данные (тип устройства и браузера, обезличенная статистика посещений) для улучшения работы Сайта.",
    ],
  },
  {
    title: "3. Цели обработки данных",
    body: ["Мы используем ваши данные исключительно для того, чтобы:"],
    list: [
      "связаться с вами по оставленной заявке и провести демонстрацию продукта;",
      "ответить на ваши вопросы и оказать поддержку;",
      "улучшать продукт и качество обслуживания.",
    ],
  },
  {
    title: "4. Правовые основания",
    body: [
      "Обработка персональных данных осуществляется на основании вашего согласия, которое вы предоставляете при отправке формы. Вы можете отозвать согласие в любой момент, направив запрос на нашу почту.",
    ],
  },
  {
    title: "5. Передача данных третьим лицам",
    body: [
      "Мы не продаём и не передаём ваши персональные данные третьим лицам в маркетинговых целях.",
      "Для приёма и доставки заявок с формы используется сторонний сервис обработки форм (FormSubmit), который передаёт содержимое заявки на нашу электронную почту. Передача данных может также осуществляться по требованию законодательства РФ.",
    ],
  },
  {
    title: "6. Сроки хранения",
    body: [
      "Персональные данные хранятся не дольше, чем этого требуют цели обработки, либо до момента отзыва вами согласия. После этого данные удаляются или обезличиваются.",
    ],
  },
  {
    title: "7. Ваши права",
    body: ["Вы имеете право:"],
    list: [
      "получить информацию об обработке ваших данных;",
      "потребовать уточнения, блокирования или удаления данных;",
      "отозвать согласие на обработку персональных данных.",
    ],
  },
  {
    title: "8. Файлы cookie",
    body: [
      "Сайт может использовать файлы cookie и аналогичные технологии для корректной работы интерфейса и сбора обезличенной статистики. Вы можете отключить cookie в настройках браузера.",
    ],
  },
  {
    title: "9. Изменения политики",
    body: [
      "Мы можем периодически обновлять настоящую Политику. Актуальная версия всегда доступна на этой странице.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink-line bg-white/80 backdrop-blur-xl">
        <div className="container-x flex h-16 items-center justify-between">
          <Link href="/" aria-label="UltraCRM на главную">
            <Logo />
          </Link>
          <Link href="/" className="btn-ghost text-sm">
            <ArrowLeft className="h-4 w-4" /> На главную
          </Link>
        </div>
      </header>

      <main className="container-x py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Политика конфиденциальности
          </h1>
          <p className="mt-3 text-sm text-ink-muted">
            Дата последнего обновления: 20 июня 2026 года
          </p>

          <div className="mt-10 space-y-9">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-lg font-bold text-ink">{s.title}</h2>
                {s.body?.map((p, i) => (
                  <p key={i} className="mt-3 text-pretty leading-relaxed text-ink-muted">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-3 space-y-1.5">
                    {s.list.map((li, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-ink-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient" />
                        <span className="leading-relaxed">{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.after?.map((p, i) => (
                  <p key={i} className="mt-3 text-pretty leading-relaxed text-ink-muted">
                    {p}
                  </p>
                ))}
              </section>
            ))}

            <section>
              <h2 className="text-lg font-bold text-ink">10. Контакты</h2>
              <p className="mt-3 leading-relaxed text-ink-muted">
                По любым вопросам, связанным с обработкой персональных данных,
                свяжитесь с нами:
              </p>
              <ul className="mt-3 space-y-1.5 text-ink-muted">
                <li>
                  E-mail:{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-semibold text-brand-magenta hover:underline"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  Telegram:{" "}
                  <a
                    href={SITE.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-magenta hover:underline"
                  >
                    {SITE.telegram}
                  </a>
                </li>
                <li>Компания: Lab301</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
