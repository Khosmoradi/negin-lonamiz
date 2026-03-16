import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanya Lytko — Artiste Peintre",
  description: "Art abstrait contemporain — Aix-les-Bains, France",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <body className="min-h-screen font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
