export const projects = [
  {
    id: "travels-whatsapp-ai-agent",
    title: "Travels WhatsApp AI Agent",
    category: "ai",
    featured: true,
    subtitle: "From travel discovery to booking, in a conversation.",
    description:
      "A WhatsApp travel assistant built with n8n and the WhatsApp Business Cloud API. Helps customers explore tour, Hajj, and Umrah packages, collect booking details, and confirm or cancel requests using package data managed in Google Sheets.",
    tags: ["n8n", "WhatsApp API", "Google Sheets", "AI Agent"],
    repoUrl: "https://github.com/Shoaib1515/Travels-WhatsApp-AI-Agent",
    details:
      "Uses n8n Data Tables for session state, validates booking information before confirmation, routes requests into Google Sheets, and provides a handoff to human staff.",
  },
  {
    id: "ai-file-assistant",
    title: "AI File Assistant",
    category: "ai",
    featured: true,
    subtitle: "Make messy datasets easier to work with.",
    description:
      "A Flutter application and FastAPI backend for CSV and Excel analysis. Combines dataset Q&A, data-quality checks, cleaning, and cell-level editing in one workflow.",
    tags: ["Flutter", "FastAPI", "Pandas", "Gemini"],
    repoUrl: "https://github.com/Shoaib1515/ai-file-assistant",
    details:
      "Supports worksheet selection, before-and-after data-health comparisons, and exporting cleaned files. Uses Gemini for natural-language questions about datasets.",
  },
  {
    id: "ai-phishing-guard",
    title: "AI Phishing Guard",
    category: "security",
    featured: true,
    subtitle: "Understand suspicious email before acting.",
    description:
      "A Next.js companion website for manually submitted email analysis, with risk feedback and Supabase accounts. Clearly communicates analysis limits and service availability.",
    tags: ["Next.js", "TypeScript", "Supabase", "AI"],
    repoUrl: "https://github.com/Shoaib1515/ai-phishing-guard",
    details:
      "Current scope is manual email analysis. Gmail integration and background inbox monitoring are not implemented. The interface separates working features from planned capabilities.",
  },
  {
    id: "ai-soc-analyst",
    title: "AI SOC Analyst",
    category: "security",
    subtitle: "Security operations, with a human in the loop.",
    description:
      "A security alert triage platform pairing a React dashboard with a FastAPI backend. It brings together evidence integrity, sensitive-data redaction, and analyst approval for high-risk response actions.",
    tags: ["FastAPI", "React", "Redis", "Celery"],
    repoUrl: "https://github.com/Shoaib1515/ai-soc-analyst",
    details:
      "Separates threat risk from AI confidence and records evidence before AI analysis. Built around explicit roles and a review queue for containment decisions.",
  },
  {
    id: "crime-investigation-system",
    title: "Crime Investigation Management System",
    category: "software",
    description:
      "Backend REST API (FastAPI + PostgreSQL) managing detectives, cases, suspects, evidence, and witness statements, with relational validation, case threat levels, and AI-based risk scoring.",
    tags: ["FastAPI", "PostgreSQL", "REST API"],
  },
  {
    id: "online-examination-system",
    title: "Online Examination System",
    category: "software",
    description:
      "Final year project — a web exam system where students log in with a roll number to take exams, plus a separate teacher portal for assigning and evaluating exams.",
    tags: ["PHP", "JavaScript", "MySQL"],
    repoUrl: "https://github.com/Shoaib1515/Online_Examination_System",
  },
  {
    id: "social-fintech-ui-clones",
    title: "Social & Fintech UI Clones",
    category: "software",
    description:
      "Front-end replicas of JazzCash, Facebook, and Instagram in Flutter, focused on responsive layouts, interactive components, and smooth navigation.",
    tags: ["Flutter", "UI/UX"],
    repoUrls: [
      {
        label: "Instagram Clone",
        url: "https://github.com/Shoaib1515/instagram_clone",
      },
      {
        label: "Facebook Clone",
        url: "https://github.com/Shoaib1515/facebook_Clone",
      },
      {
        label: "Login Page UI",
        url: "https://github.com/Shoaib1515/loginpage",
      },
    ],
  },
  {
    id: "guess-the-truth",
    title: "Guess the Truth",
    category: "software",
    description:
      "A console-based logic game built with Python OOP and the random module, including manual test runs to validate game-logic edge cases.",
    tags: ["Python", "OOP"],
  },
  {
    id: "flappy-bird-clone",
    title: "Flappy Bird Clone",
    category: "software",
    description:
      "A sprite-based Flappy Bird game built with Python and Pygame, featuring collision detection, score tracking, sound effects, and randomized pipe generation.",
    tags: ["Python", "Pygame", "Game Dev"],
    repoUrl: "https://github.com/Shoaib1515/Flappy-bird-Game",
  },
  {
    id: "sili-ai-assistant",
    title: "SILI — AI Cybersecurity Assistant",
    category: "ai",
    description:
      "A self-hosted AI security tool that answers questions via live web search, scans code for vulnerabilities like SQL injection and XSS, and runs authorized network scans using real CVE data. Integrates Anthropic Claude, Groq, Serper, and NVD APIs behind a swappable, modular backend, with a custom terminal-style frontend.",
    tags: ["AI", "LLM Integration", "Security"],
    repoUrl:
      "https://github.com/Shoaib1515/sili-ai-Offensive-Defensive-AI-Security",
  },
  {
    id: "jarvis-voice-assistant",
    title: "Jarvis Voice Assistant",
    category: "ai",
    description:
      "A desktop AI assistant in Python for voice-controlled tasks — opening websites, reading the time aloud, running system commands, and playing music.",
    tags: ["Python", "Speech Recognition"],
    repoUrl: "https://github.com/Shoaib1515/Desktop-AI-Assistant-Jarvis",
  },
  {
    id: "cybersecurity-awareness-chatbot",
    title: "Cybersecurity Awareness Website with Chatbot",
    category: "ai",
    description:
      "A cybersecurity awareness platform with an interactive chatbot that educates users about phishing, malware, ransomware, and cyber hygiene.",
    tags: ["Chatbot", "Security Awareness"],
  },
  {
    id: "secure-password-toolkit",
    title: "Secure Password Toolkit",
    category: "security",
    description:
      "A local-first credential manager (Python/Tkinter) with salted PBKDF2-HMAC-SHA256 key derivation (200,000 iterations), encrypted per-entry storage, brute-force lockout, a real-time strength meter, and a formal threat model and security assessment report.",
    tags: ["Python", "Cryptography", "Threat Modeling"],
    repoUrl: "https://github.com/Shoaib1515/password-toolkit",
  },
  {
    id: "wazuh-siem-deployment",
    title: "Wazuh SIEM Deployment and Log Analysis",
    category: "security",
    description:
      "Deployed Wazuh SIEM for real-time security monitoring — configured agents, analyzed logs, detected suspicious activity, and generated security alerts.",
    tags: ["SIEM", "Wazuh", "Log Analysis"],
  },
  {
    id: "cowrie-honeypot",
    title: "Honeypot Deployment Using Cowrie",
    category: "security",
    description:
      "Implemented an SSH/Telnet honeypot to capture attacker behavior, logging login attempts and analyzing attack patterns.",
    tags: ["Honeypot", "Threat Intelligence"],
  },
  {
    id: "social-engineering-simulation",
    title: "Social Engineering Simulation (SET)",
    category: "security",
    description:
      "Simulated phishing attacks using the Social Engineer Toolkit in a controlled lab environment to demonstrate credential harvesting techniques.",
    tags: ["Phishing Simulation", "SET"],
  },
];
