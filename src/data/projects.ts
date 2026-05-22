export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    src: string;
    alt: string;
    aspectRatio: string;
  };
  github_link: string;
  demo_link: string;
  blog_link?: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: "oto",
    title: "Oto",
    description:
    "A lightweight, keyboard-first desktop audio mixer overlay for windows written in Rust, featuring app-specific volume control and zero-latency global push-to-talk, currently supporting Discord.",
    thumbnail: {
      src: "/images/projects/oto.png",
      alt: "Oto project thumbnail",
      aspectRatio: "16 / 9",
    },
    github_link: "https://github.com/Starz099/oto",
    demo_link: "",
    blog_link: "",
    technologies: ["Rust", "Egui", "Windows WASAPI", "Discord API"],
  },
  {
    id: "leerio",
    title: "Leerio",
    description:
      "AI-powered platform enabling conversational querying and summarisation of multi-page PDF documents using a Retrieval-Augmented Generation (RAG) pipeline.",
    thumbnail: {
      src: "/images/projects/leerio.png",
      alt: "Leerio project thumbnail",
      aspectRatio: "16 / 9",
    },
    github_link: "https://github.com/starz099/Leerio",
    demo_link: "https://leerio.vercel.app/",
    blog_link: "",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "LangChain",
      "Grok API",
      "MongoDB",
      "Express.js",
      "Pinecone",
    ],
  },
  {
    id: "kestro",
    title: "Kestro",
    description:
      "Platform to practice typing speed for code, not just text. Helps developers build muscle memory for syntax using a smooth editor powered by Monaco Editor.",
    thumbnail: {
      src: "/images/projects/kestro.png",
      alt: "Kestro project thumbnail",
      aspectRatio: "16 / 9",
    },
    github_link: "https://github.com/Starz099/Kestro",
    demo_link: "https://kestro.starzz.dev/",
    blog_link: "",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Monaco Editor",
      "CodeMirror",
      "Zustand",
      "PostgreSQL",
      "Prisma",
      "Clerk",
    ],
  },
  {
    id: "hand-and-brain-chess",
    title: "Hand and Brain Chess",
    description:
      "An online platform for playing Hand and Brain Chess, allowing users to team up and enjoy this unique chess variant with real-time gameplay.",
    thumbnail: {
      src: "/images/projects/hand-and-brain-chess.png",
      alt: "Hand and Brain Chess project thumbnail",
      aspectRatio: "16 / 9",
    },
    github_link: "https://github.com/Starz099/chess",
    demo_link: "https://chess-nu-seven.vercel.app/",
    blog_link: "",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Socket.io",
      "Node.js",
    ],
  },
  {
    id: "tura",
    title: "Tura",
    description:
      "A blazing-fast, file transfer CLI written in Rust. Using 4 parallel TCP streams, async Tokio I/O, and ChaCha20-Poly1305 End-to-End Encryption.",
    thumbnail: {
      src: "/images/projects/tura.png",
      alt: "Tura CLI project thumbnail",
      aspectRatio: "16 / 9",
    },
    github_link: "https://github.com/Starz099/tura",
    demo_link: "",
    blog_link: "/blog/making-tura",
    technologies: [
      "rust",
      "clap",
      "rumqttc",
      "tokio",
      "stun",
      "blake3",
      "chacha20poly1305",
    ],
  },
  {
    id: "dark-pdf",
    title: "Dark-pdf",
    description: "Convert any pdf to dark mode with a single click.",
    thumbnail: {
      src: "/images/projects/dark-pdf.png",
      alt: "Dark-pdf project thumbnail",
      aspectRatio: "16 / 9",
    },
    github_link: "https://github.com/Starz099/dark-pdf",
    demo_link: "https://dark-pdf.starzz.dev/",
    blog_link: "",
    technologies: ["React", "TypeScript", "Tailwind CSS", "PDF.js"],
  },
  {
    id: "kyntra",
    title: "Kyntra",
    description:
      "AI-powered CLI for smarter commits, better branch naming, and quick repo understanding, all from the terminal.",
    thumbnail: {
      src: "/images/projects/kyntra.png",
      alt: "Kyntra CLI project thumbnail",
      aspectRatio: "16 / 9",
    },
    github_link: "https://github.com/Starz099/kyntra",
    demo_link: "https://kyntra.starzz.dev",
    blog_link: "",
    technologies: [
      "Node.js",
      "TypeScript",
      "Commander.js",
      "Inquirer",
      "Chalk",
      "simple-git",
    ],
  },
  {
    id: "whiff.gg",
    title: "Whiff.gg",
    description:
      "A fun web app where users enter their Valorant ID, get their stats scraped from Valorant Tracker, and receive an AI-generated roast based on their performance.",
    thumbnail: {
      src: "/images/projects/whiff-gg.png",
      alt: "Whiff.gg project thumbnail",
      aspectRatio: "16 / 9",
    },
    github_link: "https://github.com/Starz099/whiff.gg",
    demo_link: "",
    blog_link: "",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Puppeteer",
      "Azure-rest/ai-inference",
    ],
  },
  {
    id: "writso",
    title: "Writso",
    description:
      "A writing practice web app that helps users improve their writing skills through daily prompts, AI reviews, progress tracking, and community feedback.",
    thumbnail: {
      src: "/images/projects/writso.png",
      alt: "Writso project thumbnail",
      aspectRatio: "16 / 9",
    },
    github_link: "https://github.com/Starz099/writso",
    demo_link: "https://writso.vercel.app",
    blog_link: "",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    id: "token-launchpad",
    title: "Token-Launchpad",
    description:
      "A decentralized platform that enables users to create custom Solana tokens.",
    thumbnail: {
      src: "/images/projects/token-launchpad.png",
      alt: "Token-Launchpad project thumbnail",
      aspectRatio: "16 / 9",
    },
    github_link: "https://github.com/starz099/token-launchpad",
    demo_link: "https://token-launchpad-rho.vercel.app/",
    blog_link: "",
    technologies: ["React", "JavaScript", "Solana_web3.js", "Tailwind CSS"],
  },
];
