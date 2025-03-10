import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const soehne = localFont({
  src: [
    {
      path: "../public/fonts/test-soehne-fett.woff2",
      style: "normal",
    },
  ],
  variable: "--font-soehne",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={soehne.variable}>
        {children} 
      </body>
    </html>
  );
}
