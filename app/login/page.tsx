"use client";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Link from 'next/link';
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { poppins } from '../layout';

type FormValues = {
    email: string;
    password: string;
};

export default function LoginForm() {
    const form = useForm<FormValues>();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;
    const [serverError, setServerError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/opportunities/search";

    const onSubmit = async (data: FormValues) => {
        setServerError("");
        setIsLoading(true);
        
        console.log("Attempting login with:", { email: data.email });
        
        const res = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
            callbackUrl: callbackUrl,
        });
        
        console.log("Login response:", res);
        
        if (res?.error) {
            setServerError(res.error);
        } else {
            window.location.href = callbackUrl;
        }
        
        setIsLoading(false);
    };

    const handleGoogleSignIn = () => {
        signIn("google", { callbackUrl });
    };

    return (
        <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded shadow">
            <h1 className={`${poppins.className} text-2xl font-bold mb-6 text-center text-[#25324B]`}>Welcome Back,</h1>
            <div className="text-center mb-4 flex items-center justify-center gap-44">
                <div className="flex-1 border-b border-gray-300"></div>
                <div className="flex-1 border-b border-gray-300"></div>
            </div>

            <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded px-4 py-2 mb-4 hover:bg-gray-50 text-[#4640DE] font-bold"
            >
                <span className="inline-block">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6712 8.36788H18V8.33329H10.5V11.6666H15.2096C14.5225 13.607 12.6762 15 10.5 15C7.73874 15 5.49999 12.7612 5.49999 9.99996C5.49999 7.23871 7.73874 4.99996 10.5 4.99996C11.7746 4.99996 12.9342 5.48079 13.8171 6.26621L16.1742 3.90913C14.6858 2.52204 12.695 1.66663 10.5 1.66663C5.89791 1.66663 2.16666 5.39788 2.16666 9.99996C2.16666 14.602 5.89791 18.3333 10.5 18.3333C15.1021 18.3333 18.8333 14.602 18.8333 9.99996C18.8333 9.44121 18.7758 8.89579 18.6712 8.36788Z" fill="#FFC107" />
                        <path d="M3.12749 6.12121L5.8654 8.12913C6.60624 6.29496 8.4004 4.99996 10.5 4.99996C11.7746 4.99996 12.9342 5.48079 13.8171 6.26621L16.1742 3.90913C14.6858 2.52204 12.695 1.66663 10.5 1.66663C7.29915 1.66663 4.52332 3.47371 3.12749 6.12121Z" fill="#FF3D00" />
                        <path d="M10.5 18.3333C12.6525 18.3333 14.6083 17.5095 16.0871 16.17L13.5079 13.9875C12.6432 14.6451 11.5865 15.0008 10.5 15C8.33251 15 6.49209 13.6179 5.79876 11.6891L3.08126 13.7829C4.46043 16.4816 7.26126 18.3333 10.5 18.3333Z" fill="#4CAF50" />
                        <path d="M18.6713 8.36796H18V8.33337H10.5V11.6667H15.2096C14.8809 12.5902 14.2889 13.3972 13.5067 13.988L13.5079 13.9871L16.0871 16.1696C15.9046 16.3355 18.8333 14.1667 18.8333 10C18.8333 9.44129 18.7758 8.89587 18.6713 8.36796Z" fill="#1976D2" />
                    </svg>
                </span>
                Sign In with Google
            </button>
            
            <div className="text-center mb-4 flex items-center justify-center gap-2">
                <div className="flex-1 border-b border-gray-300"></div>
                <p className="text-gray-500 whitespace-nowrap">Or sign in with email</p>
                <div className="flex-1 border-b border-gray-300"></div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                <div className="mb-4">
                    <label className="block mb-1 font-medium" htmlFor="email">Email Address</label>
                    <input
                        className="w-full border rounded px-3 py-2"
                        type="email"
                        id="email"
                        placeholder="Enter email address"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: "Invalid email format",
                            }
                        })}
                    />
                    <p className="text-red-500 text-sm">{errors.email?.message}</p>
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium" htmlFor="password">Password</label>
                    <input
                        className="w-full border rounded px-3 py-2"
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        {...register("password", { required: "Password is required" })}
                    />
                    <p className="text-red-500 text-sm">{errors.password?.message}</p>
                </div>
                {serverError && <p className="text-red-500 text-sm mb-2">{serverError}</p>}
                <button 
                    className="w-full bg-[#4640DE] text-white py-2 rounded-4xl font-semibold disabled:opacity-50" 
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Signing In..." : "Login"}
                </button>
            </form>
            <p className="text-center mt-4 text-gray-600">
                Don't have an account?
                <Link href="/signup" className="text-[#4640DE] font-semibold"> Sign Up </Link>
            </p>
        </div>
    );
}