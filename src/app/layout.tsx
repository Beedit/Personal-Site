import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
    title: "Pip's Blog",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="text-black bg-white dark:text-white dark:bg-[#332a2e] text-base/8">
            <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
                <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                    <Navbar />
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
