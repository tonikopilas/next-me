import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.scss";

const mrRobot = localFont({
  src: "../config/font/MR ROBOT.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mrRobot.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
