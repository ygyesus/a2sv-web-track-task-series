import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins, Epilogue } from 'next/font/google'
import { ReduxProvider } from "./service/ReduxProvider";
export const poppins = Poppins({
  subsets: ['latin'],
  weight: '900'
})

export const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['400', '600']
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Job Opportunities - A2SV Web Track",
//   description: "A modern job opportunities dashboard built with Next.js and Redux Toolkit Query",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body
          className={`
          ${geistSans.variable} ${geistMono.variable} 
          p-8 antialiased`}
        >
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}

