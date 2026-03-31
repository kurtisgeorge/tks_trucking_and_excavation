import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-white pt-12 sm:pt-24 pb-12 px-8 mt-auto w-full border-t-2 border-brand-dark/20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <Link to="/" className="mb-8 block">
          <img src={logo} alt="TK's Trucking Logo" className="h-[100px] w-auto" />
        </Link>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-brand-dark items-center justify-center font-bold mb-16 text-[15px]">
          <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
          <Link to="/trucking" className="hover:text-brand-primary transition-colors">Trucking</Link>
          <Link to="/excavation" className="hover:text-brand-primary transition-colors">Excavation</Link>
          <Link to="/about" className="hover:text-brand-primary transition-colors">About</Link>
          <Link to="/contact" className="hover:text-brand-primary transition-colors">Contact</Link>
        </div>

        <a
          href="https://www.facebook.com/tkstruckingltdnl/"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-10 text-brand-dark hover:text-brand-primary transition-colors"
          aria-label="TK's Trucking on Facebook"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12a10 10 0 1 0-11.563 9.876v-6.988h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.888h-2.33v6.988A10.003 10.003 0 0 0 22 12z"/>
          </svg>
        </a>

        <div className="w-full border-t-2 border-brand-dark/20 pt-8 text-brand-dark/40 text-center font-bold text-[13px]">
          <p>© 2026 TK's Trucking & Excavation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
