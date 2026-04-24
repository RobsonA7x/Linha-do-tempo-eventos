import { StepStatus } from '@/types/event';

interface Props {
  status: StepStatus;
}

export default function StatusBadge({ status }: Props) {
  if (status === 'completed') {
    return (
      <span className="inline-flex items-center gap-1 bg-green-900/50 text-green-400 border border-green-800/50 text-xs font-semibold px-2.5 py-1 rounded-full">
        ✅ Concluído
      </span>
    );
  }
  if (status === 'active') {
    return (
      <span className="inline-flex items-center gap-1 bg-yellow-900/50 text-yellow-400 border border-yellow-700/50 text-xs font-semibold px-2.5 py-1 rounded-full">
        🔄 Em andamento
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 bg-[#1a1a24] text-gray-500 border border-[#2a2a35] text-xs font-semibold px-2.5 py-1 rounded-full">
      ⏳ Aguardando
    </span>
  );
}
