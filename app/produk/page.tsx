import type { Metadata } from "next"
import ProductTable from "../components/produk/product-table"
import Link from "next/link"
export const metadata: Metadata = {
    title: "List Produk",
}

const Product = () => {
    return (
        <div className='min-h-screen bg-white'>
            <div className="max-w-screen-lg mx-auto py-10 px-6 flex justify-between">
                <h1 className='text-2xl font-bold text-center'>Daftar Produk</h1>
                <button><Link href="/produk/tambah" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">Tambah Produk</Link></button>
            </div>
            <ProductTable />
        </div>
    )
}

export default Product
