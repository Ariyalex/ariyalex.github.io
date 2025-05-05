import { ButtonHTMLAttributes, ReactNode } from "react";

//kode ini untuk property bawaan react
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export function Navbutton({ children, ...props }: ButtonProps) {
    return (
        <button {...props} className="sm:p-2 p-1 text-base">
            {children}
        </button>
    );
}

export function FilledButton({ children, ...props }: ButtonProps) {
    return (
        <button {...props} className="px-6 py-2.5 text-[16px] bg-[#2563EB] text-white rounded-md cursor-pointer">
            {children}
        </button>
    )
}