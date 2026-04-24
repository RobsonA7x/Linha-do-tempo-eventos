export type StepStatus = 'completed' | 'active' | 'pending';

export interface Contact {
  name: string;
  role: string;
  phone: string;
  email: string;
  avatar?: string;
}

export interface ChecklistItem {
  label: string;
  done: boolean;
}

export interface TimelineStep {
  id: string;
  sector: string;
  icon: string;
  description: string;
  status: StepStatus;
  dueDate: string;
  contact: Contact;
  checklist: ChecklistItem[];
}

export interface EventData {
  clientName: string;
  eventName: string;
  eventDate: string;
  codigo: string;
  progressPercent: number;
  nextAction: string;
  steps: TimelineStep[];
}
