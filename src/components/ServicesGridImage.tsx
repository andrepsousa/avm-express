const gridImg = '/src/assets/grid-servicos.png';

const ServicesGridImage = () => (
  <section className="py-12">
    <img
      src={gridImg}
      alt="AVM Express serviços"
      className="w-full h-auto rounded-lg shadow"
      loading="lazy"
    />
  </section>
);

export default ServicesGridImage;
