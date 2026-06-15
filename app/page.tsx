"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Mail,
  BarChart2,
  Database,
  Brain,
  Code,
  Star,
  Award,
  Zap,
  Terminal,
  Server,
  Monitor,
  Instagram,
  ChevronRight,
  ChevronLeft,
  Download,
} from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContactForm from "@/components/contact-form"
import TypingAnimation from "@/components/typing-animation"
import SocialSidebar from "@/components/social-sidebar"
import CertificatesTimeline from "@/components/certificates-timeline"
import CertificatePreview from "@/components/certificate-preview"
import CodeEditor from "@/components/code-editor"

import SectionTransition from "@/components/section-transition"
import ColorTransition from "@/components/color-transition"
import ParticlesBackground from "@/components/particles-background"
// Update the import section to include the ResumePreview component
import ProjectCard from "@/components/project-card"
import { getImagePath } from "@/lib/utils"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const [direction, setDirection] = useState(0)
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  // Define the order of sections for navigation
  const sectionOrder = ["about", "education", "experience", "skills", "projects", "contact"]

  // Function to navigate to the next or previous section
  const navigateSection = (dir: "next" | "prev") => {
    const currentIndex = sectionOrder.indexOf(activeSection)
    let newIndex

    if (dir === "next") {
      newIndex = (currentIndex + 1) % sectionOrder.length
      setDirection(1)
    } else {
      newIndex = currentIndex === 0 ? sectionOrder.length - 1 : currentIndex - 1
      setDirection(-1)
    }

    setActiveSection(sectionOrder[newIndex])
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        navigateSection("next")
      } else if (e.key === "ArrowLeft") {
        navigateSection("prev")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeSection])

  // Show scroll to top button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Function to handle section change
  const handleSectionChange = (section) => {
    const currentIndex = sectionOrder.indexOf(activeSection)
    const newIndex = sectionOrder.indexOf(section)

    setDirection(newIndex > currentIndex ? 1 : -1)
    setActiveSection(section)
  }

  // Sample project data
  const projects = [
    {
      title: "MA Rank - Multi Agent Resume Screening System",
      description:
        "Built a multi-agent LLM pipeline using LangGraph with 5 specialized agents stored in a Neo4j knowledge graph. Developed a composite scoring algorithm (Precision@10: 0.80) and deployed a recruiter-facing Streamlit dashboard for real-time candidate ranking.",
      image: "/images/ma-rank.png",
      tags: ["Python", "LangGraph", "Neo4j", "NLP", "Streamlit"],
      category: "nlp",
      github: "https://github.com/01Priyanshu",
      demo: "https://github.com/01Priyanshu",
    },
    {
      title: "Urban vs Rural Energy Intensity Analysis",
      description:
        "Merged NREL and USDA datasets to engineer an Energy Intensity Index across Arizona. Built OLS regression models identifying transportation fuel as the dominant driver and generated choropleth maps for actionable EV policy recommendations.",
      image: "/images/energy-intensity.png",
      tags: ["Python", "Pandas", "GeoPandas", "Matplotlib"],
      category: "viz",
      github: "https://github.com/01Priyanshu",
      demo: "https://github.com/01Priyanshu",
    },
    {
      title: "AI-Powered Resume Screening System",
      description:
        "Built an AI-powered resume screening system to automate and rank job applicants based on predefined criteria, improving processing efficiency by 20%.",
      image: "/images/resume-screening.png",
      tags: ["Machine Learning", "Python", "NLP", "AI"],
      category: "ml",
      github: "https://github.com/01Priyanshu/AI-Resume-Screening-and-Ranking-System",
      demo: "https://ai-resume-screening-omega.vercel.app/",
    },
    {
      title: "Diet Recommendation System",
      description:
        "Developed a personalized diet recommendation system using machine learning algorithms to analyze user health profiles and dietary preferences.",
      image: "/images/diet-recommendation.png",
      tags: ["Machine Learning", "Python", "Data Analysis"],
      category: "ml",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Helpmate - Wellness Health Chatbot",
      description:
        "Developed an AI-driven chatbot providing health assistance and personalized wellness recommendations using NLP techniques.",
      image: "/images/helpmate-chatbot.png",
      tags: ["NLP", "AI", "Python", "Chatbot"],
      category: "nlp",
      github: "https://github.com/01Priyanshu/Helpmate-Chatbot",
      demo: "https://helpmate-chatbot.netlify.app/",
    },
    {
      title: "Finance Tracker",
      description:
        "Developed a full-stack web application to track and analyze personal finances using Python, MySQL, and JavaScript.",
      image: "/images/finance-tracker.png",
      tags: ["MERN Stack", "Web Development", "Financial Data"],
      category: "viz",
      github: "https://github.com/01Priyanshu/Finance-Tracker-A-Smart-Personal-Finance-Management-System",
      demo: "https://finance-tracker-dev.vercel.app/",
    },
    {
      title: "OCR Based Food Allergen Detection and Recommendation System",
      description:
        "Designed a system to detect allergens from food labels using OCR and provide safe alternative recommendations.",
      image: "/images/food-allergen.png",
      tags: ["OCR", "Python", "Image Processing", "AI"],
      category: "viz",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Wine Quality Analysis",
      description:
        "Performed exploratory data analysis to identify key factors affecting wine quality from chemical properties.",
      image: "/images/wine-quality.png",
      tags: ["Data Analysis", "Machine Learning", "Python", "EDA"],
      category: "ml",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "E-Commerce Intelligence & Recommendation Platform",
      description:
        "Built an end-to-end ML-powered e-commerce analytics and recommendation system, including automated ETL pipelines, customer insights, and real-time prediction APIs.",
      image: "/images/ecommerce-recommendation.jpg",
      tags: ["Machine Learning", "ETL", "Python", "Recommendation Systems"],
      category: "ml",
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  // Background color transitions
  const backgroundColors = [
    "hsl(222, 47%, 11%)", // Default background
    "hsl(230, 47%, 13%)", // Slightly bluer
    "hsl(240, 47%, 15%)", // More purple
    "hsl(250, 47%, 13%)", // Deep purple
    "hsl(220, 47%, 11%)", // Back to default
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background overflow-hidden">

      {/* Color Transition Background */}
      <ColorTransition colors={backgroundColors} duration={20} />

      {/* Particles Background */}
      <ParticlesBackground />

      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Aurora glow blobs */}
        <div className="aurora-glow" style={{ background: "hsl(0, 84%, 62%)", top: "10%", left: "15%" }} />
        <div className="aurora-glow" style={{ background: "hsl(270, 80%, 60%)", top: "60%", right: "10%", animationDelay: "3s" }} />
        <div className="aurora-glow" style={{ background: "hsl(25, 95%, 55%)", bottom: "20%", left: "40%", animationDelay: "6s" }} />
        <motion.div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,59,48,0.15) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,59,48,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,59,48,0.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-lg shadow-black/20">
        <div className="container flex h-16 items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl group cursor-hover">
              <Terminal className="h-5 w-5 text-primary group-hover:animate-bounce-slow transition-colors" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-gradient bg-size-200">
                Priyanshu Patra
              </span>
            </Link>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6">
            {sectionOrder.map((section, index) => (
              <motion.button
                key={section}
                onClick={() => handleSectionChange(section)}
                className={`nav-item text-sm font-medium transition-all duration-300 cursor-hover ${
                  activeSection === section ? "text-primary" : ""
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                    layoutId="underline"
                    style={{ width: "100%" }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <Link
              href="https://github.com/01Priyanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-125 magnetic-item cursor-hover"
            >
              <Github className="h-5 w-5 hover:text-primary transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/priyanshu-patra-01gg"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-125 magnetic-item cursor-hover"
            >
              <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://x.com/priyanshu_thone"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-125 magnetic-item cursor-hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 hover:text-primary transition-colors"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
              <span className="sr-only">X (formerly Twitter)</span>
            </Link>
            <Link
              href="https://www.instagram.com/the_priyanshu_patra/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-125 magnetic-item cursor-hover"
            >
              <Instagram className="h-5 w-5 hover:text-primary transition-colors" />
              <span className="sr-only">Instagram</span>
            </Link>
            {/* Find the section with the Download CV button and replace it with this code: */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="hidden md:flex bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 neon-glow cursor-hover"
                onClick={() => handleSectionChange("contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <main className="flex-1 relative">
        {/* Social Sidebar */}
        <SocialSidebar />

        {/* Section Navigation Buttons */}
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4">
          <motion.button
            onClick={() => navigateSection("prev")}
            className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors cursor-hover"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </motion.button>
        </div>

        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4">
          <motion.button
            onClick={() => navigateSection("next")}
            className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors cursor-hover"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </motion.button>
        </div>

        {/* Section Indicators */}
        <div className="fixed left-1/2 bottom-8 transform -translate-x-1/2 z-40 flex gap-2">
          {sectionOrder.map((section) => (
            <motion.button
              key={section}
              onClick={() => handleSectionChange(section)}
              className={`w-3 h-3 rounded-full cursor-hover ${
                activeSection === section ? "bg-primary" : "bg-primary/30"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={activeSection === section ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>

        {/* Section Content */}
        <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
          {/* About/Hero Section */}
          <SectionTransition isActive={activeSection === "about"} direction={direction}>
            <div className="h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
              <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/10 via-background to-secondary/10 animate-gradient relative overflow-hidden">
                <div className="absolute inset-0 bg-grid"></div>
                <div className="absolute inset-0 bg-code opacity-30"></div>
                <div className="container px-4 md:px-6 relative z-10">
                  <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <motion.div
                      className="flex flex-col justify-center space-y-4"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <div className="space-y-2">
                        <motion.h1
                          className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gradient"
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        >
                          Priyanshu Patra
                        </motion.h1>
                        <motion.p
                          className="text-xl text-muted-foreground code-font typing-effect"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        >
                          Data Science & Machine Learning Engineer
                        </motion.p>
                      </div>
                      <motion.div
                        className="max-w-[600px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <TypingAnimation text="Data Science Engineer with hands-on experience in AI-powered solutions and data analytics. Proficient in Python, SQL, TensorFlow, and machine learning frameworks." />

                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                          <Button
                            asChild
                            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 glow-on-hover liquid-button"
                          >
                            <a
                              href={getImagePath("/Priyanshu_Patra_Resume.pdf")}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Download CV
                            </a>
                          </Button>
                          <Button
                            onClick={() => handleSectionChange("contact")}
                            variant="outline"
                            className="border-primary hover:bg-primary/10 transition-all duration-300"
                          >
                            <Mail className="mr-2 h-4 w-4" />
                            Contact Me
                          </Button>
                        </div>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                    >
                      <div className="relative flex items-center justify-center">
                        {/* Simple profile image with subtle ring */}
                        <div className="relative">
                          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-primary/30" />
                          <div className="absolute -inset-1 rounded-full bg-background" />
                          <Image
                            src={getImagePath("/images/profile.jpg")}
                            width={220}
                            height={220}
                            alt="Profile"
                            className="rounded-full relative z-10"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent"></div>
                <div className="absolute inset-0 bg-circuit opacity-30"></div>
                <div className="container px-4 md:px-6 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* About Me Column */}
                    <motion.div
                      className="flex flex-col space-y-4"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient">About Me</h2>
                        <p className="text-muted-foreground md:text-lg">
                          I'm a data science engineering student passionate about extracting meaningful insights from
                          complex datasets. With a strong foundation in statistics, programming, and machine learning, I
                          aim to solve real-world problems through data-driven approaches.
                        </p>
                      </div>

                      {/* Remove the "My Journey" section */}
                    </motion.div>

                    {/* Code Editor Column */}
                    <motion.div
                      className="flex flex-col space-y-4"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <CodeEditor
                        filename="portfolio_generator.py"
                        code={`import webbrowser

def portfolio():
  html_content = '''
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Priyanshu Patra - Portfolio</title>
      <style>
          body { font-family: Arial, sans-serif; background-color: #f3f4f6; color: #1f2937; text-align: center; padding: 20px; }
          h1 { font-size: 3rem; font-weight: bold; margin-bottom: 20px; }
          h2 { font-size: 2rem; font-weight: bold; margin: 40px 0 20px; }
          p, li { font-size: 1.2rem; line-height: 1.8; }
          .btn { display: inline-block; padding: 10px 20px; margin: 20px; text-decoration: none; border-radius: 8px; }
          .btn-primary { background-color: #2563eb; color: white; }
          .btn-secondary { background-color: #374151; color: white; }
          ul { list-style-type: disc; text-align: left; display: inline-block; }
      </style>
  </head>
  <body>
      <h1>Hello, I'm Priyanshu Patra</h1>
      <p>I am a results-driven Computer Science Engineer specializing in Data Science, Artificial Intelligence, and Full-Stack Development. My work reflects a blend of analytical thinking, problem-solving, and creativity, ensuring impactful outcomes across every project.</p>

      <h2>Professional Background</h2>
      <p>Planning to pursue a Master's in Data Science, I bring a diverse skill set developed through coursework and industry internships. My experience includes advanced AI projects like an AI-Powered Resume Screening System and practical applications such as a Smart Personal Finance Management System.</p>

      <h2>Technical Expertise</h2>
      <ul>
          <li>Machine Learning & Artificial Intelligence</li>
          <li>Data Science & Analytics</li>
          <li>Full-Stack Web Development</li>
          <li>Cloud Computing & Dockerization</li>
          <li>Algorithm Design & Optimization</li>
      </ul>

      <h2>Achievements & Certifications</h2>
      <p>I hold certifications from Microsoft (AI & ML Engineering), IBM (SkillsBuild AI), and Shell (Green Skills using AI). My achievements include building cutting-edge systems during high-impact internships and delivering academic projects that demonstrate a commitment to excellence.</p>

      <a href="#projects" class="btn btn-primary">View My Work</a>
      <a href="#contact" class="btn btn-secondary">Contact Me</a>
  </body>
  </html>
  '''

  with open("portfolio.html", "w") as file:
      file.write(html_content)

  webbrowser.open("portfolio.html")

portfolio()`}
                      />
                    </motion.div>
                  </div>
                </div>
              </section>
            </div>
          </SectionTransition>

          {/* Education Section */}
          <SectionTransition isActive={activeSection === "education"} direction={direction}>
            <div className="h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
              <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
                <div className="absolute inset-0 bg-circuit opacity-30"></div>
                <div className="container px-4 md:px-6 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Education Column */}
                    <div className="flex flex-col justify-start space-y-4">
                      <div className="space-y-2">
                        <motion.h3
                          className="text-2xl font-bold tracking-tighter flex items-center gap-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Award className="h-6 w-6 text-primary" />
                          <span>Education</span>
                        </motion.h3>
                        <ul className="space-y-4">
                          <motion.li
                            className="flex flex-col gap-2 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent hover-light transition-all duration-300 hover:translate-x-2 animated-border cursor-hover"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(255, 59, 48, 0.2)" }}
                          >
                            <div className="flex items-center gap-3">
                              <Image
                                src={getImagePath("/images/asu-logo.png")}
                                alt="Arizona State University"
                                width={50}
                                height={50}
                                className="rounded-md bg-white p-1"
                              />
                              <div>
                                <div className="font-semibold">
                                  Master of Science in Data Science, Analytics and Engineering
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Arizona State University, Tempe, USA • Aug 2025 - Present
                                </div>
                                <p className="text-sm text-muted-foreground">GPA: 4.0/4.0</p>
                              </div>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              <span className="font-medium text-primary">Relevant Coursework:</span> DSE 501 – Statistics for Data Analysts, CSE 511 – Data Processing at Scale, CSE 543 – Information Assurance and Security, CSE 578 – Data Visualization, CSE 575 – Statistical Machine Learning, CSE 572 – Data Mining
                            </div>
                          </motion.li>
                          <motion.li
                            className="flex flex-col gap-2 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent hover-light transition-all duration-300 hover:translate-x-2 animated-border cursor-hover"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(255, 59, 48, 0.2)" }}
                          >
                            <div className="flex items-center gap-3">
                              <Image
                                src={getImagePath("/images/srm-logo.png")}
                                alt="SRM Institute of Science and Technology"
                                width={50}
                                height={50}
                                className="rounded-md bg-white p-1"
                              />
                              <div>
                                <div className="font-semibold">
                                  Bachelor of Technology (B.Tech) in Computer Science and Engineering
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  SRM Institute of Science and Technology, Chennai • Sep 2020 - May 2024
                                </div>
                                <p className="text-sm text-muted-foreground">CGPA: 8.9/10</p>
                              </div>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              <span className="font-medium text-primary">Relevant Coursework:</span> Data Structures and Algorithms, Database Management Systems (DBMS), Object-Oriented Programming (OOP), Computer Networks, Artificial Intelligence & Machine Learning, Web Development
                            </div>
                          </motion.li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <motion.h3
                          className="text-2xl font-bold tracking-tighter flex items-center gap-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <Zap className="h-6 w-6 text-accent" />
                          <span>Research Interests</span>
                        </motion.h3>
                        <ul className="grid grid-cols-2 gap-2">
                          <motion.li
                            className="flex items-center gap-2 p-2 rounded-lg bg-primary/5 hover-light transition-all duration-300 hover:translate-x-1 neon-glow cursor-hover"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Brain className="h-4 w-4 text-primary" />
                            <span className="text-sm">Machine Learning</span>
                          </motion.li>
                          <motion.li
                            className="flex items-center gap-2 p-2 rounded-lg bg-primary/5 hover-light transition-all duration-300 hover:translate-x-1 neon-glow cursor-hover"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <BarChart2 className="h-4 w-4 text-primary" />
                            <span className="text-sm">Data Visualization</span>
                          </motion.li>
                          <motion.li
                            className="flex items-center gap-2 p-2 rounded-lg bg-primary/5 hover-light transition-all duration-300 hover:translate-x-1 neon-glow cursor-hover"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Database className="h-4 w-4 text-primary" />
                            <span className="text-sm">Big Data</span>
                          </motion.li>
                          <motion.li
                            className="flex items-center gap-2 p-2 rounded-lg bg-primary/5 hover-light transition-all duration-300 hover:translate-x-1 neon-glow cursor-hover"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Code className="h-4 w-4 text-primary" />
                            <span className="text-sm">NLP</span>
                          </motion.li>
                        </ul>
                      </div>
                    </div>

                    {/* Certifications Column */}
                    <motion.div
                      className="flex flex-col justify-start"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <CertificatesTimeline />
                    </motion.div>
                  </div>
                </div>
              </section>
            </div>
          </SectionTransition>

          {/* Experience Section */}
          <SectionTransition isActive={activeSection === "experience"} direction={direction}>
            <div className="h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
              <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
                <div className="absolute inset-0 bg-circuit opacity-30"></div>
                <div className="container px-4 md:px-6 relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <Star className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold">Professional Experience</h3>
                  </div>

                  <div className="mx-auto max-w-5xl space-y-8">
                    <motion.div
                      className="relative pl-8 pb-8 border-l-2 border-primary/50 transition-all duration-300 hover:border-l-primary"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground transition-transform duration-300 hover:scale-110 shadow-lg shadow-primary/20">
                        <span className="text-xs font-bold">1</span>
                      </div>
                      <div className="space-y-2 transition-all duration-300 hover:translate-x-2 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent hover-light animated-border cursor-hover">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold flex items-center gap-2">
                              <Star className="h-5 w-5 text-accent" />
                              Edunet Foundation in collaboration with Microsoft & SAP
                            </h3>
                            <p className="text-sm font-medium text-primary">AI-ML Intern</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-primary/10 text-foreground">Feb 2025 – Mar 2025</Badge>
                            <CertificatePreview
                              title="Microsoft & SAP Internship Certificate"
                              imagePath="/images/microsoft-sap-certificate.png"
                            />
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          Built an AI-Powered Resume Screening and Ranking System for automated resume evaluation.
                          Designed and implemented AI algorithms for resume parsing and candidate ranking. Engaged in
                          technical workshops and mentorship sessions with Microsoft & SAP experts.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <Badge className="bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-colors">
                            AI
                          </Badge>
                          <Badge className="bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-colors">
                            Machine Learning
                          </Badge>
                          <Badge className="bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-colors">
                            Python
                          </Badge>
                          <Badge className="bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-colors">
                            NLP
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="relative pl-8 pb-8 border-l-2 border-primary/50 transition-all duration-300 hover:border-l-primary"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground transition-transform duration-300 hover:scale-110 shadow-lg shadow-primary/20">
                        <span className="text-xs font-bold">2</span>
                      </div>
                      <div className="space-y-2 transition-all duration-300 hover:translate-x-2 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent hover-light animated-border cursor-hover">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold flex items-center gap-2">
                              <Star className="h-5 w-5 text-accent" />
                              Edunet Foundation in collaboration with Shell
                            </h3>
                            <p className="text-sm font-medium text-primary">AI Intern</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-primary/10 text-foreground">Dec 2024 – Jan 2025</Badge>
                            <CertificatePreview
                              title="Shell Internship Certificate"
                              imagePath="/placeholder.svg?height=500&width=800&text=Shell Certificate"
                            />
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          Developed Helpmate – an AI-driven Wellness Health Chatbot for health assistance and
                          recommendations. Optimized chatbot responses using data modeling techniques for improved user
                          interaction. Incorporated mentor feedback and presented the final project to industry experts.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <Badge className="bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-colors">
                            AI
                          </Badge>
                          <Badge className="bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-colors">
                            NLP
                          </Badge>
                          <Badge className="bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-colors">
                            Python
                          </Badge>
                          <Badge className="bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-colors">
                            Chatbot
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="relative pl-8 pb-8 border-l-2 border-primary/50 transition-all duration-300 hover:border-l-primary"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground transition-transform duration-300 hover:scale-110 shadow-lg shadow-primary/20">
                        <span className="text-xs font-bold">3</span>
                      </div>
                      <div className="space-y-2 transition-all duration-300 hover:translate-x-2 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent hover-light animated-border cursor-hover">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold flex items-center gap-2">
                              <Star className="h-5 w-5 text-accent" />
                              Edunet Foundation in collaboration with EY GDS
                            </h3>
                            <p className="text-sm font-medium text-primary">Full Stack Web Development Intern</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-primary/10 text-foreground">Sep 2024 – Nov 2024</Badge>
                            <CertificatePreview
                              title="EY GDS Internship Certificate"
                              imagePath="/images/ey-certificate.png"
                            />
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          Developed Finance Tracker using the MERN stack for real-time expense tracking. Improved
                          financial data visualization and collaborated on UI/UX design. Delivered weekly milestones and
                          presented to EY industry experts.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <Badge className="bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-colors">
                            MERN Stack
                          </Badge>
                          <Badge className="bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-colors">
                            JavaScript
                          </Badge>
                          <Badge className="bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-colors">
                            React
                          </Badge>
                          <Badge className="bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-colors">
                            MongoDB
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="relative pl-8 pb-8 border-l-2 border-primary/50 transition-all duration-300 hover:border-l-primary"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground transition-transform duration-300 hover:scale-110 shadow-lg shadow-primary/20">
                        <span className="text-xs font-bold">4</span>
                      </div>
                      <div className="space-y-2 transition-all duration-300 hover:translate-x-2 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent hover-light animated-border cursor-hover">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold flex items-center gap-2">
                              <Star className="h-5 w-5 text-accent" />
                              Edunet Foundation in collaboration with IBM
                            </h3>
                            <p className="text-sm font-medium text-primary">AI Intern</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-primary/10 text-foreground">Aug 2023 – Oct 2023</Badge>
                            <CertificatePreview
                              title="IBM Internship Certificate"
                              imagePath="/images/ibm-certificate.png"
                            />
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          Developed a Keylogger to securely monitor and record keystrokes using AI-driven solutions.
                          Researched keylogging techniques, enhancing knowledge of AI applications in data security.
                          Completed milestones ahead of schedule and delivered a final presentation showcasing system
                          capabilities.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <Badge className="bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-colors">
                            AI
                          </Badge>
                          <Badge className="bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-colors">
                            Python
                          </Badge>
                          <Badge className="bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-colors">
                            Data Security
                          </Badge>
                          <Badge className="bg-primary/10 hover:bg-primary/20 text-foreground border-none transition-colors">
                            IBM SkillsBuild
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
            </div>
          </SectionTransition>

          {/* Skills Section */}
          <SectionTransition isActive={activeSection === "skills"} direction={direction}>
            <div className="h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
              <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-secondary/5 relative code-bg">
                <div className="absolute inset-0 bg-dots"></div>
                <div className="container px-4 md:px-6 relative z-10">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <motion.h2
                        data-text="Technical Skills"
                        className="glitch text-3xl font-bold tracking-tighter sm:text-5xl text-gradient"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        Technical Skills
                      </motion.h2>
                      <motion.p
                        className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        My technical toolkit for solving data science challenges.
                      </motion.p>
                    </div>
                  </div>
                  <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:gap-12">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="perspective-container"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="card-hover border-primary/10 glow-on-hover skill-card rotate-on-scroll card-3d cursor-hover">
                        <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent rounded-t-lg">
                          <CardTitle className="flex items-center gap-2">
                            <Code className="h-5 w-5 text-primary" />
                            Programming Languages
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-6">
                          <div className="space-y-2 progress-bar-animated">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium code-font flex items-center">
                                <span className="text-primary mr-2">&gt;</span> Python
                              </span>
                              <span className="text-sm text-muted-foreground">95%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                              <motion.div
                                className="progress-value h-full bg-gradient-to-r from-primary/80 to-accent/80 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "95%" }}
                                transition={{ duration: 1, delay: 0.3 }}
                              ></motion.div>
                            </div>
                          </div>
                          <div className="space-y-2 progress-bar-animated">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium code-font flex items-center">
                                <span className="text-primary mr-2">&gt;</span> Java
                              </span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                              <motion.div
                                className="progress-value h-full bg-gradient-to-r from-primary/80 to-accent/80 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "85%" }}
                                transition={{ duration: 1, delay: 0.4 }}
                              ></motion.div>
                            </div>
                          </div>
                          <div className="space-y-2 progress-bar-animated">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium code-font flex items-center">
                                <span className="text-primary mr-2">&gt;</span> SQL
                              </span>
                              <span className="text-sm text-muted-foreground">80%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                              <motion.div
                                className="progress-value h-full bg-gradient-to-r from-primary/80 to-accent/80 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "80%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                              ></motion.div>
                            </div>
                          </div>
                          <div className="space-y-2 progress-bar-animated">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium code-font flex items-center">
                                <span className="text-primary mr-2">&gt;</span> JavaScript
                              </span>
                              <span className="text-sm text-muted-foreground">75%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                              <motion.div
                                className="progress-value h-full bg-gradient-to-r from-primary/80 to-accent/80 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "75%" }}
                                transition={{ duration: 1, delay: 0.6 }}
                              ></motion.div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="perspective-container"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="card-hover border-primary/10 glow-on-hover skill-card rotate-on-scroll card-3d cursor-hover">
                        <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent rounded-t-lg">
                          <CardTitle className="flex items-center gap-2">
                            <Brain className="h-5 w-5 text-primary" />
                            Data Science & ML
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-6">
                          <div className="space-y-2 progress-bar-animated">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium code-font flex items-center">
                                <span className="text-primary mr-2">&gt;</span> Pandas/NumPy
                              </span>
                              <span className="text-sm text-muted-foreground">95%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                              <motion.div
                                className="progress-value h-full bg-gradient-to-r from-primary/80 to-accent/80 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "95%" }}
                                transition={{ duration: 1, delay: 0.3 }}
                              ></motion.div>
                            </div>
                          </div>
                          <div className="space-y-2 progress-bar-animated">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium code-font flex items-center">
                                <span className="text-primary mr-2">&gt;</span> Scikit-Learn
                              </span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                              <motion.div
                                className="progress-value h-full bg-gradient-to-r from-primary/80 to-accent/80 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "90%" }}
                                transition={{ duration: 1, delay: 0.4 }}
                              ></motion.div>
                            </div>
                          </div>
                          <div className="space-y-2 progress-bar-animated">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium code-font flex items-center">
                                <span className="text-primary mr-2">&gt;</span> TensorFlow
                              </span>
                              <span className="text-sm text-muted-foreground">80%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                              <motion.div
                                className="progress-value h-full bg-gradient-to-r from-primary/80 to-accent/80 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "80%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                              ></motion.div>
                            </div>
                          </div>
                          <div className="space-y-2 progress-bar-animated">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium code-font flex items-center">
                                <span className="text-primary mr-2">&gt;</span> Data Visualization
                              </span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                              <motion.div
                                className="progress-value h-full bg-gradient-to-r from-primary/80 to-accent/80 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "85%" }}
                                transition={{ duration: 1, delay: 0.6 }}
                              ></motion.div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="perspective-container"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="card-hover border-primary/10 glow-on-hover skill-card rotate-on-scroll card-3d cursor-hover">
                        <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent rounded-t-lg">
                          <CardTitle className="flex items-center gap-2">
                            <Monitor className="h-5 w-5 text-primary" />
                            Web Development
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-6">
                          <div className="space-y-2 progress-bar-animated">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium code-font flex items-center">
                                <span className="text-primary mr-2">&gt;</span> HTML/CSS
                              </span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                              <motion.div
                                className="progress-value h-full bg-gradient-to-r from-primary/80 to-accent/80 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "90%" }}
                                transition={{ duration: 1, delay: 0.3 }}
                              ></motion.div>
                            </div>
                          </div>
                          <div className="space-y-2 progress-bar-animated">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium code-font flex items-center">
                                <span className="text-primary mr-2">&gt;</span> React.js
                              </span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                              <motion.div
                                className="progress-value h-full bg-gradient-to-r from-primary/80 to-accent/80 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "85%" }}
                                transition={{ duration: 1, delay: 0.4 }}
                              ></motion.div>
                            </div>
                          </div>
                          <div className="space-y-2 progress-bar-animated">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium code-font flex items-center">
                                <span className="text-primary mr-2">&gt;</span> Node.js
                              </span>
                              <span className="text-sm text-muted-foreground">80%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                              <motion.div
                                className="progress-value h-full bg-gradient-to-r from-primary/80 to-accent/80 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "80%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                              ></motion.div>
                            </div>
                          </div>
                          <div className="space-y-2 progress-bar-animated">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium code-font flex items-center">
                                <span className="text-primary mr-2">&gt;</span> MongoDB/MySQL
                              </span>
                              <span className="text-sm text-muted-foreground">75%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                              <motion.div
                                className="progress-value h-full bg-gradient-to-r from-primary/80 to-accent/80 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "75%" }}
                                transition={{ duration: 1, delay: 0.6 }}
                              ></motion.div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="perspective-container"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="card-hover border-primary/10 glow-on-hover skill-card rotate-on-scroll card-3d cursor-hover">
                        <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent rounded-t-lg">
                          <CardTitle className="flex items-center gap-2">
                            <Server className="h-5 w-5 text-primary" />
                            Tools & Technologies
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-6">
                          <div className="space-y-2 progress-bar-animated">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium code-font flex items-center">
                                <span className="text-primary mr-2">&gt;</span> AWS
                              </span>
                              <span className="text-sm text-muted-foreground">80%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                              <motion.div
                                className="progress-value h-full bg-gradient-to-r from-primary/80 to-accent/80 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "80%" }}
                                transition={{ duration: 1, delay: 0.3 }}
                              ></motion.div>
                            </div>
                          </div>
                          <div className="space-y-2 progress-bar-animated">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium code-font flex items-center">
                                <span className="text-primary mr-2">&gt;</span> Docker
                              </span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                              <motion.div
                                className="progress-value h-full bg-gradient-to-r from-primary/80 to-accent/80 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "85%" }}
                                transition={{ duration: 1, delay: 0.4 }}
                              ></motion.div>
                            </div>
                          </div>
                          <div className="space-y-2 progress-bar-animated">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium code-font flex items-center">
                                <span className="text-primary mr-2">&gt;</span> Git/GitHub
                              </span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                              <motion.div
                                className="progress-value h-full bg-gradient-to-r from-primary/80 to-accent/80 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "90%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                              ></motion.div>
                            </div>
                          </div>
                          <div className="space-y-2 progress-bar-animated">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium code-font flex items-center">
                                <span className="text-primary mr-2">&gt;</span> MATLAB
                              </span>
                              <span className="text-sm text-muted-foreground">75%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden">
                              <motion.div
                                className="progress-value h-full bg-gradient-to-r from-primary/80 to-accent/80 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "75%" }}
                                transition={{ duration: 1, delay: 0.6 }}
                              ></motion.div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </div>
              </section>
            </div>
          </SectionTransition>

          {/* Projects Section */}
          <SectionTransition isActive={activeSection === "projects"} direction={direction}>
            <div className="h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
              <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-secondary/5 to-transparent"></div>
                <div className="absolute inset-0 bg-code opacity-20"></div>
                <div className="container px-4 md:px-6 relative z-10">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <motion.h2
                        className="text-3xl font-bold tracking-tighter sm:text-5xl text-gradient"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        Featured Projects
                      </motion.h2>
                      <motion.p
                        className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        A showcase of my data science and machine learning projects.
                      </motion.p>
                    </div>
                  </div>
                  <Tabs defaultValue="all" className="mt-12">
                    <div className="flex justify-center">
                      <TabsList className="bg-primary/10 p-1">
                        <TabsTrigger
                          value="all"
                          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-hover"
                        >
                          All
                        </TabsTrigger>
                        <TabsTrigger
                          value="ml"
                          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-hover"
                        >
                          Machine Learning
                        </TabsTrigger>
                        <TabsTrigger
                          value="viz"
                          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-hover"
                        >
                          Data Visualization
                        </TabsTrigger>
                        <TabsTrigger
                          value="nlp"
                          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-hover"
                        >
                          NLP
                        </TabsTrigger>
                      </TabsList>
                    </div>
                    <TabsContent value="all" className="mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
                        {projects.map((project, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <ProjectCard project={project} />
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="ml" className="mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
                        {projects
                          .filter((p) => p.category === "ml")
                          .map((project, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                              <ProjectCard project={project} />
                            </motion.div>
                          ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="viz" className="mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
                        {projects
                          .filter((p) => p.category === "viz")
                          .map((project, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                              <ProjectCard project={project} />
                            </motion.div>
                          ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="nlp" className="mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
                        {projects
                          .filter((p) => p.category === "nlp")
                          .map((project, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                              <ProjectCard project={project} />
                            </motion.div>
                          ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </section>
            </div>
          </SectionTransition>

          {/* Contact Section */}
          <SectionTransition isActive={activeSection === "contact"} direction={direction}>
            <div className="h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
              <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-secondary/5 to-transparent"></div>
                <div className="absolute inset-0 bg-code opacity-20"></div>
                <div className="container px-4 md:px-6 relative z-10">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <motion.h2
                        className="text-3xl font-bold tracking-tighter sm:text-5xl text-gradient"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        Get In Touch
                      </motion.h2>
                      <motion.p
                        className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        Have a project in mind or want to discuss collaboration opportunities? I'd love to hear from
                        you!
                      </motion.p>
                    </div>
                  </div>
                  <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="perspective-container"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="card-hover border-primary/10 glow-on-hover card-3d cursor-hover">
                        <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent rounded-t-lg">
                          <CardTitle className="flex items-center gap-2">
                            <Mail className="h-5 w-5 text-primary" />
                            Contact Information
                          </CardTitle>
                          <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-6">
                          <motion.div
                            className="flex items-center gap-3 transition-all duration-300 hover:translate-x-2 p-2 rounded-lg bg-primary/5 hover-light cursor-hover"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            whileHover={{ x: 10, backgroundColor: "rgba(255, 59, 48, 0.15)" }}
                          >
                            <Mail className="h-5 w-5 text-primary" />
                            <span className="code-font">priyanshupatra22072202@gmail.com</span>
                          </motion.div>
                          <motion.div
                            className="flex items-center gap-3 transition-all duration-300 hover:translate-x-2 p-2 rounded-lg bg-primary/5 hover-light cursor-hover"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            whileHover={{ x: 10, backgroundColor: "rgba(255, 59, 48, 0.15)" }}
                          >
                            <Linkedin className="h-5 w-5 text-primary" />
                            <Link
                              href="https://www.linkedin.com/in/priyanshu-patra-01gg"
                              className="hover:text-primary transition-colors code-font"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              linkedin.com/in/priyanshu-patra-01gg
                            </Link>
                          </motion.div>
                          <motion.div
                            className="flex items-center gap-3 transition-all duration-300 hover:translate-x-2 p-2 rounded-lg bg-primary/5 hover-light cursor-hover"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            whileHover={{ x: 10, backgroundColor: "rgba(255, 59, 48, 0.15)" }}
                          >
                            <Github className="h-5 w-5 text-primary" />
                            <Link
                              href="https://github.com/01Priyanshu"
                              className="hover:text-primary transition-colors code-font"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              github.com/01Priyanshu
                            </Link>
                          </motion.div>
                          <motion.div
                            className="flex items-center gap-3 transition-all duration-300 hover:translate-x-2 p-2 rounded-lg bg-primary/5 hover-light cursor-hover"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            whileHover={{ x: 10, backgroundColor: "rgba(255, 59, 48, 0.15)" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5 text-primary"
                            >
                              <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                            </svg>
                            <Link
                              href="https://x.com/priyanshu_thone"
                              className="hover:text-primary transition-colors code-font"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              x.com/priyanshu_thone
                            </Link>
                          </motion.div>
                          <motion.div
                            className="flex items-center gap-3 transition-all duration-300 hover:translate-x-2 p-2 rounded-lg bg-primary/5 hover-light cursor-hover"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.7 }}
                            whileHover={{ x: 10, backgroundColor: "rgba(255, 59, 48, 0.15)" }}
                          >
                            <Instagram className="h-5 w-5 text-primary" />
                            <Link
                              href="https://www.instagram.com/the_priyanshu_patra/"
                              className="hover:text-primary transition-colors code-font"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              instagram.com/the_priyanshu_patra
                            </Link>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="perspective-container"
                      whileHover={{ scale: 1.02 }}
                    >
                      <ContactForm />
                    </motion.div>
                  </div>

                  {/* Footer - Only on contact page */}
                  <div className="mt-16 pt-8 border-t border-primary/10">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                      <p className="text-center text-sm leading-loose text-muted-foreground md:text-left code-font">
                        © 2025 Priyanshu Patra. All rights reserved.
                      </p>
                      <div className="flex items-center gap-4">
                        <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                          <Link
                            href="https://github.com/01Priyanshu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-125 cursor-hover"
                          >
                            <Github className="h-5 w-5 hover:text-primary transition-colors" />
                            <span className="sr-only">GitHub</span>
                          </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                          <Link
                            href="https://www.linkedin.com/in/priyanshu-patra-01gg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-125 cursor-hover"
                          >
                            <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                          <Link
                            href="https://x.com/priyanshu_thone"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-125 cursor-hover"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5 hover:text-primary transition-colors"
                            >
                              <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                            </svg>
                            <span className="sr-only">X (formerly Twitter)</span>
                          </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                          <Link
                            href="https://www.instagram.com/the_priyanshu_patra/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-125 cursor-hover"
                          >
                            <Instagram className="h-5 w-5 hover:text-primary transition-colors" />
                            <span className="sr-only">Instagram</span>
                          </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                          <Link
                            href="mailto:priyanshupatra22072202@gmail.com"
                            className="transition-transform hover:scale-125 cursor-hover"
                          >
                            <Mail className="h-5 w-5 hover:text-primary transition-colors" />
                            <span className="sr-only">Email</span>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </SectionTransition>
        </div>
      </main>
    </div>
  )
}
