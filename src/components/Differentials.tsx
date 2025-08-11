const items = [
  'Motoboys uniformizados',
  'Rastreamento em tempo real',
  'Atendimento personalizado',
];

const Differentials = () => (
  <section className="py-12 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Diferenciais</h2>
      <ul className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <li
            key={item}
            className="bg-white p-4 rounded border-t-4 border-accent text-center"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Differentials;
