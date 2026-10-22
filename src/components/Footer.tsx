import { ArrowUp, FileText, Facebook, Heart, GraduationCap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FooterProps {
  onOpenPdfModal: () => void;
  onOpenOrderModal: () => void;
}

export default function Footer({ onOpenPdfModal, onOpenOrderModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      {/* Upper Footer: Academic & Brand Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 p-0.5 shrink-0">
                <img
                  src="/logo.png"
                  alt="Squash Cheesy Balls Logo"
                  className="w-full h-full object-cover rounded-full bg-amber-100"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white font-heading tracking-tight block">
                  Squash Cheesy Balls
                </span>
                <span className="text-xs text-amber-400 font-semibold">
                  Crispy outside, Cheesy inside
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              An entrepreneurial food venture created by BCSC-2A students combining fresh local squash with rich savory melted cheese. Promoting wellness, affordability, and hands-on business leadership.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.facebookShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 hover:bg-amber-500 hover:text-stone-950 text-stone-300 flex items-center justify-center transition-colors"
                title="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenPdfModal}
                className="w-9 h-9 rounded-xl bg-stone-900 hover:bg-amber-500 hover:text-stone-950 text-stone-300 flex items-center justify-center transition-colors cursor-pointer"
                title="View Mini Business Plan PDF"
              >
                <FileText className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#product" className="hover:text-amber-400 transition-colors">Our Product</a></li>
              <li><a href="#documentation" className="hover:text-amber-400 transition-colors">Documentation</a></li>
              <li><a href="#behind-scenes" className="hover:text-amber-400 transition-colors">Behind the Scenes</a></li>
              <li><a href="#team" className="hover:text-amber-400 transition-colors">Meet the Team</a></li>
              <li><a href="#structure" className="hover:text-amber-400 transition-colors">Management Structure</a></li>
              <li><a href="#financial" className="hover:text-amber-400 transition-colors">Financials</a></li>
              <li><a href="#permits" className="hover:text-amber-400 transition-colors">Business Permits</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About & SWOT</a></li>
            </ul>
          </div>

          {/* Course Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              Academic Credentials
            </h4>
            <div className="text-xs text-stone-400 space-y-1.5 leading-relaxed">
              <p><strong className="text-stone-200">Course:</strong> Entrepreneurial Mind (ELECTIVE. 211)</p>
              <p><strong className="text-stone-200">Instructor:</strong> {BUSINESS_INFO.instructor}</p>
              <p><strong className="text-stone-200">Class:</strong> {BUSINESS_INFO.classSection}</p>
              <p><strong className="text-stone-200">College:</strong> {BUSINESS_INFO.college}</p>
              <p><strong className="text-stone-200">Department:</strong> {BUSINESS_INFO.department}</p>
              <p><strong className="text-stone-200">University:</strong> {BUSINESS_INFO.institution}</p>
            </div>
          </div>

          {/* Campus Operations & Action */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Campus Operations
            </h4>
            <div className="text-xs text-stone-400 space-y-1.5 leading-relaxed">
              <p>📍 ESSU Main Campus, Maypangdan, Borongan City, Eastern Samar</p>
              <p>🗓️ Tuesdays & Thursdays (Recess hours)</p>
              <p>💰 ₱10.00 / piece • 3 for ₱30 • 5 for ₱50</p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenOrderModal}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 py-2.5 px-4 rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                Place Campus Order (₱10)
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-stone-900 bg-stone-950 py-6 px-4 sm:px-6 lg:px-8 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p>
              © 2026 Squash Cheesy Balls Food Enterprise. In partial fulfillment of Elective 211.
            </p>
            <p className="text-[11px] text-stone-600 mt-0.5">
              Eastern Samar State University – Borongan • College of Computer Studies • BCSC-2A
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
