import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Orcamento = () => (
  <>
    <Navbar />
    <section className="py-12 max-w-4xl mx-auto text-offwhite">
      <h1 className="text-4xl font-bold mb-4">Solicite um Orçamento</h1>
      <ContactForm />
    </section>
    <Footer />
  </>
);

export default Orcamento;
