import { getEventByCodigo } from '@/data/mockEvent';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import Timeline from '@/components/Timeline';
import Link from 'next/link';

interface Props {
  params: { codigo: string };
}

export default function EventoPage({ params }: Props) {
  const event = getEventByCodigo(params.codigo);

  if (!event) {
    return (
      <main className="min-h-screen bg-[#f5f5f7] flex flex-col items-center justify-center px-4 text-center">
        <div className="text-4xl mb-3">🔍</div>
        <h1 className="text-xl font-bold text-gray-800 mb-1">Evento não encontrado</h1>
        <p className="text-gray-400 text-sm mb-6">
          O código <strong className="text-gray-700">{params.codigo}</strong> não foi encontrado.
        </p>
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
        >
          ← Tentar outro código
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f5f7] px-4 py-8">
      <div className="max-w-xl mx-auto">
        <Header
          clientName={event.clientName}
          eventName={event.eventName}
          eventDate={event.eventDate}
        />
        <ProgressBar
          percent={event.progressPercent}
          nextAction={event.nextAction}
        />
        <Timeline steps={event.steps} eventName={event.eventName} />
      </div>
    </main>
  );
}
