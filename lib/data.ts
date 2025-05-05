import { prisma } from "@/lib/prisma"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export const getUsers = async () => {
    const session = await auth()
    if (!session || !session.user || session.user.role !== "admin") {
        redirect("/login")
    }

    try {
        const users = await prisma.user.findMany()
        return users
    } catch (error) {
        console.log(error);

    }
}


export const getProuductByUser = async () => {
    const session = await auth();

    // Periksa apakah session ada
    if (!session || !session.user) {
        console.log("User not authenticated");
        return [];
    }

    const role = session.user.role;

    try {
        // Jika peran adalah admin, ambil semua produk
        if (role === "admin") {
            const products = await prisma.product.findMany({
                include: {
                    user: {
                        select: { name: true },
                    },
                },
            });
            return products;
        }

        // Jika bukan admin, ambil produk berdasarkan userId
        const products = await prisma.product.findMany({
            where: { userId: session.user.id },
            include: {
                user: {
                    select: { name: true },
                },
            },
        });
        return products;

    } catch (error) {
        // Tangani error jika terjadi
        console.error("Error fetching products:", error);
        return [];
    }
};

