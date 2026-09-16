import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Fab } from "@/components/Fab";
import { Motion } from "@/components/Motion";
import { Cursor } from "@/components/Cursor";
import { ScrollChrome } from "@/components/ScrollChrome";
import { SITE } from "@/lib/data";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Rede Saúde Mais – Saúde para você e pra quem você ama!", template: "%s · Rede Saúde Mais" },
  description: "Rede de especialidades médicas: consultas, exames e atendimento humanizado desde 2018. Unidades no DF e MT. Convênios e particular.",
  metadataBase: new URL("https://redesaudemais.com"),
  openGraph: { title: SITE.name, description: SITE.tagline, locale: "pt_BR", type: "website" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0B4679",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="light" className={`${fraunces.variable} ${inter.variable} light`} style={{ colorScheme: "light" }}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-[#333333] antialiased">
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#162B4D] focus:px-5 focus:py-3 focus:font-semibold focus:text-white">
          Pular para o conteúdo
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "MedicalClinic", name: SITE.name, slogan: SITE.tagline, foundingDate: "2018", url: "https://redesaudemais.com" }) }} />
        <Header />
        <main id="conteudo" className="flex-1">{children}</main>
        <Footer />
        <Fab />
        <Cursor />
        <ScrollChrome />
        <Motion />
      </body>
    </html>
  );
}
