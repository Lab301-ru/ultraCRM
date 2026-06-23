import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const SITE_URL = "https://ultracrm-sc.ru";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "UltraCRM — CRM для сервисных центров нового поколения",
    template: "%s · UltraCRM",
  },
  description:
    "UltraCRM — CRM-система для сервисных центров и мастерских по ремонту электроники. Автоматизируйте приём заказов, работу мастеров, складской учёт, финансы и аналитику в одной системе. Продукт компании Lab301.",
  keywords: [
    "CRM для сервисного центра",
    "CRM для ремонта телефонов",
    "программа для сервисного центра",
    "учёт заказов ремонт",
    "CRM мастерская",
    "UltraCRM",
    "Lab301",
    "CRM ремонт электроники",
    "автоматизация сервисного центра",
  ],
  authors: [{ name: "Lab301" }],
  creator: "Lab301",
  publisher: "Lab301",
  applicationName: "UltraCRM",
  category: "business software",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "UltraCRM",
    title: "UltraCRM — CRM для сервисных центров нового поколения",
    description:
      "Автоматизируйте приём заказов, работу мастеров, складской учёт, финансы и аналитику в одной системе. CRM для сервисных центров от Lab301.",
    images: [
      {
        url: "/og-image-11.png",
        width: 2560,
        height: 1440,
        alt: "UltraCRM — CRM для сервисных центров",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UltraCRM — CRM для сервисных центров нового поколения",
    description:
      "Приём заказов, мастера, склад, финансы и аналитика в одной системе. Продукт Lab301.",
    images: ["/og-image-11.png"],
  },
  icons: {
    icon: [
      { url: "/converted_preserve_colors.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-120x120.png", sizes: "120x120", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "UltraCRM",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "CRM-система для сервисных центров и мастерских по ремонту электроники, телефонов, ноутбуков, компьютеров и бытовой техники.",
  url: SITE_URL,
  publisher: { "@type": "Organization", name: "Lab301", url: SITE_URL },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "RUB",
    description: "Бесплатный пробный период",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "180",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
