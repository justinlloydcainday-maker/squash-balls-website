import { Flame, CheckCircle2, ShieldCheck, RefreshCw, Sparkles, ChefHat } from 'lucide-react';
import { PRODUCTION_STEPS } from '../data/businessData';

export default function BehindTheScenes() {
  return (
    <section id="behind-scenes" className="py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ChefHat className="w-3.5 h-3.5" />
            Standard Operating Procedure
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-heading">
            Behind the Scenes
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            From raw farm squash to the final crispy cheese pull, discover our rigorous 5-step culinary process practiced by the BCSC-2A student kitchen team.
          </p>
        </div>

        {/* 5-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {PRODUCTION_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-[#fffdf8] border-2 border-amber-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group hover:border-amber-400"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-amber-500 text-stone-950 font-black text-sm flex items-center justify-center font-heading shadow-xs">
                    0{step.step}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                    Phase {step.step}
                  </span>
                </div>

                <div className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">
                  {step.action}
                </div>
                <h3 className="font-bold text-stone-900 text-base mb-2 font-heading">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-100 flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Quality Checked</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Control & Back-up Operational Protocols */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quality Control Box */}
          <div className="bg-[#fffdf7] border border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 font-heading">
                  Quality Control & Hygiene Standards
                </h3>
                <p className="text-xs text-stone-500">Documented in Section 8 of Business Plan</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
              The business ensures that every Squash Cheesy Ball is fresh, delicious, and properly cooked. The team maintains spotless cleanliness, wears food-grade gloves, monitors oil temperature to prevent charring, and strictly follows food sanitation guidelines to guarantee student customer safety.
            </p>
            <ul className="space-y-2 text-xs text-stone-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Daily inspection of raw squash for freshness and firmness</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Cold cheese storage below 4°C to preserve texture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Deep fry oil filtered daily; fresh oil added every session</span>
              </li>
            </ul>
          </div>

          {/* Operational Back-Up Plan */}
          <div className="bg-[#fffdf7] border border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 font-heading">
                  Operational Back-up Plan
                </h3>
                <p className="text-xs text-stone-500">Documented in Section 5 of Business Plan</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
              If daily sales fluctuate or raw ingredients surge in price, the group actively adjusts batch quantities (from 100 to 50 pcs), tightens procurement, and amplifies peer marketing.
            </p>
            <ul className="space-y-2 text-xs text-stone-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Safe surplus squash utilized for auxiliary savory treats</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Zero waste initiative with batch-to-order frying</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Reusable utensils (tongs, peeler, dispensers) reduce overhead</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
