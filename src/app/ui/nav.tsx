import { Navbutton } from "./componenets/button";
import Link from "next/link";

const navContent = [
    { Label: "About", href: "#about" },
    { Label: "Skills", href: "#skills" },
    { Label: "Project", href: "#project" },
    { Label: "Contact", href: "#contact" },];

export function Nav() {
    return (
        <header className="flex items-center flex-row sm:px-14 px-2 justify-between shadow-sm w-full h-[60px] z-50 sticky top-0 bg-white">
            <div className="flex items-center">
                <a className="font-bold sm:text-xl text-lg" href="#home">Ariya Duta</a>
            </div>
            <div>
                <ul className="flex flex-row sm:gap-2 gap-1">
                    {navContent.map((item, index) => (
                        <li key={index}>
                            <Navbutton >
                                <Link href={item.href}>{item.Label}</Link>
                            </Navbutton>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}