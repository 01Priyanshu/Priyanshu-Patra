"use client"

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { useRef } from "react"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    category: string
    github: string
    demo: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className="cursor-hover h-full"
      style={{ perspective: 1200, rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden group transition-all duration-300 border border-white/5 glass-card card-shimmer h-full flex flex-col relative">
        {/* Shimmer border on hover */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,59,48,0.05), rgba(148,91,255,0.05), rgba(255,149,0,0.05))",
            zIndex: 0
          }}
        />

        <div className="aspect-video w-full overflow-hidden relative">
          {/* Category indicator */}
          <div className="absolute top-3 left-3 z-20">
            <span className="px-2 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-sm text-primary border border-primary/30">
              {project.category === "ml" ? "ML" : project.category === "nlp" ? "NLP" : "Data Viz"}
            </span>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-400 z-10" />
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={400}
            height={300}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />

          {/* Hover action buttons overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <Link href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-black/80 backdrop-blur-sm text-white border border-white/20 hover:border-primary/50 hover:bg-primary/20 transition-all duration-200">
              <Github className="h-3.5 w-3.5" /> Code
            </Link>
            <Link href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary/90 backdrop-blur-sm text-white hover:bg-primary transition-all duration-200">
              <ExternalLink className="h-3.5 w-3.5" /> Live Demo
            </Link>
          </div>
        </div>

        <CardHeader className="pb-2 relative z-10">
          <CardTitle className="group-hover:text-primary transition-colors text-base leading-snug">
            {project.title}
          </CardTitle>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="tag-pill">{tag}</span>
            ))}
          </div>
        </CardHeader>

        <CardContent className="flex-grow relative z-10 pt-0">
          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
        </CardContent>

        <CardFooter className="flex justify-between gap-2 pt-0 relative z-10">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1 transition-all duration-300 hover:bg-white/5 border-white/10 hover:border-primary/30 text-xs"
          >
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1.5 h-3.5 w-3.5" />
              Code
            </Link>
          </Button>
          <Button
            size="sm"
            asChild
            className="flex-1 transition-all duration-300 bg-gradient-to-r from-primary/80 to-accent/80 hover:from-primary hover:to-accent neon-glow text-xs"
          >
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
              Live Demo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
