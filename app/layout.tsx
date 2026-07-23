import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
const display = Space_Grotesk({ variable: "--display", subsets: ["latin"] });
const mono = Space_Mono({ variable: "--mono", subsets: ["latin"], weight: ["400","700"] });
export const metadata: Metadata = { title: "Orbital Lab — See What's Beyond", description: "Real-time space domain intelligence." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${display.variable} ${mono.variable}`}>{children}</body></html>; }
