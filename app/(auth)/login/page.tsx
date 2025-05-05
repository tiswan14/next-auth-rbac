import FormLogin from "@/app/components/auth/form-login";
import GoogleButton from "@/app/components/auth/social-button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login Akun Anda",
}
const Login = () => {
    return (
        <div className="p-6 space-y-4">
            <h1 className="text-2xl text-center font-bold text-gray-900 mb-4">
                Login ke Akun
            </h1>
            <FormLogin />

            <div className="flex items-center gap-4 text-gray-400 text-sm">
                <div className="flex-1 border-t border-gray-300" />
                <span className="">atau</span>
                <div className="flex-1 border-t border-gray-300" />
            </div>

            <GoogleButton />
        </div>

    );
};

export default Login;
