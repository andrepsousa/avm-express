import CTAWhatsApp from './CTAWhatsApp';
import { motion } from 'framer-motion';

const envioImg = 'https://via.placeholder.com/800x600?text=Envio+Expresso';

const Hero = () => (
  <section className="bg-primary text-offwhite">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center py-12 gap-8">
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Envio Expresso
        </motion.h1>
        <p className="mb-6">Logística ágil para o seu negócio.</p>
        <CTAWhatsApp />
      </div>
      <motion.img
        src={envioImg}
        alt="Motoboy correndo"
        className="flex-1 w-full h-auto"
        loading="lazy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </div>
  </section>
);

export default Hero;
