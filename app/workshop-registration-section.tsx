import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"

export default function WorkshopRegistrationSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-600 via-green-500 to-emerald-400 relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                IA: Inteligencia
                <br />
                Artificial aplicada
              </h1>
              <p className="text-xl text-green-100">Domina la IA en el ámbito laboral y multiplica tu productividad</p>
            </div>

            {/* Event Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-lg">
                <Calendar className="h-6 w-6" />
                <span className="font-semibold">28 de mayo</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <Clock className="h-6 w-6" />
                <span className="font-semibold">8 am a 1:15 pm</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <MapPin className="h-6 w-6" />
                <span className="font-semibold">JW Marriott Hotel Lima</span>
              </div>
            </div>

            {/* Discount Badge */}
            <div className="inline-flex items-center bg-green-400 text-green-900 px-6 py-3 rounded-lg font-bold">
              <span className="text-2xl mr-2">25%</span>
              <div className="text-sm">
                <div>descuento</div>
                <div>clientes</div>
              </div>
              <div className="ml-3 bg-white px-3 py-1 rounded text-xs font-bold">entel empresas</div>
            </div>

            {/* Speaker Section */}
            <div className="flex items-center gap-4 mt-12">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Camila Manera"
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white"
                />
                <div className="absolute -top-2 -right-2 bg-green-400 text-green-900 px-2 py-1 rounded text-xs font-bold">
                  SPEAKER
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Camila Manera</h3>
                <p className="text-green-100 text-sm">
                  Especialista en Inteligencia Artificial, consultora y speaker
                  <br />
                  internacional, Fortune 500 & Startups AI Advisor
                </p>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-white shadow-2xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl text-gray-800">Ingresa tus datos para más información</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-gray-600">
                    Nombre
                  </Label>
                  <Input
                    id="nombre"
                    placeholder="Ingresa tu nombre"
                    className="border-gray-200 focus:border-green-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="apellido" className="text-gray-600">
                    Apellido
                  </Label>
                  <Input
                    id="apellido"
                    placeholder="Ingresa tu apellido"
                    className="border-gray-200 focus:border-green-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-600">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="border-gray-200 focus:border-green-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="celular" className="text-gray-600">
                    Celular
                  </Label>
                  <Input
                    id="celular"
                    type="tel"
                    placeholder="Número de celular"
                    className="border-gray-200 focus:border-green-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="empresa" className="text-gray-600">
                    Empresa
                  </Label>
                  <Input
                    id="empresa"
                    placeholder="Nombre de tu empresa"
                    className="border-gray-200 focus:border-green-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cargo" className="text-gray-600">
                    Cargo
                  </Label>
                  <Select>
                    <SelectTrigger className="border-gray-200 focus:border-green-500">
                      <SelectValue placeholder="Selecciona tu cargo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gerente">Gerente</SelectItem>
                      <SelectItem value="director">Director</SelectItem>
                      <SelectItem value="analista">Analista</SelectItem>
                      <SelectItem value="coordinador">Coordinador</SelectItem>
                      <SelectItem value="especialista">Especialista</SelectItem>
                      <SelectItem value="consultor">Consultor</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area" className="text-gray-600">
                    Área
                  </Label>
                  <Select>
                    <SelectTrigger className="border-gray-200 focus:border-green-500">
                      <SelectValue placeholder="Selecciona tu área" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tecnologia">Tecnología</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="ventas">Ventas</SelectItem>
                      <SelectItem value="recursos-humanos">Recursos Humanos</SelectItem>
                      <SelectItem value="operaciones">Operaciones</SelectItem>
                      <SelectItem value="finanzas">Finanzas</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 text-lg mt-6">
                  ENVIAR
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
