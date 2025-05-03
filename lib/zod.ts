import { object, string } from "zod";

export const RegisterSchema = object({
    name: string().min(3, "Nama tidak boleh kurang dari 3 karakter").optional(), // name adalah opsional
    email: string().email("Email tidak valid"), // validasi email
    password: string()
        .min(6, "Password tidak boleh kurang dari 6 karakter")
        .max(32, "Password tidak boleh lebih dari 32 karakter"),
    ConfirmPassword: string()
        .min(6, "Password tidak boleh kurang dari 6 karakter")
        .max(32, "Password tidak boleh lebih dari 32 karakter"),
}).refine((data) => data.password === data.ConfirmPassword, {
    message: "Password tidak sama",
    path: ["ConfirmPassword"],
});

export const SignInSchema = object({
    email: string().email("Email tidak valid"),
    password: string()
        .min(6, "Password tidak boleh kurang dari 6 karakter")
        .max(32, "Password tidak boleh lebih dari 32 karakter"),
})