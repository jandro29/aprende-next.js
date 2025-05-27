"use client"

import { useEffect, useRef } from "react"

export function GeometricPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (!parent) return

      // For high-resolution displays
      const dpr = window.devicePixelRatio || 1
      canvas.width = parent.clientWidth * dpr
      canvas.height = parent.clientHeight * dpr

      canvas.style.width = `${parent.clientWidth}px`
      canvas.style.height = `${parent.clientHeight}px`

      ctx.scale(dpr, dpr)

      drawPattern(ctx, parent.clientWidth, parent.clientHeight)
    }

    // Draw the geometric pattern
    const drawPattern = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      // Colors similar to the original design but more vibrant
      const redColor = "#ef4444"
      const darkRedColor = "#dc2626"
      const goldColor = "#b45309"
      const darkGoldColor = "#92400e"

      ctx.clearRect(0, 0, width, height)

      // Create gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, width, height)
      bgGradient.addColorStop(0, goldColor)
      bgGradient.addColorStop(1, darkGoldColor)
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, width, height)

      // Draw triangles with gradients
      // Left triangle
      const leftTriangleGradient = ctx.createLinearGradient(0, 0, width * 0.3, height)
      leftTriangleGradient.addColorStop(0, redColor)
      leftTriangleGradient.addColorStop(1, darkRedColor)

      ctx.fillStyle = leftTriangleGradient
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(width * 0.3, 0)
      ctx.lineTo(0, height)
      ctx.closePath()
      ctx.fill()

      // Middle triangle
      const middleTriangleGradient = ctx.createLinearGradient(width * 0.4, 0, width * 0.5, height * 0.7)
      middleTriangleGradient.addColorStop(0, redColor)
      middleTriangleGradient.addColorStop(1, darkRedColor)

      ctx.fillStyle = middleTriangleGradient
      ctx.beginPath()
      ctx.moveTo(width * 0.4, 0)
      ctx.lineTo(width * 0.6, 0)
      ctx.lineTo(width * 0.5, height * 0.7)
      ctx.closePath()
      ctx.fill()

      // Right triangle
      const rightTriangleGradient = ctx.createLinearGradient(width * 0.7, 0, width, height * 0.6)
      rightTriangleGradient.addColorStop(0, redColor)
      rightTriangleGradient.addColorStop(1, darkRedColor)

      ctx.fillStyle = rightTriangleGradient
      ctx.beginPath()
      ctx.moveTo(width * 0.7, 0)
      ctx.lineTo(width, 0)
      ctx.lineTo(width, height * 0.6)
      ctx.closePath()
      ctx.fill()

      // Bottom right triangle
      const bottomRightTriangleGradient = ctx.createLinearGradient(width * 0.6, height * 0.7, width, height)
      bottomRightTriangleGradient.addColorStop(0, redColor)
      bottomRightTriangleGradient.addColorStop(1, darkRedColor)

      ctx.fillStyle = bottomRightTriangleGradient
      ctx.beginPath()
      ctx.moveTo(width * 0.6, height * 0.7)
      ctx.lineTo(width, height * 0.7)
      ctx.lineTo(width, height)
      ctx.closePath()
      ctx.fill()

      // Add subtle texture
      ctx.globalCompositeOperation = "overlay"
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const radius = Math.random() * 2 + 1

        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.05})`
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalCompositeOperation = "source-over"
    }

    // Initial setup
    resizeCanvas()

    // Handle resize
    window.addEventListener("resize", resizeCanvas)

    // Add subtle animation
    let animationFrame: number
    const animate = () => {
      // Very subtle movement or effect could be added here
      // For now, we'll just redraw occasionally to keep it simple
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-2xl"
      aria-label="Geometric pattern of red triangles on a gold background"
    />
  )
}
