import { Playfair, Bangers } from "next/font/google";
import "./globals.css";

const playfair = Playfair({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${bangers.variable}`}>
      <body className="antialiased font-playfair">
        {children}
      </body>
    </html>
  );
}
