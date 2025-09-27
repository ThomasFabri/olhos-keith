import Image from "next/image";
import FadeInWhenVisible from "./animations/FadeInWhenVisible";

export default function BeforeAfterSection() {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center px-4">
      {/* Linha 1: Headline */}
      <FadeInWhenVisible>
        <h1 className="text-4xl md:text-5xl font-wide text-[#63615f] leading-tight text-center mb-12">
          Em apenas <span className="font-bold"> 5 dias</span>
        </h1>
      </FadeInWhenVisible>

      {/* Linha 2: Imagens Antes e Depois */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
        {/* Antes */}
        <FadeInWhenVisible>
          <div className="flex flex-col items-center">
            <div className="text-[#63615f] font-bold px-3 py-1 text-3xl rounded z-10 font-wide mb-2">
              Antes
            </div>
            <Image
              src="/images/antes.jpg"
              alt="Antes"
              width={400}
              height={250}
              className="border border-[#00687a] object-cover rounded-lg"
            />
          </div>
        </FadeInWhenVisible>

        {/* Depois */}
        <FadeInWhenVisible delay={0.2}>
          <div className="flex flex-col items-center">
            <div className="text-[#63615f] font-bold px-3 py-1 text-3xl rounded z-10 font-wide mb-2">
              Depois
            </div>
            <Image
              src="/images/depois.jpg"
              alt="Depois"
              width={400}
              height={250}
              className="border border-[#00687a] object-cover rounded-lg"
            />
          </div>
        </FadeInWhenVisible>
      </div>

      {/* Linha 3: Card com imagem sobreposta */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Card */}
        <div className="bg-[#258a9c] p-8 rounded-xl shadow-lg text-center order-2 md:order-1">
          <p className="font-wide font-bold italic text-white text-lg md:text-xl leading-snug">
            "Esse foi o primeiro desenho que tive coragem de mostrar para a minha família"
          </p>
          <span className="mt-4 font-semibold text-white italic block">
            - Gabriela Fabri
          </span>
        </div>

        {/* Imagem com medalha */}
        <div className="relative order-1 md:order-2">
          <Image
            src="/images/gabi.jpg"
            alt="Imagem"
            width={180}
            height={180}
            className="rounded-xl object-cover"
          />
          {/* Medalha sobreposta */}
          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Image
              src="/images/2.png"
              alt="Medalha"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>

    </section>
  );
}
