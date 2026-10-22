import { useState } from 'react';
import { DollarSign, TrendingUp, Calculator, PieChart, ZoomIn, CheckCircle2, ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { DAILY_EXPENSES, REVENUE_FORECASTS, BUSINESS_INFO } from '../data/businessData';

interface FinancialSectionProps {
  onOpenImageModal: (imgUrl: string, title: string, caption: string) => void;
}

export default function FinancialSection({ onOpenImageModal }: FinancialSectionProps) {
  const [calculatorPieces, setCalculatorPieces] = useState<number>(200);
  const [showFullExpenseList, setShowFullExpenseList] = useState<boolean>(false);

  // Dynamic calculations based on ₱10.00 price and ₱7.09 cost per piece
  const calculatedSales = calculatorPieces * BUSINESS_INFO.pricePerPiece;
  const calculatedCost = calculatorPieces * BUSINESS_INFO.costPerPiece;
  const calculatedProfit = calculatedSales - calculatedCost;
  const profitPerMember = calculatedProfit / 10; // 10 student members
  const roiPercent = ((calculatedProfit / calculatedCost) * 100).toFixed(1);

  return (
    <section id="financial" className="py-20 bg-[#fbf9f3] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            Accounting & Projections
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-heading">
            Financial Documentation
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Transparent breakdown of our daily production costs, cost-plus pricing strategy, Phase 1 & 2 revenue forecasts, and financial performance records.
          </p>
        </div>

        {/* 4 Core Financial KPI Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-white border-2 border-amber-200/80 rounded-2xl p-5 shadow-xs">
            <span className="text-xs font-semibold text-stone-500 block">Retail Price</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-black text-stone-900 font-heading">₱10.00</span>
              <span className="text-xs text-stone-400">/ piece</span>
            </div>
            <p className="text-[11px] text-amber-700 font-medium mt-1">Affordable student snack price</p>
          </div>

          <div className="bg-white border-2 border-stone-200 rounded-2xl p-5 shadow-xs">
            <span className="text-xs font-semibold text-stone-500 block">Cost of Goods (COG)</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-black text-stone-700 font-heading">₱7.09</span>
              <span className="text-xs text-stone-400">/ piece</span>
            </div>
            <p className="text-[11px] text-stone-500 mt-1">₱700 total daily budget / 100 pcs</p>
          </div>

          <div className="bg-white border-2 border-emerald-300 rounded-2xl p-5 shadow-xs">
            <span className="text-xs font-semibold text-emerald-700 block">Gross Profit / Piece</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-black text-emerald-600 font-heading">₱2.91</span>
              <span className="text-xs text-emerald-500">/ piece</span>
            </div>
            <p className="text-[11px] text-emerald-700 font-medium mt-1">41% markup rate applied</p>
          </div>

          <div className="bg-white border-2 border-amber-300 rounded-2xl p-5 shadow-xs">
            <span className="text-xs font-semibold text-amber-800 block">2-Day Weekly Profit</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-black text-amber-600 font-heading">₱582.00</span>
              <span className="text-xs text-amber-500">(Phase 1)</span>
            </div>
            <p className="text-[11px] text-amber-800 font-medium mt-1">₱2,000 Sales - ₱1,418 Cost</p>
          </div>
        </div>

        {/* Pricing Strategy Formula Card */}
        <div className="mb-12 bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                Cost-Plus Pricing Strategy
              </span>
              <h3 className="text-xl font-bold text-stone-900 font-heading">
                Pricing Calculation Formula
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
                The selling price was established by adding a 41% profit markup to the unit production cost, ensuring costs are covered while keeping the snack priced at an even ₱10.00 coin.
              </p>
            </div>

            <div className="bg-[#fffdf7] border border-amber-200 rounded-2xl p-4 sm:p-6 text-center shrink-0 w-full md:w-auto">
              <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">Formula Breakdown</div>
              <div className="text-lg sm:text-xl font-black text-stone-900 font-heading mt-1">
                ₱7.09 <span className="text-stone-400 font-normal">(Cost)</span> + ₱2.91 <span className="text-emerald-600 font-normal">(Markup)</span> = ₱10.00
              </div>
              <span className="text-xs text-emerald-700 font-semibold block mt-1">
                Markup Rate: 41.04%
              </span>
            </div>
          </div>
        </div>

        {/* Financial Line Graph & Revenue Forecasts Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Revenue Forecasts Table */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-stone-900 font-heading">
                  Sales & Revenue Forecasts
                </h3>
                <p className="text-xs text-stone-500">Documented in Section 10 of Business Plan</p>
              </div>
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">
                2 Phases
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b-2 border-stone-200 text-stone-500 font-bold uppercase text-[11px]">
                    <th className="pb-3">Phase</th>
                    <th className="pb-3">Pieces Sold</th>
                    <th className="pb-3 text-right">Total Sales</th>
                    <th className="pb-3 text-right">Total Cost</th>
                    <th className="pb-3 text-right text-emerald-700">Gross Profit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {REVENUE_FORECASTS.map((f, idx) => (
                    <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                      <td className="py-3.5 pr-2">
                        <span className="font-bold text-stone-900 block">{f.phase}</span>
                        <span className="text-[10px] text-stone-400 font-medium">{f.status}</span>
                      </td>
                      <td className="py-3.5 text-stone-700 font-medium">{f.sold}</td>
                      <td className="py-3.5 text-right font-bold text-stone-900">₱{f.sales.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      <td className="py-3.5 text-right text-stone-600">₱{f.totalCost.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                      <td className="py-3.5 text-right font-black text-emerald-600">₱{f.grossProfit.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 space-y-1">
              <p className="font-bold">Phase Performance Summary:</p>
              <p className="text-stone-700 leading-relaxed">
                In <strong>Phase 1</strong>, selling 200 pieces at ₱10.00 each over two campus days generates total sales of <strong>₱2,000.00</strong> and <strong>₱582.00</strong> net gross profit. In <strong>Phase 2</strong> (innovation scale), selling 300 pieces expands total revenue to <strong>₱3,000.00</strong> with <strong>₱873.00</strong> gross profit.
              </p>
            </div>
          </div>

          {/* Line Graph Visual Preview */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 font-heading">
                    Financial Line Graph
                  </h3>
                  <p className="text-xs text-stone-500">From Page 11 of Business Plan</p>
                </div>
                <button
                  onClick={() => onOpenImageModal('/financial_line_graph.png', 'Financial Line Graph', 'Official financial projection chart comparing sales, expenses, and net profit.')}
                  className="text-xs text-amber-700 hover:text-amber-800 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </button>
              </div>

              <div
                onClick={() => onOpenImageModal('/financial_line_graph.png', 'Financial Line Graph', 'Official financial projection chart comparing sales, expenses, and net profit.')}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-amber-200/70 bg-[#fffdf7] p-2 hover:border-amber-400 transition-colors"
              >
                <img
                  src="/financial_line_graph.png"
                  alt="Financial Line Graph from business plan"
                  className="w-full h-auto object-contain mx-auto group-hover:scale-[1.02] transition-transform"
                />
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
              <span className="font-semibold">Baseline 150 pcs:</span>
              <span>Sales: <strong>₱1,500</strong></span>
              <span>Expenses: <strong>₱700</strong></span>
              <span className="text-emerald-600 font-bold">Profit: ₱800</span>
            </div>
          </div>

        </div>

        {/* Dynamic Interactive Profit & Batch Calculator */}
        <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-stone-800 mb-14">
          <div className="max-w-4xl mx-auto">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-500/30">
                  <Calculator className="w-3.5 h-3.5 text-amber-400" />
                  Interactive Simulator
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                  Dynamic Batch & Profit Calculator
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm mt-1">
                  Adjust the production batch volume to test revenue, costs, and profit distribution among the 10 student team members.
                </p>
              </div>

              {/* Quick Presets */}
              <div className="flex items-center gap-1.5 self-start sm:self-center">
                <button
                  onClick={() => setCalculatorPieces(100)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    calculatorPieces === 100 ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  100 pcs (Daily)
                </button>
                <button
                  onClick={() => setCalculatorPieces(200)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    calculatorPieces === 200 ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  200 pcs (Phase 1)
                </button>
                <button
                  onClick={() => setCalculatorPieces(300)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    calculatorPieces === 300 ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  300 pcs (Phase 2)
                </button>
              </div>
            </div>

            {/* Slider Input */}
            <div className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700/80 mb-8 space-y-4">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-stone-300">Production Volume (Pieces):</span>
                <span className="text-2xl font-black text-amber-400 font-heading">
                  {calculatorPieces} pieces
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="1000"
                step="10"
                value={calculatorPieces}
                onChange={(e) => setCalculatorPieces(Number(e.target.value))}
                className="w-full h-2.5 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-stone-400">
                <span>Min: 20 pcs</span>
                <span>Standard Week: 200 pcs</span>
                <span>Max Capacity: 1,000 pcs</span>
              </div>
            </div>

            {/* Dynamic Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-stone-800/60 rounded-2xl p-4 border border-stone-700/60">
                <span className="text-xs text-stone-400 block">Total Sales</span>
                <span className="text-2xl font-black text-white font-heading mt-1 block">
                  ₱{calculatedSales.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-[11px] text-stone-400">@ ₱10.00 each</span>
              </div>

              <div className="bg-stone-800/60 rounded-2xl p-4 border border-stone-700/60">
                <span className="text-xs text-stone-400 block">Production Cost</span>
                <span className="text-2xl font-black text-stone-300 font-heading mt-1 block">
                  ₱{calculatedCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-[11px] text-stone-400">@ ₱7.09 unit cost</span>
              </div>

              <div className="bg-emerald-950/40 rounded-2xl p-4 border border-emerald-500/30">
                <span className="text-xs text-emerald-400 block">Total Gross Profit</span>
                <span className="text-2xl font-black text-emerald-400 font-heading mt-1 block">
                  ₱{calculatedProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-[11px] text-emerald-300/80 font-medium">ROI: +{roiPercent}%</span>
              </div>

              <div className="bg-amber-950/40 rounded-2xl p-4 border border-amber-500/30">
                <span className="text-xs text-amber-400 block">Share / Member (10)</span>
                <span className="text-2xl font-black text-amber-300 font-heading mt-1 block">
                  ₱{profitPerMember.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-[11px] text-amber-200/80 font-medium">Equal 10-way division</span>
              </div>
            </div>

          </div>
        </div>

        {/* Itemized Daily Expenses Accordion Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-stone-900 font-heading">
                Projected Daily Expenses Table (Total: ₱700.00 / 100 pcs)
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Detailed itemization from Pages 11 & 12 of Mini Business Plan
              </p>
            </div>
            <button
              onClick={() => setShowFullExpenseList(!showFullExpenseList)}
              className="inline-flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              <span>{showFullExpenseList ? 'Collapse Table' : 'Expand All 18 Items'}</span>
              {showFullExpenseList ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-stone-200 text-stone-400 font-bold uppercase text-[11px]">
                  <th className="pb-3">Item / Category</th>
                  <th className="pb-3">Unit / Supply</th>
                  <th className="pb-3">Description</th>
                  <th className="pb-3 text-right">Cost (PHP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {(showFullExpenseList ? DAILY_EXPENSES : DAILY_EXPENSES.slice(0, 6)).map((item, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/30">
                    <td className="py-2.5 font-bold text-stone-900">{item.name}</td>
                    <td className="py-2.5 text-stone-500 text-xs">{item.unit}</td>
                    <td className="py-2.5 text-stone-600 text-xs">{item.description}</td>
                    <td className="py-2.5 text-right font-mono font-bold text-stone-800">₱{item.cost.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-stone-300 font-bold text-stone-900 text-sm">
                  <td colSpan={3} className="pt-3">
                    Total Estimated Daily Cost (100 Pieces Batch):
                  </td>
                  <td className="pt-3 text-right text-base text-amber-800 font-mono font-black">
                    ₱700.00
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {!showFullExpenseList && (
            <div className="mt-4 text-center">
              <button
                onClick={() => setShowFullExpenseList(true)}
                className="text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors cursor-pointer"
              >
                + View Remaining 12 Items (Cooking oil, Butane, Squeeze bottles, Utensils...)
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
