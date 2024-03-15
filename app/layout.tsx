//NEXTJS
import type { Metadata } from "next";
import { Poppins  } from "next/font/google";
//STYLES
import "../styles/index.css";


const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });


export const metadata: Metadata = {
    title: 'Application'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    )
}