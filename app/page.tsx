'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [codigo, setCodigo] = useState('');
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (codigo.trim()) {
      router.push(`/evento/${codigo.trim().toUpperCase()}`);
    }
  }

  return (
    <main className="min-h-screen bg-[#0d0d0f] flex flex-col items-center justify-center px-4">
      {/* Background gradient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-900/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo / Icon */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎊</div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Portal do Cliente
          </h1>
          <p className="text-gray-400 text-base leading-relaxed">
            Acompanhe a jornada do seu evento em tempo real — de cada setor, a um clique de distância.
          </p>
        </div>

        {/* Login card */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#13131a] border border-[#2a2a35] rounded-2xl p-6 space-y-4"
        >
          <div>
            <label className="block text-gray-400 text-sm font-semibold mb-2">
              Código do Evento
            </label>
            <input
              type="text"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              placeholder="Ex: ENG2026"
              className="w-full bg-[#0d0d0f] border border-[#2a2a35] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-600 transition-colors text-base tracking-widest uppercase"
              autoComplete="off"
              spellCheck={false}
            />
          </div>

          <button
            type="submit"
            disabled={!codigo.trim()}
            className="w-full bg-purple-700 hover:bg-purple-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors text-base"
          >
            Acessar meu evento →
          </button>
        </form>

        {/* Demo hint */}
        <p className="text-center text-gray-600 text-xs mt-4">
          Não tem um código?{' '}
          <button
            onClick={() => setCodigo('ENG2026')}
            className="text-purple-400 hover:text-purple-300 underline transition-colors"
          >
            Usar código demo: ENG2026
          </button>
        </p>
      </motion.div>
    </main>
  );
}
