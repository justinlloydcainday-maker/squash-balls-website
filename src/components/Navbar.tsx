import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, FileText, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onOpenOrderModal: () => void;
  onOpenPdfModal: () => void;
}

export default function Navbar({ onOpenOrderModal, onOpenPdfModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Product', href: '#product' },
    { label: 'Documentation', href: '#documentation' },
    { label: 'Behind the Scenes', href: '#behind-scenes' },
    { label: 'Our Team', href: '#team' },
    { label: 'Structure', href: '#structure' },
    { label: 'Financials', href: '#financial' },
    { label: 'Permits', href: '#permits' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      {/* Top Academic & University Header Ribbon */}
      <div className="bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              ESSU Borongan
            </span>
            <span className="text-stone-300 font-medium">
              College of Computer Studies • {BUSINESS_INFO.classSection}
            </span>
            <span className="hidden md:inline text-stone-500">|</span>
            <span className="hidden md:inline text-stone-400">
              {BUSINESS_INFO.courseName}
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-stone-400">
            <span>Selling Days: <strong className="text-amber-400 font-medium">Tue & Thu</strong></span>
            <button
              onClick={onOpenPdfModal}
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors font-medium cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Business Plan PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-900/95 backdrop-blur-md text-white shadow-xl py-3 border-b border-stone-800'
            : 'bg-stone-950 text-white py-4 shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#home"
              className="flex items-center gap-3 group text-left"
            >
              <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-md group-hover:scale-105 transition-transform">
                <img
                  src="/logo.png"
                  alt="Squash Cheesy Balls Logo"
                  className="w-full h-full object-cover rounded-full bg-amber-100"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-stone-900 rounded-full" title="Freshly Active Project" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors font-heading">
                    Squash Cheesy Balls
                  </span>
                  <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    ₱10/pc
                  </span>
                </div>
                <p className="text-[11px] text-stone-400 font-normal tracking-wide">
                  Crispy outside, Cheesy inside
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-stone-300 hover:text-amber-400 hover:bg-stone-800/60 px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-stone-950" />
                <span>Order Now</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenOrderModal}
                className="sm:hidden inline-flex items-center gap-1.5 bg-amber-500 text-stone-950 px-3 py-1.5 rounded-lg text-xs font-bold"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Order</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-stone-900 border-t border-stone-800 px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-1 pb-3 border-b border-stone-800">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-stone-300 hover:text-amber-400 hover:bg-stone-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 px-4 py-2.5 rounded-xl text-sm font-bold shadow"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Squash Cheesy Balls (₱10)</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPdfModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-stone-200 px-4 py-2 rounded-xl text-xs font-semibold"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>View Full Mini Business Plan (PDF)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
