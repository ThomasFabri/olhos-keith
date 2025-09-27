// components/artist-section.tsx
"use client";

import Image from "next/image";
import FadeInWhenVisible from "./animations/FadeInWhenVisible";

export default function ArtistSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4">
        {/* Coluna esquerda: imagem */}
        <FadeInWhenVisible>
          <div className="flex justify-center">
            <Image
              src="/images/artist.jpg" // Substitua pela imagem real
              alt="Keith Nunes"
              width={400}
              height={600} // proporção 3:5
              className="object-cover"
            />
          </div>
        </FadeInWhenVisible>

        {/* Coluna direita: textos */}
        <FadeInWhenVisible delay={0.2}>
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            
            {/* h2 */}
            <h2 className="text-3xl md:text-5xl font-wide font-light text-[#63615f] leading-tight">
              O ARTISTA
            </h2>

            {/* Parágrafo */}
            <p className="text-lg md:text-xl font-wide text-gray-700 leading-relaxed px-4 md:px-0">
              &quot;Sou Keith Nunes, artista e professor, já ajudei milhares de alunos
              no Brasil e no exterior a <span className="font-bold">destravar</span> no desenho e transformar seus
              traços em realismo. Criei esse <span className="font-bold">desafio</span> para <span className="font-bold">você</span> que sempre sonhou
              em desenhar olhos mas acha que não tem dom.
            </p>

            {/* Frase em destaque */}
            <p className="text-lg md:text-xl font-wide text-[#63615f] font-semibold leading-snug">
              Desenhar é método e esse <br /> método está ao seu alcance.&quot;
            </p>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
