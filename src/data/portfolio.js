const skills = {
  data: [
    {
      title: "Software Engineering",
      fileName: "FullStackImg",
      skills: [
        "Build full-stack applications with React.js and Spring Boot.",
        "Design maintainable REST APIs and secure authentication flows.",
        "Work with relational databases, Git, Docker, and Linux-based development workflows.",
        "Focus on clean code, debugging, performance, and practical problem solving.",
      ],
      softwareSkills: [
        { skillName: "Java", fontAwesomeClassname: "logos-java", style: { color: "#007396" } },
        { skillName: "Spring Boot", fontAwesomeClassname: "simple-icons:springboot", style: { color: "#6DB33F" } },
        { skillName: "React.js", fontAwesomeClassname: "simple-icons:react", style: { color: "#149ECA" } },
        { skillName: "JavaScript", fontAwesomeClassname: "simple-icons:javascript", style: { color: "#D6B600" } },
        { skillName: "HTML5", fontAwesomeClassname: "simple-icons:html5", style: { color: "#E34F26" } },
        { skillName: "CSS3", fontAwesomeClassname: "simple-icons:css3", style: { color: "#1572B6" } },
        { skillName: "MySQL", fontAwesomeClassname: "simple-icons:mysql", style: { color: "#4479A1" } },
        { skillName: "Git", fontAwesomeClassname: "simple-icons:git", style: { color: "#F05032" } },
      ],
    },
    {
      title: "Engineering Tools & Deployment",
      fileName: "CloudInfraImg",
      skills: [
        "Use Docker to create reproducible development and deployment environments.",
        "Manage source control, collaboration, and release workflows with Git and GitHub.",
        "Work with MySQL and application configuration across local and hosted environments.",
        "Develop and troubleshoot applications in Linux-based environments.",
      ],
      softwareSkills: [
        { skillName: "Docker", fontAwesomeClassname: "simple-icons:docker", style: { color: "#1488C6" } },
        { skillName: "GitHub", fontAwesomeClassname: "simple-icons:github", style: { color: "#181717" } },
        { skillName: "Linux", fontAwesomeClassname: "simple-icons:linux", style: { color: "#111827" } },
        { skillName: "REST API", fontAwesomeClassname: "mdi:api", style: { color: "#2563EB" } },
      ],
    },
  ],
};

const mlResearch = {
  data: [
    {
      title: "Deep Learning & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "Prepare, analyze, and visualize structured datasets for machine learning experiments.",
        "Train and evaluate predictive models using reproducible experimental workflows.",
        "Use Python, NumPy, Pandas, Scikit-learn, and Matplotlib for data-driven problem solving.",
        "Apply deep learning and machine learning methods to IoT, networked systems, edge intelligence, and research problems.",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "logos-python", style: { color: "#3776AB" } },
        { skillName: "NumPy", fontAwesomeClassname: "simple-icons:numpy", style: { color: "#013243" } },
        { skillName: "Pandas", fontAwesomeClassname: "simple-icons:pandas", style: { color: "#150458" } },
        { skillName: "Matplotlib", fontAwesomeClassname: "simple-icons:python", style: { color: "#11557C" } },
        { skillName: "Scikit-learn", fontAwesomeClassname: "simple-icons:scikitlearn", style: { color: "#F7931E" } },
      ],
    },
  ],
};

const competitiveSites = { competitiveSites: [] };

const degrees = {
  degrees: [
    {
      title: "East West University",
      subtitle: "BSc in Computer Science and Engineering",
      logo_path: "ewu-logo.png",
      alt_name: "East West University",
      duration: "2023 – Present",
      descriptions: [
        "Studying Computer Science and Engineering with growing focus on deep learning and machine learning.",
        "Combining academic coursework with software engineering projects and research activities.",
        "Participating in technical workshops, seminars, and collaborative academic work.",
      ],
      website_link: "https://www.ewubd.edu/",
    },
  ],
};

const certifications = { certifications: [] };

const experience = {
  title: "Experience",
  description:
    "Software engineering experience complemented by active research in IoT, Future Internet, edge intelligence, and information-centric networking.",
  sections: [
    {
      title: "Professional Experience",
      work: true,
      experiences: [
        {
          title: "Research Assistant",
          company: "DHMAINetRG",
          company_url: "https://dhmairg.net",
          logo_path: "dhmairg-logo.png",
          duration: "Jan 2026 – Present",
          location: "Dhaka, Bangladesh",
          description:
            "Contribute to research on Future Internet, IoT, opportunistic networking, and information-centric networking. Support experiments through simulation tooling, automation scripts, software development, analysis, and research dissemination.",
          color: "#2563EB",
        },
        {
          title: "Junior Software Engineer",
          company: "Pridesys IT Ltd.",
          company_url: "https://pridesys.com/",
          logo_path: "pridesys-it-ltd-logo.png",
          duration: "Oct 2022 – Dec 2023",
          location: "Dhaka, Bangladesh",
          description:
            "Developed and optimized backend services using Java and Spring Boot, built RESTful APIs, implemented secure authentication, and worked on maintainable production application code.",
          color: "#0F172A",
        },
        {
          title: "Junior Software Engineer Intern",
          company: "Pridesys IT Ltd.",
          company_url: "https://pridesys.com/",
          logo_path: "pridesys-it-ltd-logo.png",
          duration: "Jul 2022 – Sep 2022",
          location: "Dhaka, Bangladesh",
          description:
            "Assisted with Java and Spring Boot backend development, server-side logic, debugging, and collaborative software delivery workflows.",
          color: "#0F172A",
        },
      ],
    },
  ],
};

const publications = {
  data: [
    {
      id: "stgen-2026",
      year: "2026",
      type: "Journal Article",
      name: "STGen: A Lightweight Process-Based Testbed for Scalable IoT Protocol Evaluation with Physically Validated Synthetic Sensor and Anomaly Generation",
      authors:
        "Islam, Hasan M. A., Md M. R. Maharaz, M. Georgiades, S. M. N. Shahriar, P. Akibuzzaman, N. R. Aurna, Md Masum, and Riadul Islam",
      venue: "Journal of Sensor and Actuator Networks 15, no. 4: 63",
      createdAt: "2026",
      description:
        "A process-based IoT testbed for scalable protocol evaluation using physically validated synthetic sensor data and anomaly generation.",
      url: "https://www.mdpi.com/2224-2708/15/4/63",
    },
    {
      id: "priotp-2026",
      year: "2026",
      type: "Conference Paper",
      name: "PRIoTP: Towards Context-Aware Partial Reliable Application-Layer IoT Protocol with Edge Intelligence",
      authors:
        "Md MR Maharaz, MI Ohi, MAU Zaman, A Sajid, Sadia FI, P Akibuzzaman, Md Masum, SMN Shahriar, NR Aurna, Hasan MA Islam, and Michael Georgiades",
      venue:
        "The 22nd Annual International Conference on Distributed Computing in Smart Systems and the Internet of Things (DCOSS-IoT 2026)",
      createdAt: "2026",
      description:
        "Research on a context-aware, partially reliable application-layer IoT protocol supported by edge intelligence.",
      url: "",
    },
  ],
};

const ProjectsData = {
  data: [
    {
      id: "1",
      name: "TrinityByte IT Website",
      createdAt: "Apr 19, 2025",
      url: "https://github.com/masum-mir/trinitybyte",
      description:
        "Responsive IT company website built with React.js and Tailwind CSS, with modern layouts and interactive UI components.",
      category: "Frontend",
      isFork: false,
      languages: [
        { name: "React.js", iconifyClass: "logos-react" },
        { name: "Tailwind CSS", iconifyClass: "logos-tailwindcss-icon" },
      ],
    },
    {
      id: "2",
      name: "To-Do Application",
      createdAt: "Jan 19, 2025",
      url: "https://github.com/masum-mir/TodoApplication",
      description:
        "Full-stack task management application with Spring Boot and React.js supporting practical CRUD workflows.",
      category: "Full Stack",
      isFork: false,
      languages: [
        { name: "Java", iconifyClass: "logos-java" },
        { name: "Spring Boot", iconifyClass: "simple-icons:springboot" },
        { name: "React.js", iconifyClass: "logos-react" },
      ],
    },
    {
      id: "3",
      name: "Developer Portfolio",
      createdAt: "2026 Refresh",
      url: "https://github.com/masum-mir/portfolio",
      description:
        "Personal portfolio focused on software engineering, deep learning, machine learning, and research experience.",
      category: "Frontend",
      isFork: false,
      languages: [
        { name: "React.js", iconifyClass: "logos-react" },
        { name: "SCSS", iconifyClass: "logos-sass" },
      ],
    },
    {
      id: "4",
      name: "Contract Manager",
      createdAt: "Jun 11, 2024",
      url: "https://github.com/masum-mir/ContractManager",
      description:
        "Spring Boot application for managing contracts, clients, and records through structured REST-based workflows.",
      category: "Backend",
      isFork: false,
      languages: [
        { name: "Java", iconifyClass: "logos-java" },
        { name: "Spring Boot", iconifyClass: "simple-icons:springboot" },
        { name: "MySQL", iconifyClass: "logos-mysql" },
      ],
    },
    {
      id: "5",
      name: "Chat Engine",
      createdAt: "May 13, 2024",
      url: "https://github.com/masum-mir/ChatEngine",
      description:
        "Java socket-based terminal chat application supporting real-time communication between multiple users.",
      category: "Systems",
      isFork: false,
      languages: [{ name: "Java", iconifyClass: "logos-java" }],
    },
    {
      id: "6",
      name: "Library Management System",
      createdAt: "Dec 2, 2023",
      url: "https://github.com/masum-mir/library_management_system",
      description:
        "Library management system built with Java Spring MVC and Thymeleaf for books, members, and loan workflows.",
      category: "Web App",
      isFork: false,
      languages: [
        { name: "Java", iconifyClass: "logos-java" },
        { name: "Spring MVC", iconifyClass: "simple-icons:spring" },
        { name: "Thymeleaf", iconifyClass: "simple-icons:thymeleaf" },
      ],
    },
  ],
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "Open to software engineering, deep learning, machine learning, and research opportunities.",
  },
};

export {
  skills,
  mlResearch,
  competitiveSites,
  degrees,
  ProjectsData,
  publications,
  certifications,
  experience,
  contactPageData,
};
