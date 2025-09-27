import { PenTool, Pencil, Video } from "lucide-react"

export default function FaqSection() {
  const faqs = [
    {
      icon: <PenTool className="w-6 h-6 text-[#00687a]" />,
      question: "Preciso já saber desenhar?",
      answer:
        "Não. O Desafio foi feito justamente para quem está começando ou para quem já desenha e quer melhorar. Você vai aprender tudo passo a passo, de forma simples e prática.",
    },
    {
      icon: <Pencil className="w-6 h-6 text-[#00687a]" />,
      question: "Preciso de materiais caros?",
      answer:
        "De jeito nenhum. Tudo o que você precisa é de lápis grafite, papel e borracha. Ferramentas simples, que qualquer pessoa pode ter em casa.",
    },
    {
      icon: <Video className="w-6 h-6 text-[#00687a]" />,
      question: "É ao vivo ou gravado?",
      answer:
        "As aulas já estão gravadas, para você assistir quando quiser. Assim você pode pausar, voltar e rever cada etapa no seu próprio ritmo.",
    },
  ]

  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-700 mb-12">FAQ</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Imagem do lado esquerdo */}
        <div className="hidden lg:block w-full h-full pr-32">
          <img
            src="/images/bean.png"
            alt="Instrutor do curso"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* FAQ do lado direito */}
        <div className="space-y-8 px-4 lg:px-16">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center gap-3">
                {faq.icon}
                <h3 className="text-xl font-semibold text-gray-700">{faq.question}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-wide pl-9">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
