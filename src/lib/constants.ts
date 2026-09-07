import { I_Experience, I_Achievement } from "@/src/types/type";
import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiSolana,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiPython,
  SiFastapi,
  SiDocker,
  SiKubernetes,
  SiRedis,
  SiOpenai,
  SiOllama,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import {
  TbBrandOpenai,
  TbApi,
  TbChartLine,
  TbAnchor,
  TbPalette,
  TbBrain,
  TbRobot,
} from "react-icons/tb";

// Technology icons and colors mapping
export const TECH_ICONS: Record<string, { icon: IconType; color: string }> = {
  // Languages
  "Python": { icon: SiPython, color: "#3776AB" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "Java": { icon: FaJava, color: "#ED8B00" },

  // Frameworks & Libraries
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "React": { icon: SiReact, color: "#61DAFB" },
  "FastAPI": { icon: SiFastapi, color: "#009688" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express": { icon: SiExpress, color: "#ffffff" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },

  // AI & Systems
  "AI": { icon: TbBrandOpenai, color: "#10A37F" },
  "OpenAI": { icon: SiOpenai, color: "#10A37F" },
  "Ollama": { icon: SiOllama, color: "#ffffff" },
  "MCP": { icon: TbRobot, color: "#EC4899" },
  "RAG": { icon: TbBrain, color: "#8B5CF6" },

  // DevOps & Cloud
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Kubernetes": { icon: SiKubernetes, color: "#326CE5" },
  "Vercel": { icon: SiVercel, color: "#ffffff" },

  // Databases & Storage
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "Redis": { icon: DiRedis, color: "#DC382D" },
  "TimescaleDB": { icon: SiPostgresql, color: "#FDB813" },
  "Qdrant": { icon: TbBrain, color: "#DC2626" },

  // Web3 & Blockchain
  "Solana": { icon: SiSolana, color: "#9945FF" },
  "Ethereum": { icon: TbAnchor, color: "#627EEA" },
};

export const words = [
  "Backend & GenAI Engineer",
  "AI Lead @ Zyoris",
  "13× Hackathon Winner",
  "Autonomous AI Systems",
];

export const experienceData: I_Experience[] = [
  {
    company_link: "https://zyoris.com/",
    company_logo: "/assets/zyoris.png",
    company_name: "Zyoris Technology",
    duration: "Jul 2026 – Present",
    job_title: "AI Lead & Backend Engineer",
    description: "Leading the design and development of AI-powered CRM workflows using Groq, OpenAI, Ollama, FastAPI, PostgreSQL, pgvector, BullMQ, and Next.js. Architected RAG pipelines, vector memory systems, AI audit logging, PII redaction, autonomous agent workflows, and role-based AI copilots for enterprise AI operations.",
  },
  {
    company_link: "https://techtrendgo.com",
    company_logo: "/assets/techtrendgo.png",
    company_name: "Tech Trend Go",
    duration: "Jun 2026 – Jul 2026",
    job_title: "Software Development Engineer Intern",
    description: "Developed and maintained full-stack web applications using Next.js, TypeScript, Node.js, PostgreSQL, REST APIs, and Firebase Auth. Built backend services, database integrations, authentication workflows, and AI features while collaborating across cross-functional teams.",
  },
];

export const achievementsData: I_Achievement[] = [
  {
    title: "Top 25 Worldwide & Neo4j Track Honorary Mention",
    organization_name: "HACKHAZARDS ’26 (Global Buildathon)",
    organization_link: "https://www.linkedin.com/posts/ayushkumar2601_hackhazards26-namespace-namespacecommunity-activity-7495908328653463552-D73F?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFFlFdABtgDPe4hnL-KUuGI07w-4lbONSxw",
    organization_logo: "/hacks/hackhazards.png",
    year: "Mar 2026",
    description: "Out of 31,623+ builders across 51 countries. Solo finish: Top 25 Worldwide with BeanStick (Neo4j Track Mention) + Top 50 Worldwide with WETH.",
  },
  {
    title: "Overall Champion & Civic AI Track 3rd Place",
    organization_name: "HACKSTORM 2.26 (TechStorm)",
    organization_link: "https://www.linkedin.com/posts/ayushkumar2601_hackstorm226-hackathonwin-doublewin-activity-7454064487512375296-A7ZP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFFlFdABtgDPe4hnL-KUuGI07w-4lbONSxw",
    organization_logo: "/hacks/techstrom.png",
    year: "Feb 2026",
    description: "Double Winner (Overall 1st Prize + Civic AI 3rd Place) among 500+ builders for designing an AI cybersecurity automation architecture.",
  },
  {
    title: "1st Place Winner — Safety Track",
    organization_name: "FrostHacks S02 (AOT & TCS)",
    organization_link: "https://www.linkedin.com/posts/ayushkumar2601_frosthackss02-hackathon-innovation-activity-7444746828182556672-y-TN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFFlFdABtgDPe4hnL-KUuGI07w-4lbONSxw",
    organization_logo: "/assets/frosthacks.png",
    year: "Feb 2026",
    description: "2,000+ builders 36-hour national hackathon. Won 1st Prize for building S.A.F.E (Smart Adaptive Fire Evacuation system).",
  },
  {
    title: "2nd Place Winner — Cybersecurity Track",
    organization_name: "TCS Tech Day 2026 (Tata Consultancy Services)",
    organization_link: "https://www.linkedin.com/posts/ayushkumar2601_tcstechday2026-tcs-cybersecurity-activity-7489581792530731008-W-dJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFFlFdABtgDPe4hnL-KUuGI07w-4lbONSxw",
    organization_logo: "/hacks/tcs.png",
    year: "Feb 2026",
    description: "Built an automated organizational device vulnerability & risk assessment platform in a 2-hour high-pressure sprint.",
  },
  {
    title: "Gaming Track Winner",
    organization_name: "MLH Midnight Hackathon (Major League Hacking)",
    organization_link: "https://www.linkedin.com/posts/ayushkumar2601_mlh-midnight-hackathon-activity-7495002973916459008-EIRF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFFlFdABtgDPe4hnL-KUuGI07w-4lbONSxw",
    organization_logo: "/hacks/midnight.png",
    year: "Feb 2026",
    description: "Built AmongUs Midnight — verifiable multiplayer game backed by zero-knowledge (ZK) smart contracts on Midnight.",
  },
  {
    title: "1st Runner-Up",
    organization_name: "IDEATEX '26 (GDG on Campus HIT)",
    organization_link: "https://www.linkedin.com/posts/ayushkumar2601_ideatex26-sessionzero2026-gdghitk-activity-7468650350770696192-pQAL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFFlFdABtgDPe4hnL-KUuGI07w-4lbONSxw",
    organization_logo: "/hacks/ideatex.png",
    year: "Jan 2026",
    description: "Built Pluto — AI-powered cybersecurity assistant providing security support across CLI tools and browser extensions.",
  },
  {
    title: "ETHIndia Track Winner",
    organization_name: "Payload ’26 (Devfolio)",
    organization_link: "https://www.linkedin.com/posts/ayushkumar2601_hackathon-ethindia-payload26-activity-7432112624336564226-PZSD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFFlFdABtgDPe4hnL-KUuGI07w-4lbONSxw",
    organization_logo: "/assets/payload.png",
    year: "Jan 2026",
    description: "Solo project win for building Bondbuy — a shared asset ownership platform using Web3 coordination primitives.",
  },
  {
    title: "Winner — Ethereum Build Camp",
    organization_name: "Aya Community",
    organization_link: "https://www.linkedin.com/posts/ayushkumar2601_meet-the-winners-of-ethereum-build-camp-activity-7483199167146762240-1bQH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFFlFdABtgDPe4hnL-KUuGI07w-4lbONSxw",
    organization_logo: "/hacks/aya.png",
    year: "Mar 2026",
    description: "Won Ethereum Build Camp for building WETH — an MCP-Native Ethereum Infrastructure & Zero-Trust Agentic Wallet for AI Systems with 13 specialized MCP tools.",
  },
  {
    title: "Best Use of Snowflake API Winner",
    organization_name: "Diversion 2K26 (IEM-ACM)",
    organization_link: "https://www.linkedin.com/posts/ayushkumar2601_diversion2k26-hackathonwinner-apisecurity-activity-7434179608599535617-oRyK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFFlFdABtgDPe4hnL-KUuGI07w-4lbONSxw",
    organization_logo: "/assets/devfolio.png",
    year: "Jan 2026",
    description: "Built RICO — AI-powered API Security Scanner detecting IDOR, SQL injection, authentication flaws, and CSRF.",
  },
  {
    title: "1st Place Winner — Superplane Track",
    organization_name: "Bot-a-thon 2026 (PU DAO & Aya Community)",
    organization_link: "https://www.linkedin.com/posts/ayushkumar2601_botathon2026-ai-artificialintelligence-activity-7467447365306671104-dAHg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFFlFdABtgDPe4hnL-KUuGI07w-4lbONSxw",
    organization_logo: "/hacks/aya.png",
    year: "Jan 2026",
    description: "Secured 1st Place out of 1,000+ developers globally building autonomous AI agents, MCP orchestration frameworks, and memory context management.",
  },
  {
    title: "2nd Runner-Up",
    organization_name: "Agentic Premier League (GDG Cloud Kolkata)",
    organization_link: "https://www.linkedin.com/posts/ayushkumar2601_gdgcloudkolkata-agenticpremierleague-hackathon-activity-7468331862508376064-Reg4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFFlFdABtgDPe4hnL-KUuGI07w-4lbONSxw",
    organization_logo: "/hacks/gdgkolagentic.png",
    year: "Jan 2026",
    description: "Secured 2nd Runner-Up for building multi-agent AI systems and Google Cloud workflows.",
  },
];

export const projects = [
  {
    title: "Plutopus",
    description: "AI-Powered Predictive Network Operations Platform ingesting telemetry, correlating network incidents, forecasting failures, and providing topology-aware root cause analysis.",
    tech: ["FastAPI", "Next.js", "TimescaleDB", "Qdrant", "Ollama", "Docker", "Kubernetes"],
    status: "Open Source",
    year: "2026",
    link: "https://github.com/ayushkumar2601/plutopus",
    code: "https://github.com/ayushkumar2601/plutopus",
    imageSrc: "/projects/pluto.png",
  },
  {
    title: "Vayu",
    description: "Autonomous Cyber Reasoning System (CRS) that discovers vulnerabilities, performs root-cause analysis, generates secure patches, and validates remediation.",
    tech: ["Python", "FastAPI", "Ollama", "Docker", "PostgreSQL", "AI"],
    status: "Open Source",
    year: "2026",
    link: "https://vayu-nine.vercel.app/",
    code: "https://github.com/ayushkumar2601/vayu",
    imageSrc: "/projects/vayu.png",
  },
  {
    title: "Weth",
    description: "Zero-Trust AI Wallet using MCP, enabling AI agents to inspect balances, simulate transactions, and generate execution drafts without key access.",
    tech: ["MCP", "TypeScript", "Next.js", "PostgreSQL", "Ethereum", "AI"],
    status: "Open Source",
    year: "2026",
    link: "https://weth-wallet-devcon-api.vercel.app/",
    code: "https://github.com/ayushkumar2601/weth_wallet_devcon",
    imageSrc: "/projects/weth.png",
  },
  {
    title: "RICO",
    description: "AI-powered API security scanner detecting vulnerabilities in APIs with automated testing pipelines.",
    tech: ["Python", "OpenAPI", "Security Testing", "AI", "HTML Reports"],
    status: "Live",
    year: "2026",
    link: "https://rico-front-one.vercel.app",
    code: "https://github.com/ayushkumar2601/Rico-Cli",
    imageSrc: "/projects/rico.png",
  },
  {
    title: "Bondbuy",
    description: "Fractional government bond investment platform using Solana NFTs & coordination systems.",
    tech: ["Next.js", "React", "Solana", "Phantom Wallet", "Web3"],
    status: "Live",
    year: "2026",
    link: "https://bondbet.vercel.app/",
    code: "https://github.com/ayushkumar2601/bondbet",
    imageSrc: "/projects/bondbuy.png",
  },
  {
    title: "Satix",
    description: "Modern productivity platform simplifying workflows with scalable architecture.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js"],
    status: "Live",
    year: "2026",
    link: "https://satix.vercel.app",
    code: "https://github.com/ayushkumar2601/Satix",
    imageSrc: "/projects/satix.png",
  },
];