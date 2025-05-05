import { Card } from "./componenets/card";
import { skillsContent } from "./contents/skill_content";


export function Skills() {
    return (
        <div id="skills" className="flex flex-col items-center justify-between w-full shrink-0 sm:p-20 p-5 bg-[#F9FAFB]">
            <div>
                <h1 className="text-[30px] sm:mb-12 mb-5">Technical Skills</h1>
            </div>
            <div className="sm:flex grid sm:flex-row grid-cols-2 sm:justify-around sm:gap-12 gap-4 w-full">
                {skillsContent.map(({ title, Icon, content }, index) => (
                    <Card key={index} bgColor="bg-white">
                        <Icon color="#2563EB" />
                        <h3 className="text-[20px]">{title}</h3>
                        <div>
                            {content}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}