import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Sai Teja Janagani",
    "title": "Java Developer",
    "email": "saitejajanagani0808@gmail.com",
    "phone": "+91-9908364195",
    "linkedin": "",
    "github": "",
    "location": "Hyderabad, Telangana, India",
    "summary": "Motivated Java Developer with a strong foundation in Core Java, Oracle Database, and web technologies. Proficient in building scalable applications with expertise in OOP principles, software development lifecycle, and debugging. Eager to contribute to enterprise-grade applications and grow in full-stack development with excellent collaboration skills and a proactive learning mindset."
  },
  "experience": [],
  "education": [
    {
      "degree": "Bachelor of Technology in Computer Science",
      "institution": "Auroras Technological and Research Institute (ATRI) Hyderabad, India",
      "years": "Oct. 2022 – June 2025",
      "gpa": ""
    },
    {
      "degree": "Diploma in Production Engineering",
      "institution": "Central Institute of Tool Design India",
      "years": "Aug. 2018 – June 2021",
      "gpa": ""
    }
  ],
  "skills": {
    "Backend": [
      "Java",
      "Core Java",
      "OOP"
    ],
    "Database": [
      "MySQL",
      "SQL",
      "Oracle Database"
    ],
    "Frontend": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "Web Development": [
      "Responsive Design",
      "Web Accessibility",
      "Cross-browser Compatibility"
    ],
    "Software Engineering": [
      "SDLC",
      "Debugging",
      "Testing",
      "Database Design"
    ]
  },
  "projects": [
    {
      "name": "Interview Insight Hub",
      "description": "Developed a comprehensive interview preparation platform using Core Java and MySQL database that provides freshers with centralized access to interview resources, mock tests, and previous year questions. Implemented a robust backend architecture, designed intuitive frontend, and conducted comprehensive testing.",
      "technologies": [
        "Java",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "Web-Based Sports Arena Booking Hub",
      "description": "Designed and implemented a normalized database schema in MySQL and developed a Java-based application layer for seamless database interactions, ensuring data integrity and efficient slot management.",
      "technologies": [
        "MySQL",
        "Java",
        "SQL"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "Responsive Portfolio Website",
      "description": "Designed and developed a fully responsive personal portfolio website employing modern UI/UX principles and mobile-first approach, ensuring cross-browser compatibility and web accessibility.",
      "technologies": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "link": "",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "spotlight",
  "about": "split",
  "experience": "accordion",
  "projects": "featured",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "modern",
  "colorPalette": "cyan"
};
