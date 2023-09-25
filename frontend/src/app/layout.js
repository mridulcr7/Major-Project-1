import AppLayout from "@/components/common/AppLayout";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Konnect",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppLayout>{children}</AppLayout>
            </body>
        </html>
    );
}
