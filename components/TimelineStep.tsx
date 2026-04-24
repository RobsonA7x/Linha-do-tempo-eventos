'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TimelineStep as TimelineStepType } from '@/types/event';
import StatusBadge from './StatusBadge';
import ContactButton from './ContactButton';

interface Props {
  step: TimelineStepType;
  eventName: string;
  index: number;
}

export default function TimelineStep({ step, eventName, index }: Props) {
  const [open, setOpen] = useState(step.status === 'active');

  const borderColor =
    step.status === 'completed'
      ? 'border-green-700'
      : step.status === 'active'
      ? 'border-yellow-500'
      : 'border-[#2a2a35]';

  const iconBg =
    step.status === 'completed'
      ? 'bg-green-900/60'
      : step.status === 'active'
      ? 'bg-yellow-900/60'
      : 'bg-[#1a1a24]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`bg-[#13131a] border ${borderColor} rounded-2xl overflow-hidden transition-all duration-300 ${
        step.status === 'active' ? 'shadow-lg shadow-yellow-500/10' : ''
      }`}
    >
      {/* Header — always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-white/5 transition-colors"
      >
        {/* Icon */}
        <div className={`relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${iconBg}`}>
          {step.icon}
          {step.status === 'active' && (
            <span className="absolute inset-0 rounded-xl border-2 border-yellow-500 animate-ping opacity-40" />
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-white font-bold text-base">{step.sector}</h3>
            <StatusBadge status={step.status} />
          </div>
          <p className="text-gray-400 text-sm truncate">{step.description}</p>
        </div>

        {/* Date + chevron */}
        <div className="flex-shrink-0 text-right">
          <p className="text-gray-500 text-xs mb-1">📅 {step.dueDate}</p>
          <span className="text-gray-500 text-sm">{open ? '▲' : '▼'}</span>
        </div>
      </button>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-[#2a2a35] pt-4">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Checklist */}
                <div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">
                    Checklist
                  </p>
                  <ul className="space-y-2">
                    {step.checklist.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span>{item.done ? '✅' : '⬜'}</span>
                        <span className={item.done ? 'text-gray-300' : 'text-gray-500'}>
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">
                    Responsável
                  </p>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-yellow-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {step.contact.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{step.contact.name}</p>
                      <p className="text-gray-500 text-xs">{step.contact.role}</p>
                    </div>
                  </div>
                  <ContactButton
                    phone={step.contact.phone}
                    email={step.contact.email}
                    eventName={eventName}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
