import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const uniformeImg = '/src/assets/uniforme-ok.png';

const QuemSomos = () => (
  <>
    <Navbar />
    <section className="py-12 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Quem Somos</h1>
      <p className="mb-4 text-gray-700">
        Somos especialistas em entregas rápidas, atuando com uma equipe treinada e
        comprometida com a excelência.
      </p>
      <img
        src={uniformeImg}
        alt="Motoboy uniformizado"
        className="w-full h-auto rounded-lg shadow"
        loading="lazy"
      />
    </section>
    <Footer />
  </>
);

export default QuemSomos;
