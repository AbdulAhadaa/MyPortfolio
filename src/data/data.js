import talentring from "../images/talentring.png"
import velgai from "../images/velgai.png"
import spainbuy from "../images/spainbuy.png"
import winners from "../images/winners.png"
import cimamplify from "../images/cimamplify.png"

export const data = [
    {
        id: 1,
        name: "TalentRing — AI-Powered Job Portal",
        desc: "Job-seeker portal with JWT auth and Stripe Jobs Pro billing. LLMs generate tailored CVs, cover letters, LinkedIn drafts, plus match analysis, skill-gap, and ATS checks from one job click.",
        stack: "React, Vite, Node/Express, MongoDB, Stripe, OpenRouter",
        image: talentring,
        github: "#",
        live: "https://talentring.eu/",
    },
    {
        id: 2,
        name: "Velgai — Secure AI Workspace",
        desc: "Production AI workspace so teams can use ChatGPT-class models without sending raw company data. OpenRouter model picker plus a PII vault with Microsoft Presidio to tokenize names and emails.",
        stack: "Next.js, Node/Express, OpenRouter, Microsoft Presidio",
        image: velgai,
        github: "#",
        live: "https://velgai.com",
    },
    {
        id: 3,
        name: "SpainBuy E-Commerce Platform",
        desc: "Responsive Next.js storefront with image-based 1688 product search and admin/user dashboards, backed by an autonomous Python/FastAPI + Playwright scraping microservice.",
        stack: "Next.js, Express.js, Python/FastAPI, Playwright",
        image: spainbuy,
        github: "#",
        live: "https://spainbuy.es/",
    },
    {
        id: 4,
        name: "ACES Awards Report System",
        desc: "AI-powered management platform integrating OpenAI GPT-4 to automate content generation across 38+ award categories — cutting manual work by 80%.",
        stack: "NestJS, React TypeScript, PostgreSQL, OpenAI GPT-4",
        image: winners,
        github: "#",
        live: "https://winners-report-generation.vercel.app/",
    },
    {
        id: 5,
        name: "CIM Amplify Buyer–Seller Platform",
        desc: "B2B MERN platform with multi-role dashboards for admins, buyers, and sellers, and full REST API integration.",
        stack: "Next.js, NestJS, MongoDB",
        image: cimamplify,
        github: "#",
        live: "https://app.cimamplify.com",
    },
]
