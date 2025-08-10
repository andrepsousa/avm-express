import { MessageCircle } from 'lucide-react';

const FloatingCTA = () => {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER;
  const link = `https://wa.me/${phone}`;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-accent text-primary p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <MessageCircle />
      <span className="sr-only">Abrir WhatsApp</span>
    </a>
  );
};

export default FloatingCTA;
