import iboga from "../images/iboga.png"
import beer from "../images/beer.png"
import insaig from "../images/insaig.png"
import cimamplify from "../images/cimamplify.png"
import advisorchooser from "../images/advisorchooser.png"
import winners from "../images/winners.png"

export const data = [
    {
        id: 1,
        name: "Iboga Retreat Platform",
        desc: "Full-stack retreat booking platform connecting users with Iboga ceremony providers worldwide, featuring geolocation-based search and role-specific dashboards.",
        stack: "React.js, Node.js, Express.js, PostgreSQL",
        image: iboga,
        github: "#",
        live: "https://iboga.co",
    },
    {
        id: 2,
        name: "ACES Awards Report Generation System",
        desc: "Full-stack system for managing Asia's Corporate Excellence & Sustainability Awards with AI-powered content generation, 38+ award categories, and dynamic PDF creation.",
        stack: "NestJS, React, TypeScript, OpenAI GPT-4",
        image: winners,
        github: "#",
        live: "https://winner-trophy-frontend.vercel.app/",
    },
    {
        id: 3,
        name: "Beer Connoisseur Magazine",
        desc: "Digital platform for Beer & Cider Magazine with multi-role user management.",
        stack: "React, TypeScript, Firebase Auth",
        image: beer,
        github: "#",
        live: "#",
    },
    {
        id: 4,
        name: "CIM Amplify Buyer–Seller Platform",
        desc: "B2B web application connecting buyers and sellers with role-based dashboards for admins, buyers, and sellers, integrated via RESTful APIs.",
        stack: "React.js, Node.js, Express.js, MongoDB",
        image: cimamplify,
        github: "#",
        live: "https://app.cimamplify.com",
    },
    {
        id: 5,
        name: "Advisor Chooser Platform",
        desc: "Seller-focused advisor selection platform built as an extension of the CIM Amplify ecosystem with full frontend UI and core backend API contributions.",
        stack: "React.js, Node.js, Express.js, REST APIs",
        image: advisorchooser,
        github: "#",
        live: "https://app.advisorchooser.com",
    },
    {
        id: 6,
        name: "INSAIG — AI & Cybersecurity Certifications",
        desc: "Premium certification platform for AI and Cybersecurity professionals, featuring 6 structured tracks, enterprise team plans, AI-powered adaptive learning, and hands-on labs.",
        stack: "Next.js, Tailwind CSS",
        image: insaig,
        github: "#",
        live: "https://insaig-zeta.vercel.app/",
    }
]