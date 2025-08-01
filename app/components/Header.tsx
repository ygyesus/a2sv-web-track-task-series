"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { poppins } from "../layout";

export default function Header() {
    const { data: session, status } = useSession();

    if (status === "loading") return null;

    return (
        <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/opportunities/search" className={`${poppins.className} text-xl font-bold text-[#4640DE]`}>
                            JobBoard
                        </Link>
                    </div>
                    
                    <nav className="flex items-center space-x-4">
                        {session ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-700">Welcome, {session.user?.name || session.user?.email}</span>
                                <button
                                    onClick={() => signOut({ callbackUrl: "/login" })}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link href="/login" className="text-gray-700 hover:text-[#4640DE]">
                                    Login
                                </Link>
                                <Link href="/signup" className="bg-[#4640DE] text-white px-4 py-2 rounded hover:bg-[#3730A3] transition-colors">
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}