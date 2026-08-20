import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zak Goldberg",
  description:
    "I build software, solve business problems, and enjoy learning new disciplines.",
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
