"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, .cursor-hover").forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true))
        el.addEventListener("mouseleave", () => setLinkHovered(false))
      })
    }

    addEventListeners()
    handleLinkHoverEvents()

    return () => {
      removeEventListeners()
    }
  }, [])

  return (
    <motion.div
      className="cursor-wrapper fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      animate={{
        x: position.x - (linkHovered ? 16 : clicked ? 12 : 8),
        y: position.y - (linkHovered ? 16 : clicked ? 12 : 8),
        opacity: hidden ? 0 : 1,
        scale: linkHovered ? 1.2 : clicked ? 0.8 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 800,
        damping: 20,
        mass: 0.2,
      }}
    >
      <motion.div
        className={`rounded-full bg-primary ${
          linkHovered ? "w-8 h-8" : clicked ? "w-6 h-6" : "w-4 h-4"
        } flex items-center justify-center`}
        animate={{
          scale: linkHovered ? 1.2 : clicked ? 0.8 : 1,
        }}
      />
    </motion.div>
  )
}
