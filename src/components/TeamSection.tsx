import { Users, GraduationCap, Award, FileText, ZoomIn, ShieldCheck } from 'lucide-react';
import { TEAM_MEMBERS, BUSINESS_INFO } from '../data/businessData';
import { getAssetUrl } from '../utils/assetHelper';

interface TeamSectionProps {
  onOpenPdfModal: () => void;
  onOpenImageModal: (imgUrl: string, title: string, caption?: string) => void;
}

export default function TeamSection({ onOpenPdfModal, onOpenImageModal }: TeamSectionProps) {
  return (
    <section id="team" className="py-16 sm:py-20 bg-[#fffdfa] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
            Academic Venture & Governance
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight font-heading mt-1">
            Meet the Student Innovators
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            A collaborative enterprise by <strong>BCSC-2A</strong> students under the guidance of instructor <strong>Ms. Alexis Oliver Caraga, LPT</strong> at Eastern Samar State University – Borongan.
          </p>
        </div>

        {/* 2-Column: Key Team Leaders + Academic / Legal Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left: Key Founders / Roles */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {TEAM_MEMBERS.slice(0, 4).map((member) => (
              <div
                key={member.name}
                className="bg-white border border-stone-200 p-4 rounded-xl shadow-xs flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0">
                  {member.avatarInitials}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{member.name}</h4>
                  <span className="text-xs font-semibold text-amber-800 block">{member.role}</span>
                  <p className="text-[11px] text-stone-500 mt-1 leading-relaxed line-clamp-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Academic Course Card & Org Chart */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-stone-200 bg-white p-5 rounded-2xl shadow-xs">
              <div className="flex items-center gap-2.5 mb-3">
                <GraduationCap className="w-5 h-5 text-amber-700" />
                <h3 className="font-bold text-stone-900 text-sm">
                  Course & Institution Profile
                </h3>
              </div>
              <dl className="space-y-2 text-xs">
                <div className="flex justify-between border-b border-stone-100 pb-1.5">
                  <dt className="text-stone-500">Subject</dt>
                  <dd className="font-semibold text-stone-900 text-right">{BUSINESS_INFO.courseName}</dd>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-1.5">
                  <dt className="text-stone-500">Instructor</dt>
                  <dd className="font-semibold text-stone-900 text-right">{BUSINESS_INFO.instructor}</dd>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-1.5">
                  <dt className="text-stone-500">Class Section</dt>
                  <dd className="font-semibold text-stone-900 text-right">{BUSINESS_INFO.classSection}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-stone-500">Campus</dt>
                  <dd className="font-semibold text-stone-900 text-right">{BUSINESS_INFO.campus}</dd>
                </div>
              </dl>
            </div>

            {/* Org Chart Enlarge Card */}
            <div
              onClick={() => onOpenImageModal(getAssetUrl('/org_chart.png'), 'Organizational Hierarchy', 'Complete team hierarchy chart from page 9 of the business plan.')}
              className="cursor-pointer border border-stone-200 bg-white p-3.5 rounded-2xl flex items-center justify-between hover:border-amber-400 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-10 rounded-lg overflow-hidden bg-stone-100 border border-stone-200 shrink-0">
                  <img src={getAssetUrl('/org_chart.png')} alt="Org chart thumbnail" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-xs">View Organizational Chart</h4>
                  <p className="text-[11px] text-stone-500">Full 9-member organizational hierarchy</p>
                </div>
              </div>
              <ZoomIn className="w-4 h-4 text-stone-400 group-hover:text-amber-700 transition-colors" />
            </div>
          </div>

        </div>

        {/* Business Permit & Regulatory Compliance Preview Strip */}
        <div className="border border-stone-200 bg-white p-6 rounded-2xl shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Legal & Regulatory Compliance
                </span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-heading">
                Mayor's Business Permit & Sanitary Dossier Included
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                As required by the university curriculum, the business plan incorporates an official mock Mayor's Permit (No. {BUSINESS_INFO.permitNumber}), BPLO fee schedule (₱6,400.00 assessment), and compliance with Republic Act 10611 (Food Safety Act of 2013).
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-2.5">
              <button
                onClick={() => onOpenImageModal(getAssetUrl('/business_permit.png'), "Mayor's Permit Document", 'Mock Business Permit fee table from Page 17.')}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                <ZoomIn className="w-3.5 h-3.5 text-amber-700" />
                <span>View Permit Document</span>
              </button>
              
              <button
                onClick={onOpenPdfModal}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Open 19-Page PDF Plan</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
