import type { Metadata, Viewport } from "next";
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
  title: "Negin Lonamiz — Peintre Contemporaine",
  description: "Art abstrait contemporain — Paris, France",
  openGraph: {
    title: "Negin Lonamiz — Peintre Contemporaine",
    description: "Art abstrait contemporain — Paris, France",
    type: "website",
    locale: "fr_FR",
  },
  metadataBase: new URL("https://neginlonamiz.com"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
