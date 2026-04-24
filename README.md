# 🎉 Portal do Cliente — Jornada do Seu Evento

Site interativo de linha do tempo para clientes de espaços de eventos, permitindo acompanhar cada etapa da organização do evento com contato direto por setor.

## 🚀 Como rodar

```bash
npm install
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura de Pastas

```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  ← Landing page com CTA de login
│   └── evento/
│       └── [codigo]/
│           └── page.tsx          ← Página da jornada do cliente
├── components/
│   ├── Header.tsx
│   ├── Timeline.tsx
│   ├── TimelineStep.tsx
│   ├── ContactButton.tsx
│   ├── ProgressBar.tsx
│   └── StatusBadge.tsx
├── data/
│   └── mockEvent.ts
└── types/
    └── event.ts
```

## ➕ Como adicionar novos eventos

Edite o arquivo `data/mockEvent.ts` e adicione um novo objeto seguindo a interface `EventData`.

## 🛠️ Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- TypeScript
