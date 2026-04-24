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
      <main className="min-h-screen bg-[#0d0d0f] flex flex-col items-center justify-center px-4 text-center">
        <div className="text-5xl mb-4">🔍</div>
        <h1 className="text-2xl font-bold text-white mb-2">Evento não encontrado</h1>
        <p className="text-gray-400 mb-6">
          O código <strong className="text-white">{params.codigo}</strong> não corresponde a nenhum evento.
        </p>
        <Link
          href="/"
          className="bg-purple-700 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          ← Tentar outro código
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d0d0f] px-4 py-10">
      <div className="max-w-2xl mx-auto">
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
