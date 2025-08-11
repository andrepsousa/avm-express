import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import CoverageMap from '../components/CoverageMap';

const Contato = () => (
  <>
    <Navbar />
    <section className="py-12 max-w-4xl mx-auto text-offwhite">
      <h1 className="text-4xl font-bold mb-4">Contato</h1>
      <p className="mb-4">Telefone: (96) 8378-096</p>
      <p className="mb-4">Email: contato@avmexpress.com.br</p>
      <ContactForm />
    </section>
    <CoverageMap />
    <Footer />
  </>
);

export default Contato;
