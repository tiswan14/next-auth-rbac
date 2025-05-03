"use server";
import { RegisterSchema, SignInSchema } from "./zod";
import { hashSync } from "bcrypt-ts";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const signUpCredentials = async (preState: unknown, formData: FormData) => {
    const validatedFields = RegisterSchema.safeParse(Object.fromEntries(formData));

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, password, email } = validatedFields.data;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        return { message: "Email sudah digunakan" };
    }

    const hashedPassword = hashSync(password, 10);

    try {
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return { message: error.message || "Terjadi kesalahan saat mendaftar" };
        }
        return { message: "Terjadi kesalahan saat mendaftar" };
    }

    return redirect("/login");
};

export const signInCredentials = async (prevState: unknown, formData: FormData) => {
    const validatedFields = SignInSchema.safeParse(Object.fromEntries(formData));

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { email, password } = validatedFields.data;

    try {
        await signIn("credentials", { email, password, redirectTo: "/dashboard" });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { message: "Email atau password salah" };
                default:
                    return { message: "Terjadi kesalahan saat login" };
            }
        }
        throw error
    }


};
