import CTAWhatsApp from './CTAWhatsApp';
import { motion } from 'framer-motion';

const envioImg = '/src/assets/envio-expresso.png';

const Hero = () => (
  <section className="bg-primary text-offwhite">
    <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-8">
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Envio Expresso
        </motion.h1>
        <p className="mb-6 text-lg">Logística ágil para o seu negócio.</p>
        <div className="flex justify-center md:justify-start">
          <CTAWhatsApp />
        </div>
      </div>
      <motion.img
        src={envioImg}
        alt="Motoboy correndo"
        className="flex-1 w-full h-auto rounded-lg shadow-lg"
        loading="lazy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </div>
  </section>
);

export default Hero;
