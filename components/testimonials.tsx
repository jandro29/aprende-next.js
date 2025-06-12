"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { getFourthInfo } from "@/lib/get-fourth-info";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [testimonials, setTestimonials] = useState([
    {
      name: "",
      role: "",
      quote: "",
      avatar: "/placeholder.svg",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      const data4 = await getFourthInfo();

      const {
        comentario1,
        comentario2,
        comentario3,
        nombre1,
        nombre2,
        nombre3,
        profesion1,
        profesion2,
        profesion3,
      } = data4;

      const newTestimonials = [
        {
          name: nombre1,
          role: profesion1,
          quote: comentario1,
          avatar: "/placeholder.svg",
        },
        {
          name: nombre2,
          role: profesion2,
          quote: comentario2,
          avatar: "/placeholder.svg",
        },
        {
          name: nombre3,
          role: profesion3,
          quote: comentario3,
          avatar: "/placeholder.svg",
        },
      ];

      setTestimonials(newTestimonials);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute -left-16 top-1/2 -translate-y-1/2">
        <button
          onClick={prev}
          className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white/5 p-1">
        <div className="relative h-[450px]  lg:h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center"
            >
              <div className="mb-8 text-red-500">
                <Quote className="h-12 w-12" />
              </div>
              <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
                "{testimonials[current]?.quote}"
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonials[current]?.avatar || "/placeholder.svg"}
                  alt={testimonials[current]?.name}
                  className="h-16 w-16 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-lg">{testimonials[current]?.name}</div>
                  <div className="text-neutral-400">{testimonials[current]?.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute -right-16 top-1/2 -translate-y-1/2">
        <button
          onClick={next}
          className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false);
              setCurrent(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index ? "w-8 bg-red-500" : "w-2 bg-white/20"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
