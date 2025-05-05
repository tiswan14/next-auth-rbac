import FormTambahProduct from "@/app/components/produk/form-tambah-product";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tambah Produk",
}
const Login = () => {
    return (
        <div className="p-6 space-y-2 bg-red-600">
            <h1 className="text-2xl text-center font-bold text-gray-900 mb-5">Login ke Akun</h1>
            <FormTambahProduct />
        </div>
    );
};

export default Login;
