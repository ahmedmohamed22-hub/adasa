import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';

export default function Navbar() {
  const navClasses = ({ isActive }) =>
    'px-4 py-2 transition-colors duration-200 hover:text-orange-500 ' +
    (isActive ? 'text-orange-500 font-bold' : 'text-zinc-300');

  return (
    <nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="????"
            className="h-10"
            onError={(e) => (e.target.style.display = 'none')}
          />
          <span className="text-xl font-bold text-white hidden sm:block">
            عدسة
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navClasses}>
            الرئيسية
          </NavLink>
          <NavLink to="/blog" className={navClasses}>
            المدونة
          </NavLink>
          <NavLink to="/about" className={navClasses}>
            {' '}
            من نحن
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-zinc-400 hover:text-orange-500 transition-colors cursor-pointer">
            <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
          </button>
          <Link
            to="/blog"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            ابدأ القرأة
          </Link>
        </div>
      </div>
    </nav>
  );
}
