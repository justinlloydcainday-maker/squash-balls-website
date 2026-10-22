import { ArrowRight, ShoppingBag, FileText, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getAssetUrl } from '../utils/assetHelper';

interface HeroProps {
  onOpenOrderModal: () => void;
  onOpenPdfModal: () => void;
  onOpenImageModal: (imgUrl: string, title: string, caption?: string) => void;
}

export default function Hero({ onOpenOrderModal, onOpenPdfModal, onOpenImageModal }: HeroProps) {
  return (
    <section id="home" className="pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-stone-200 bg-[#fffdf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Clean Unboxed Metadata */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-stone-600">
              <span className="text-amber-800">ESSU Borongan</span>
              <span aria-hidden="true">·</span>
              <span>BCSC-2A</span>
              <span aria-hidden="true">·</span>
              <span>Elective 211 (Entrepreneurial Mind)</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight font-heading leading-tight" style={{ textWrap: 'balance' }}>
              Crispy Outside, <br className="hidden sm:inline" />
              <span className="text-amber-600">Cheesy Inside.</span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A delicious, nutritious, and student-priced snack made from fresh mashed local squash wrapped around rich melted cheddar cheese and deep-fried to a golden crunch.
            </p>

            {/* Clean Key Numbers Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="border border-stone-200 bg-white p-3.5 rounded-xl shadow-xs">
                <div className="text-2xl font-black text-stone-900 font-mono tabular-nums">₱10.00</div>
                <div className="text-xs text-stone-500 font-medium mt-0.5">Price / piece</div>
              </div>
              <div className="border border-stone-200 bg-white p-3.5 rounded-xl shadow-xs">
                <div className="text-2xl font-black text-stone-900 font-mono tabular-nums">₱7.09</div>
                <div className="text-xs text-stone-500 font-medium mt-0.5">Unit Cost</div>
              </div>
              <div className="border border-stone-200 bg-white p-3.5 rounded-xl shadow-xs">
                <div className="text-2xl font-black text-emerald-600 font-mono tabular-nums">₱2.91</div>
                <div className="text-xs text-stone-500 font-medium mt-0.5">Profit (41%)</div>
              </div>
              <div className="border border-stone-200 bg-white p-3.5 rounded-xl shadow-xs">
                <div className="text-2xl font-black text-stone-900 font-mono tabular-nums">100 pcs</div>
                <div className="text-xs text-stone-500 font-medium mt-0.5">Daily Batch</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-3 rounded-xl shadow-xs transition-colors cursor-pointer text-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Pre-Order for Campus Pickup</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenPdfModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-semibold px-5 py-3 rounded-xl transition-colors cursor-pointer text-sm"
              >
                <FileText className="w-4 h-4 text-stone-500" />
                <span>Read 19-Page Business Plan</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-stone-500 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Fresh Local Squash
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Real Melted Cheddar
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Tuesdays & Thursdays
              </span>
            </div>

          </div>

          {/* Right Column: Clean Mascot Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={() => onOpenImageModal(getAssetUrl('/logo.png'), 'Squash Cheesy Balls Mascot Logo', 'Official brand mascot and logo submitted for Elective 211.')}
              className="group cursor-pointer bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:border-amber-400 transition-colors max-w-sm w-full"
            >
              <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-xl overflow-hidden bg-amber-50/60 p-3 flex items-center justify-center">
                <img
                  src={getAssetUrl('/logo.png')}
                  alt="Squash Cheesy Balls Logo"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-stone-900 font-heading text-lg">
                  Squash Cheesy Balls
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Official Academic Food Venture Logo · Click to enlarge
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
