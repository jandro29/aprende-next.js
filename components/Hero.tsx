"use client";

import Link from "next/link";
import { GeometricPattern } from "@/components/geometric-pattern";
import { CourseHighlights } from "@/components/course-highlights";
import { Testimonials } from "@/components/testimonials";
import { InstructorProfile } from "@/components/instructor-profile";
import { Button } from "@/components/ui/button";
import RegistrationForm from "../app/registration-form";
import { ChevronRight, Calendar, Users, Clock, Award } from "lucide-react";
import HubspotForm from "../formulario";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-neutral-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="font-semibold text-lg tracking-tight">
              <img src="/logo-esedor.png" />
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <a href="#form">
              <Button className="bg-black text-white hover:bg-neutral-800 transition-all duration-300">
                Inscribirme ahora
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative z-10">
                <div className="inline-block px-4 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-6 animate-in slide-in-from-left duration-500">
                  Cupos limitados
                </div>
                <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight mb-8 leading-[1.1] animate-in slide-in-from-left duration-700 delay-100">
                  Ventas Técnicas <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-amber-600">
                    con IA
                  </span>
                </h1>
                <p className="text-xl text-neutral-700 mb-8 max-w-lg animate-in slide-in-from-left duration-700 delay-200">
                  Domina herramientas de IA generativa como ChatGPT, Gemini y NotebookLM para convertirte en un referente en ventas B2B. Aprende con expertos en inteligencia artificial y ventas industriales.
                </p>
                <div className="flex flex-col md:flex-row gap-4 animate-in slide-in-from-left duration-700 delay-300">
                  <a href="#form">
                    <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 rounded-xl text-lg shadow-xl shadow-red-500/20 hover:shadow-red-500/30 transition-all duration-300">
                      Inscribirme ahora
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    className="border-neutral-300 hover:border-neutral-400 px-8 py-6 rounded-xl text-lg"
                  >
                    Conocer más
                  </Button>
                </div>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 animate-in slide-in-from-left duration-700 delay-400">
                  <div className="flex flex-col">
                    <div className="flex items-center text-neutral-500 mb-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">Duración</span>
                    </div>
                    <p className="font-medium">5 Semanas</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center text-neutral-500 mb-1">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm">Inscripción</span>
                    </div>
                    <p className="font-medium">Cupos limitados</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center text-neutral-500 mb-1">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">Inicio</span>
                    </div>
                    <p className="font-medium">20 de agosto de 2025</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center text-neutral-500 mb-1">
                      <Award className="h-4 w-4 mr-2" />
                      <span className="text-sm">Certificado</span>
                    </div>
                    <p className="font-medium">Incluido</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] md:h-[600px] animate-in fade-in duration-1000">
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                  <GeometricPattern />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-sm text-neutral-500 mb-2">Next class</div>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="text-lg font-medium">20 de agosto de 2025</div>
                    <Button size="sm" className="bg-black text-white hover:bg-neutral-800">
                      Reserve Spot
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Lo que aprenderás</h2>
              <p className="text-lg text-neutral-600">
                Domina habilidades clave para integrar la IA como tu aliada estratégica en ventas técnicas B2B
              </p>
            </div>
            <CourseHighlights />
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Conoce a tu instructor</h2>
              <p className="text-lg text-neutral-600">
                Aprende con líderes en ventas, IA y formación empresarial
              </p>
            </div>
            <InstructorProfile />
          </div>
        </section>

        <section className="py-24 bg-black text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Lo que dicen nuestros participantes</h2>
              <p className="text-lg text-neutral-400">
                Historias de profesionales que optimizaron sus procesos comerciales con IA
              </p>
            </div>
            <Testimonials />
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-6">¿Listo para transformar tu proceso comercial?</h2>
                  <p className="text-lg text-neutral-600 mb-8">
                    Únete a la comunidad de profesionales que están impulsando sus ventas con la ayuda de la IA.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 lg:block">
                    <a href="#form">
                      <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 rounded-xl text-lg shadow-xl shadow-red-500/20 hover:shadow-red-500/30 transition-all duration-300 lg:mb-[1rem]">
                        Inscribirme ahora
                      </Button>
                    </a>
                    <Button
                      variant="outline"
                      className="border-neutral-300 hover:border-neutral-400 px-8 py-6 rounded-xl text-lg"
                    >
                      Descargar temario
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red-500 to-amber-600 p-8 md:p-12 flex flex-col justify-center text-white">
                  <h3 className="text-2xl font-bold mb-6">Detalles del Curso:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">5 semanas de aprendizaje intensivo</h4>
                        <p className="text-white/80">10 sesiones en vivo con proyectos prácticos</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Retroalimentación personalizada</h4>
                        <p className="text-white/80">Guía directa de expertos en IA y ventas</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div>
                        <p className="text-white/80">Acceso a comunidad de profesionales comerciales con IA</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="form">
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <RegistrationForm />
          </div>
        </section>
      </main>

    </div>
  );
};
