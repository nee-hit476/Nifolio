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
        id: 1,
        img: "/assets/images/paychiks.png",
        title: "PayChiks",
        status: true,
        content: "A payment gateway for India.Pay-Chiks is a payment gateway that allows users to pay for products or service. It provides a secure and convenient way for users to make payments, while also offering a range of features and benefits.",
        url: "https://github.com/nee-hit476/Pay-Chiks",
        github: "https://github.com/nee-hit476/Pay-Chiks",
        skill: ["AngularJS", "AngularCLI", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Node.js", "Express.js", "PrismaORM", "PostgreSQL", "Git", "GitHub","Vercel", "Docker", "Redux"]
    },
    {
        id: 2,
        img: "/assets/images/paychiks.png",
        title: "PayChiks",
        status: true,
        content: "A payment gateway for India.Pay-Chiks is a payment gateway that allows users to pay for products or service. It provides a secure and convenient way for users to make payments, while also offering a range of features and benefits.",
        url: "https://github.com/nee-hit476/Pay-Chiks",
        github: "https://github.com/nee-hit476/Pay-Chiks",
        skill: ["AngularJS", "AngularCLI", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Node.js", "Express.js", "PrismaORM", "PostgreSQL", "Git", "GitHub","Vercel", "Docker", "Redux"]
    },{
        id: 3,
        img: "/assets/images/paychiks.png",
        title: "PayChiks",
        status: true,
        content: "A payment gateway for India.Pay-Chiks is a payment gateway that allows users to pay for products or service. It provides a secure and convenient way for users to make payments, while also offering a range of features and benefits.",
        url: "https://github.com/nee-hit476/Pay-Chiks",
        github: "https://github.com/nee-hit476/Pay-Chiks",
        skill: ["AngularJS", "AngularCLI", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Node.js", "Express.js", "PrismaORM", "PostgreSQL", "Git", "GitHub","Vercel", "Docker", "Redux"]
    },{
        id: 4,
        img: "/assets/images/paychiks.png",
        title: "PayChiks",
        status: true,
        content: "A payment gateway for India.Pay-Chiks is a payment gateway that allows users to pay for products or service. It provides a secure and convenient way for users to make payments, while also offering a range of features and benefits.",
        url: "https://github.com/nee-hit476/Pay-Chiks",
        github: "https://github.com/nee-hit476/Pay-Chiks",
        skill: ["AngularJS", "AngularCLI", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Node.js", "Express.js", "PrismaORM", "PostgreSQL", "Git", "GitHub","Vercel", "Docker", "Redux"]
    },
]

export {
    NishidhAbout,
    NishidhReachOut,
    NishidhSkills,
    VisibleProjects,
}