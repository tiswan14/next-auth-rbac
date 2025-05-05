// AuthLayout.tsx
import React from "react";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-screen-xl rounded-lg">
                {children}
            </div>
        </div>


    );
};

export default ProductLayout;
