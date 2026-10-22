import { useState } from 'react';
import { Camera, ZoomIn, CheckCircle2, Users, Flame, Utensils } from 'lucide-react';
import { GALLERY_PHOTOS, DocumentationPhoto } from '../data/businessData';

interface DocumentationSectionProps {
  onOpenImageModal: (imgUrl: string, title: string, caption: string) => void;
}

export default function DocumentationSection({ onOpenImageModal }: DocumentationSectionProps) {
  const [filter, setFilter] = useState<'all' | 'testing' | 'cooking' | 'campus'>('all');

  const filteredPhotos = filter === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((photo) => photo.category === filter);

  return (
    <section id="documentation" className="py-20 bg-[#fdfbf6] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            Photo Gallery & Proof of Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-heading">
            Product & Customer Documentation
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Real photographic documentation from our recipe formulation, sensory evaluation, deep frying procedures, and actual campus sales at Eastern Samar State University – Borongan.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            All Documentation ({GALLERY_PHOTOS.length})
          </button>

          <button
            onClick={() => setFilter('testing')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              filter === 'testing'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>Product Testing & Sensory</span>
          </button>

          <button
            onClick={() => setFilter('cooking')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              filter === 'cooking'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Preparation & Frying</span>
          </button>

          <button
            onClick={() => setFilter('campus')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              filter === 'campus'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Campus Sales & Customers</span>
          </button>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo: DocumentationPhoto) => (
            <div
              key={photo.id}
              onClick={() => onOpenImageModal(photo.imageUrl, photo.title, photo.caption)}
              className="group bg-white rounded-2xl overflow-hidden border border-amber-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm ${
                    photo.category === 'testing'
                      ? 'bg-blue-600 text-white'
                      : photo.category === 'cooking'
                      ? 'bg-orange-600 text-white'
                      : 'bg-emerald-600 text-white'
                  }`}>
                    {photo.category === 'testing' ? 'Testing' : photo.category === 'cooking' ? 'Cooking' : 'Campus'}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-stone-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-amber-600" />
                    Enlarge Image
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider mb-1">
                    {photo.date}
                  </div>
                  <h3 className="font-bold text-stone-900 text-base font-heading group-hover:text-amber-600 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span className="flex items-center gap-1 text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified ESSU Record
                  </span>
                  <span className="font-semibold text-stone-400">Click to view</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Big Documentation Portfolio Highlight */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                Academic Evaluation Proof
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-stone-900 font-heading">
                Full Photographic Log Submitted in Mini Business Plan
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                As required by <strong>Elective 211 (Entrepreneurial Mind)</strong>, the team documented every single phase of development—from raw ingredient slicing, batter mixing, breadcrumb coating, deep frying, to public selling and customer taste validation at ESSU Main Campus.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end gap-3">
              <button
                onClick={() => onOpenImageModal('/phase_documentation.png', 'Phase 1 & 2 Campus Rollout Collage', 'Full documentation page 16 from the business plan showing production and campus sales.')}
                className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-5 py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                <ZoomIn className="w-4 h-4 text-amber-400" />
                <span>View Full Phase Collage</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
