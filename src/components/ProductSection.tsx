import { useState } from 'react';
import { ShoppingBag, Check, Sparkles, Utensils, Award, ShieldAlert } from 'lucide-react';
import { DAILY_EXPENSES, BUSINESS_INFO } from '../data/businessData';

interface ProductSectionProps {
  onOpenOrderModal: () => void;
  onOpenImageModal: (imgUrl: string, title: string, caption: string) => void;
}

export default function ProductSection({ onOpenOrderModal, onOpenImageModal }: ProductSectionProps) {
  const [showIngredientsModal, setShowIngredientsModal] = useState(false);

  return (
    <section id="product" className="py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Signature Offering
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-heading">
            Our Product
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Squash Cheesy Balls combines the earthy sweetness of fresh local kalabasa with the irresistible savory melted core of cheddar cheese. Crispy on the outside, cheesy and comforting on the inside.
          </p>
        </div>

        {/* Featured Product Card */}
        <div className="bg-gradient-to-br from-[#fffbf0] to-[#fffdf9] border-2 border-amber-200/80 rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Product Image Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div
                onClick={() => onOpenImageModal('/test_plating.png', 'Squash Cheesy Balls Plating', 'Golden-fried Squash Cheesy Balls served with garlic mayonnaise and ketchup dips.')}
                className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-md border-2 border-amber-200 bg-amber-50 aspect-4/3 flex items-center justify-center"
              >
                <img
                  src="/test_plating.png"
                  alt="Freshly Cooked Squash Cheesy Balls"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900/80 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow">
                    View High-Res Photo
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 bg-amber-500 text-stone-950 font-black text-sm px-3 py-1 rounded-lg shadow-sm">
                  ₱10.00 / piece
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
                <div
                  onClick={() => onOpenImageModal('/phase1_cooking.png', 'Deep Frying Squash Balls', 'Evenly fried in pure hot vegetable oil until crisp and golden brown.')}
                  className="cursor-pointer rounded-xl overflow-hidden border border-amber-200/80 aspect-video group"
                >
                  <img src="/phase1_cooking.png" alt="Cooking" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <div
                  onClick={() => onOpenImageModal('/test_tasting.png', 'Product Sensory Test', 'Team members evaluating the cheese pull and crispy outer shell.')}
                  className="cursor-pointer rounded-xl overflow-hidden border border-amber-200/80 aspect-video group"
                >
                  <img src="/test_tasting.png" alt="Tasting" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <div
                  onClick={() => onOpenImageModal('/test_squash.png', 'Fresh Squash Ingredient', 'Wholesome local squash picked for freshness.')}
                  className="cursor-pointer rounded-xl overflow-hidden border border-amber-200/80 aspect-video group"
                >
                  <img src="/test_squash.png" alt="Squash" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>

            {/* Product Details & Purchase Options */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold text-xs">
                    Campus Bestseller
                  </span>
                  <span className="text-stone-400 text-xs">•</span>
                  <span className="text-xs text-stone-500 font-medium">Prepared Fresh Daily</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-stone-900 font-heading">
                  Original Squash Cheesy Balls
                </h3>
                <p className="text-stone-600 mt-2 text-sm sm:text-base leading-relaxed">
                  Carefully steamed and mashed squash seasoned with fine paprika, black pepper, and salt, encased in a crunchy breadcrumb crust. Every single ball is stuffed with a rich block of savory cheese that melts into gooey deliciousness upon deep frying.
                </p>
              </div>

              {/* Serving Bundles & Pricing */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                  Serving Options & Combos
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white border-2 border-amber-200/70 rounded-2xl p-4 text-center hover:border-amber-400 transition-colors shadow-xs">
                    <span className="text-xs font-semibold text-stone-500">Solo Treat</span>
                    <p className="text-2xl font-black text-stone-900 font-heading mt-1">₱10</p>
                    <p className="text-xs text-stone-600 mt-0.5">1 Piece Ball</p>
                    <span className="inline-block mt-2 text-[11px] bg-amber-50 text-amber-800 font-medium px-2 py-0.5 rounded">
                      Single Dip
                    </span>
                  </div>

                  <div className="bg-white border-2 border-amber-400 rounded-2xl p-4 text-center relative shadow-sm">
                    <span className="absolute -top-2.5 right-3 bg-amber-500 text-stone-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                    <span className="text-xs font-semibold text-stone-500">Break Snack</span>
                    <p className="text-2xl font-black text-amber-600 font-heading mt-1">₱30</p>
                    <p className="text-xs text-stone-600 mt-0.5">3 Pieces Set</p>
                    <span className="inline-block mt-2 text-[11px] bg-amber-100 text-amber-900 font-semibold px-2 py-0.5 rounded">
                      Dual Dips + Sticks
                    </span>
                  </div>

                  <div className="bg-white border-2 border-amber-200/70 rounded-2xl p-4 text-center hover:border-amber-400 transition-colors shadow-xs">
                    <span className="text-xs font-semibold text-stone-500">Barkada Box</span>
                    <p className="text-2xl font-black text-stone-900 font-heading mt-1">₱50</p>
                    <p className="text-xs text-stone-600 mt-0.5">5 Pieces Box</p>
                    <span className="inline-block mt-2 text-[11px] bg-amber-50 text-amber-800 font-medium px-2 py-0.5 rounded">
                      Generous Dipping Cup
                    </span>
                  </div>
                </div>
              </div>

              {/* Flavor / Dip Selection */}
              <div className="bg-white rounded-2xl p-4 border border-stone-200/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-amber-600" />
                  Included Dipping Sauces
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 bg-amber-50 text-amber-900 font-semibold rounded-lg border border-amber-200">
                    Classic Garlic Mayo
                  </span>
                  <span className="px-3 py-1 bg-rose-50 text-rose-900 font-semibold rounded-lg border border-rose-200">
                    Sweet & Tangy Ketchup
                  </span>
                  <span className="px-3 py-1 bg-orange-50 text-orange-900 font-semibold rounded-lg border border-orange-200">
                    Mayo-Ketchup Swirl (Signature)
                  </span>
                  <span className="px-3 py-1 bg-yellow-50 text-yellow-900 font-semibold rounded-lg border border-yellow-200">
                    Cheese Dust Seasoning
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={onOpenOrderModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 px-6 py-3 rounded-xl font-bold text-sm shadow hover:shadow-md transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order Now (₱10/pc)</span>
                </button>

                <button
                  onClick={() => setShowIngredientsModal(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 px-5 py-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer"
                >
                  <span>View All 18 Daily Ingredients</span>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Nutritional & Quality Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-[#fffdf7] border border-amber-200/60 rounded-2xl p-6 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-stone-900 text-base mb-2 font-heading">
              Rich in Vitamin A & Fiber
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Real squash contains beta-carotene, Vitamin A, and dietary fiber, turning a fun street food snack into a more wholesome everyday bite.
            </p>
          </div>

          <div className="bg-[#fffdf7] border border-amber-200/60 rounded-2xl p-6 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-stone-900 text-base mb-2 font-heading">
              100% Real Cheese Core
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We never use powdered mock fillings. Every single squash ball contains an actual hand-cut cheddar cube that melts into a savory cheese pull.
            </p>
          </div>

          <div className="bg-[#fffdf7] border border-amber-200/60 rounded-2xl p-6 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-stone-900 text-base mb-2 font-heading">
              Hygienic Prep & Clean Oil
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Strict compliance with Sanitation Code (PD 856). Prepared with food-grade gloves, hairnets, and freshly filtered cooking oil for maximum crunch.
            </p>
          </div>
        </div>

      </div>

      {/* Ingredients Modal */}
      {showIngredientsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-stone-200 flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 bg-stone-900 text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold font-heading">Daily Ingredients & Materials Breakdown</h3>
                <p className="text-xs text-amber-400 mt-0.5">Projected daily budget: ₱700 for 100 pieces (₱7.09/piece cost)</p>
              </div>
              <button
                onClick={() => setShowIngredientsModal(false)}
                className="w-8 h-8 rounded-full bg-stone-800 text-stone-400 hover:text-white flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DAILY_EXPENSES.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl border border-stone-200 bg-stone-50/50 flex justify-between items-center text-xs">
                    <div>
                      <p className="font-bold text-stone-900">{item.name}</p>
                      <p className="text-stone-500 text-[11px]">{item.description}</p>
                    </div>
                    <span className="font-bold text-stone-900 bg-white px-2 py-1 rounded-md border border-stone-200 shrink-0 ml-2">
                      ₱{item.cost.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  <strong>Allergen Notice:</strong> Contains <strong>Dairy (Cheese)</strong> and <strong>Gluten (Wheat Flour)</strong>. Reusable equipment like tongs, peelers, and squeeze bottles amortize over subsequent production runs.
                </p>
              </div>
            </div>

            <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setShowIngredientsModal(false)}
                className="px-5 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800"
              >
                Close Ingredients List
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
