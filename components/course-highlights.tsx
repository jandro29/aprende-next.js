"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Lightbulb, Palette, Shield, TrendingUp, Users } from "lucide-react"
import { getSecondInfo } from "@/lib/get-second-info"

const icons = [Lightbulb, Code, Palette, Shield, TrendingUp, Users]
const colors = ["bg-amber-500", "bg-red-500", "bg-purple-500", "bg-emerald-500", "bg-blue-500", "bg-orange-500"]

export function CourseHighlights() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const section = await getSecondInfo()

      const highlightsData = []
      for (let i = 1; i <= 6; i++) {
        highlightsData.push({
          title: section[`titleCard${i}`],
          description: section[`contenidoCard${i}`],
          icon: icons[i - 1],
          color: colors[i - 1],
        })
      }

      setData(highlightsData)
    }

    fetchData()
  }, [])

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item, index) => {
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
