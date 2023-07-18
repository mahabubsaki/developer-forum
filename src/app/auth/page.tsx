import AuthForm from "@/components/page/Auth/AuthForm";
import React from "react";

export default function Auth() {
    return (
        <main className="auth-main">
            <section className="w-[clamp(320px,50%,550px)] p-[50px] bg-white rounded-md">
                <AuthForm />
            </section>
        </main>
    );
}