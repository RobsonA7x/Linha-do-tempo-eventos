'use client';

import { motion } from 'framer-motion';

interface Props {
  percent: number;
}

export default function ProgressBar({ percent }: Props) {
  const clamped = Math.min(100, Math.max(0, percent));

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-400 text-sm font-semibold">Progresso geral</span>
        <span className="text-purple-400 text-sm font-bold">{clamped}%</span>
      </div>
      <div className="w-full h-2.5 bg-[#1a1a24] rounded-full overflow-hidden border border-[#2a2a35]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${clamped}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-purple-700 to-purple-400"
        />
      </div>
    </div>
  );
}
