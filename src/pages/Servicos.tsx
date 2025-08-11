import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import CTAWhatsApp from '../components/CTAWhatsApp';

const coletaImg = '/src/assets/coleta.png';
const brindesImg = '/src/assets/brindes.png';
const malotesImg = '/src/assets/malotes.png';

const services = [
  { image: coletaImg, title: 'Coleta', description: 'Retirada programada em qualquer ponto.', sla: 'Até 1h', addon: 'Seguro opcional' },
  { image: brindesImg, title: 'Entrega de Brindes', description: 'Ações promocionais e brindes corporativos.', sla: 'Até 3h', addon: 'Relatório de entrega' },
  { image: malotesImg, title: 'Banco/Malotes', description: 'Transporte seguro de valores e documentos.', sla: 'Rotas diárias', addon: 'Escolta disponível' },
];

const Servicos = () => (
  <>
    <Navbar />
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title}>
            <ServiceCard
              image={s.image}
              title={s.title}
              description={s.description}
            />
            <p className="text-sm text-gray-600 mt-2">SLA: {s.sla}</p>
            <p className="text-sm text-gray-600">Add-on: {s.addon}</p>
          </div>
        ))}
      </div>
    </section>
    <div className="py-12 text-center">
      <CTAWhatsApp />
    </div>
    <Footer />
  </>
);

export default Servicos;
