import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Differentials from '../components/Differentials';
import ServicesGridImage from '../components/ServicesGridImage';
import ServiceCard from '../components/ServiceCard';
import Steps from '../components/Steps';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import PricingTable from '../components/PricingTable';
import CoverageMap from '../components/CoverageMap';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import CTAWhatsApp from '../components/CTAWhatsApp';

const coletaImg = '/src/assets/coleta.png';
const brindesImg = '/src/assets/brindes.png';
const malotesImg = '/src/assets/malotes.png';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AVM Express',
  telephone: '+55 96 8378-096',
  url: 'https://avmexpress.com.br',
};

const Home = () => (
  <>
    <Helmet>
      <title>AVM Express - Entregas Rápidas</title>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />
    <Hero />
      <Differentials />
      <ServicesGridImage />
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
          <ServiceCard
            image={coletaImg}
            title="Coleta"
            description="Retiramos no local que você precisar."
          />
          <ServiceCard
            image={brindesImg}
            title="Entrega de Brindes"
            description="Soluções para ações promocionais."
          />
          <ServiceCard
            image={malotesImg}
            title="Banco/Malotes"
            description="Transporte seguro de valores."
          />
        </div>
      </section>
      <Steps />
      <Stats />
      <Testimonials />
      <PricingTable />
      <CoverageMap />
      <FAQ />
      <div className="py-12 text-center">
        <CTAWhatsApp />
      </div>
      <Footer />
    </>
  );

export default Home;
