interface Props {
  image: string;
  title: string;
  description: string;
}

const ServiceCard = ({ image, title, description }: Props) => (
  <div className="bg-secondary p-4 rounded shadow text-offwhite">
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover mb-3 rounded"
      loading="lazy"
    />
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

export default ServiceCard;
