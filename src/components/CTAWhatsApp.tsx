const CTAWhatsApp = () => {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER;
  const link = `https://wa.me/${phone}`;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded shadow hover:opacity-90"
    >
      Fale no WhatsApp
    </a>
  );
};

export default CTAWhatsApp;
