import { Link, NavLink } from 'react-router-dom';

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'text-accent' : 'hover:text-accent';

const Navbar = () => (
  <nav className="bg-white shadow-sm">
    <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-primary font-bold text-xl">AVM Express</Link>
      <div className="space-x-4 text-sm md:text-base text-primary">
        <NavLink to="/servicos" className={linkClass}>
          Serviços
        </NavLink>
        <NavLink to="/quem-somos" className={linkClass}>
          Quem Somos
        </NavLink>
        <NavLink to="/areas-de-atuacao" className={linkClass}>
          Áreas
        </NavLink>
        <NavLink to="/orcamento" className={linkClass}>
          Orçamento
        </NavLink>
        <NavLink to="/contato" className={linkClass}>
          Contato
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Navbar;
