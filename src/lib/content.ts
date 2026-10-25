import { basePath } from "./site";

export type Project = {
  name: string;
  role?: string;
  status?: string;
  paragraphs: string[];
  href?: string;
  linkLabel?: string;
  demoHref?: string;
};

export const contacts = {
  Resume: `${basePath}/Jayden-Ruddock-Resume.pdf`,
  GitHub: "https://github.com/Spacewalker215",
  LinkedIn: "https://www.linkedin.com/in/jaydenruddock",
  Email: "mailto:jaydenruddock@utexas.edu",
};

export const selectedWork: Project[] = [
  {
    name: "Internship Grabber",
    role: "Founder & developer",
    href: "https://www.internshipgrabber.com/",
    linkLabel: "Visit Internship Grabber",
    paragraphs: [
      "I started Internship Grabber because searching for internships meant jumping between job boards and keeping track of applications somewhere else. I wanted one place to find opportunities and follow an application from the first listing onward.",
      "I built the web app and automated the collection and parsing of job listings, using AI to turn job text into structured information students can search and track.",
    ],
  },
  {
    name: "GymGoersHealth",
    role: "Personal project",
    paragraphs: [
      "My friend and I wanted to track what we ate at UT's dining halls. The food we were eating wasn't in the apps we used, so I started building one around our own routine, with food logging, workouts, fasting, and progress tracking.",
      "I built it with Next.js, TypeScript, Convex, and Stack Auth. Scheduled syncs collect menus from three UT dining halls into shared storage, and a cache with expiry avoids repeating the same food API requests. I'm working toward a campus release.",
    ],
  },
  {
    name: "Cody",
    role: "Local agent runtime",
    paragraphs: [
      "I built Cody to run a local AI agent that could work with files and scripts across my devices. It connects llama.cpp and Hermes Agent with Python scripts and n8n webhooks.",
      "I added output validation and grammar constraints to catch malformed tool calls before execution, plus timeout handling and container recovery for failed tasks.",
    ],
  },
  {
    name: "Autonomous Vehicle Research",
    role: "Undergraduate researcher · UT Austin FRI",
    status: "Ongoing",
    paragraphs: [
      "In UT Austin's Freshman Research Initiative, I work on co-adaptive reinforcement learning for autonomous driving. We use simulated passenger comfort feedback to guide updates to trajectory policies in Python and PyTorch.",
      "I write evaluation scripts to compare collisions, reward stability, and policy convergence across training runs, and process driving telemetry on TACC's Linux GPU clusters.",
    ],
  },
  {
    name: "SkyLore",
    role: "Best Celestial Project Winner · HackTX 2025",
    paragraphs: [
      "My team built SkyLore, a citizen science app that won Best Celestial Project at HackTX 2025. We put together a working app in 24 hours to help people explore and contribute sky observations.",
      "I built Python and Streamlit views that mapped light pollution reports and observation entries on interactive heat maps.",
    ],
    href: "https://github.com/connormmckelvey/HACKTX-2025",
    linkLabel: "View the code",
  },
  {
    name: "Friendly Error Handler",
    role: "VS Code extension",
    href: "https://marketplace.visualstudio.com/items?itemName=JaydenRuddock.friendly-error-handler&ssr=false",
    linkLabel: "View on VS Code Marketplace",
    paragraphs: [
      "I built a VS Code extension that uses OpenAI to explain programming errors in plain language. It gives developers a way to understand an unfamiliar error while staying in their editor, across different programming languages.",
    ],
  },
  {
    name: "Texas NSBE",
    role: "Telecommunications chair",
    href: "https://utnsbe.org/",
    linkLabel: "Visit Texas NSBE",
    paragraphs: [
      "I built the official website for UT Austin's NSBE chapter from scratch. I wanted it to be useful beyond introducing the organization, so I brought attendance tracking, member points, and academic resources into one place.",
      "The website is now part of the chapter's day-to-day operations. Officers use it to manage member records and chapter resources, with access based on their role.",
    ],
  },
  {
    name: "Mentor Finder",
    role: "Texas Robotics",
    paragraphs: [
      "I helped build Mentor Finder for students in Texas Robotics to request mentors and for program managers to review pairings. The app serves more than 60 users.",
      "I wrote reactive Convex queries and mutations for application queues and mentor capacity, and set up Clerk authentication and admin dashboards for matching and rosters.",
    ],
  },
];

export const moreProjects: Project[] = [
  {
    name: "Scratch Tutor",
    paragraphs: ["A custom Scratch extension that gives an AI tutor context from a sprite's code blocks. I prompted it to guide students through their work rather than hand them an answer."],
    href: "https://github.com/Spacewalker215/Scratch-Tutor",
    linkLabel: "View the code",
  },
  {
    name: "FlashDrop",
    paragraphs: ["A temporary file-sharing service built with Node.js and Express, with expiring downloads, rate limits, and cleanup. Selected for an on-campus Cursor engineering showcase."],
    href: "https://github.com/Spacewalker215/FlashDrop",
    linkLabel: "View the code",
    demoHref: "https://flashdrop-bgdr.onrender.com/",
  },
];

export const experiments: Project[] = [
  {
    name: "The Forge",
    status: "Unfinished",
    paragraphs: ["I'm exploring software-agent orchestration with persistent job state, model routing, and validation loops. A lot of the work has been understanding where generated code and recovery workflows break down."],
  },
  {
    name: "Billy the Fish",
    status: "Unfinished collaboration",
    paragraphs: ["I helped a friend prototype the voice system for an animatronic fish, connecting speech recognition, local models, and audio-driven mouth control. My part is the voice system within my friend's hardware project."],
  },
  {
    name: "Sovereign Memory",
    status: "Prototype",
    paragraphs: ["A local retrieval-augmented generation experiment using Ollama, LanceDB, and FastAPI. I've been exploring document ingestion and retrieval; I haven't evaluated retrieval quality at scale."],
  },
];
