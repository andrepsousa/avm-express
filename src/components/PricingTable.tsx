const PricingTable = () => (
  <section className="py-12">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Tabela de Preços</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-secondary text-offwhite">
            <th className="p-2">Serviço</th>
            <th className="p-2">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-primary text-offwhite">
            <td className="p-2">Entrega Local</td>
            <td className="p-2">R$ 20,00</td>
          </tr>
          <tr className="bg-secondary text-offwhite">
            <td className="p-2">Entrega Regional</td>
            <td className="p-2">R$ 35,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default PricingTable;
