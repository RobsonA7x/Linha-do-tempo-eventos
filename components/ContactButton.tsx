interface Props {
  phone: string;
  email: string;
  eventName: string;
}

export default function ContactButton({ phone, email, eventName }: Props) {
  const whatsappMsg = encodeURIComponent(
    `Olá! Tenho uma dúvida sobre o evento: ${eventName}`
  );

  return (
    <div className="flex flex-col gap-2">
      <a
        href={`https://wa.me/${phone}?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-green-800/40 hover:bg-green-700/50 border border-green-700/50 text-green-400 text-sm font-semibold rounded-xl px-4 py-2.5 transition-colors"
      >
        💬 Falar no WhatsApp
      </a>
      <a
        href={`mailto:${email}?subject=Dúvida sobre o evento: ${eventName}`}
        className="flex items-center justify-center gap-2 bg-[#1a1a24] hover:bg-[#2a2a35] border border-[#2a2a35] text-gray-400 hover:text-gray-200 text-sm font-semibold rounded-xl px-4 py-2.5 transition-colors"
      >
        ✉️ Enviar E-mail
      </a>
    </div>
  );
}
