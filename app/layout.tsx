import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/provider/ThemeProvider";

import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Syncro | Stream Your World Live",
  description:
    "Syncro is your ultimate destination for live streaming and interactive entertainment. Whether you're a gamer, artist, musician, or vlogger, Syncro provides a dynamic platform to broadcast your content, engage with your audience, and build a community. With seamless streaming capabilities, real-time chat, and customizable channels, Syncro brings your passions to life and connects you with fans around the globe. Join Syncro and start streaming your world today!",
  icons: [
    {
      url: "/Stream.svg",
      href: "/Stream.svg",
      type: "image/svg+xml",
      sizes: "16x16",
    },
  ],
  applicationName: "Syncro",
  keywords: [
    "streaming",
    "live streaming",
    "interactive entertainment",
    "gaming",
    "art",
    "music",
    "vlogging",
    "broadcasting",
    "community",
    "chat",
    "channels",
    "fans",
    "Syncro",
    "Twitch Clone",
  ],
  authors: { url: "https://github.com/psykat1116" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={poppins.className}>
          <ThemeProvider attribute="class" forcedTheme="dark" storageKey="syncro-theme">{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
