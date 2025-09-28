'use client'

import { useState } from 'react'

export default function Footer() {
  const [buttonText, setButtonText] = useState('Contato')
  const emailAddress = 'atendimento@keithnunes.com'

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setButtonText('Email Copiado!')
      setTimeout(() => {
        setButtonText('Contato')
      }, 2000) // Reset text after 2 seconds
    } catch (err) {
      console.error('Failed to copy email: ', err)
      setButtonText('Erro ao Copiar')
      setTimeout(() => {
        setButtonText('Contato')
      }, 2000)
    }
  }

  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-wider">ATELIER KEITH NUNES</h2>

        {/* Subtitle */}
        <p className="text-gray-300 mb-8 text-lg">Transformando vidas através da arte do desenho</p>

        {/* Footer links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm">
          <button
            onClick={handleCopyEmail}
            className="text-gray-300 hover:text-white transition-colors font-wide focus:outline-none"
          >
            {buttonText}
          </button>
          <a href="/termos-de-uso" className="text-gray-300 hover:text-white transition-colors font-wide">
            Termos de Uso
          </a>
          <a href="/politica-de-privacidade" className="text-gray-300 hover:text-white transition-colors font-wide">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  )
}
