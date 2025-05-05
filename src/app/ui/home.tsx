import Link from "next/link";
import { FilledButton } from "./componenets/button";
import Image from "next/image";

export function HomeSection() {
    return (
        <div id="home" className="sm:p-20 p-6 w-full bg-[#F9FAFB] stroke-[#E5E7EB] flex items-center">
            <div className="flex flex-row sm:gap-[300px] gap-2 items-center w-full">
                <div className="flex flex-col sm:gap-5 gap-2">
                    <div>
                        <h1 className="text-xl/tight font-semibold sm:text-6xl/snug ">Computer Science Student & Apps Developer</h1>
                        <p className="text-[16px] text-[#4B5563]">Passionate about creating innovative solutions through code</p>
                    </div>
                    <div>
                        <Link href="#contact">
                            <FilledButton >
                                Get in Touch
                            </FilledButton>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image src="/profile.png" alt="profile" width={440} height={440} className="w-[440px] sm:w-[600px] rounded-full" />
                </div>
            </div>
        </div>
    );
}