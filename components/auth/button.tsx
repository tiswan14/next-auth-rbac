"use client"
import { useFormStatus } from "react-dom"
export const RegisterButton = () => {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full text-white bg-blue-700 font-semibold rounded-xl px-5 py-2.5 text-center uppercase hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-md transition duration-300"
        >
            {pending ? "Loading..." : "Daftar"}
        </button>
    )
}
export const LoginButton = () => {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full text-white bg-blue-700 font-semibold rounded-xl px-5 py-2.5 text-center uppercase hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-md transition duration-300"
        >
            {pending ? "Loading..." : "Login"}
        </button>
    )
}