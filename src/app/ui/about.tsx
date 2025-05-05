import { Card } from "./componenets/card";
import { GraduationCap, CodeXml } from "lucide-react";

export function About() {
    return (
        <div id="about" className="flex flex-col items-center justify-between w-full shrink-0 sm:p-20 p-5">
            <div>
                <h1 className="text-[30px] mb-12">About Me</h1>
            </div>
            <div className="flex sm:flex-row flex-col justify-around sm:gap-12 gap-5">
                <div className="flex-1 gap-3 flex flex-col">
                    <p className="text-[16px] text-[#4B5563]">A dedicated Computer Science student with a focus on application development. I combine technical knowledge with creative problem-solving to build efficient and user-friendly applications.</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2">
                            <GraduationCap />
                            <h4>Infomatics Major</h4>
                        </div>
                        <div className="flex flex-row gap-2">
                            <CodeXml />
                            <h4>Apps Developer</h4>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <Card bgColor="bg-[#F9FAFB]">
                        <h3 className="text-[20px]">Education</h3>
                        <div>
                            <h4 className="text-[16px]">Student of Informatics</h4>
                            <p className="text-[16px] text-[#4B5563]">State Islamic University of Yogyakarta</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}