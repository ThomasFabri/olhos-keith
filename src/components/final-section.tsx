'use client'

import { Clock, TrendingUp, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { event as fbEvent } from '@/lib/fbpixel'

const checkoutUrl = 'https://pay.hotmart.com/L102106228U?checkoutMode=10' // Define checkoutUrl here

export default function FinalSection() {
  const handleCTAClickAndNavigate = () => {
    fbEvent('Lead');
    setTimeout(() => {
      window.location.href = checkoutUrl;
    }, 300); // espera 300ms antes de sair
  };


  return (
    <section className="py-16 bg-[#fdfdf9]">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center">
        {/* Left side - Questions */}
        <div className="lg:col-span-3 space-y-8 px-4 lg:px-16">
          {/* Question 1 */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 font-wide">E se eu não acompanhar o ritmo?</h3>
              <p className="text-gray-600 leading-relaxed font-wide">
                Fique tranquilo(a). Você terá acesso vitalício às aulas e pode rever quantas vezes quiser. O
                importante é praticar no seu tempo e ver sua evolução.
              </p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <Award className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 font-wide">Recebo certificado?</h3>
              <p className="text-gray-600 leading-relaxed font-wide  pr-2 md:px-0">
                Sim. Ao concluir o desafio você recebe um certificado digital para marcar sua conquista.
              </p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <Clock className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 font-wide">Quanto tempo preciso por dia?</h3>
              <p className="text-gray-600 leading-relaxed font-wide pr-3 md:pr-0">
                Em média, 30 a 40 minutos já são suficientes para assistir à aula e praticar. Mas você pode ajustar
                conforme sua rotina.
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Eye illustration */}
        <div className="hidden lg:block lg:col-span-2 w-full h-full">
          <img
            src="/images/esquerdo.jpeg"
            alt="Ilustração realista de um olho humano"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12 md:mt-0 px-4">
        <Button
          size="lg"
          className="bg-[#00687a] hover:bg-teal-700 text-white px-8 py-3 text-xl font-bold rounded-lg w-full md:w-auto"
          onClick={handleCTAClickAndNavigate} // Add onClick directly to Button
        >
          Começar hoje
        </Button>
      </div>
    </section>
  )
}
