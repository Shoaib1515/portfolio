export const projects = [
  {
    id: "crime-investigation-system",
    title: "Crime Investigation Management System",
    category: "software",
    description:
      "Backend REST API (FastAPI + PostgreSQL) managing detectives, cases, suspects, evidence, and witness statements, with relational validation, case threat levels, and AI-based risk scoring.",
    tags: ["FastAPI", "PostgreSQL", "REST API"],
    image: "/images/projects/crime-investigation-system.webp",
  },
  {
    id: "online-examination-system",
    title: "Online Examination System",
    category: "software",
    description:
      "Final year project — a web exam system where students log in with a roll number to take exams, plus a separate teacher portal for assigning and evaluating exams.",
    tags: ["PHP", "JavaScript", "MySQL"],
    image: "/images/projects/online-examination-system.webp",
  },
  {
    id: "social-fintech-ui-clones",
    title: "Social & Fintech UI Clones",
    category: "software",
    description:
      "Front-end replicas of JazzCash, Facebook, and Instagram in Flutter, focused on responsive layouts, interactive components, and smooth navigation.",
    tags: ["Flutter", "UI/UX"],
    image: "/images/projects/social-fintech-ui-clones.webp",
    repoUrls: [
      { label: "Instagram Clone", url: "https://github.com/Shoaib1515/instagram_clone" },
      { label: "Facebook Clone", url: "https://github.com/Shoaib1515/facebook_Clone" },
      { label: "Login Page UI", url: "https://github.com/Shoaib1515/loginpage" },
    ],
  },
  {
    id: "guess-the-truth",
    title: "Guess the Truth",
    category: "software",
    description:
      "A console-based logic game built with Python OOP and the random module, including manual test runs to validate game-logic edge cases.",
    tags: ["Python", "OOP"],
    image: "/images/projects/guess-the-truth.webp",
  },
  {
    id: "flappy-bird-clone",
    title: "Flappy Bird Clone",
    category: "software",
    description:
      "A sprite-based Flappy Bird game built with Python and Pygame, featuring collision detection, score tracking, sound effects, and randomized pipe generation.",
    tags: ["Python", "Pygame", "Game Dev"],
  },
  {
    id: "sili-ai-assistant",
    title: "SILI — AI Cybersecurity Assistant",
    category: "ai",
    description:
      "A self-hosted AI security tool that answers questions via live web search, scans code for vulnerabilities like SQL injection and XSS, and runs authorized network scans using real CVE data. Integrates Anthropic Claude, Groq, Serper, and NVD APIs behind a swappable, modular backend, with a custom terminal-style frontend.",
    tags: ["AI", "LLM Integration", "Security"],
    image: "/images/projects/sili-ai-assistant.webp",
    repoUrl: "https://github.com/Shoaib1515/sili-ai-Offensive-Defensive-AI-Security",
  },
  {
    id: "jarvis-voice-assistant",
    title: "Jarvis Voice Assistant",
    category: "ai",
    description:
      "A desktop AI assistant in Python for voice-controlled tasks — opening websites, reading the time aloud, running system commands, and playing music.",
    tags: ["Python", "Speech Recognition"],
    image: "/images/projects/jarvis-voice-assistant.webp",
    repoUrl: "https://github.com/Shoaib1515/Desktop-AI-Assistant-Jarvis",
  },
  {
    id: "cybersecurity-awareness-chatbot",
    title: "Cybersecurity Awareness Website with Chatbot",
    category: "ai",
    description:
      "A cybersecurity awareness platform with an interactive chatbot that educates users about phishing, malware, ransomware, and cyber hygiene.",
    tags: ["Chatbot", "Security Awareness"],
    image: "/images/projects/cybersecurity-awareness-chatbot.webp",
  },
  {
    id: "secure-password-toolkit",
    title: "Secure Password Toolkit",
    category: "security",
    description:
      "A local-first credential manager (Python/Tkinter) with salted PBKDF2-HMAC-SHA256 key derivation (200,000 iterations), encrypted per-entry storage, brute-force lockout, a real-time strength meter, and a formal threat model and security assessment report.",
    tags: ["Python", "Cryptography", "Threat Modeling"],
    image: "/images/projects/secure-password-toolkit.webp",
    repoUrl: "https://github.com/Shoaib1515/password-toolkit",
  },
  {
    id: "wazuh-siem-deployment",
    title: "Wazuh SIEM Deployment and Log Analysis",
    category: "security",
    description:
      "Deployed Wazuh SIEM for real-time security monitoring — configured agents, analyzed logs, detected suspicious activity, and generated security alerts.",
    tags: ["SIEM", "Wazuh", "Log Analysis"],
    image: "/images/projects/wazuh-siem-deployment.webp",
  },
  {
    id: "cowrie-honeypot",
    title: "Honeypot Deployment Using Cowrie",
    category: "security",
    description:
      "Implemented an SSH/Telnet honeypot to capture attacker behavior, logging login attempts and analyzing attack patterns.",
    tags: ["Honeypot", "Threat Intelligence"],
    image: "/images/projects/cowrie-honeypot.webp",
  },
  {
    id: "social-engineering-simulation",
    title: "Social Engineering Simulation (SET)",
    category: "security",
    description:
      "Simulated phishing attacks using the Social Engineer Toolkit in a controlled lab environment to demonstrate credential harvesting techniques.",
    tags: ["Phishing Simulation", "SET"],
    image: "/images/projects/social-engineering-simulation.webp",
  },
];
