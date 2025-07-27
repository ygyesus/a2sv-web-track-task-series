'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins, Epilogue } from 'next/font/google'
import { Provider } from "react-redux";
import { store } from "@/lib/store";
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

