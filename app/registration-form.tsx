"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import HubspotForm from '../formulario'

export default function RegistrationForm() {
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleTermsChange = (checked: boolean | "indeterminate") => {
    setAcceptTerms(checked === true)
  }

  return (
    <section className="min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-[10rem] items-center min-h-screen">
          {/* Left Side - Form */}
          <div className="flex justify-center lg:justify-start">
            <Card className="w-full max-w-[34rem] bg-white shadow-2xl">
              <HubspotForm />
            </Card>
          </div>

          {/* Right Side - Animation */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-96 h-96">
              {/* Animated Background Circles */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-full h-full border-4 border-red-200 rounded-full"></div>
              </div>
              <div className="absolute inset-8 animate-spin-reverse">
                <div className="w-full h-full border-4 border-orange-200 rounded-full"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-12 left-12 w-8 h-8 bg-gradient-to-r from-red-400 to-orange-400 rounded-full animate-float"></div>
              <div className="absolute top-24 right-16 w-6 h-6 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-float-delayed"></div>
              <div className="absolute bottom-20 left-20 w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-float-slow"></div>
              <div className="absolute bottom-32 right-12 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-float"></div>

              {/* Central Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl animate-pulse-slow shadow-2xl flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-xl opacity-90"></div>
                </div>
              </div>

              {/* Geometric Shapes */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-br from-red-300 to-orange-300 transform rotate-45 animate-bounce-slow"></div>
              <div className="absolute bottom-8 left-8 w-8 h-8 bg-gradient-to-br from-orange-300 to-red-300 transform rotate-12 animate-wiggle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
