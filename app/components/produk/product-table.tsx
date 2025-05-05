import { getProuductByUser } from "@/lib/data";


const ProductTable = async () => {
    const products = await getProuductByUser();

    if (!products || products.length === 0) {
        return <h2 className="text-2xl text-center font-bold text-gray-900">Produk tidak ditemukan</h2>;
    }

    return (
        <div className="max-w-screen-lg mx-auto mt-3 overflow-x-auto">
            <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 w-10">No</th>
                        <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Nama</th>
                        <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Harga</th>
                        <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Tanggal Buat</th>
                        <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Dibuat Oleh</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        const formattedPrice = new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                        }).format(product.price);

                        const formattedDate = new Date(product.createdAt).toLocaleDateString("id-ID", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        });

                        return (
                            <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                                <td className="py-3 px-4 text-sm">{index + 1}</td>
                                <td className="py-3 px-6 text-sm">{product.name}</td>
                                <td className="py-3 px-6 text-sm">{formattedPrice}</td>
                                <td className="py-3 px-6 text-sm">{formattedDate}</td>
                                <td className="py-3 px-6 text-sm">{product.user?.name || "-"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>

    );
};

export default ProductTable;
