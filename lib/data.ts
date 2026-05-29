import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import theClassroomDoor from "@/public/theclassroomdoor.png";
import zensionTec from "@/public/zensiontec.png";
import Aegis from "@/public/Aegis.png";
import NotaryCam from "@/public/NotaryCam.png";
import Vroozi from "@/public/vroozi.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Full Stack Developer (Angular - AI SaaS) - Vroozi",
        location: "California",
        description: "Building modules and features for an AI-powered procurement SaaS platform used by enterprise B2B clients. Working across the full stack — Angular frontend, complex timeline and workflow modules, and AI-integrated features. Collaborating with US-based product teams remotely.",
        icon: React.createElement(FaAngular),
        date: "Oct 2025 - Present"
    },
    {
        title: "Senior Software Engineer - Stewart",
        location: "Houston, Texes",
        description:
            "Led frontend development on Notarycam, an online legal document notarization platform. Built and maintained Angular features, mentored junior developers, and worked directly with a Houston-based team remotely from Pakistan",
        icon: React.createElement(FaAngular),
        date: "Aug 2023 — Oct 2025",
    },
    {
        title: "Software Engineer - Cinnova",
        location: "Lahore, Pakistan",
        description:
            "As a full-stack Software Engineer for three months, I delved into NestJS, Redux Toolkit, and Ionic Framework, expanding my skill set within a short timeframe",
        icon: React.createElement(FaReact),
        date: "June 2023 - Aug 2023",
    },
    {
        title: "Associate Software Engineer - Rolustech",
        location: "Lahore, Pakistan",
        description:
            "As an Associate Software Engineer at Rolustech, I secured the position before graduation. Over two years, I mastered ReactJS, Angular, NodeJS, Tailwind, SCSS, Material UI, and NextJS. I also developed strong communication and professional skills.",
        icon: React.createElement(LuGraduationCap),
        date: "June 2021 - June 2023",
    },
] as const;

export const projectsData = [
    {
        title: "TheClassroomDoor",
        description:
            // "I worked as a full-stack developer on this project for 6 months. This was the online classroom app where teachers sets hourly based charges and the student has to pay the tuition fee to book appointment for the specified subject teacher",
            "As a full-stack developer, I contributed to a 6-month project involving the development of an online classroom app. The platform allowed teachers to set hourly charges, enabling students to book appointments with subject-specific instructors upon payment of tuition fees.",
        tags: ["React", "JavaScript", "Firebase", "Scss", "Zoom SDK"],
        imageUrl: theClassroomDoor,
    },
    {
        title: "ZensionTec",
        description:
            // "I worked around 1.5 year on this project as a frontend developer. Zension allows the user to buy tech devices on subscription based model and to tradeIn as well.",
            "During my 1.5-year tenure as a frontend developer, I contributed to Zension, a platform enabling users to purchase tech devices on a subscription-based model and facilitating trade-ins.",
        tags: ["Angular", "TypeScript", "Material UI", "NodeJS", "MySQL", "AWS"],
        imageUrl: zensionTec,
    },
    {
        title: "Aegis",
        description:
            // " I worked around 3 months on this project. Aegis allows the users to create proposal for the installation of tech cameras and hire security men for buildings.",
            "In a 3-month project stint, I collaborated on Aegis, a platform enabling users to create proposals for tech camera installations and hire security personnel for buildings.",
        tags: ["Angular", "Nest.Js", "MySQL", "Tailwind", "Redux", "AzureDevOps"],
        imageUrl: Aegis,
    },
    {
        title: "NotaryCam",
        description:
            "NotaryCam is a US-based legal technology platform that enables remote online notarization through secure video sessions — used by law firms, title companies, and financial institutions across the United States.",
        tags: ["Angular", "TypeScript", "MongoDB", "Material UI", "Redis", "AWS", "NodeJs"],
        imageUrl: NotaryCam,

    },
    {
        title: "Vroozi",
        description:
            "Vroozi is a US-based AI-powered procurement SaaS that helps enterprise clients automate purchasing workflows and manage company spending in real time. I build complex modules including timelines and workflow automation, and contribute to AI-integrated features across the full stack — working remotely with a US-based product team.",
        tags: ["Angular", "AngularJs", "TypeScript", "MongoDB", "Custom Components", "Jenkins", "Rendeck", "NodeJs"],
        imageUrl: Vroozi,

    }
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Material UI",
    "Prime NG",
    "Redux",
    "Express",
    "PostgreSQL",
    "NestJs",
    "Angular",
    "Framer Motion",
] as const;
