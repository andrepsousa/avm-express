import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import uniformeImg from '../assets/uniforme-ok.png';

const QuemSomos = () => (
  <>
    <Navbar />
    <section className="py-12 bg-primary text-offwhite">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Quem Somos</h1>
        <p className="mb-6 text-offwhite/90">
          Somos especialistas em entregas rápidas, atuando com uma equipe treinada e
          comprometida com a excelência.
        </p>
        <img
          src={uniformeImg}
          alt="Motoboy uniformizado"
          className="w-full h-auto rounded-lg shadow"
          loading="lazy"
        />
      </div>
    </section>
    <Footer />
  </>
);

export default QuemSomos;
