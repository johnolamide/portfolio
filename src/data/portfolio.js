// Portfolio Data - Replace with actual information from GitHub profile
export const personalInfo = {
  name: "John Olamide",
  title: "Software Engineer",
  tagline: "Building exceptional digital experiences with modern technologies",
  bio: "I'm a passionate full-stack developer with 5+ years of experience creating scalable web applications. I specialize in React, Python, Generative AI, and cloud technologies, with a focus on clean code and user-centered design.",
  location: "Lagos, Nigeria",
  email: "olamide.alokan@gmail.com",
  phone: "+234 810 123 4567",
  profileImage: "/images/profile.jpg", // Replace with actual profile image
  resume: "/resume.pdf",
  socialLinks: {
    github: "https://github.com/johnolamide",
    linkedin: "https://linkedin.com/in/johnolamide",
    twitter: "https://twitter.com/johnolamide22",
    portfolio: "https://johnolamide.com"
  }
};

export const skills = {
	languages: [
		{ name: "JavaScript", level: 95, icon: "⚡" },
		{ name: "TypeScript", level: 90, icon: "🔷" },
		{ name: "Python", level: 85, icon: "🐍" },
    { name: "Java", level: 50, icon: "☕" },
    {name: "Dart", level: 70, icon: "🎯" },
		{ name: "Go", level: 20, icon: "🐹" },
    { name: "Rust", level: 20, icon: "🦀" },
    { name: "C", level: 65, icon: "💻" },
	],
	frontend: [
		{ name: "React", level: 95, icon: "⚛️" },
		{ name: "Next.js", level: 90, icon: "▲" },
		{ name: "TailwindCSS", level: 95, icon: "🎨" },
		{ name: "SASS/SCSS", level: 90, icon: "💄" },
		{ name: "Material-UI", level: 85, icon: "🎭" },
		{ name: "Shadcn-UI", level: 85, icon: "🎭" }
	],
	backend: [
		{ name: "Node.js", level: 95, icon: "🟢" },
		{ name: "Express.js", level: 90, icon: "🚀" },
		{ name: "Django", level: 85, icon: "🎯" },
    { name: "FastAPI", level: 80, icon: "⚡" },
    { name: "FastMCP", level: 80, icon: "⚡" },
		{ name: "GraphQL", level: 85, icon: "📊" },
		{ name: "REST APIs", level: 95, icon: "🔌" },
	],
	databases: [
		{ name: "MongoDB", level: 90, icon: "🍃" },
		{ name: "PostgreSQL", level: 85, icon: "🐘" },
		{ name: "Redis", level: 80, icon: "🔴" },
    { name: "Firebase", level: 85, icon: "🔥" },
    { name: "DynamoDB", level: 80, icon: "⚡" },
    { name: "SQLite", level: 75, icon: "📚" },
		{ name: "MySQL", level: 80, icon: "🗄️" },
	],
	tools: [
		{ name: "Git & GitHub", level: 95, icon: "🐙" },
		{ name: "Docker", level: 85, icon: "🐳" },
		{ name: "AWS", level: 80, icon: "☁️" },
		{ name: "Vercel", level: 90, icon: "🔺" },
		{ name: "Figma", level: 85, icon: "🎨" },
		{ name: "VS Code", level: 95, icon: "💻" },
	],
};

// Sample projects - Replace with latest 10 projects from GitHub
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing with Stripe, real-time inventory management, and admin dashboard.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux", "Material-UI"],
    category: "Full Stack",
    demoUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/johnolamide/ecommerce-platform",
    featured: true,
    status: "Completed",
    year: "2024"
  },
  {
    id: 2,
    title: "Task Management SaaS",
    description: "A comprehensive task management application with team collaboration features, real-time updates, drag-and-drop functionality, and advanced reporting capabilities.",
    image: "/images/projects/taskmanager.jpg",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Socket.io"],
    category: "SaaS",
    demoUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/johnolamide/task-manager-saas",
    featured: true,
    status: "Completed",
    year: "2024"
  },
  {
    id: 3,
    title: "AI-Powered Chat Application",
    description: "Real-time chat application with AI integration, voice messages, file sharing, and smart conversation analytics using OpenAI API.",
    image: "/images/projects/aichat.jpg",
    technologies: ["React", "Node.js", "Socket.io", "OpenAI API", "MongoDB", "AWS S3"],
    category: "AI/ML",
    demoUrl: "https://aichat-demo.com",
    githubUrl: "https://github.com/johnolamide/ai-chat-app",
    featured: true,
    status: "Completed",
    year: "2024"
  },
  {
    id: 4,
    title: "Cryptocurrency Dashboard",
    description: "Real-time cryptocurrency tracking dashboard with portfolio management, price alerts, advanced charting, and market analysis tools.",
    image: "/images/projects/cryptodash.jpg",
    technologies: ["Vue.js", "Node.js", "Chart.js", "CoinGecko API", "WebSocket", "Vuetify"],
    category: "FinTech",
    demoUrl: "https://cryptodash-demo.com",
    githubUrl: "https://github.com/johnolamide/crypto-dashboard",
    featured: false,
    status: "Completed",
    year: "2023"
  },
  {
    id: 5,
    title: "Social Media Analytics Tool",
    description: "Comprehensive social media analytics platform with multi-platform integration, automated reporting, and performance insights.",
    image: "/images/projects/socialanalytics.jpg",
    technologies: ["React", "Python", "Django", "Celery", "Redis", "Chart.js"],
    category: "Analytics",
    demoUrl: "https://socialanalytics-demo.com",
    githubUrl: "https://github.com/johnolamide/social-media-analytics",
    featured: false,
    status: "Completed",
    year: "2023"
  },
  {
    id: 6,
    title: "Inventory Management System",
    description: "Advanced inventory management system with barcode scanning, automated reordering, supplier management, and detailed reporting.",
    image: "/images/projects/inventory.jpg",
    technologies: ["Angular", "Node.js", "MySQL", "Express", "JWT", "Bootstrap"],
    category: "Enterprise",
    demoUrl: "https://inventory-demo.com",
    githubUrl: "https://github.com/johnolamide/inventory-management",
    featured: false,
    status: "Completed",
    year: "2023"
  },
  {
    id: 7,
    title: "Weather Forecast App",
    description: "Beautiful weather application with 7-day forecasts, severe weather alerts, location-based services, and interactive maps.",
    image: "/images/projects/weather.jpg",
    technologies: ["React Native", "Expo", "OpenWeather API", "Maps API", "AsyncStorage"],
    category: "Mobile",
    demoUrl: "https://weather-demo.com",
    githubUrl: "https://github.com/johnolamide/weather-forecast-app",
    featured: false,
    status: "Completed",
    year: "2023"
  },
  {
    id: 8,
    title: "Blog CMS Platform",
    description: "Modern content management system with markdown support, SEO optimization, multi-author support, and custom themes.",
    image: "/images/projects/blogcms.jpg",
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel", "TypeScript"],
    category: "CMS",
    demoUrl: "https://blogcms-demo.com",
    githubUrl: "https://github.com/johnolamide/blog-cms-platform",
    featured: false,
    status: "Completed",
    year: "2022"
  },
  {
    id: 9,
    title: "Learning Management System",
    description: "Comprehensive LMS with course creation tools, video streaming, progress tracking, assignments, and student analytics.",
    image: "/images/projects/lms.jpg",
    technologies: ["React", "Node.js", "MongoDB", "AWS S3", "Stripe", "Socket.io"],
    category: "EdTech",
    demoUrl: "https://lms-demo.com",
    githubUrl: "https://github.com/johnolamide/learning-management-system",
    featured: false,
    status: "In Progress",
    year: "2024"
  },
  {
    id: 10,
    title: "Real Estate Platform",
    description: "Full-featured real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.",
    image: "/images/projects/realestate.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Mapbox", "Cloudinary", "Stripe"],
    category: "Real Estate",
    demoUrl: "https://realestate-demo.com",
    githubUrl: "https://github.com/johnolamide/real-estate-platform",
    featured: false,
    status: "In Progress",
    year: "2024"
  }
];

export const experience = [
  {
    id: 1,
    title: "Cloud Engineer",
    company: "Datamellon Limited",
    location: "Lagos, Nigeria",
    period: "2024 - Present",
    description: "Developed a cloud-based data management platform leveraging AWS services. Implemented data pipelines, automated workflows, and integrated machine learning models for data analysis and visualization.",
    technologies: ["AWS", "Python", "DynamoDB", "FastAPI", "Cognito", "S3", "AWS Glue", "AWS Lambda"]
  },
  {
    id: 2,
    title: "Mobile Developer",
    company: "Echo Technologies",
    location: "Remote",
    period: "2025 - Present",
    description: "Developed a cross-platform mobilel application for managing and consolidating essential applications and leveraging AI for synergy. Implemented features such as user authentication, real-time data synchronization, and AI-driven recommendations.",
    technologies: ["Flutter", "Python", "DynamoDB"]
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "BetBounty",
    location: "Remote",
    period: "2025",
    description: "Developed an application for managing sports betting operations, including user authentication, real-time updates, and payment processing. Implemented RESTful APIs and integrated third-party services.",
    technologies: ["React", "Python", "DynamoDB", "Paystack", "REST", "Tailwind CSS", "Shadcn-UI"]
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Rentmase",
    location: "Remote",
    period: "2024",
    description: "Developed a responsive web application for property management hosted on Internet Computer (ICP).",
    technologies: ["JavaScript", "React", "SASS", "Webpack", "Git"]
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Mechatronics Engineering",
    institution: "Federal University Oye Ekiti",
    period: "2015 - 2021",
    gpa: "4.19/5.0",
    relevant: ["Mechatronics System Design", "Control Systems", "Embedded Systems", "Machine Learning", "Robotics"]
  }
];
