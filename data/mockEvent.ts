import { EventData } from '@/types/event';

const events: EventData[] = [
  {
    clientName: 'Turma de Engenharia',
    eventName: 'Formatura Engenharia 2026',
    eventDate: '15 de Novembro de 2026',
    codigo: 'ENG2026',
    progressPercent: 45,
    nextAction: 'Aguardamos confirmação dos fornecedores de decoração até 30/04/2026.',
    steps: [
      {
        id: '1',
        sector: 'Comercial',
        icon: '🤝',
        description: 'Proposta aprovada e contrato assinado.',
        status: 'completed',
        dueDate: '01/03/2026',
        contact: {
          name: 'Ana Paula Ferreira',
          role: 'Consultora Comercial',
          phone: '5511999990001',
          email: 'ana.paula@espacodeeventos.com.br',
        },
        checklist: [
          { label: 'Proposta enviada ao cliente', done: true },
          { label: 'Proposta aprovada', done: true },
          { label: 'Contrato assinado', done: true },
          { label: 'Sinal pago (30%)', done: true },
        ],
      },
      {
        id: '2',
        sector: 'Facilities',
        icon: '🏛️',
        description: 'Espaço reservado e layout do salão aprovado.',
        status: 'completed',
        dueDate: '15/03/2026',
        contact: {
          name: 'Carlos Menezes',
          role: 'Gerente de Facilities',
          phone: '5511999990002',
          email: 'carlos.menezes@espacodeeventos.com.br',
        },
        checklist: [
          { label: 'Data reservada no sistema', done: true },
          { label: 'Visita técnica realizada', done: true },
          { label: 'Layout do salão aprovado', done: true },
          { label: 'Manutenção preventiva agendada', done: true },
        ],
      },
      {
        id: '3',
        sector: 'Logística',
        icon: '📦',
        description: 'Definindo fornecedores e organizando a decoração.',
        status: 'active',
        dueDate: '30/04/2026',
        contact: {
          name: 'Mariana Costa',
          role: 'Coordenadora de Logística',
          phone: '5511999990003',
          email: 'mariana.costa@espacodeeventos.com.br',
        },
        checklist: [
          { label: 'Fornecedor de buffet confirmado', done: true },
          { label: 'Fornecedor de flores confirmado', done: false },
          { label: 'Decoração aprovada pelo cliente', done: false },
          { label: 'Transporte e montagem agendados', done: false },
        ],
      },
      {
        id: '4',
        sector: 'TI',
        icon: '💻',
        description: 'Infraestrutura audiovisual, internet e totens.',
        status: 'pending',
        dueDate: '01/10/2026',
        contact: {
          name: 'Rafael Lima',
          role: 'Analista de TI',
          phone: '5511999990004',
          email: 'rafael.lima@espacodeeventos.com.br',
        },
        checklist: [
          { label: 'Projeto de som e iluminação elaborado', done: false },
          { label: 'Internet de alta velocidade configurada', done: false },
          { label: 'Totens de check-in programados', done: false },
          { label: 'Teste técnico realizado', done: false },
        ],
      },
      {
        id: '5',
        sector: 'Dia do Evento',
        icon: '🎉',
        description: 'Operação completa — coordenação e equipe de apoio.',
        status: 'pending',
        dueDate: '15/11/2026',
        contact: {
          name: 'Fernanda Souza',
          role: 'Coordenadora de Eventos',
          phone: '5511999990005',
          email: 'fernanda.souza@espacodeeventos.com.br',
        },
        checklist: [
          { label: 'Briefing da equipe realizado', done: false },
          { label: 'Montagem do salão concluída', done: false },
          { label: 'Recepção dos convidados', done: false },
          { label: 'Evento realizado com sucesso', done: false },
        ],
      },
      {
        id: '6',
        sector: 'Pós-Evento',
        icon: '📋',
        description: 'Relatório final, devolutiva e entrega de fotos.',
        status: 'pending',
        dueDate: '30/11/2026',
        contact: {
          name: 'Ana Paula Ferreira',
          role: 'Consultora Comercial',
          phone: '5511999990001',
          email: 'ana.paula@espacodeeventos.com.br',
        },
        checklist: [
          { label: 'Relatório de satisfação enviado', done: false },
          { label: 'Fotos e vídeos entregues', done: false },
          { label: 'NPS coletado', done: false },
          { label: 'Saldo final quitado', done: false },
        ],
      },
    ],
  },
];

export function getEventByCodigo(codigo: string): EventData | undefined {
  return events.find((e) => e.codigo === codigo.toUpperCase());
}
