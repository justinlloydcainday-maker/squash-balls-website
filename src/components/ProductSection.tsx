import { useState } from 'react';
import { ShoppingBag, ZoomIn, Check } from 'lucide-react';
import { DAILY_EXPENSES, BUSINESS_INFO } from '../data/businessData';
import { getAssetUrl } from '../utils/assetHelper';

interface ProductSectionProps {
  onOpenOrderModal: () => void;
  onOpenImageModal: (imgUrl: string, title: string, caption?: string) => void;
}

export default function ProductSection({ onOpenOrderModal, onOpenImageModal }: ProductSectionProps) {
  const [selectedSauce, setSelectedSauce] = useState<'garlic' | 'ketchup' | 'sweetChili'>('garlic');

  const recipeSteps = [
    { step: '01', title: 'Boil & Puree', desc: 'Fresh local squash is peeled, steamed, and mashed to a velvety golden texture.' },
    { step: '02', title: 'Season & Bind', desc: 'Combined with flour, beaten egg, salt, and ground black pepper for flavor balance.' },
    { step: '03', title: 'Cheese Core', desc: 'Shaped into bite-sized spheres with a dense cheddar cheese cube at the center.' },
    { step: '04', title: 'Golden Frying', desc: 'Coated with crispy breadcrumbs and deep-fried at 180°C until crunch outside and melted inside.' },
  ];

  return (
    <section id="product" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
            Signature Recipe & Production
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight font-heading mt-1">
            Nutritious Squash Meets Melted Cheddar
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Formulated specifically for college students on a budget: a healthy vegetable snack that tastes like comfort street food.
          </p>
        </div>

        {/* 2-Column Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Photos */}
          <div className="lg:col-span-5 space-y-3">
            <div
              onClick={() => onOpenImageModal(getAssetUrl('/test_plating.png'), 'Squash Cheesy Balls Plating', 'Freshly fried Squash Cheesy Balls served with house dips.')}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-stone-200 bg-stone-50 aspect-4/3 relative"
            >
              <img
                src={getAssetUrl('/test_plating.png')}
                alt="Squash Cheesy Balls Plating"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md font-medium flex items-center gap-1.5">
                <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                <span>₱10.00 / pc · Click to enlarge</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div
                onClick={() => onOpenImageModal(getAssetUrl('/phase1_cooking.png'), 'Deep Frying in Process', 'Golden frying at controlled temperature.')}
                className="cursor-pointer rounded-xl overflow-hidden border border-stone-200 aspect-video group"
              >
                <img src={getAssetUrl('/phase1_cooking.png')} alt="Frying" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div
                onClick={() => onOpenImageModal(getAssetUrl('/test_tasting.png'), 'Sensory Test', 'BCSC-2A team taste evaluation.')}
                className="cursor-pointer rounded-xl overflow-hidden border border-stone-200 aspect-video group"
              >
                <img src={getAssetUrl('/test_tasting.png')} alt="Tasting" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div
                onClick={() => onOpenImageModal(getAssetUrl('/test_squash.png'), 'Local Squash Ingredient', 'Wholesome fresh squash.')}
                className="cursor-pointer rounded-xl overflow-hidden border border-stone-200 aspect-video group"
              >
                <img src={getAssetUrl('/test_squash.png')} alt="Squash" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Step Flow */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Value props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="border border-stone-200 p-3.5 rounded-xl">
                <h4 className="font-bold text-stone-900 text-sm">Crispy Breadcrumb Crust</h4>
                <p className="text-xs text-stone-500 mt-1">Double-dredged for maximum crunch that holds up across campus walking.</p>
              </div>
              <div className="border border-stone-200 p-3.5 rounded-xl">
                <h4 className="font-bold text-stone-900 text-sm">Savory Cheddar Center</h4>
                <p className="text-xs text-stone-500 mt-1">Generous cheese cube inside each ball that melts hot upon frying.</p>
              </div>
              <div className="border border-stone-200 p-3.5 rounded-xl">
                <h4 className="font-bold text-stone-900 text-sm">Vitamin A & Fiber</h4>
                <p className="text-xs text-stone-500 mt-1">Rich in carotenes and nutrients from locally grown Eastern Samar squash.</p>
              </div>
            </div>

            {/* 4-Step Recipe Overview */}
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm tracking-tight">
                Standardized Production Process
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {recipeSteps.map((s) => (
                  <div key={s.step} className="p-3 border border-stone-100 bg-stone-50/70 rounded-xl">
                    <span className="text-[11px] font-mono font-bold text-amber-700 block">{s.step}</span>
                    <h5 className="font-semibold text-stone-800 text-xs mt-0.5">{s.title}</h5>
                    <p className="text-stone-500 text-[11px] mt-0.5">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dip Selector and Order CTA */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-100">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-stone-700 block">Complimentary House Dip:</span>
                <div className="flex items-center gap-2">
                  {[
                    { id: 'garlic', label: 'Garlic Mayo' },
                    { id: 'ketchup', label: 'Sweet Ketchup' },
                    { id: 'sweetChili', label: 'Spicy Chili' },
                  ].map((sauce) => (
                    <button
                      key={sauce.id}
                      onClick={() => setSelectedSauce(sauce.id as any)}
                      className={`text-xs px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                        selectedSauce === sauce.id
                          ? 'bg-amber-100 text-amber-900 font-bold border border-amber-300'
                          : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      {sauce.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                <span>Pre-Order for Today</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
