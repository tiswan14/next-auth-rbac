import React from 'react'

const FormTambahProduct = () => {
    return (
        <form action="" className='space-y-6'>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Masukkan email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5 
                 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-red-500 mt-2">segera lakukan ada</span>
                </div>
            </div>

        </form>
    )
}

export default FormTambahProduct
