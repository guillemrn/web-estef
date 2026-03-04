import type { Metadata } from "next";
import { Libre_Baskerville, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next"

// Configuración Serif (Para Títulos con clase)
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// Configuración Sans (Para Cuerpo/UI)
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Estefanía MKT | Consultoría Estratégica y Desarrollo Web",
    template: "%s | Estefanía MKT",
  },
  description: "Transformo la visión de emprendedores en negocios digitales rentables. Marketing con alma, estrategia con datos e infraestructura web diseñada para vender.",
  keywords: [
    "Consultoría de Marketing",
    "Desarrollo Web Premium",
    "Estrategia Digital",
    "High-Ticket",
    "Diseño Web",
    "Estefanía García",
    "Agencia de Marketing",
  ],
  authors: [{ name: "Estefanía García" }],
  creator: "Estefanía García",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://www.estefaniamkt.com.mx",
    title: "Estefanía MKT | Consultoría Estratégica y Desarrollo Web",
    description: "Marketing con alma. Estrategia con datos. Infraestructura web para escalar tu negocio.",
    siteName: "Estefanía MKT",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Estefanía MKT - Consultoría Estratégica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estefanía MKT | Consultoría Estratégica",
    description: "Marketing con alma. Estrategia con datos. Infraestructura web para escalar tu negocio.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${lato.variable} ${libreBaskerville.variable} font-sans antialiased bg-brand-light text-brand-dark dark:bg-brand-wine dark:text-brand-light transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
