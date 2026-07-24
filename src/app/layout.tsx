import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "./Navigation";

export const metadata: Metadata = {
  title: "Ishpreet Singh | iOS & React Native Engineer",
  description:
    "Portfolio of Ishpreet Singh, an iOS and React Native developer building polished, high-performance mobile experiences.",
  keywords: [
    "Ishpreet Singh",
    "iOS Developer",
    "React Native Developer",
    "Mobile App Developer",
    "Swift",
    "SwiftUI",
    "Flutter",
  ],
  authors: [{ name: "Ishpreet Singh" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Ishpreet Singh | iOS & React Native Engineer",
    description:
      "Polished, high-performance mobile apps across native iOS and cross-platform stacks.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#060811",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
