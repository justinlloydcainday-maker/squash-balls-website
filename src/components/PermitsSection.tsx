import { FileCheck, ShieldAlert, ZoomIn, ExternalLink, Scale, CheckCircle2 } from 'lucide-react';
import { LEGAL_DOSSIER_ITEMS, BUSINESS_INFO } from '../data/businessData';

interface PermitsSectionProps {
  onOpenImageModal: (imgUrl: string, title: string, caption: string) => void;
  onOpenPdfModal: () => void;
}

export default function PermitsSection({ onOpenImageModal, onOpenPdfModal }: PermitsSectionProps) {
  return (
    <section id="permits" className="py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <FileCheck className="w-3.5 h-3.5" />
            Compliance & Documentation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-heading">
            Business Permits & Registration
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Educational compliance dossier simulating local government licensing, sanitary clearance, and food safety standards for student enterprise operations.
          </p>
        </div>

        {/* Academic School Disclaimer Notice (exact match to reference website spirit) */}
        <div className="mb-12 bg-amber-50/80 border-2 border-amber-300 rounded-3xl p-6 sm:p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center shrink-0 shadow-xs">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wide">
                Academic Curriculum Notice & Disclaimer
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                These documents and mock municipal permits are prepared strictly in partial fulfillment of the course requirement in <strong>Entrepreneurial Mind (ELECTIVE. 211)</strong> under the guidance of instructor <strong>{BUSINESS_INFO.instructor}</strong> at <strong>Eastern Samar State University – Borongan</strong>. They serve educational simulation purposes for learning regulatory compliance and food safety governance.
              </p>
            </div>
          </div>
        </div>

        {/* Permits Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Mayor's Business Permit Card */}
          <div className="lg:col-span-7 bg-[#fffdfa] border-2 border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900">
                  LGU Borongan Simulation
                </span>
                <h3 className="text-xl font-bold text-stone-900 font-heading mt-1">
                  Business Permit (Mayor's Permit)
                </h3>
                <p className="text-xs text-stone-500">
                  Permit No: <strong className="text-stone-800">{BUSINESS_INFO.permitNumber}</strong> • Date: {BUSINESS_INFO.permitDate}
                </p>
              </div>
              <button
                onClick={() => onOpenImageModal('/business_permit.png', "Mayor's Business Permit (Borongan)", 'Official mock Business Permit table submitted in mini business plan page 17.')}
                className="inline-flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0"
              >
                <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                <span>Enlarge Document</span>
              </button>
            </div>

            {/* Document Image with click to enlarge */}
            <div
              onClick={() => onOpenImageModal('/business_permit.png', "Mayor's Business Permit (Borongan)", 'Official mock Business Permit table submitted in mini business plan page 17.')}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-stone-200 bg-white p-2 shadow-inner hover:border-amber-400 transition-colors"
            >
              <img
                src="/business_permit.png"
                alt="Business Permit Mock Document"
                className="w-full h-auto object-contain mx-auto group-hover:scale-[1.01] transition-transform duration-300"
              />
              <div className="p-2 text-center text-xs text-stone-400 font-medium">
                Click image to view high-resolution fee breakdown and official receipts
              </div>
            </div>

            {/* Assessment Summary Quick List */}
            <div className="mt-5 pt-4 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-2.5 bg-white rounded-xl border border-stone-100">
                <span className="text-stone-400 block text-[10px]">Mayor's License</span>
                <span className="font-bold text-stone-800">₱1,500.00</span>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-stone-100">
                <span className="text-stone-400 block text-[10px]">Local Business Tax</span>
                <span className="font-bold text-stone-800">₱2,200.00</span>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-stone-100">
                <span className="text-stone-400 block text-[10px]">Sanitary & Health</span>
                <span className="font-bold text-stone-800">₱800.00</span>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-stone-100">
                <span className="text-stone-400 block text-[10px]">Fire Safety (FSIC)</span>
                <span className="font-bold text-stone-800">₱500.00</span>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-stone-100">
                <span className="text-stone-400 block text-[10px]">Environmental Fee</span>
                <span className="font-bold text-stone-800">₱600.00</span>
              </div>
              <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200">
                <span className="text-emerald-700 block text-[10px] font-semibold">Total Assessed</span>
                <span className="font-black text-emerald-800">₱6,400.00</span>
              </div>
            </div>
          </div>

          {/* Right Column: Regulatory Considerations Dossier Preview */}
          <div className="lg:col-span-5 bg-[#fffdfa] border-2 border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900">
                    Republic Acts & Codes
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 font-heading mt-1">
                    Regulatory Dossier
                  </h3>
                  <p className="text-xs text-stone-500">Documented in Page 18 of Plan</p>
                </div>
                <button
                  onClick={() => onOpenImageModal('/regulatory_dossier.png', 'Legal & Regulatory Considerations Dossier', 'Full regulatory compliance list from page 18 of the business plan.')}
                  className="text-xs text-amber-700 hover:text-amber-800 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </button>
              </div>

              <div
                onClick={() => onOpenImageModal('/regulatory_dossier.png', 'Legal & Regulatory Considerations Dossier', 'Full regulatory compliance list from page 18 of the business plan.')}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-stone-200 bg-white p-2 hover:border-amber-400 transition-colors"
              >
                <img
                  src="/regulatory_dossier.png"
                  alt="Regulatory Dossier from business plan"
                  className="w-full h-auto object-contain mx-auto group-hover:scale-[1.01] transition-transform"
                />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 space-y-2">
              <button
                onClick={onOpenPdfModal}
                className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                <span>View Full 19-Page Business Plan PDF</span>
              </button>
            </div>
          </div>

        </div>

        {/* Legal Framework Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {LEGAL_DOSSIER_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#fffdf8] rounded-2xl p-5 border border-stone-200/90 shadow-2xs hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">
                  {item.code}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-200/80 text-stone-700">
                  {item.badge}
                </span>
              </div>
              <h4 className="font-bold text-stone-900 text-sm font-heading mb-1.5">
                {item.title}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
