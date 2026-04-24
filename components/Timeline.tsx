import { TimelineStep as TimelineStepType } from '@/types/event';
import TimelineStep from './TimelineStep';

interface Props {
  steps: TimelineStepType[];
  eventName: string;
}

export default function Timeline({ steps, eventName }: Props) {
  return (
    <div className="relative">
      <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-4">
        Etapas do Evento
      </p>
      <div className="relative space-y-3">
        {/* Vertical connector line */}
        <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-[#2a2a35] z-0" />

        {steps.map((step, i) => (
          <div key={step.id} className="relative z-10 pl-14">
            {/* Step dot */}
            <div
              className={`absolute left-0 top-5 w-12 h-12 rounded-xl flex items-center justify-center text-xl z-10
                ${
                  step.status === 'completed'
                    ? 'bg-green-900/60 border border-green-700'
                    : step.status === 'active'
                    ? 'bg-yellow-900/60 border border-yellow-600'
                    : 'bg-[#1a1a24] border border-[#2a2a35]'
                }`}
            >
              {step.icon}
            </div>
            <TimelineStep step={step} eventName={eventName} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
