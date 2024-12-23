import React from 'react'
interface SplendorgButtonProps {
    variant?: "primary" | "empty" | "danger" | "success" | "warning"
    children: React.ReactNode | string

}

export function Button({ children, variant = "primary", ...props }: SplendorgButtonProps) {
    const variants = {
        primary: 'bg-[#e21b70] text-white border border-[#e21b70] hover:bg-[#b8165c]   ',
        empty: 'bg-[#fff] border border-black text-black ',
        danger: 'bg-red-500 text-white ',
        success: 'bg-green-500 text-white ',
        warning: 'bg-yellow-500 text-white ',
    }
    return (
        <button className={`py-1 px-2 rounded-lg transition-all duration-200  transform hover:scale-105 [word-spacing:-5px] ${variants[variant]}`} {...props}>
            {children}
        </button>
    )
}


