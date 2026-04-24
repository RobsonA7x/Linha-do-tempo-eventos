import { TimelineStep as TimelineStepType } from '@/types/event';
import TimelineStep from './TimelineStep';

interface Props {
  steps: TimelineStepType[];
  eventName: string;
}

export default function Timeline({ steps, eventName }: Props) {
  return (
    <div>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
        Jornada do Evento
      </p>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gray-200 z-0" />

        <div className="space-y-3">
          {steps.map((step, i) => (
            <div key={step.id} className="relative flex items-start gap-4">
              {/* Dot */}
              <div className={`flex-shrink-0 mt-4 w-10 h-10 rounded-full z-10 flex items-center justify-center text-sm
                ${step.status === 'completed'
                  ? 'bg-green-500 text-white'
                  : step.status === 'active'
                  ? 'bg-blue-500 text-white ring-4 ring-blue-100'
                  : 'bg-white border-2 border-gray-200 text-gray-400'
                }`}>
                {step.status === 'completed' ? '✓' : (i + 1)}
              </div>

              <div className="flex-1 min-w-0">
                <TimelineStep step={step} eventName={eventName} index={i} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
