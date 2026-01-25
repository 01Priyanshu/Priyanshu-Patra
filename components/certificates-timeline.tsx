"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, GraduationCap, Briefcase as Certificate } from "lucide-react"
import CertificatePreview from "./certificate-preview"

export default function CertificatesTimeline() {
  const certificates = [
    {
      id: 1,
      title: "The Ultimate Job Ready Data Science Course",
      issuer: "CodeWithHarry",
      date: "Dec 2025",
      icon: <Award className="h-5 w-5 text-primary" />,
      imagePath: "/images/codewithharry-datascience-certificate.png",
      description:
        "Comprehensive data science course covering Python, Machine Learning, Data Analysis, and real-world projects. Certificate ID: CWH-THE-ULTIMATE-JOB-READY-DATA-SCIENCE-COURSE-74J6948W",
    },
    {
      id: 2,
      title: "SQL Advanced",
      issuer: "HackerRank",
      date: "Mar 2025",
      icon: <Award className="h-5 w-5 text-primary" />,
      imagePath: "/images/sql-advanced.png",
    },
    {
      id: 3,
      title: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      date: "Mar 2025",
      icon: <Certificate className="h-5 w-5 text-primary" />,
      imagePath: "/images/problem-solving-intermediate.png",
    },
    {
      id: 4,
      title: "Microsoft AI & ML Engineering",
      issuer: "Coursera",
      date: "Sep 2024",
      icon: <Award className="h-5 w-5 text-primary" />,
      imagePath: "/images/microsoft-ai-ml.png",
      description:
        "This comprehensive program is designed to equip students with the knowledge and skills required to navigate the ever-evolving world of artificial intelligence and machine learning (AI & ML).",
    },
    {
      id: 5,
      title: "Data Science Job Simulation",
      issuer: "British Airways",
      date: "Feb 2025",
      icon: <Certificate className="h-5 w-5 text-primary" />,
      imagePath: "/images/data-science-job-simulation.png",
      description:
        "Over the period of January 2025 to February 2025, completed practical tasks in: Web scraping to gain company insights and Predicting customer buying behaviour.",
    },
    {
      id: 6,
      title: "Token Service Technology Virtual Experience",
      issuer: "VISA",
      date: "Feb 2023",
      icon: <Award className="h-5 w-5 text-primary" />,
      imagePath: "/images/token-service-technology.png",
      description:
        "Over the period of February 2023, completed practical tasks in: Card Authentication and Select Visa API for Use Cases.",
    },
    {
      id: 7,
      title: "Oracle Database Foundations",
      issuer: "Oracle",
      date: "Mar 2023",
      icon: <Certificate className="h-5 w-5 text-primary" />,
      imagePath: "/images/oracle-database-foundations.png",
    },
    {
      id: 8,
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "Feb 2023",
      icon: <Award className="h-5 w-5 text-primary" />,
      imagePath: "/images/sql-basic.png",
    },
    {
      id: 9,
      title: "Introduction to Programming with MATLAB",
      issuer: "Vanderbilt University",
      date: "Apr 2023",
      icon: <Certificate className="h-5 w-5 text-primary" />,
      imagePath: "/images/matlab-programming.png",
      description: "An online non-credit course authorized by Vanderbilt University and offered through Coursera.",
    },
    {
      id: 10,
      title: "JavaScript (Basic)",
      issuer: "HackerRank",
      date: "May 2023",
      icon: <Award className="h-5 w-5 text-primary" />,
      imagePath: "/images/javascript-basic.png",
    },
    {
      id: 11,
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      date: "Nov 2022",
      icon: <Certificate className="h-5 w-5 text-primary" />,
      imagePath: "/images/problem-solving-basic.png",
    },
    {
      id: 12,
      title: "Introduction to Cloud Computing",
      issuer: "Simplilearn",
      date: "Nov 2022",
      icon: <Award className="h-5 w-5 text-primary" />,
      imagePath: "/placeholder.svg?height=800&width=800&text=Simplilearn+Cloud+Computing+Certificate",
    },
    {
      id: 13,
      title: "Introduction to Front-End Development",
      issuer: "Meta",
      date: "Nov 2022",
      icon: <Certificate className="h-5 w-5 text-primary" />,
      imagePath: "/images/frontend-development.png",
      description: "An online non-credit course authorized by Meta and offered through Coursera.",
    },
    {
      id: 14,
      title: "Getting Started with Networking",
      issuer: "AWS",
      date: "Aug 2022",
      icon: <Award className="h-5 w-5 text-primary" />,
      imagePath: "/images/aws-networking.png",
    },
  ]

  return (
    <div className="w-full py-8">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold">Certifications & Skills</h3>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary h-full ml-6"></div>

          {/* Timeline items */}
          <div className="space-y-8 relative z-10 ml-14 max-h-[600px] overflow-y-auto pr-4">
            {certificates.map((cert) => (
              <div key={cert.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-14 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
                  {cert.icon}
                </div>

                {/* Certificate card */}
                <Card className="border-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="flex items-center gap-1 bg-primary/10 text-foreground">
                          <Calendar className="h-3 w-3" />
                          {cert.date}
                        </Badge>
                        <CertificatePreview
                          title={cert.title}
                          imagePath={cert.imagePath}
                          issuer={cert.issuer}
                          date={cert.date}
                          description={cert.description}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
