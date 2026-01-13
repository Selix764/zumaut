import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZUMAUT - Zoom Out. Take a Moment.",
  description: "Independent coffee shop in Bucharest. Good vibes, slow coffee, and great music. Located on Calea Călărași 323, Sector 3.",
  keywords: ["coffee shop", "Bucharest", "Julius Meinl", "independent cafe", "cozy cafe", "Sector 3"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
