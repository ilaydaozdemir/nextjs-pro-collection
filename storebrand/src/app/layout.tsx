import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "boxicons/css/boxicons.min.css";

const montserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Storebrand - Premium Products",
  description: "E-commerce store built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserratFont.className}>
      <body className={` antialiased min-h-screen flex flex-col m-0 p-0`}>
        {children}
      </body>
    </html>
  );
}
