const PricingTable = () => (
  <section className="py-12">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Tabela de Preços</h2>

      <table className="w-full text-left border-collapse overflow-hidden rounded-2xl">
        <thead>
          <tr className="bg-secondary text-offwhite">
            <th className="p-3">Serviço</th>
            <th className="p-3">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-700">
            <td className="p-3">Entrega Local</td>
            <td className="p-3">R$ 20,00</td>
          </tr>
          <tr>
            <td className="p-3">Entrega Regional</td>
            <td className="p-3">R$ 35,00+</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default PricingTable;
