'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
  clientName: string;
  eventName: string;
  eventDate: string;
}

export default function Header({ clientName, eventName, eventDate }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="flex items-center justify-between mb-4">
        <Link href="/" className="text-gray-500 hover:text-gold-400 text-sm transition-colors">
          ← Voltar
        </Link>
        <span className="text-xs text-gray-600 bg-dark-800 px-3 py-1 rounded-full border border-dark-600">
          🔒 Portal do Cliente
        </span>
      </div>

      <div className="bg-dark-800 border border-dark-600 rounded-2xl p-6">
        <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-1">Bem-vindo(a),</p>
        <h1 className="text-3xl font-bold text-white mb-1">{clientName}</h1>
        <h2 className="text-xl text-gray-300 mb-3">🎊 {eventName}</h2>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>📅</span>
          <span>Data do evento: <strong className="text-white">{eventDate}</strong></span>
        </div>
      </div>
    </motion.div>
  );
}
