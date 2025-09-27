export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-wider">ATELIER KEITH NUNES</h2>

        {/* Subtitle */}
        <p className="text-gray-300 mb-8 text-lg">Transformando vidas através da arte do desenho</p>

        {/* Footer links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm">
          <a href="#contato" className="text-gray-300 hover:text-white transition-colors font-wide">
            Contato
          </a>
          <a href="#termos" className="text-gray-300 hover:text-white transition-colors font-wide">
            Termos de Uso
          </a>
          <a href="#privacidade" className="text-gray-300 hover:text-white transition-colors font-wide">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  )
}
