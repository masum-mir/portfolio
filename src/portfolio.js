//  Professional Skills
const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        " Building full-stack web apps using React.js and Spring Boot.",
        " Creating responsive UIs with HTML, CSS, and JavaScript using REST APIs.",
        " Implementing secure authentication with JWT and Spring Security.",
        " Writing clean, reusable, and maintainable code following best practices.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: { color: "#007396" },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: { color: "#6DB33F" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E" },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
      ],
    },
    {
      title: "Cloud & Deployment",
      fileName: "CloudInfraImg",
      skills: [
        " Deploying full-stack applications on cloud platforms.",
        " Using Docker for containerized development and deployment.",
        " Managing MySQL and cloud databases securely.",
        " Version control and deployment using GitHub.",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: { color: "#181717" },
        },
        // {
        //   skillName: "Render / Vercel",
        //   fontAwesomeClassname: "simple-icons:vercel",
        //   style: { color: "#000000" },
        // },
      ],
    },
  ],
};

//  Currently Learning
const learning = {
  data: [
    {
      title: "Data Science & ML",
      fileName: "DataScienceImg",
      skills: [
        " Learning data preprocessing, analysis, and visualization basics.",
        " Training and evaluating machine learning models.",
        " Working with real-world data using Pandas and NumPy.",
        " Implementing ML algorithms with Scikit-Learn.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { color: "#013243" },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { color: "#150458" },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "simple-icons:matplotlib",
          style: { color: "#11557C" },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "#",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "#",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "#",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "#",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "#",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "East West University",
      subtitle: "BSc in Computer Science and Engineering",
      logo_path: "ewu-logo.png",
      alt_name: "East West University",
      duration: "2023 - running",
      descriptions: [
      " Studying core CSE subjects with focus on AI, and  ML.",
      " Worked as a research assistant on academic projects.",
      " Actively participating in technical workshops, seminars, and academic events.",   
      ],
      website_link: "https://www.ewubd.edu/",
    },
  ],
};
const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    }, 
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  
  description:
    "Experience in backend development using Java and Spring Boot, working on scalable APIs, secure systems, and production-ready applications.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Junior Software Engineer",
          company: "Pridesys It Ltd.",
          company_url: "https://pridesys.com/",
          logo_path: "pridesys-it-ltd-logo.png",
          duration: "Oct 2022 - Dec 2023",
          location: "Dhaka, Bangladesh",
          description:
            "Developed and optimized backend services using Java and Spring Boot, built RESTful APIs, implemented secure authentication, and improved application performance.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Junior Software Engineer Intern",
          company: "Pridesys It Ltd.",
          company_url: "https://pridesys.com/",
          logo_path: "pridesys-it-ltd-logo.png",
          duration: "July 2022 - Sep 2022",
          location: "Dhaka, Bangladesh",
          description:
            "Assisted in backend development with Java and Spring Boot, worked on server-side logic, and gained hands-on experience in collaborative software development.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

const publications = {
  data: [
    // {
    // id: "consistency-models",
    // name: "Consistency Models",
    // createdAt: "2023-10-12T00:00:00Z",
    // description: "Blog published in Paperspace",
    // url: "#",
    // },
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
        "A modern IT company website built with React.js and Tailwind CSS, featuring responsive design and smooth animations.",
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
        "A full-stack task management application built with Spring Boot and React.js for efficient CRUD operations.",
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
      createdAt: "Dec 31, 2024",
      url: "https://github.com/masum-mir/masum-portfolio",
      description:
        " A fully customizable software developer portfolio showcasing projects, experience, and skills with React.js.",
      isFork: false,
      languages: [
        { name: "React.js", iconifyClass: "logos-react" },
        { name: "HTML5", iconifyClass: "logos-html-5" },
        { name: "CSS3", iconifyClass: "logos-css-3" },
      ],
    },
    {
      id: "4",
      name: "Contract Manager",
      createdAt: "Jun 11, 2024",
      url: "https://github.com/masum-mir/ContractManager",
      description:
        "A Spring Boot-based system to manage contracts, clients, and records efficiently with secure REST APIs.",
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
        "A console-based Java chat application supporting multiple users via socket programming. Users can send and receive messages in real-time in the terminal.",
      isFork: false,
      languages: [{ name: "Java", iconifyClass: "logos-java" }],
    },
    {
      id: "6",
      name: "Library Management System",
      createdAt: "Dec 2, 2023",
      url: "https://github.com/masum-mir/library_management_system",
      description:
        "A library management system built with Java Spring MVC and Thymeleaf for managing books, members, and loans.",
      isFork: false,
      languages: [
        { name: "Java", iconifyClass: "logos-java" },
        { name: "Spring MVC", iconifyClass: "simple-icons:spring" },
        { name: "Thymeleaf", iconifyClass: "simple-icons:thymeleaf" },
      ],
    },
  ],
};

export {
  skills,
  learning,
  competitiveSites,
  degrees,
  ProjectsData,
  publications,
  certifications,
  experience,
  contactPageData,
};
