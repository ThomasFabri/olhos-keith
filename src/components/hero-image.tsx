// components/hero-image.tsx
"use client";

import Image from "next/image";
import FadeInWhenVisible from "./animations/FadeInWhenVisible";
import { event as fbEvent } from "@/lib/fbpixel";

const checkoutUrl = 'https://pay.hotmart.com/L102106228U?checkoutMode=10' // Define checkoutUrl here

export default function HeroImage() {
  const handleCTAClickAndNavigate = () => {
    fbEvent('Lead');
    window.location.href = checkoutUrl // Programmatic navigation
  };

  return (
    <section className="w-full py-16 bg-[#fdfcf8]">
      <div className="grid grid-cols-9 items-center">
        {/* Coluna vazia esquerda (2/9) */}
        <div className="col-span-1" />

        {/* Conteúdo central (5/9) */}
        <div className="col-span-7 text-center">
          {/* Headline */}
          <FadeInWhenVisible>
            <h1 className=" text-4xl md:text-5xl font-wide text-[#63615f] leading-tight">
              Desenhe seu primeiro <span className="font-bold">olho realista</span> <br /> em 5 dias
            </h1>
          </FadeInWhenVisible>

          {/* Imagem */}
          <FadeInWhenVisible delay={0.2}>
            <div className="mt-8 flex justify-center">
              <Image
                src="/images/eyes-hero.jpeg" // Substitua pela imagem real
                alt="Olhos realistas desenhados a lápis"
                width={900}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </FadeInWhenVisible>

          {/* Subtítulo */}
          <FadeInWhenVisible delay={0.4}>
            <p className="mt-6 text-xl md:text-2xl font-wide leading-tight text-[#63615f]">
              Como criar seu primeiro <span className="font-bold">olho realista</span> em casa só com <span className="font-bold">lápis e <br /> papel, </span>
              mesmo que <span className="font-bold">você</span> ache que <span className="font-bold">não tem habilidade.</span>
            </p>
          </FadeInWhenVisible>

          {/* Botão CTA */}
          <FadeInWhenVisible delay={0.6}>
            <div className="mt-12 md:mt-4">
              <button
                className="px-8 py-3 bg-[#00687a] text-white font-bold font-wide rounded-xl shadow-md hover:bg-[#005460] transition text-xl"
                onClick={handleCTAClickAndNavigate} // Add onClick directly to Button
              >
                Começar hoje
              </button>
            </div>
          </FadeInWhenVisible>
        </div>

        {/* Coluna vazia direita (2/9) */}
        <div className="col-span-1" />
      </div>
    </section>
  );
}

