"use client";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Link from 'next/link';
import { signIn } from "next-auth/react";
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

    const onSubmit = async (data: FormValues) => {
        setServerError("");
        const res = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
        });
        if (res?.error) {
            setServerError(res.error);
        } else {
            if (typeof window !== 'undefined') {
                const { useRouter } = require('next/navigation');
                const router = useRouter();
                router.push('/opportunities/search');
            }
        }
    };

    const handleGoogleSignIn = () => {
        signIn("google", { callbackUrl: "/opportunities/search" });
    };

    return (
        <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded shadow">
            <h1 className={`${poppins.className} text-2xl font-bold mb-6 text-center text-[#25324B]`}>Welcome Back,</h1>
            <div className="text-center mb-4 flex items-center justify-center gap-44">
                <div className="flex-1 border-b border-gray-300"></div>
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
                <button className="w-full bg-[#4640DE] text-white py-2 rounded-4xl font-semibold" type="submit">
                    Login
                </button>
            </form>
            <p className="text-center mt-4 text-gray-600">
                Don't have an account?
                <Link href="/signup" className="text-[#4640DE] font-semibold"> Sign Up </Link>
            </p>
        </div>
    );
}