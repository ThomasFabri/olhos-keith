"use client"; // Added 'use client'

import { Target, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { event as fbEvent } from "@/lib/fbpixel";

const checkoutUrl = 'https://pay.hotmart.com/L102106228U?checkoutMode=10' // Define checkoutUrl here

export default function ChallengeSection() {
  const handleCTAClickAndNavigate = () => { // Renamed function
    fbEvent('Lead');
    window.location.href = checkoutUrl // Programmatic navigation
  };

  return (
    <section className="w-full pt-12 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* Content Left Side */}
        <div className="space-y-8 px-4 md:px-8 lg:px-16">
          <h2 className="text-4xl lg:text-5xl font-wide font-semibold text-gray-600 tracking-tight">O DESAFIO</h2>

          <p className="text-xl lg:text-2xl font-wide italic px-4 md:px-0">
            Um curso tão rápido e prático que seus amigos vão achar que você desenha desde criança.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <Target className="w-8 h-8 text-gray-700" />
              </div>
              <p className="text-lg text-gray-700 tracking-wide">RESULTADOS EM 5 DIAS</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <User className="w-8 h-8 text-gray-700" />
              </div>
              <p className="text-lg text-gray-700 tracking-wide">100% ADAPTADO PARA INICIANTES</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-gray-600 text-lg mb-2 font-bold">Clique e comece hoje mesmo</p>
            </div>

            <Button // Changed from <a> to Button
              size="lg"
              className="bg-[#00687a] hover:bg-teal-700 text-white px-6 md:px-12 py-6 text-md md:text-2xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              onClick={handleCTAClickAndNavigate} // Added onClick directly to Button
            >
              Quero desenhar um olho realista
            </Button>
          </div>
        </div>

        {/* Image Right Side */}
        <div className="hidden lg:block w-full h-full">
          <img
            src="/images/celinemedia.jpeg"
            alt="Ilustração de uma mulher de perfil em preto e branco"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
