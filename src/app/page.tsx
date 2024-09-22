"use client"

import LoginForm from "@/components/home/login-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";



export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('./assets/Ideia-Jean.jpg')]">
        <div className="bg-slate-800 w-96 h-96 rounded-xl flex flex-col justify-center items-center">
          
          <h1 className="font-serif font-bold text-5xl">
            TaskFlow
          </h1>
          
          <section>
              <LoginForm />
          </section>
        </div>
        
    </div>
  );
}
