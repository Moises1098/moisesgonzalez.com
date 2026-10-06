type Degree = {
  name: string;
  emphasis?: string;
  details: string[];
};

type Education = {
  school: string;
  url: string;
  date: string;
  schoolDetails?: string[];
  degrees: Degree[];
  academicCredentials?: string[];
};

export const education: Education[] = [
  {
    school: "University of California, San Diego",
    url: "https://ucsd.edu/",
    date: "June 2026",
    schoolDetails: [
      "Chancellor's Associates Scholars Program — Scholarship Recipient",
    ],
    degrees: [
      {
        name: "Bachelor of Science in General Biology",
        details: [],
      },
    ],
  },

  {
    school: "Southwestern College",
    url: "https://www.swccd.edu/",
    date: "December 2023",
    schoolDetails: [
      "NSF Mentored Pathways Scholarship — Scholarship Recipient",
    ],
    degrees: [
      {
        name: "Associate of Science in Biology",
        details: [],
      },
    ],
  },

  {
    school: "Southwestern College",
    url: "https://www.swccd.edu/",
    date: "May 2023",
    schoolDetails: [
      "NSF Mentored Pathways Scholarship — Scholarship Recipient",
    ],
    degrees: [
      {
        name: "Associate of Arts in French",
        details: [],
      },
      {
        name: "Associate of Arts in Communication",
        details: [],
      },
      {
        name: "Associate of Arts in Liberal Arts",
        emphasis: "Math and Science",
        details: [],
      },
      {
        name: "Associate of Arts in Liberal Arts",
        emphasis: "Social and Behavioral Sciences",
        details: [],
      },
    ],
    academicCredentials: [
      "Intersegmental General Education Transfer Curriculum (IGETC) Certification",
    ],
  },
];

export const experience = [
  {
    role: "Hospital Volunteer — Patient & Staff Support",
    organization: "UC San Diego Health · Hillcrest Medical Center",
    date: "July 2024 — April 2025",
    url: "https://health.ucsd.edu/",
    bullets: [
      "Provided support and companionship to patients while developing strong interpersonal and communication skills.",
      "Delivered laboratory specimens and helped manage, organize, and maintain medical supplies.",
      "Responded to patient needs through call bell phones while prioritizing multiple responsibilities.",
      "Helped maintain clean and safe patient rooms and common areas.",
    ],
  },
  {
  role: "Undergraduate Lab Researcher Trainee",
  organization:
    "UC San Diego School of Medicine · Initiative for Maximizing",
  organizationEnd: "Student Development",
  date: "May 2022 — December 2022",
  url: "https://medschool.ucsd.edu/",
  bullets: [
    "Participated in undergraduate biomedical research training and mentorship.",
    "Performed BCA assays to quantify protein in biological samples.",
    "Produced and collected PCR trial results.",
    "Developed experience with Western blotting and gel electrophoresis.",
  ],
},
];

export const certifications = [
  {
    name: "Certified EKG Technician (CET)",
    organization: "National Healthcareer Association (NHA)",
    date: "August 2026",
    expires: "August 2028",
    url: "https://www.nhanow.com/certification/nha-certifications/certified-ekg-technician-(cet)",
    description:
      "National certification demonstrating the knowledge and skills required for entry-level EKG technician practice, including performing electrocardiograms and preparing patients for cardiac monitoring.",
  },
  {
    name: "Basic Life Support (BLS)",
    organization: "American Heart Association",
    date: "January 2025",
    expires: "January 2027",
    url: "https://cpr.heart.org/en/courses/basic-life-support-course-options",
    description:
      "Healthcare-focused training in high-quality CPR, recognition of life-threatening emergencies, effective ventilations, AED use, and team-based resuscitation.",
  },
  {
    name: "Certificate in Web Development Bootcamp",
    organization: "UC San Diego Extended Studies (formerly UCSD Extension)",
    date: "May 2022",
    expires: null,
    url: "https://extendedstudies.ucsd.edu/news-events/press-releases/coding-boot-camp-to-launch-at-uc-san-diego-extension",
    description:
      "Intensive full-stack web development program covering front-end and back-end technologies, including HTML, CSS, JavaScript, Node.js, databases, and MongoDB, with hands-on projects designed to build a professional development portfolio.",
  },
  {
    name: "LEADR Program",
    organization: "Scripps Research",
    date: "April 2022",
    expires: null,
    url: "https://education.scripps.edu/",
    description:
      "Biomedical research program for community college students combining scientific literature, laboratory experience, critical thinking, and science communication while connecting participants with research scientists.",
  },
];

export const technicalSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Bootstrap",
  "Tailwind CSS",
  "MongoDB",
  "MySQL",
  "Supabase",
  "Git",
  "GitHub",
  "R",
  "Python",
  "Microsoft Office",
  "Google Workspace",
];

export const laboratorySkills = [
  "PCR",
  "Gel Electrophoresis",
  "Western Blotting",
  "BCA Assay",
  "CRISPR Techniques",
  "HDR Template Planning",
  "Distillation",
  "TLC",
  "Biochemistry Laboratory Techniques",
  "Organic Chemistry Laboratory Techniques",
];

export const languages = [
  "English — Fluent",
  "Spanish — Fluent",
  "French — Proficient",
  "American Sign Language — Basic",
];