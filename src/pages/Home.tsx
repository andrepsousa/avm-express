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

import coletaImg from '../assets/coleta.png';
import brindesImg from '../assets/brindes.png';
import malotesImg from '../assets/malotes.png';

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

    <section className="py-12 max-w-6xl mx-auto grid gap-4 md:grid-cols-3">
      <ServiceCard image={coletaImg} title="Coleta" description="Retiramos no local que você precisar." />
      <ServiceCard image={brindesImg} title="Entrega de Brindes" description="Soluções para ações promocionais." />
      <ServiceCard image={malotesImg} title="Banco/Malotes" description="Transporte seguro de valores." />
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
