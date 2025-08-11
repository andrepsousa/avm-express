import gridImg from '../assets/grid-servicos.png';

const ServicesGridImage = () => (
  <section className="py-12">
    <div className="max-w-6xl mx-auto">
      <img
        src={gridImg}
        alt="AVM Express serviços"
        className="w-full h-auto rounded-lg shadow"
        loading="lazy"
      />
    </div>
  </section>
);

export default ServicesGridImage;
