import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "../components/I18nProvider";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Juice - Insurance Claims Solutions",
  description: "Enhanced claims wallet with virtual card and advanced payment options for maximum flexibility.",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/vite.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preload" as="image" href="/logo.svg" />
        <link rel="preload" as="image" href="/logo-dark.svg" />
        <link rel="preload" as="image" href="/CICA-Life-1.svg" />
        <link rel="preload" as="image" href="/CICA-LOA-2.svg" />
        <link rel="preload" as="image" href="/SPLIC-Logo-Color-NC-3.svg" />
      </head>
      <body className={montserrat.className}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}