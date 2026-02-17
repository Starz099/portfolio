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
  technologies: string[];
}

export const projects: Project[] = [
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
    technologies: ["React", "TypeScript", "Tailwind CSS", "PDF.js"],
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
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
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
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Socket.io",
      "Node.js",
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
    technologies: ["React", "JavaScript", "Solana_web3.js", "Tailwind CSS"],
  },
];
