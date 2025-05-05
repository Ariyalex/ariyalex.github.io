import React from "react";
import { Smartphone, CodeXml, Database, PanelTop } from "lucide-react";


export interface skillItem {
    title: string;
    Icon: React.ElementType;
    content: string;
}


export const skillsContent: skillItem[] = [
    {
        title: "Mobile Development",
        Icon: Smartphone,
        content: "Flutter • Android"
    },
    {
        title: "Web Developement",
        Icon: PanelTop,
        content: "Vanilla • Next.js • Taildwind CSS"
    },
    {
        title: "Programming",
        Icon: CodeXml,
        content: "C++ • JavaScript • Dart"
    },
    {
        title: "Database",
        Icon: Database,
        content: "Firebase • SQLite • Supabase"
    },
]