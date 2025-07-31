"use client";
import { useForm } from "react-hook-form";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { poppins } from "../layout";

type FormValues = {
    email: string;
    otp1: string;
    otp2: string;
    otp3: string;
    otp4: string;
};

export default function VerifyEmailForm() {
    const form = useForm<FormValues>();
    const { register, handleSubmit, setValue, watch, formState } = form;
    const { errors } = formState;
    const searchParams = useSearchParams();
    const router = useRouter();
    const [serverError, setServerError] = useState("");
    const [timer, setTimer] = useState(30);
    const [resending, setResending] = useState(false);
    const email = searchParams.get("email") || "";
    const callbackUrl = searchParams.get("callbackUrl") || "/opportunities/search";
    const otpRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => setTimer((t) => t - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const handleResend = async () => {
        setResending(true);
        setServerError("");
        try {
            const res = await fetch("https://akil-backend.onrender.com/resend-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const result = await res.json();
            if (!res.ok) {
                setServerError(result.message || "Failed to resend code");
            } else {
                setTimer(30);
            }
        } catch {
            setServerError("Network error");
        }
        setResending(false);
    };

    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 1);
        setValue(`otp${idx + 1}` as any, value);
        if (value && idx < 3) otpRefs[idx + 1].current?.focus();
        if (!value && idx > 0 && e.nativeEvent instanceof InputEvent && e.nativeEvent.inputType === "deleteContentBackward") {
            otpRefs[idx - 1].current?.focus();
        }
    };

    const otpValues = [
        watch("otp1") || "",
        watch("otp2") || "",
        watch("otp3") || "",
        watch("otp4") || "",
    ];
    const allFilled = otpValues.every((v) => v.length === 1);
    const anyFilled = otpValues.some((v) => v.length === 1);

    const onSubmit = async (data: any) => {
        setServerError("");
        const OTP = [data.otp1, data.otp2, data.otp3, data.otp4].join("");
        try {
            const res = await fetch("https://akil-backend.onrender.com/verify-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, OTP }),
            });
            const result = await res.json();
            if (!res.ok) {
                setServerError(result.message || "Verification failed");
            } else {
                router.push(callbackUrl);
            }
        } catch {
            setServerError("Network error");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded shadow flex flex-col items-center">
            <h1 className={`${poppins.className} text-2xl font-bold mb-6 text-center text-[#25324B]`}>
                Verify Email
            </h1>
            <p className="mb-6 text-center text-[#6C757D] font-epilogue">
                We've sent a verification code to the email address you provided. To complete the verification process, please enter the code here.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full flex flex-col items-center">
                <input type="hidden" value={email} {...register("email", { required: "Email is required" })} />
                <div className="mb-3 flex justify-center gap-3">
                    {[0, 1, 2, 3].map((idx) => (
                        <input
                            key={idx}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            placeholder="0"
                            className={`w-12 h-12 text-center border rounded text-xl transition-colors ${anyFilled ? "bg-white" : "bg-gray-100"}`}
                            {...register(`otp${idx + 1}`, { required: true, pattern: /^[0-9]$/ })}
                            ref={otpRefs[idx]}
                            onChange={(e) => handleOtpChange(e, idx)}
                        />
                    ))}
                </div>
                <div className="mb-6 text-center text-[#6C757D] font-epilogue">
                    You can request to <button
                        onClick={handleResend}
                        className="text-[#4640DE] font-semibold underline disabled:opacity-50"
                        disabled={resending || timer > 0}
                        type="button"
                    >Resend code</button> in <span className="text-[#4640DE] font-semibold">{`0:${timer.toString().padStart(2, '0')}`}</span>
                </div>
                {serverError && <p className="text-red-500 text-sm mb-4 text-center">{serverError}</p>}
                <button
                    type="submit"
                    className="w-full bg-[#4640DE] text-white py-2 rounded-4xl font-semibold transition-opacity disabled:opacity-50"
                    disabled={!allFilled}
                >
                    Continue
                </button>
            </form>
            <div className="flex flex-col items-center mt-4">
                <button
                    onClick={handleResend}
                    className="text-[#4640DE] font-semibold mb-2 disabled:opacity-50"
                    disabled={resending || timer > 0}
                >
                    {resending ? "Resending..." : "Resend Code"}
                </button>
            </div>
        </div>
    );
}