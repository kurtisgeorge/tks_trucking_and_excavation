import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="bg-white w-full fixed top-0 left-0 right-0 z-40 drop-shadow-sm shadow-gray-500/50">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            
            {/* Left: Logo */}
            <div className="flex-1 flex items-center">
              <Link to="/">
                <img src={logo} alt="TK's Trucking Logo" className="h-[50px] md:h-[60px] w-auto" />
              </Link>
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center gap-8 font-bold text-[15px] text-brand-dark">
              <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
              <Link to="/about" className="hover:text-brand-primary transition-colors">About us</Link>
              <Link to="/trucking" className="hover:text-brand-primary transition-colors">Trucking</Link>
              <Link to="/excavation" className="hover:text-brand-primary transition-colors">Excavation</Link>
            </nav>

            {/* Right: Desktop Button & Mobile Toggle */}
            <div className="flex-1 flex items-center justify-end">
              <Link to="/contact" className="hidden md:flex bg-brand-primary text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg hover:-translate-y-0.5 transition-transform font-bold tracking-wide text-sm md:text-base shadow-sm">
                Get in touch
              </Link>
              <button onClick={toggleMenu} className="md:hidden text-brand-dark hover:text-brand-primary transition-colors focus:outline-none" aria-label="Toggle menu">
                <Menu className="w-8 h-8" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-dark/80 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Sliding Drawer */}
      <div 
        className={`fixed top-0 right-0 h-[100dvh] w-[280px] sm:w-[350px] bg-white z-[51] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex items-center justify-center h-20 px-5 border-b border-brand-dark/10">
          <img src={logo} alt="TK's Logo" className="h-[40px] w-auto" />
          <button onClick={toggleMenu} className="absolute right-5 text-brand-dark hover:text-brand-primary transition-colors focus:outline-none" aria-label="Close menu">
            <X className="w-8 h-8" />
          </button>
        </div>
        
        <div className="flex flex-col items-center gap-6 px-6 py-8 font-bold text-xl text-brand-dark">
          <Link to="/" onClick={toggleMenu} className="hover:text-brand-primary transition-colors">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="hover:text-brand-primary transition-colors">About us</Link>
          <Link to="/trucking" onClick={toggleMenu} className="hover:text-brand-primary transition-colors">Trucking</Link>
          <Link to="/excavation" onClick={toggleMenu} className="hover:text-brand-primary transition-colors">Excavation</Link>
        </div>

        <div className="mt-auto px-6 py-8 border-t border-brand-dark/10">
          <Link to="/contact" onClick={toggleMenu} className="bg-brand-primary text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg hover:-translate-y-0.5 transition-transform font-bold tracking-wide text-[17px] shadow-sm w-full text-center block">
            Get in touch
          </Link>
        </div>
      </div>
    </>
  );
}
