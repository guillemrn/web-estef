import type { Metadata } from "next";
import { Libre_Baskerville, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
  title: "Estefanía García | Consultoría de Marketing & Desarrollo Web",
  description: "Transformo la visión de emprendedores en negocios digitales rentables. Estrategia con datos, marketing con alma e infraestructura web diseñada para vender.",
  keywords: ["Consultoría de Marketing", "Desarrollo Web", "Next.js", "Estrategia Digital", "High Ticket"],
  openGraph: {
    title: "Estefanía García | Consultoría de Marketing & Desarrollo Web",
    description: "Transformo la visión de emprendedores en negocios digitales rentables. Estrategia con datos, marketing con alma e infraestructura web diseñada para vender.",
    url: "https://estefania.mkt",
    siteName: "Estefanía García",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Estefanía García - Marketing & Web",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estefanía García | Consultoría de Marketing & Desarrollo Web",
    description: "Transformo la visión de emprendedores en negocios digitales rentables.",
    images: ["/og-image.jpg"],
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
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
