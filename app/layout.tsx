import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VANTA | Game Top-Up & Digital Services",
  description:
    "VANTA — Game Top-Up & Digital Services. Official Store of CONKER on Telegram.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
