import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiExpress, SiDjango, SiFlask, SiCplusplus, SiMongodb, SiFirebase, SiPostman, SiVim, SiJira, SiRedux, SiSocketdotio, SiEjs, SiBun } from "react-icons/si";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaGithub, FaDocker, FaAws, FaUbuntu, FaPython } from "react-icons/fa";
import { RiTailwindCssFill, RiNotionFill, RiNodejsLine } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsGlobe2 } from "react-icons/bs";
import { MdSettingsApplications } from "react-icons/md";
import { stat } from "fs";



const NishidhAbout = `
    <p> Hey, I'm Nihit, a full stack developer. Primarily using JavaScript and its frameworks.I love to contribute and building things with people.(Not just an engineer). I'm currently working with Next.js, Django, Express, and TypeScript. </p>

    <p>I'm flexible and adaptable with my tech stack, and I'm always looking for new challenges to push myself to learn new things.</p>

    <p>I love contributing to open-source projects and have actively participated in multiple hackathons, where I collaborate, build, and solve real-world problems.</p>
`

const NishidhReachOut = `
    <p>I’m currently available for internships, full-time opportunities, and freelance projects. If you’re looking for someone passionate, skilled, and ready to contribute, I’m here to help bring your ideas to life!</p>
`

const NishidhSkills = [
    { id: 1, name: "React", logo: "react", icon: FaReact },
    { id: 2, name: "Next.js", logo: "nextdotjs", icon: RiNextjsFill },
    { id: 3, name: "TypeScript", logo: "typescript", icon: SiTypescript },
    { id: 4, name: "JavaScript", logo: "javascript", icon: IoLogoJavascript },
    { id: 5, name: "HTML5", logo: "html5", icon: FaHtml5 },
    { id: 6, name: "CSS3", logo: "css3", icon: FaCss3Alt },
    { id: 7, name: "TailwindCSS", logo: "tailwindcss", icon: RiTailwindCssFill },
    { id: 8, name: "Flutter", logo: "flutter", icon: FaFlutter },
    { id: 9, name: "Node.js", logo: "nodedotjs", icon: RiNodejsLine },
    { id: 10, name: "Express.js", logo: "express", icon: SiExpress },
    { id: 11, name: "Django", logo: "django", icon: SiDjango },
    { id: 12, name: "Flask", logo: "flask", icon: SiFlask },
    { id: 13, name: "Python", logo: "python", icon: FaPython },
    { id: 14, name: "C++", logo: "cplusplus", icon: SiCplusplus },
    { id: 15, name: "C", logo: "c", icon: BsGlobe2 },
    { id: 16, name: "MongoDB", logo: "mongodb", icon: SiMongodb },
    { id: 17, name: "PostgreSQL", logo: "postgresql", icon: BiLogoPostgresql },
    { id: 18, name: "MySQL", logo: "mysql", icon: MdSettingsApplications },
    { id: 19, name: "Firebase", logo: "firebase", icon: SiFirebase },
    { id: 20, name: "Git", logo: "git", icon: MdSettingsApplications },
    { id: 21, name: "GitHub", logo: "github", icon: FaGithub },
    { id: 22, name: "AWS", logo: "amazonwebservices", icon: FaAws },
    { id: 23, name: "Vercel", logo: "vercel", icon: IoLogoVercel },
    { id: 24, name: "Docker", logo: "docker", icon: FaDocker },
    { id: 25, name: "Ubuntu", logo: "ubuntu", icon: FaUbuntu },
    { id: 26, name: "Postman", logo: "postman", icon: SiPostman },
    { id: 27, name: "Figma", logo: "figma", icon: MdSettingsApplications },
    { id: 28, name: "Notion", logo: "notion", icon: RiNotionFill },
    { id: 29, name: "Vim", logo: "vim", icon: SiVim },
    { id: 30, name: "JIRA", logo: "jira", icon: SiJira },
    { id: 31, name: "Redux", logo: "redux", icon: SiRedux },
    { id: 32, name: "Socket.IO", logo: "socketdotio", icon: SiSocketdotio },
    { id: 33, name: "GSAP", logo: "greensock", icon: MdSettingsApplications },
    { id: 34, name: "EJS", logo: "ejs", icon: SiEjs },
    { id: 35, name: "Bun", logo: "bun", icon: SiBun }
];

const VisibleProjects = [
    {
        id: 0,
        img: "/Nifolio/assets/images/qubts.png",
        title: "Qubts - Process Cleaner",
        status: false,
        content: "Qubts is a desktop utility application built with Electron and Next.js, using IPC (Inter-Process Communication) for smooth interaction between processes. It runs in the background to monitor whether the system is up to date, while also scanning for temporary files and browser caches. Acting as a lightweight desktop cleaner, Qubts helps maintain system performance by providing both background monitoring and on-demand cleaning feature",
        url: "",
        github: "",
        skill: ["Electron", "Electron-builder", "IPC", "Redux", "ReduxRTK", "Child_process", "Nextjs", "Docker", "Prisma", "ExpressJS", "Postgres", "Git", "Github", "Tailwindcss", "NodeJS"]
    },
    {
        id: 1,
        img: "/Nifolio/assets/images/paychiks.png",
        title: "PayChiks",
        status: false,
        content: "A payment gateway for India.Pay-Chiks is a payment gateway that allows users to pay for products or service. It provides a secure and convenient way for users to make payments, while also offering a range of features and benefits.",
        url: "https://github.com/nee-hit476/Pay-Chiks",
        github: "https://github.com/nee-hit476/Pay-Chiks",
        skill: ["AngularJS", "AngularCLI", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Node.js", "Express.js", "PrismaORM", "PostgreSQL", "Git", "GitHub", "Vercel", "Docker", "Redux"]
    },
    {
        id: 2,
        img: "/Nifolio/assets/images/Nitify.png",
        title: "Nitify - Second Brain",
        status: true,
        content: "A modern note-taking app that lets you save anything you want to revisit later — whether it’s a tweet, a video, or any useful resource. Built with React for the frontend, Express.js for the backend, and styled with Tailwind CSS. The backend is deployed on Render, using an ODM for database management.",
        url: "https://github.com/nee-hit476/",
        github: "https://github.com/nee-hit476/",
        skill: ["ReactJS", "ContextAPI", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Node.js", "Express.js", "bycrypt", "cookieParser", "Git", "GitHub", "JWT", "Redux"]
    }, {
        id: 3,
        img: "/Nifolio/assets/images/TypeZ.png",
        title: "TypeZ – typing game",
        status: true,
        content: "A typing game website built in June 2025 for users looking to enhance their typing speed and accuracy. It offers multiple modes such as Infinite, A–Z, Long Paragraph, and Trial, making practice engaging and versatile. Designed to provide both fun and skill-building experiences.",
        url: "https://type-z-liart.vercel.app/infinite-typing",
        github: "https://github.com/nee-hit476/TypeZ",
        skill: ["ReactJS", "ContextAPI", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "KeyboardEvents", "Framer-Motion", "Git", "GitHub"]
    }, {
        id: 5,
        img: "/Nifolio/assets/images/terminal.png",
        title: "GUI Terminal - Clang",
        status: true,
        content: "allowing users to enter and execute shell commands within a simple graphical interface. Integrated features like command history display, scrollable output, and safe process handling with popen/pclose. Showcases event-driven programming, GUI development, and system command execution in a desktop application.",
        url: "https://github.com/nee-hit476/Termianl-Clang/blob/main/main/gui_terminal.cpp",
        github: "https://github.com/nee-hit476/Termianl-Clang/blob/main/main/gui_terminal.cpp",
        skill: ["C++", "GTKmm", "GTK+", "GUI Development", "Event-driven Programming", "Object-Oriented Programming"]

    },

]

const OSSProjects = [
    {
        id: 1,
        img: "/Nifolio/assets/images/feathers.png",
        title: "FeatherIcons.com",
        status: true,
        content: "Worked on fixing animation glitches and pointer movement issues during search in a project with complex motion transitions. Resolved jitter problems and optimized performance using Framer Motion. Built with React, TailwindCSS, and Framer Motion.",
        url: "https://github.com/feathericons",
        github: "https://github.com/feathericons/feathericons.com/pull/825",
        skill: [
            // frontend
            "React",
            "Gatsby",
            "Theme UI",
            "Formik",
            "TailwindCSS",
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",

            // backend & ORM
            "Node.js",
            "Express.js",
            "PrismaORM",
            "PostgreSQL",

            // utilities & libraries
            "Fuse.js",
            "JSZip",
            "Lodash",
            "Polished",
            "classnames",
            "copy-to-clipboard",
            "downloadjs",
            "feather-icons",

            // tooling
            "ESLint",
            "Prettier",
            "Git",
            "GitHub",
            "Vercel",
            "Docker",
            "Redux"
        ]

    },
    {
        id: 4,
        img: "/Nifolio/assets/images/PolyPixels.png",
        title: "Holes: Martyr of Dirt",
        status: true,
        content: "Worked on enhances gameplay by automatically clearing small dirt nodes as players walk over them, making movement smoother. It introduces a new clearDirtAroundPlayer() function in diggingFunctions.js and updates input.js to handle player-triggered dirt clearing. The logic is fully integrated with the existing socket system for multiplayer sync.",
        url: "https://muddygame.net/game/",
        github: "https://github.com/PolyPixels/Holes_Client/pull/43",
        skill: [
            "JavaScript",
            "HTML5",
            "CSS3",
            "p5.js",
            "Procedural Generation",
            "2D Rendering",
            "Game Logic",
            "Socket.io",
            "WebSockets",
            "Real-time Communication",
            "Node.js",
            "Express.js",
            "CORS Handling",
            "npm",
            "http-server",
            "Python SimpleHTTPServer",
            "Git",
            "GitHub",
        ]

    },
]

const LicenseCert = [
    {
        id: 1,
        name: "Frontend Developer (React)",
        img: "/Nifolio/assets/images/ReactCert.png",
        link: "https://www.hackerrank.com/certificates/ecf2872868aa"
    },
    {
        id: 2,
        name: "JavaScript Algorithms and Data Structures",
        img: "/Nifolio/assets/images/JS.png",
        link: "https://www.freecodecamp.org/certification/fcc-2222c476-1828-4fcb-bd35-8fe8b15820a4/javascript-algorithms-and-data-structures-v8"
    },
    {
        id: 3,
        name: "GenAI - Certification",
        img: "/Nifolio/assets/images/google.png",
        link: "https://certificates.simplicdn.net/share/8786091_91682011755177275338.png"
    }
]

export {
    NishidhAbout,
    NishidhReachOut,
    NishidhSkills,
    VisibleProjects,
    OSSProjects,
    LicenseCert
}
