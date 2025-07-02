"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Lightbulb, Palette, Shield, TrendingUp, Users } from "lucide-react"

const icons = [Lightbulb, Code, Palette, Shield, TrendingUp, Users]
const colors = ["bg-amber-500", "bg-red-500", "bg-purple-500", "bg-emerald-500", "bg-blue-500", "bg-orange-500"]

const highlightsData = [
  {
    title: "Fundamentos de IA",
    description: "Comprende los conceptos clave de la IA generativa y su impacto en procesos comerciales.",
    icon: Lightbulb,
    color: "bg-amber-500",
  },
  {
    title: "Prompt Engineering",
    description: "Aprende a formular prompts que generen respuestas precisas, persuasivas y accionables.",
    icon: Code,
    color: "bg-red-500",
  },
  {
    title: "Aplicaciones Comerciales",
    description: "Descubre cómo usar IA para generar propuestas, gestionar leads y automatizar tareas repetitivas.",
    icon: Palette,
    color: "bg-purple-500",
  },
  {
    title: "Ética y Privacidad",
    description: "Navega los dilemas éticos del uso de IA en entornos de negocio.",
    icon: Shield,
    color: "bg-emerald-500",
  },
  {
    title: "Tendencias Futuras",
    description: "Anticípate a los cambios en el mercado con tecnologías emergentes.",
    icon: TrendingUp,
    color: "bg-blue-500",
  },
  {
    title: "Proyectos Prácticos",
    description: "Aplica lo aprendido en casos reales con feedback directo de expertos.",
    icon: Users,
    color: "bg-orange-500",
  },
]

export function CourseHighlights() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {highlightsData.map((item, index) => {
        const IconComponent = item.icon
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`${item.color} h-12 w-12 rounded-lg flex items-center justify-center text-white mb-4`}>
              <IconComponent className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-neutral-600">{item.description}</p>

            <motion.div
              className="h-1 bg-gradient-to-r from-red-500 to-amber-500 mt-4 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: hoveredIndex === index ? "100%" : "30%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
