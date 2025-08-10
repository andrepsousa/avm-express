import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import CTAWhatsApp from '../components/CTAWhatsApp';

const coletaImg = 'https://via.placeholder.com/400x300?text=Coleta';
const brindesImg = 'https://via.placeholder.com/400x300?text=Brindes';
const malotesImg = 'https://via.placeholder.com/400x300?text=Malotes';

const services = [
  { image: coletaImg, title: 'Coleta', description: 'Retirada programada em qualquer ponto.', sla: 'Até 1h', addon: 'Seguro opcional' },
  { image: brindesImg, title: 'Entrega de Brindes', description: 'Ações promocionais e brindes corporativos.', sla: 'Até 3h', addon: 'Relatório de entrega' },
  { image: malotesImg, title: 'Banco/Malotes', description: 'Transporte seguro de valores e documentos.', sla: 'Rotas diárias', addon: 'Escolta disponível' },
];

const Servicos = () => (
  <>
    <Navbar />
    <section className="py-12 max-w-6xl mx-auto grid gap-4 md:grid-cols-3">
      {services.map((s) => (
        <div key={s.title}>
          <ServiceCard image={s.image} title={s.title} description={s.description} />
          <p className="text-offwhite text-sm mt-2">SLA: {s.sla}</p>
          <p className="text-offwhite text-sm">Add-on: {s.addon}</p>
        </div>
      ))}
    </section>
    <div className="py-12 text-center"><CTAWhatsApp /></div>
    <Footer />
  </>
);

export default Servicos;
