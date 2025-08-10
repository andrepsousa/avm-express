import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-secondary text-offwhite p-4">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <Link to="/" className="font-bold text-xl text-accent">AVM Express</Link>
      <div className="space-x-4 text-sm md:text-base">
        <NavLink to="/servicos" className="hover:text-accent">Serviços</NavLink>
        <NavLink to="/quem-somos" className="hover:text-accent">Quem Somos</NavLink>
        <NavLink to="/areas-de-atuacao" className="hover:text-accent">Áreas</NavLink>
        <NavLink to="/orcamento" className="hover:text-accent">Orçamento</NavLink>
        <NavLink to="/contato" className="hover:text-accent">Contato</NavLink>
      </div>
    </div>
  </nav>
);

export default Navbar;
