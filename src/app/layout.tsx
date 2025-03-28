import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Header, ThemeProvider } from "@/components";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Dragon Nest Mobile:Ascend",
    description: "A private server for Dragon Nest Mobile.",
    icons: {
        icon: "/images/favicon.ico",
        shortcut: "/images/favicon.ico",
        apple: "/images/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    readonly children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="system" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
