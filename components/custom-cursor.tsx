"use client"

import { useEffect, useRef, useCallback } from "react"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const posRef = useRef({ x: 0, y: 0 })

  const updateCursor = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${posRef.current.x - 8}px, ${posRef.current.y - 8}px, 0)`
    }
  }, [])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updateCursor)
    }

    const onMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "1"
    }

    const onMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "0"
    }

    document.addEventListener("mousemove", onMouseMove, { passive: true })
    document.addEventListener("mouseenter", onMouseEnter)
    document.addEventListener("mouseleave", onMouseLeave)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [updateCursor])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference opacity-0 w-4 h-4 rounded-full bg-primary"
      style={{ willChange: "transform" }}
    />
  )
}
