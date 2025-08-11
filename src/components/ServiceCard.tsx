interface Props {
  image: string;
  title: string;
  description: string;
}

const ServiceCard = ({ image, title, description }: Props) => (
  <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover"
      loading="lazy"
    />
    <div className="p-4">
      <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default ServiceCard;
