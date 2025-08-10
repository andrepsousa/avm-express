const items = [
  'Motoboys uniformizados',
  'Rastreamento em tempo real',
  'Atendimento personalizado',
];

const Differentials = () => (
  <section className="py-12">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Diferenciais</h2>
      <ul className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <li key={item} className="bg-secondary p-4 rounded text-offwhite text-center">{item}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default Differentials;
