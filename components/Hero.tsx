import Link from "next/link";
import { GeometricPattern } from "@/components/geometric-pattern";
import { CourseHighlights } from "@/components/course-highlights";
import { Testimonials } from "@/components/testimonials";
import { InstructorProfile } from "@/components/instructor-profile";
import { Button } from "@/components/ui/button";
import RegistrationForm from "../app/registration-form";
import { ChevronRight, Calendar, Users, Clock, Award } from "lucide-react";
import HubspotForm from "../formulario";
import { getHomeInfo } from "@/lib/get-home-info";
import { getSecondInfo } from "@/lib/get-second-info";
import { getThirdInfo } from "@/lib/get-third-info";
import { getFourthInfo } from "@/lib/get-fourth-info";
import { getFiveInfo } from "@/lib/get-five-info";



export const Hero = async()=> { 
 const data = await getHomeInfo();
 const data2 = await getSecondInfo();
 const data3 = await getThirdInfo();
 const data4 = await getFourthInfo();
 const data5 = await getFiveInfo();

if (!data) {
  return <p>Error al cargar la información</p>;
}
const {
  cuposlimutados,
  firstTitle,
  firstTitle2,
  contentFirstSection,
  Duration,
  CuposLimitados,
  Inicio,
  certificado,
} = data;

const {
  title,
  contenido, 
} = data2;

const {
  titleThird,
  contentThird, 
} = data3;

const {
  fourthTitle,
  fourthText, 
} = data4;

const {
  titleFive,
  contentFive,
  titlePart2,
  detalle1,
  detalle2,
  detalle3,
  detalle1Content,
  detalle2Content,
} = data5;



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
                  {cuposlimutados}
                </div>
                <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight mb-8 leading-[1.1] animate-in slide-in-from-left duration-700 delay-100">
                  {firstTitle}
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-amber-600">
                    {firstTitle2}
                  </span>
                </h1>
                <p className="text-xl text-neutral-700 mb-8 max-w-lg animate-in slide-in-from-left duration-700 delay-200">
                  {contentFirstSection}
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
                    <p className="font-medium"> {Duration} </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center text-neutral-500 mb-1">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm">Inscripción</span>
                    </div>
                    <p className="font-medium"> {CuposLimitados} </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center text-neutral-500 mb-1">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">Inicio</span>
                    </div>
                    <p className="font-medium"> {Inicio} </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center text-neutral-500 mb-1">
                      <Award className="h-4 w-4 mr-2" />
                      <span className="text-sm">Certificado</span>
                    </div>
                    <p className="font-medium"> {certificado} </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] md:h-[600px] animate-in fade-in duration-1000">
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                  <GeometricPattern />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-sm text-neutral-500 mb-2">
                    Next class
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="text-lg font-medium">Aug 20 - Sep 24</div>
                    <Button
                      size="sm"
                      className="bg-black text-white hover:bg-neutral-800"
                    >
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {title}
              </h2>
              <p className="text-lg text-neutral-600">
                {contenido}
              </p>
            </div>

            <CourseHighlights />
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {titleThird}
              </h2>
              <p className="text-lg text-neutral-600">
                {contentThird}
              </p>
            </div>

            <InstructorProfile />
          </div>
        </section>

        <section className="py-24 bg-black text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {fourthTitle}
              </h2>
              <p className="text-lg text-neutral-400">
                {fourthText}
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
                  <h2 className="text-3xl font-bold mb-6">
                    {titleFive}
                  </h2>
                  <p className="text-lg text-neutral-600 mb-8">
                    {contentFive}
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
                  <h3 className="text-2xl font-bold mb-6">
                    {titlePart2}
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">
                          {detalle1}
                        </h4>
                        <p className="text-white/80">
                          {detalle1Content}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">
                          {detalle2}
                        </h4>
                        <p className="text-white/80">
                          {detalle2Content}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div>
                        <p className="text-white/80">
                          {detalle3}
                        </p>
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

      <footer className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-red-500 to-red-600"></div>
                <span className="font-semibold text-lg tracking-tight">
                  Aprender IA
                </span>
              </div>
              <p className="text-neutral-400 mb-6">
                Potenciamos a los equipos comerciales con herramientas de IA
                para destacar en la nueva era empresarial.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Cursos</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Ventas con IA
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Fundamentos de IA Comercial
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Automatización con Gemini
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Estrategias B2B Inteligentes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Recursos</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Tutoriales
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Podcast
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Comunidad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Suscríbete</h3>
              <p className="text-neutral-400 mb-4">
                Recibe las últimas novedades y recursos para potenciar tu equipo
              </p>
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Button className="bg-red-500 hover:bg-red-600 text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500">
            <p>
              © {new Date().getFullYear()} Aprender IA. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}