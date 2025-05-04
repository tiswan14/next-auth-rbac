import FormLogin from "@/app/components/auth/form-login";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login Akun Anda",
}
const Register = () => {
    return (
        <div className="p-6 space-y-2 ">
            <h1 className="text-2xl text-center font-bold text-gray-900 ">Login ke Akun</h1>
            <FormLogin />
        </div>
    );
};

export default Register;
