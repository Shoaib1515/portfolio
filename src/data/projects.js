export const projects = [
  {
    id: "travels-whatsapp-ai-agent",
    title: "Travels WhatsApp AI Agent",
    category: "ai",
    featured: true,
    subtitle: "From travel discovery to booking, in a conversation.",
    description:
      "A WhatsApp assistant for travel packages and booking requests, powered by n8n and Google Sheets.",
    tags: ["n8n", "WhatsApp API", "Google Sheets", "AI Agent"],
    repoUrl: "https://github.com/Shoaib1515/Travels-WhatsApp-AI-Agent",
    details:
      "A WhatsApp travel assistant built with n8n and the WhatsApp Business Cloud API. Helps customers explore tour, Hajj, and Umrah packages, collect booking details, and confirm or cancel requests using package data managed in Google Sheets. Uses n8n Data Tables for session state, validates booking information before confirmation, routes requests into Google Sheets, and provides a handoff to human staff.",
  },
  {
    id: "ai-file-assistant",
    title: "AI File Assistant",
    category: "ai",
    featured: true,
    subtitle: "Make messy datasets easier to work with.",
    description:
      "A Flutter app for dataset Q&A, quality checks, cleaning, and cell-level editing of CSV and Excel files.",
    tags: ["Flutter", "FastAPI", "Pandas", "Gemini"],
    repoUrl: "https://github.com/Shoaib1515/ai-file-assistant",
    details:
      "A Flutter application and FastAPI backend for CSV and Excel analysis. Combines dataset Q&A, data-quality checks, cleaning, and cell-level editing in one workflow. Supports worksheet selection, before-and-after data-health comparisons, and exporting cleaned files. Uses Gemini for natural-language questions about datasets.",
  },
  {
    id: "ai-phishing-guard",
    title: "AI Phishing Guard",
    category: "security",
    featured: true,
    subtitle: "Understand suspicious email before acting.",
    description:
      "A Next.js app for manual AI email-risk analysis, with Supabase accounts and clear service limits.",
    tags: ["Next.js", "TypeScript", "Supabase", "AI"],
    repoUrl: "https://github.com/Shoaib1515/ai-phishing-guard",
    details:
      "A Next.js companion website for manually submitted email analysis, with risk feedback and Supabase accounts. Clearly communicates analysis limits and service availability. Current scope is manual email analysis. Gmail integration and background inbox monitoring are not implemented. The interface separates working features from planned capabilities.",
  },
  {
    id: "ai-soc-analyst",
    title: "AI SOC Analyst",
    category: "security",
    subtitle: "Security operations, with a human in the loop.",
    description:
      "AI-assisted security triage with evidence integrity, data redaction, and analyst-approved responses.",
    tags: ["FastAPI", "React", "Redis", "Celery"],
    repoUrl: "https://github.com/Shoaib1515/ai-soc-analyst",
    details:
      "A security alert triage platform pairing a React dashboard with a FastAPI backend. It brings together evidence integrity, sensitive-data redaction, and analyst approval for high-risk response actions. Separates threat risk from AI confidence and records evidence before AI analysis. Built around explicit roles and a review queue for containment decisions.",
  },
  {
    id: "crime-investigation-system",
    title: "Crime Investigation Management System",
    category: "software",
    description:
      "A FastAPI case-management API linking investigators, suspects, evidence, and witnesses with risk scoring.",
    tags: ["FastAPI", "PostgreSQL", "REST API"],
    details:
      "Backend REST API (FastAPI + PostgreSQL) managing detectives, cases, suspects, evidence, and witness statements, with relational validation, case threat levels, and AI-based risk scoring.",
  },
  {
    id: "online-examination-system",
    title: "Online Examination System",
    category: "software",
    description:
      "A web exam system with student access and a teacher portal for assigning and evaluating exams.",
    tags: ["PHP", "JavaScript", "MySQL"],
    repoUrl: "https://github.com/Shoaib1515/Online_Examination_System",
    details:
      "Final year project — a web exam system where students log in with a roll number to take exams, plus a separate teacher portal for assigning and evaluating exams.",
  },
  {
    id: "social-fintech-ui-clones",
    title: "Social & Fintech UI Clones",
    category: "software",
    description:
      "Flutter replicas of social and fintech interfaces, focused on responsive layouts and navigation.",
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
    details:
      "Front-end replicas of JazzCash, Facebook, and Instagram in Flutter, focused on responsive layouts, interactive components, and smooth navigation.",
  },
  {
    id: "guess-the-truth",
    title: "Guess the Truth",
    category: "software",
    description:
      "A Python logic game using object-oriented design, randomization, and manual edge-case testing.",
    tags: ["Python", "OOP"],
    details:
      "A console-based logic game built with Python OOP and the random module, including manual test runs to validate game-logic edge cases.",
  },
  {
    id: "flappy-bird-clone",
    title: "Flappy Bird Clone",
    category: "software",
    description:
      "A Pygame Flappy Bird clone with collision detection, scoring, sound, and randomized pipes.",
    tags: ["Python", "Pygame", "Game Dev"],
    repoUrl: "https://github.com/Shoaib1515/Flappy-bird-Game",
    details:
      "A sprite-based Flappy Bird game built with Python and Pygame, featuring collision detection, score tracking, sound effects, and randomized pipe generation.",
  },
  {
    id: "sili-ai-assistant",
    title: "SILI — AI Cybersecurity Assistant",
    category: "ai",
    description:
      "An AI security assistant for web research, code vulnerability review, and authorized network scans.",
    tags: ["AI", "LLM Integration", "Security"],
    repoUrl:
      "https://github.com/Shoaib1515/sili-ai-Offensive-Defensive-AI-Security",
    details:
      "A self-hosted AI security tool that answers questions via live web search, scans code for vulnerabilities like SQL injection and XSS, and runs authorized network scans using real CVE data. Integrates Anthropic Claude, Groq, Serper, and NVD APIs behind a swappable, modular backend, with a custom terminal-style frontend.",
  },
  {
    id: "jarvis-voice-assistant",
    title: "Jarvis Voice Assistant",
    category: "ai",
    description:
      "A Python desktop assistant for voice-controlled web browsing, system commands, time, and music.",
    tags: ["Python", "Speech Recognition"],
    repoUrl: "https://github.com/Shoaib1515/Desktop-AI-Assistant-Jarvis",
    details:
      "A desktop AI assistant in Python for voice-controlled tasks — opening websites, reading the time aloud, running system commands, and playing music.",
  },
  {
    id: "cybersecurity-awareness-chatbot",
    title: "Cybersecurity Awareness Website with Chatbot",
    category: "ai",
    description:
      "A security-awareness website with a chatbot explaining phishing, malware, and safer online habits.",
    tags: ["Chatbot", "Security Awareness"],
    details:
      "A cybersecurity awareness platform with an interactive chatbot that educates users about phishing, malware, ransomware, and cyber hygiene.",
  },
  {
    id: "secure-password-toolkit",
    title: "Secure Password Toolkit",
    category: "security",
    description:
      "A local credential manager with encrypted storage, password-strength checks, and brute-force lockout.",
    tags: ["Python", "Cryptography", "Threat Modeling"],
    repoUrl: "https://github.com/Shoaib1515/password-toolkit",
    details:
      "A local-first credential manager (Python/Tkinter) with salted PBKDF2-HMAC-SHA256 key derivation (200,000 iterations), encrypted per-entry storage, brute-force lockout, a real-time strength meter, and a formal threat model and security assessment report.",
  },
  {
    id: "wazuh-siem-deployment",
    title: "Wazuh SIEM Deployment and Log Analysis",
    category: "security",
    description:
      "A Wazuh SIEM lab for agent deployment, log analysis, suspicious-activity detection, and alerts.",
    tags: ["SIEM", "Wazuh", "Log Analysis"],
    details:
      "Deployed Wazuh SIEM for real-time security monitoring — configured agents, analyzed logs, detected suspicious activity, and generated security alerts.",
  },
  {
    id: "cowrie-honeypot",
    title: "Honeypot Deployment Using Cowrie",
    category: "security",
    description:
      "An SSH/Telnet honeypot lab capturing login attempts and attacker behavior for threat analysis.",
    tags: ["Honeypot", "Threat Intelligence"],
    details:
      "Implemented an SSH/Telnet honeypot to capture attacker behavior, logging login attempts and analyzing attack patterns.",
  },
  {
    id: "social-engineering-simulation",
    title: "Social Engineering Simulation (SET)",
    category: "security",
    description:
      "A controlled SET lab demonstrating phishing and credential-harvesting techniques.",
    tags: ["Phishing Simulation", "SET"],
    details:
      "Simulated phishing attacks using the Social Engineer Toolkit in a controlled lab environment to demonstrate credential harvesting techniques.",
  },
];
