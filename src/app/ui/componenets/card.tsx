import { ReactNode } from "react"
import clsx from "clsx";

interface CardProps {
    children: ReactNode;
    bgColor?: string;
    flexIndex?: string;
}

interface ProjectCardProps {
    children?: ReactNode;
    alt?: string;
    image: string;
    title: string;
    description: string;
}

interface TagBlueProps {
    children: string;
}


export function Card({ children, bgColor, flexIndex }: CardProps) {
    return (
        <div
            className={clsx("rounded-lg sm:p-8 p-3 flex gap-2 h-auto w-auto flex-col", bgColor, flexIndex)}>
            {children}
        </div>
    )
}

export function ProjectCard({ children, image, alt, title, description }: ProjectCardProps) {
    return (
        <div className="sm:w-[600px] w-[282px] h-fit rounded-lg shadow-sm overflow-clip flex-none snap-center">
            <div className="sm:h-[192px] h-[150px] w-full">
                <img src={image} alt={alt} className="w-full h-full object-cover" />
            </div>
            <div className="flex shrink-0 h-fit w-full gap-[10px] sm:p-6 p-4 flex-col">
                <h3 className="text-xl font-medium">{title}</h3>
                <p className="text-[#4B5563] text-base">{description}</p>
                {children}
            </div>
        </div>
    )
}

export function TagBlue({ children }: TagBlueProps) {
    return (
        <div className="text-[#2563EB] text-sm bg-[#DBEAFE] rounded-full py-1.5 sm:px-3 px-2 ">
            {children}
        </div>
    )
}