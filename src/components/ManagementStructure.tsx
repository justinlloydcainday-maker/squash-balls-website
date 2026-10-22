import { GitMerge, ZoomIn, Shield, Briefcase, ChevronRight } from 'lucide-react';

interface ManagementStructureProps {
  onOpenImageModal: (imgUrl: string, title: string, caption: string) => void;
}

export default function ManagementStructure({ onOpenImageModal }: ManagementStructureProps) {
  return (
    <section id="structure" className="py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <GitMerge className="w-3.5 h-3.5" />
            Organizational Hierarchy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-heading">
            Our Management Structure
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            A clearly structured division of responsibilities ensuring accountability across executive governance, marketing, operations, inventory, finance, and food hygiene.
          </p>
        </div>

        {/* Visual Org Chart Flow */}
        <div className="bg-[#fffdf7] border-2 border-amber-200/80 rounded-3xl p-6 sm:p-10 shadow-sm mb-12">
          
          {/* Level 1: CEO */}
          <div className="flex justify-center mb-8">
            <div className="bg-stone-900 text-white border-2 border-amber-400 rounded-2xl p-4 sm:p-5 text-center w-full max-w-sm shadow-lg">
              <span className="text-[10px] uppercase font-black tracking-widest text-amber-400 bg-stone-800 px-2 py-0.5 rounded-full inline-block mb-1">
                Executive Leadership
              </span>
              <h3 className="text-lg font-black text-white font-heading">
                Sucatan, Jhelanz O.
              </h3>
              <p className="text-xs font-semibold text-amber-400">
                Chief Executive Officer (CEO)
              </p>
              <p className="text-[11px] text-stone-300 mt-1">
                Oversees enterprise strategy, operations, and final business decisions.
              </p>
            </div>
          </div>

          {/* Connecting Branch Line */}
          <div className="hidden md:block w-3/4 mx-auto border-t-2 border-dashed border-amber-300 relative mb-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-500" />
          </div>

          {/* Level 2: Functional Department Managers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-10">
            <div className="bg-white border border-amber-200 rounded-xl p-3.5 text-center shadow-2xs">
              <span className="text-[10px] font-bold uppercase text-stone-400">Marketing</span>
              <h4 className="font-bold text-stone-900 text-sm mt-0.5">Traboco, Nathalie C.</h4>
              <p className="text-xs text-amber-700 font-medium">Marketing Head</p>
              <p className="text-[11px] text-stone-500 mt-1">Promotions & Social Media</p>
            </div>

            <div className="bg-white border border-amber-200 rounded-xl p-3.5 text-center shadow-2xs">
              <span className="text-[10px] font-bold uppercase text-stone-400">Sales</span>
              <h4 className="font-bold text-stone-900 text-sm mt-0.5">Alvarez, Mae Cassandra</h4>
              <p className="text-xs text-amber-700 font-medium">Sales Manager</p>
              <p className="text-[11px] text-stone-500 mt-1">Campus Distribution</p>
            </div>

            <div className="bg-white border border-amber-200 rounded-xl p-3.5 text-center shadow-2xs">
              <span className="text-[10px] font-bold uppercase text-stone-400">IT & Tech</span>
              <h4 className="font-bold text-stone-900 text-sm mt-0.5">Lira, Cherrylou D.</h4>
              <p className="text-xs text-amber-700 font-medium">IT & Website Manager</p>
              <p className="text-[11px] text-stone-500 mt-1">Digital Presence & Web</p>
            </div>

            <div className="bg-white border border-amber-200 rounded-xl p-3.5 text-center shadow-2xs">
              <span className="text-[10px] font-bold uppercase text-stone-400">Admin</span>
              <h4 className="font-bold text-stone-900 text-sm mt-0.5">Baula, John Michael E.</h4>
              <p className="text-xs text-amber-700 font-medium">Administrative Manager</p>
              <p className="text-[11px] text-stone-500 mt-1">Logistics & Records</p>
            </div>

            <div className="bg-white border border-amber-200 rounded-xl p-3.5 text-center shadow-2xs">
              <span className="text-[10px] font-bold uppercase text-stone-400">Accounting</span>
              <h4 className="font-bold text-stone-900 text-sm mt-0.5">Quilicol, Jennel B.</h4>
              <p className="text-xs text-amber-700 font-medium">Accounting Manager</p>
              <p className="text-[11px] text-stone-500 mt-1">Revenues & Bookkeeping</p>
            </div>
          </div>

          {/* Level 3: Kitchen & Production Team */}
          <div className="bg-white/90 border border-stone-200/90 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Briefcase className="w-4 h-4 text-amber-600" />
              <span>Production, Culinary Prep & Quality Staff</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                <span className="font-bold text-stone-900 block">Carrie Desuelao</span>
                <span className="text-stone-500 text-[11px]">Ingredient Prep & Cooking</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                <span className="font-bold text-stone-900 block">Leo Cadalin</span>
                <span className="text-stone-500 text-[11px]">Frying & Temperature Control</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                <span className="font-bold text-stone-900 block">Necole Cebrero</span>
                <span className="text-stone-500 text-[11px]">Sanitation & Quality Testing</span>
              </div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                <span className="font-bold text-stone-900 block">Elma B. Mabignay</span>
                <span className="text-stone-500 text-[11px]">Packaging & Serving Setup</span>
              </div>
            </div>
          </div>

        </div>

        {/* Business Plan Org Chart Preview */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-stone-900 font-heading">
                Documented Org Chart in Mini Business Plan
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Page 9 of Elective 211 Course Requirement Submission
              </p>
            </div>
            <button
              onClick={() => onOpenImageModal('/org_chart.png', 'Official Organizational Chart', 'Hierarchical organizational flow chart from page 9 of the business plan.')}
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0"
            >
              <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
              <span>Enlarge Original Chart</span>
            </button>
          </div>

          <div
            onClick={() => onOpenImageModal('/org_chart.png', 'Official Organizational Chart', 'Hierarchical organizational flow chart from page 9 of the business plan.')}
            className="group cursor-pointer rounded-2xl overflow-hidden border border-stone-200 bg-stone-50 p-2 shadow-inner"
          >
            <img
              src="/org_chart.png"
              alt="Official Management Team Org Chart"
              className="w-full h-auto object-contain max-h-72 mx-auto group-hover:scale-[1.01] transition-transform"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
