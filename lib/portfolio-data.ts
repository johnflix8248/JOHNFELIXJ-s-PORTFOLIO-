export const profile = {
  name: "John Felix J",
  shortName: "JF",
  role: "AI & Data Science Student",
  secondaryRole: "Python & Full-Stack Developer",
  location: "Valasaravakkam, Chennai, Tamil Nadu 600116",
  email: "johnfelixindia86@gmail.com",
  phone: "+91 82482 74672",
  phoneHref: "tel:+918248274672",
  linkedin: "https://www.linkedin.com/in/john-felix-6276b4313",
  linkedinLabel: "linkedin.com/in/john-felix-6276b4313",
  github: "https://github.com/johnflix8248",
  githubLabel: "github.com/johnflix8248",
  cv: "/John_Felix_J_CV.pdf",
  avatar: "/john-felix-avatar.jpg",
  cvPreview: "/john-felix-cv.jpg",
}

export const stats = [
  { value: "2+", label: "Internships" },
  { value: "5", label: "Certifications" },
  { value: "8.34", label: "CGPA · B.Tech" },
]

export const summary = [
  "I'm a third-year Artificial Intelligence & Data Science student at Alpha College of Engineering, Chennai, with strong interests in full-stack development, data analytics and AI-driven solutions.",
  "I have developed skills in Python, full-stack web development and data visualisation tools, and I'm actively expanding into intelligent systems. I enjoy building practical projects that integrate software and data to solve real-world problems.",
  "I actively participate in internships and technical programs to strengthen my problem-solving, teamwork and software engineering skills. My goal is to become a well-rounded engineer — leveraging technology to create impactful, scalable solutions.",
]

export const highlights = [
  {
    title: "Python Full-Stack Intern — Wyntrix Innovations",
    detail: "Hands-on web application development, completed offline in Villupuram.",
  },
  {
    title: "Data Science Intern — Cognifyz Technologies",
    detail: "Data analytics and machine-learning concepts applied to real-world tasks.",
  },
  {
    title: "Specialised training — BCI & Cybersecurity",
    detail: "Brain-Computer Interface signal processing and ethical hacking fundamentals.",
  },
  {
    title: "Industry exposure — Reliance Digital",
    detail: "Former Sales Executive with direct client-facing responsibility.",
  },
  {
    title: "Student Representative — Alpha College",
    detail: "Coordinating class activities and student–faculty communication.",
  },
]

export type TimelineEntry = {
  title: string
  org: string
  kind: string
  date: string
  points: string[]
  tags: string[]
}

export const experience: TimelineEntry[] = [
  {
    title: "Python Full-Stack Intern",
    org: "Wyntrix Innovations (OPC) Pvt. Ltd., Villupuram",
    kind: "Internship · Offline",
    date: "Jun 2026 — Jul 2026",
    points: [
      "Completed a 30-day offline internship with hands-on experience in Python programming, full-stack web development and application development.",
      "Worked on practical tasks while sharpening problem-solving, debugging and software development skills.",
      "Recognised for good performance, professionalism and teamwork throughout the internship.",
    ],
    tags: ["Python", "Full-Stack Web Development", "Application Development"],
  },
  {
    title: "Data Science Intern",
    org: "Cognifyz Technologies, Chennai",
    kind: "Internship",
    date: "Nov 2025 — Dec 2025",
    points: [
      "Completed a Data Science internship working on real-world data science tasks and projects.",
      "Gained hands-on experience in data analysis, problem-solving and the application of core ML and data concepts.",
      "Strengthened analytical thinking, communication and teamwork through practical collaboration.",
    ],
    tags: ["Data Analysis", "Machine Learning Basics", "Python"],
  },
  {
    title: "Sales Executive",
    org: "Reliance Digital, Chennai",
    kind: "Full-time",
    date: "Apr 2024 — Jul 2024",
    points: [
      "Drove revenue growth through effective client engagement, strategic product presentation and relationship building.",
      "Focused on customer satisfaction, consistently exceeding sales targets and enhancing brand loyalty.",
      "Developed and maintained internal and external communication channels, including website content, emails and newsletters.",
    ],
    tags: ["Sales Management", "Client Engagement", "Communication"],
  },
]

export const education: TimelineEntry[] = [
  {
    title: "B.Tech — Artificial Intelligence & Data Science",
    org: "Alpha College of Engineering, Chennai",
    kind: "Full-time",
    date: "2024 — 2028 · Expected",
    points: [
      "Currently in the 3rd year with a CGPA of 8.34.",
      "Active Student Representative — coordinating class activities and bridging students and faculty.",
    ],
    tags: ["Artificial Intelligence", "Data Science", "CGPA 8.34"],
  },
  {
    title: "Higher Secondary (12th)",
    org: "Holy Cross Matriculation Higher Secondary School, Chennai",
    kind: "English Medium",
    date: "Passed 2024",
    points: ["Completed Class 12 with 68.3%, building a strong foundation in Mathematics and Science."],
    tags: ["Mathematics", "Science"],
  },
]

export const skillGroups = [
  {
    title: "Programming & Data",
    icon: "code" as const,
    items: ["Python", "Data Analysis", "Data Visualization", "Program Development", "Machine Learning (Basics)"],
  },
  {
    title: "Web & Design",
    icon: "layers" as const,
    items: ["Full-Stack Web Development", "Web Design", "HTML / CSS / JS", "Adobe Photoshop"],
  },
  {
    title: "Professional",
    icon: "users" as const,
    items: [
      "Problem Solving",
      "Analytical Thinking",
      "Teamwork",
      "Communication",
      "Microsoft Office",
      "Sales & Client Management",
    ],
  },
]

export const proficiency = [
  { label: "Python", value: 88 },
  { label: "Web Development", value: 78 },
  { label: "Data Analysis & Visualization", value: 80 },
  { label: "Problem Solving", value: 85 },
]

export const projects = [
  {
    title: "Full-Stack Web Application",
    body: "Built and shipped practical web applications during a 30-day Python full-stack internship at Wyntrix Innovations — covering the complete stack from backend logic in Python to interactive front-end features.",
    meta: "Wyntrix Innovations · 2026",
    icon: "terminal" as const,
  },
  {
    title: "Data Analytics & ML Projects",
    body: "Worked on real-world data science tasks at Cognifyz Technologies — cleaning, analysing and visualising datasets, then applying core machine-learning concepts to extract meaningful insights.",
    meta: "Cognifyz Technologies · 2025",
    icon: "chart" as const,
  },
  {
    title: "BCI & Neural Data Exploration",
    body: "Trained in Brain-Computer Interface technology — EEG signal processing, neural data analysis and AI applications in human–machine interaction through Pantech.ai & Warriorsway.",
    meta: "Pantech.ai · 2024",
    icon: "brain" as const,
  },
]

export const certifications = [
  {
    title: "Python Full-Stack Internship Completion",
    issuer: "Wyntrix Innovations (OPC) Pvt. Ltd.",
    date: "Jul 2026",
  },
  {
    title: "Data Science Internship Completion",
    issuer: "Cognifyz Technologies",
    date: "Dec 2025",
  },
  {
    title: "Cyber Security MasterClass",
    issuer: "NoviTech R&D Pvt. Ltd.",
    date: "Nov 2025",
  },
  {
    title: "BootCamp in Full-Stack Development",
    issuer: "NoviTech R&D Pvt. Ltd.",
    date: "Nov 2024",
  },
  {
    title: "BCI Course — Brain-Computer Interface",
    issuer: "Pantech.ai & Warriorsway",
    date: "Oct 2024",
  },
]

export const languages = [
  { name: "Tamil", level: "Native speaker", dots: 5 },
  { name: "English", level: "Intermediate", dots: 3 },
]

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
]
