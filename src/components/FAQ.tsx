const faqs = [
  { q: 'Como solicitar um motoboy?', a: 'Basta preencher o formulário ou falar no WhatsApp.' },
  { q: 'Vocês atendem fora da cidade?', a: 'Sim, consulte nossa área de cobertura.' },
];

const FAQ = () => (
  <section className="py-12 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Perguntas Frequentes</h2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="bg-white p-4 rounded border border-gray-200"
          >
            <summary className="font-medium cursor-pointer text-primary">
              {f.q}
            </summary>
            <p className="mt-2 text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
