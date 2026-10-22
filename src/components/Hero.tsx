import { ArrowRight, ShoppingBag, FileText, Sparkles, Heart, Award, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface HeroProps {
  onOpenOrderModal: () => void;
  onOpenPdfModal: () => void;
  onOpenImageModal: (imgUrl: string, title: string, caption: string) => void;
}

export default function Hero({ onOpenOrderModal, onOpenPdfModal, onOpenImageModal }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#fffaf0] via-[#fffdf7] to-[#fcf6e8]">
      {/* Subtle background ambient decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
              <span>{BUSINESS_INFO.tagline}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-[1.1] font-heading">
              SQUASH <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600">
                CHEESY BALLS
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              A nutritious, affordable, and irresistibly tasty student-crafted snack combining the natural richness of fresh squash with savory melted cheddar cheese. Proudly produced by <strong>BCSC-2A</strong> students at <strong>Eastern Samar State University – Borongan</strong> for Elective 211.
            </p>

            {/* Value Highlights Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="bg-white/90 border border-amber-200/70 p-3 rounded-2xl shadow-xs text-center">
                <span className="block text-2xl font-black text-amber-600 font-heading">₱10</span>
                <span className="text-xs font-semibold text-stone-600">Per Piece</span>
              </div>
              <div className="bg-white/90 border border-amber-200/70 p-3 rounded-2xl shadow-xs text-center">
                <span className="block text-2xl font-black text-emerald-600 font-heading">41%</span>
                <span className="text-xs font-semibold text-stone-600">Markup Rate</span>
              </div>
              <div className="bg-white/90 border border-amber-200/70 p-3 rounded-2xl shadow-xs text-center">
                <span className="block text-2xl font-black text-amber-600 font-heading">₱2.91</span>
                <span className="text-xs font-semibold text-stone-600">Profit / Ball</span>
              </div>
              <div className="bg-white/90 border border-amber-200/70 p-3 rounded-2xl shadow-xs text-center">
                <span className="block text-2xl font-black text-orange-600 font-heading">2 Days</span>
                <span className="text-xs font-semibold text-stone-600">Tue & Thu</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 px-7 py-3.5 rounded-xl font-bold text-base shadow-lg hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 text-stone-950" />
                <span>Order Now (₱10)</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onOpenPdfModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow hover:shadow-md transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Read Full Plan (PDF)</span>
              </button>

              <a
                href="#financial"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-amber-50 text-stone-700 hover:text-stone-900 border border-stone-200 px-5 py-3.5 rounded-xl font-semibold text-sm shadow-xs transition-colors"
              >
                <span>View Financials</span>
              </a>
            </div>

            {/* Trust & Hygiene Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-stone-500 pt-2">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Sanitation Standard Compliant
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Heart className="w-4 h-4 text-rose-500" />
                Fresh Local Squash
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Award className="w-4 h-4 text-amber-500" />
                Elective 211
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Back Card with glowing border */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-tr from-amber-400/40 via-orange-300/30 to-amber-200/50 shadow-2xl backdrop-blur-xs">
                <div className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-amber-100 shadow-inner">
                  
                  {/* Mascot / Logo Image */}
                  <div
                    onClick={() => onOpenImageModal('/logo.png', 'Squash Cheesy Balls Mascot Logo', 'Official brand emblem depicting the friendly squash character and golden cheesy balls.')}
                    className="group relative cursor-pointer mx-auto w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden bg-gradient-to-b from-amber-50 to-orange-50 border-2 border-amber-200/60 p-2 shadow-sm transition-transform hover:scale-[1.02]"
                  >
                    <img
                      src="/logo.png"
                      alt="Squash Cheesy Balls Mascot and Brand Logo"
                      className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900/80 text-white text-xs px-2.5 py-1 rounded-full font-medium">
                        Click to enlarge
                      </span>
                    </div>
                  </div>

                  {/* Brand Caption */}
                  <div className="mt-5 space-y-1">
                    <h3 className="text-xl font-black text-stone-900 font-heading">
                      Squash Cheesy Balls
                    </h3>
                    <p className="text-xs font-semibold text-amber-700 tracking-wide uppercase">
                      Delicious Snacks • Healthy Bites
                    </p>
                    <p className="text-xs text-stone-500 pt-1">
                      Eastern Samar State University – Borongan
                    </p>
                  </div>

                  {/* Feature Strip */}
                  <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-around text-center text-xs">
                    <div>
                      <p className="text-stone-400 font-medium">Selling Price</p>
                      <p className="font-bold text-stone-900 text-sm">₱10.00</p>
                    </div>
                    <div className="w-px h-8 bg-stone-200" />
                    <div>
                      <p className="text-stone-400 font-medium">Production Cost</p>
                      <p className="font-bold text-stone-900 text-sm">₱7.09</p>
                    </div>
                    <div className="w-px h-8 bg-stone-200" />
                    <div>
                      <p className="text-stone-400 font-medium">Profit / Ball</p>
                      <p className="font-bold text-emerald-600 text-sm">+₱2.91</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-4 -left-4 bg-stone-900 text-white px-3.5 py-1.5 rounded-full shadow-lg border border-stone-800 text-xs font-bold flex items-center gap-1.5 animate-bounce">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>Crispy Outside</span>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="absolute -bottom-3 -right-3 bg-amber-500 text-stone-950 px-3.5 py-1.5 rounded-full shadow-lg border border-amber-300 text-xs font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Cheesy Inside</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
