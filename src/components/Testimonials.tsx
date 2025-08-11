const testimonials = [
  { author: 'Maria', text: 'Entrega super rápida!' },
  { author: 'João', text: 'Serviço confiável e seguro.' },
];

const Testimonials = () => (
  <section className="py-12 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Depoimentos</h2>
      <div className="space-y-4">
        {testimonials.map((t) => (
          <blockquote
            key={t.author}
            className="border-l-4 border-accent pl-4 text-primary"
          >
            <p>{t.text}</p>
            <footer className="mt-2 text-sm text-gray-600">— {t.author}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
