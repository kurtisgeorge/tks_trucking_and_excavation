import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-8 mt-auto w-full border-t-2 border-brand-dark">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <Link to="/" className="mb-8 block">
          <img src={logo} alt="TK's Trucking Logo" className="h-[100px] w-auto" />
        </Link>
        
        <div className="flex flex-wrap gap-8 text-brand-dark justify-center font-bold mb-16 text-[15px]">
          <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
          <Link to="/trucking" className="hover:text-brand-primary transition-colors">Trucking</Link>
          <Link to="/excavation" className="hover:text-brand-primary transition-colors">Excavation</Link>
          <Link to="/about" className="hover:text-brand-primary transition-colors">About</Link>
          <Link to="/contact" className="hover:text-brand-primary transition-colors">Contact</Link>
        </div>

        <div className="w-full border-t-2 border-brand-dark pt-8 text-brand-dark text-center font-bold text-[13px]">
          <p>© 2025 TK's Trucking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
