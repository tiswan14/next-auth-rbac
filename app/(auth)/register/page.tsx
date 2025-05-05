import FormRegister from "@/app/components/auth/form-register";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Daftar Akun Anda",
}
const Register = () => {
    return (
        <div className="p-6 space-y-2">
            <h1 className="text-2xl text-center font-bold text-gray-900 ">Buat Akun</h1>
            <FormRegister />
        </div>
    );
};

export default Register;
