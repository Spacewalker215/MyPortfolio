import type { Metadata } from "next";
import "@fontsource-variable/hanken-grotesk";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jayden Ruddock | Applied AI & Software Engineering",
  description: "Computer science student at UT Austin studying robotics and building apps, developer tools, and AI projects. Explore my work and ongoing research.",
  openGraph: {
    type: "website",
    title: "Jayden Ruddock",
    description: "Applied AI, software engineering, and autonomous vehicle research at UT Austin.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top">{children}</body></html>;
}
