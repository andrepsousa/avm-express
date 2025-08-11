import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import CTAWhatsApp from '../components/CTAWhatsApp';

import coletaImg from '../assets/coleta.png';
import brindesImg from '../assets/brindes.png';
import malotesImg from '../assets/malotes.png';

const services = [
  { image: coletaImg,   title: 'Coleta',            description: 'Retirada programada em qualquer ponto.' },
  { image: brindesImg,  title: 'Entrega de Brindes',description: 'Ações promocionais e brindes corporativos.' },
  { image: malotesImg,  title: 'Banco/Malotes',     description: 'Transporte seguro de valores e documentos.' },
];

const Services = () => (
  <>
    <Navbar />
    <section className="py-12 bg-primary text-offwhite">
      <div className="max-w-6xl mx-auto grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title}>
            <ServiceCard image={s.image} title={s.title} description={s.description} />
          </div>
        ))}
      </div>
      <div className="py-12 text-center">
        <CTAWhatsApp />
      </div>
    </section>
    <Footer />
  </>
);

export default Services;
