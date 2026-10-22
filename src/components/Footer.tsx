import { ArrowUp, FileText, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getAssetUrl } from '../utils/assetHelper';

interface FooterProps {
  onOpenPdfModal: () => void;
  onOpenOrderModal: () => void;
}

export default function Footer({ onOpenPdfModal, onOpenOrderModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800">
          
          <div className="flex items-center gap-3 text-center md:text-left">
            <img
              src={getAssetUrl('/logo.png')}
              alt="Squash Cheesy Balls Logo"
              className="w-10 h-10 object-contain rounded-full bg-white p-0.5"
            />
            <div>
              <span className="font-bold text-white text-base font-heading block">
                Squash Cheesy Balls
              </span>
              <span className="text-xs text-stone-400">
                Crispy outside, cheesy inside · BCSC-2A ESSU Borongan
              </span>
            </div>
          </div>

          <div className="flex items-center gap-5 text-xs text-stone-400 font-medium">
            <a href="#product" className="hover:text-amber-400 transition-colors">Product</a>
            <a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a>
            <a href="#financials" className="hover:text-amber-400 transition-colors">Financials</a>
            <a href="#team" className="hover:text-amber-400 transition-colors">Team</a>
            <button
              onClick={onOpenPdfModal}
              className="hover:text-amber-400 transition-colors cursor-pointer inline-flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Business Plan</span>
            </button>
            <a
              href={BUSINESS_INFO.facebookShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors inline-flex items-center gap-1"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>Facebook</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-stone-500 text-center sm:text-left">
          <p>
            © 2026 Squash Cheesy Balls · Elective 211 (Entrepreneurial Mind) · Eastern Samar State University – Borongan
          </p>
          <p>
            Instructor: Ms. Alexis Oliver Caraga, LPT
          </p>
        </div>
      </div>
    </footer>
  );
}
