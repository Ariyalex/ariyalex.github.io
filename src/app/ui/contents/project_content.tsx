export interface projectItem {
    image: string;
    title: string;
    description: string;
    tag: string[];
}

export const projectContent: projectItem[] = [
    {
        image: "../projects/jaku.png",
        title: "JaKu",
        description: "Jaku adalah aplikasi Jadwal Kuliah yang berbasis Flutter dan menggunakan Firebase sebagai backend.",
        tag: [
            "Flutter", "Dart"
        ]
    },
    {
        image: "../projects/pomodoro.png",
        title: "Pomodoro Timer",
        description: "Web pomodoro timer yang membebaskan user menentukan wakut pomodoro dan dilengkapi dengan spotify player.",
        tag: [
            "HTML", "Tailwind CSS", "JS"
        ]
    },
    {
        image: "../projects/jaku_parse.png",
        title: "JaKu PDF Parsing",
        description: "Backend dari salah satu fitur JaKu, ini digunakan untuk otomasi add jadwal kuliah dgn parsing file PDF.",
        tag: [
            "Python", "Flask"
        ]
    },
    {
        image: "../projects/rizzman.png",
        title: "RizzMan",
        description: "Web Risk Management, ini adalah project team yang berangotakan saya yang berperan sebagai FrontEnd developer, Arbath dan Akmal Sani sebagai Backend, serta Achmad Alghazali sebagai UI/UX.",
        tag: [
            "Django", "Tailwind CSS", "HTML"
        ]
    },
];
