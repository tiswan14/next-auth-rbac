import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { auth } from '@/auth'

const Navbar = async () => {
    const session = await auth();
    return (
        <div className="bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image src="/logo.jpg" alt="Logo" width={60} height={60} />

                </div>

                {/* Navigation Menu */}
                <ul className="hidden md:flex items-center gap-6 font-semibold text-gray-600">
                    <li>
                        <Link href="/" className="hover:text-gray-900 transition">Beranda</Link>
                    </li>
                    <li>
                        <Link href="/product" className="hover:text-gray-900 transition">Produk</Link>
                    </li>
                    <li>
                        <Link href="/dashboard" className="hover:text-gray-900 transition">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/user" className="hover:text-gray-900 transition">User</Link>
                    </li>
                </ul>

                {/* User Info */}
                <div className="flex items-center gap-3">
                    <div className="text-right">
                        <p className="text-sm font-semibold text-gray-700 capitalize">{session?.user?.name}</p>
                        <p className="text-xs text-gray-500 capitalize">{session?.user?.role}</p>
                    </div>
                    <button type="button" className="focus:outline-none">
                        <Image
                            src={session?.user?.image || "/avatar.jpg"} // fallback jika tidak ada gambar user
                            alt="Avatar"
                            width={48}
                            height={48}
                            className="rounded-full border border-gray-300 hover:scale-105 transition-transform"
                        />
                    </button>

                </div>

            </div>
        </div>

    )
}

export default Navbar
