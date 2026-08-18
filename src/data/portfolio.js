const homePageData = {
  name: "Md Masum",
  careerTitle:
    "Software Engineer · Machine Learning & Deep Learning Researcher",
  description:
    "I build reliable software and work on machine learning, deep learning, IoT, and networked-system research.",
  currentRole: "Research Assistant",
  organization: "DHMAINetRG · Dhaka",
  publicationText: "2 Publications · 2026",
  github: "https://github.com/masum-mir",
  linkedin: "https://www.linkedin.com/in/md-masum-mir/",
};

const skills = {
  data: [
    {
      title: "Software Engineering",
      fileName: "FullStackImg",
      skills: [
        "Build full-stack applications with React.js and Spring Boot.",
        "Design REST APIs, authentication flows, and database-backed systems.",
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
        "Use Docker, Git, GitHub, and Linux for development and deployment workflows.",
        "Configure and troubleshoot applications across local and containerized environments.",
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
        "Prepare data, train models, and evaluate machine learning experiments using Python.",
        "Apply machine learning and deep learning to IoT and networked-system research.",
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
        "Studying Computer Science and Engineering with a focus on software engineering, machine learning, and research.",
        "Combining academic coursework with practical projects and research activities.",
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
      name: "Oppzy",
      createdAt: "2026",
      url: "https://github.com/masum-mir/Oppzy",
      description:
        "A full-stack internship and research matching platform with role-based dashboards, JWT authentication, profile-based matching, application management, and Dockerized deployment.",
      category: "Software Engineering",
      isFork: false,
      languages: [
        { name: "React.js", iconifyClass: "logos-react" },
        { name: "Spring Boot", iconifyClass: "simple-icons:springboot" },
        { name: "MySQL", iconifyClass: "logos-mysql" },
        { name: "Docker", iconifyClass: "logos-docker-icon" },
      ],
    },
    {
      id: "2",
      name: "CQI",
      createdAt: "2026",
      url: "https://github.com/masum-mir/CQI",
      description:
        "A Continuous Quality Improvement platform for managing academic course files, faculty workflows, document submissions, reviews, and administrative processes.",
      category: "Software Engineering",
      isFork: false,
      languages: [
        { name: "React.js", iconifyClass: "logos-react" },
        { name: "Django REST", iconifyClass: "logos-django-icon" },
        { name: "MongoDB", iconifyClass: "logos-mongodb-icon" },
        { name: "Docker", iconifyClass: "logos-docker-icon" },
      ],
    },
    {
      id: "3",
      name: "Mess Management System",
      createdAt: "2026",
      url: "https://github.com/masum-mir/mess-management-system",
      description:
        "A web-based mess management application designed to organize day-to-day management activities and simplify common administrative workflows.",
      category: "Software Engineering",
      isFork: false,
      languages: [
        { name: "HTML5", iconifyClass: "logos-html-5" },
        { name: "CSS3", iconifyClass: "logos-css-3" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
      ],
    },
    // {
    //   id: "4",
    //   name: "To-Do Application",
    //   createdAt: "2025",
    //   url: "https://github.com/masum-mir/TodoApplication",
    //   description:
    //     "A full-stack task management application built with Spring Boot and React.js, supporting practical CRUD workflows and task organization.",
    //   category: "Software Engineering",
    //   isFork: false,
    //   languages: [
    //     { name: "Java", iconifyClass: "logos-java" },
    //     { name: "Spring Boot", iconifyClass: "simple-icons:springboot" },
    //     { name: "React.js", iconifyClass: "logos-react" },
    //   ],
    // },
    {
      id: "5",
      name: "TwoTierDTN",
      createdAt: "2026",
      url: "https://github.com/masum-mir/TwoTierDTN",
      description:
        "A Java-based networking research project focused on delay-tolerant networking, routing, forwarding behaviour, and simulation-based evaluation.",
      category: "Research / Networking",
      isFork: false,
      languages: [
        { name: "Java", iconifyClass: "logos-java" },
        { name: "DTN", iconifyClass: "mdi:access-point-network" },
        { name: "The ONE Simulator", iconifyClass: "mdi:network-outline" },
      ],
    },
    {
      id: "6",
      name: "CCN-DA",
      createdAt: "2026",
      url: "https://github.com/masum-mir/CCN-DA",
      description:
        "A research-oriented Content-Centric Networking project focused on data forwarding, caching, and communication behaviour in CCN environments.",
      category: "Research / Networking",
      isFork: false,
      languages: [
        { name: "Python", iconifyClass: "logos-python" },
        { name: "CCN", iconifyClass: "mdi:lan-connect" },
        { name: "Networking", iconifyClass: "mdi:network" },
      ],
    },
    {
      id: "7",
      name: "Machine Learning Journey",
      createdAt: "2026",
      url: "https://github.com/masum-mir/machine-learning-journey",
      description:
        "A collection of practical machine learning experiments and projects covering data preprocessing, model development, evaluation, and applied learning.",
      category: "AI / Machine Learning",
      isFork: false,
      languages: [
        { name: "Python", iconifyClass: "logos-python" },
        { name: "Jupyter Notebook", iconifyClass: "logos-jupyter" },
        { name: "Scikit-learn", iconifyClass: "simple-icons:scikitlearn" },
      ],
    },
  ],
};

const contactPageData = {
  email: "masummir773@gmail.com",
  phone: "+8801782448900",
  phoneDisplay: "+880 178 244 8900",
  location: "Dhaka, Bangladesh",
  linkedin: "https://www.linkedin.com/in/md-masum-mir/",
  github: "https://github.com/masum-mir",
  facebook: "https://www.facebook.com/md.masum.rr",
};

export {
  homePageData,
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
