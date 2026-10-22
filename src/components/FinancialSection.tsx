import { useState } from 'react';
import { ZoomIn, TrendingUp, Calculator } from 'lucide-react';
import { BUSINESS_INFO, DAILY_EXPENSES } from '../data/businessData';
import { getAssetUrl } from '../utils/assetHelper';

interface FinancialSectionProps {
  onOpenImageModal: (imgUrl: string, title: string, caption?: string) => void;
}

export default function FinancialSection({ onOpenImageModal }: FinancialSectionProps) {
  const [pieces, setPieces] = useState<number>(100);

  const revenue = pieces * BUSINESS_INFO.pricePerPiece;
  const cost = pieces * BUSINESS_INFO.costPerPiece;
  const netProfit = revenue - cost;

  return (
    <section id="financials" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
            Financial Feasibility
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight font-heading mt-1">
            Unit Economics & Profitability
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            Official cost breakdown and margin analysis from Pages 10–13 of the BCSC-2A Mini Business Plan.
          </p>
        </div>

        {/* 4-KPI Metric Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="border border-stone-200 p-5 rounded-2xl bg-[#fffefc] shadow-xs">
            <span className="text-xs text-stone-500 font-medium block">Selling Price</span>
            <div className="text-3xl font-black text-stone-900 font-mono tabular-nums mt-1">
              ₱10.00
            </div>
            <span className="text-[11px] text-stone-400 mt-1 block">Per piece retail</span>
          </div>

          <div className="border border-stone-200 p-5 rounded-2xl bg-[#fffefc] shadow-xs">
            <span className="text-xs text-stone-500 font-medium block">Unit Production Cost</span>
            <div className="text-3xl font-black text-stone-900 font-mono tabular-nums mt-1">
              ₱7.09
            </div>
            <span className="text-[11px] text-stone-400 mt-1 block">Squash, cheese & frying</span>
          </div>

          <div className="border border-emerald-200 p-5 rounded-2xl bg-emerald-50/50 shadow-xs">
            <span className="text-xs text-emerald-800 font-medium block">Net Margin / Ball</span>
            <div className="text-3xl font-black text-emerald-700 font-mono tabular-nums mt-1">
              ₱2.91
            </div>
            <span className="text-[11px] text-emerald-800 font-semibold mt-1 block">41% markup rate</span>
          </div>

          <div className="border border-stone-200 p-5 rounded-2xl bg-[#fffefc] shadow-xs">
            <span className="text-xs text-stone-500 font-medium block">Target Batch</span>
            <div className="text-3xl font-black text-stone-900 font-mono tabular-nums mt-1">
              100 pcs
            </div>
            <span className="text-[11px] text-stone-400 mt-1 block">Per selling day (Tue/Thu)</span>
          </div>
        </div>

        {/* 2-Column: Interactive Simulator + Financial Line Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Profit Calculator */}
          <div className="lg:col-span-7 border border-stone-200 p-6 rounded-2xl bg-stone-50/50 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-amber-700" />
                <h3 className="font-bold text-stone-900 text-sm">
                  Interactive Batch Simulator
                </h3>
              </div>
              <span className="text-xs text-stone-500 font-mono tabular-nums">
                {pieces} pieces selected
              </span>
            </div>

            {/* Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-stone-600 mb-2">
                <span>50 pcs</span>
                <span className="text-amber-800 font-bold">{pieces} Squash Cheesy Balls</span>
                <span>300 pcs</span>
              </div>
              <input
                type="range"
                min="50"
                max="300"
                step="10"
                value={pieces}
                onChange={(e) => setPieces(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
            </div>

            {/* Simulated Totals */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-center">
              <div className="bg-white border border-stone-200 p-3 rounded-xl">
                <span className="text-[11px] text-stone-500 block">Gross Revenue</span>
                <span className="text-lg font-bold font-mono tabular-nums text-stone-900">
                  ₱{revenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="bg-white border border-stone-200 p-3 rounded-xl">
                <span className="text-[11px] text-stone-500 block">Total Expenses</span>
                <span className="text-lg font-bold font-mono tabular-nums text-stone-600">
                  ₱{cost.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
                <span className="text-[11px] text-emerald-800 font-semibold block">Net Profit</span>
                <span className="text-lg font-black font-mono tabular-nums text-emerald-700">
                  ₱{netProfit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-500 text-center">
              At standard batch of 100 pcs, students earn <strong>₱291.00 net profit</strong> per selling day with zero waste.
            </p>
          </div>

          {/* Right: Financial Projection Chart Preview */}
          <div className="lg:col-span-5 border border-stone-200 p-5 rounded-2xl bg-white space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-stone-900 text-xs sm:text-sm">
                  Official Projection Line Graph
                </h4>
                <p className="text-[11px] text-stone-500">
                  Submitted on Page 11 of the Business Plan
                </p>
              </div>
              <button
                onClick={() => onOpenImageModal(getAssetUrl('/financial_line_graph.png'), 'Financial Line Graph', 'Official financial projection chart comparing sales, expenses, and net profit.')}
                className="text-xs font-semibold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1 cursor-pointer"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Enlarge</span>
              </button>
            </div>

            <div
              onClick={() => onOpenImageModal(getAssetUrl('/financial_line_graph.png'), 'Financial Line Graph', 'Official financial projection chart comparing sales, expenses, and net profit.')}
              className="cursor-pointer border border-stone-200 rounded-xl overflow-hidden p-1.5 bg-stone-50 group"
            >
              <img
                src={getAssetUrl('/financial_line_graph.png')}
                alt="Financial Projection Line Chart"
                className="w-full h-auto object-contain max-h-56 mx-auto group-hover:scale-[1.02] transition-transform duration-200"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
