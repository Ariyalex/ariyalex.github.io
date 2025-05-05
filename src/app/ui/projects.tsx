'use client'

import { useRef } from "react";
import { projectContent } from "./contents/project_content";
import { ProjectCard, TagBlue } from "./componenets/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function Projects() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollByOneCard = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollContainer = scrollRef.current;
            const card = scrollContainer.querySelector('.snap-center') as HTMLElement;
            if (!card) return;

            const cardWidth = card.offsetWidth;
            const scrollAmount = direction === "right" ? cardWidth : -cardWidth;

            scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };


    return (
        <div id="project" className="flex flex-col items-center w-full sm:py-20 py-5 bg-white">
            <h1 className="text-[30px] sm:mb-12 mb-5">Feature Projects</h1>
            <div className="flex flex-row items-center sm:gap-4 gap-1.5 w-full sm:p-5 p-2">
                {/* tombol geser kiri */}
                <button
                    onClick={() => scrollByOneCard("left")}
                    className="sm:p-3 p-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                    <ArrowLeft />
                </button>

                <div
                    ref={scrollRef}
                    className="flex flex-row sm:gap-12 gap-5 overflow-x-scroll scroll-smooth w-full p-2 snap-x snap-mandatory hide-scrollbar"
                >
                    {projectContent.map((item, index) => (
                        <ProjectCard
                            key={index}
                            image={item.image}
                            alt={item.alt}
                            title={item.title}
                            description={item.description}
                        >
                            {item.tag != null && item.tag.length > 0 && (
                                <div className="flex flex-row gap-3">
                                    {item.tag.map((item, index) => (
                                        <TagBlue key={index}>
                                            {item}
                                        </TagBlue>
                                    ))}
                                </div>
                            )}
                        </ProjectCard>
                    ))}
                </div>
                {/* button scroll kanan */}
                <button
                    onClick={() => scrollByOneCard("right")}
                    className="sm:p-3 p-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                    <ArrowRight />
                </button>
            </div>

        </div>
    )
}