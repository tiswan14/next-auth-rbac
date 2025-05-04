"use client";
import { useActionState } from "react";
import Link from "next/link";
import { signUpCredentials } from "@/lib/action";
import { RegisterButton } from "./button";

const FormRegister = () => {
  const [state, formAction] = useActionState(signUpCredentials, null)
  return (
    <form action={formAction} className="space-y-6">
      {state?.message ? (
        <div className="p-4 mt-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
          <span>{state?.message}</span>
        </div>
      ) : null}
      {/* Field Nama */}
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nama</label>
        <input
          type="text"
          name="name"
          placeholder="Masukkan nama"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">{state?.error?.name}</span>
        </div>
      </div>

      {/* Field Email */}
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Masukkan email"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">{state?.error?.email}</span>
        </div>
      </div>

      {/* Field Password */}
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Masukan password"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">{state?.error?.password}</span>
        </div>
      </div>

      <div>
        <label htmlFor="ConfirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Konfirmasi Password</label>
        <input
          type="password"
          name="ConfirmPassword"
          placeholder="Masukkan konfirmasi password"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">{state?.error?.ConfirmPassword}</span>
        </div>
      </div>

      <RegisterButton />


      <p className="text-sm text-center font-light text-gray-500">
        Sudah punya akun?
        <Link href="/login">
          <span className="font-medium pl-1 text-blue-600 hover:text-blue-800 hover:underline transition duration-200 cursor-pointer">
            Login
          </span>
        </Link>
      </p>


    </form>
  );
}

export default FormRegister;
