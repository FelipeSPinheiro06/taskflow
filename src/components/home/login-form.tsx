"use client"

import { login } from "@/app/actions/user-action"
import { useFormState } from "react-dom"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"
import { AlertTriangle } from "lucide-react"


const initialState = {
    message: ""
}

export default function LoginForm() {
    const [state, formAction] = useFormState(login, initialState)
    return (
        <form action={formAction} className="flex flex-col">
            <div className="w-full max-w-sm items-center gap-1.5 mt-6">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email@email.com" />
            </div>

            <div className="w-full max-w-sm items-center gap-1.5 mt-6">
              <Label htmlFor="password">Senha</Label>
              <Input type="password" id="password" placeholder="124356" />
            </div>

            <Button type="submit" className="mt-[45px] bg-white text-black">Entrar</Button>

            { state.message &&
                <Alert className="bg-red-700">
                    <AlertTriangle className="w-6 h-6" />
                    <AlertTitle>Erro</AlertTitle>
                    <AlertDescription>{state.message}</AlertDescription>
                </Alert>
            }

        </form>
    )
}