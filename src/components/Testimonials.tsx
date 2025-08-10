const testimonials = [
  { author: 'Maria', text: 'Entrega super rápida!' },
  { author: 'João', text: 'Serviço confiável e seguro.' },
];

const Testimonials = () => (
  <section className="py-12 bg-primary text-offwhite">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Depoimentos</h2>
      <div className="space-y-4">
        {testimonials.map((t) => (
          <blockquote key={t.author} className="border-l-4 border-accent pl-4">
            <p>{t.text}</p>
            <footer className="mt-2 text-sm">— {t.author}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
