import React from 'react'
interface SplendorgButtonProps {
    variant?: "primary" | "secondary" | "danger" | "success" | "warning"
    children: React.ReactNode | string

}

export function Button({ children, variant = "primary", ...props }: SplendorgButtonProps) {
    const variants = {
        primary: 'bg-[#e21b70] text-white border border-[#e21b70] hover:bg-white hover:text-[#e21b70]  ',
        secondary: 'bg-white text-black ',
        danger: 'bg-red-500 text-white ',
        success: 'bg-green-500 text-white ',
        warning: 'bg-yellow-500 text-white ',
    }
    return (
        <button className={`py-2 px-4 rounded-lg transition-all duration-200  ${variants[variant]}`} {...props}>
            {children}
        </button>
    )
}


