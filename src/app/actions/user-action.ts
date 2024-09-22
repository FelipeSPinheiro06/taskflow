"use server"

import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export async function login(prevState: any, formData: FormData) {
    
    const user = {
        email: formData.get("email"),
        password: formData.get("password")
    }

    const response = await fetch("http://localhost:8080/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    if (!response.ok) {
        return {
            message: 'Acesso negado'
        }
    }

    const data = await response.json()
    cookies().set('token', data.token)
    cookies().set('email', data.email)

    redirect('/tasks')

    return {
        success: true,
        email: '',
        password: ''
    }
}