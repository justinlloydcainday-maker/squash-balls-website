import { ZoomIn, Camera } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/businessData';
import { getAssetUrl } from '../utils/assetHelper';

interface DocumentationSectionProps {
  onOpenImageModal: (imgUrl: string, title: string, caption?: string) => void;
}

export default function DocumentationSection({ onOpenImageModal }: DocumentationSectionProps) {
  return (
    <section id="gallery" className="py-16 sm:py-20 bg-[#fffdfa] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
              Field Documentation
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight font-heading mt-1">
              From Kitchen Prep to Campus Buyers
            </h2>
            <p className="text-stone-600 text-sm mt-1 max-w-xl">
              Photographic evidence of recipe testing, kitchen production, and live customer feedback at Eastern Samar State University – Borongan.
            </p>
          </div>
          <div className="text-xs text-stone-500 font-medium shrink-0">
            Click any photo to zoom in high resolution
          </div>
        </div>

        {/* 4-Card Documentary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_PHOTOS.slice(0, 4).map((photo) => (
            <div
              key={photo.id}
              onClick={() => onOpenImageModal(photo.imageUrl, photo.title, photo.caption)}
              className="group cursor-pointer bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs hover:border-amber-400 transition-colors flex flex-col"
            >
              <div className="aspect-4/3 relative overflow-hidden bg-stone-100">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/15 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900/80 text-white text-[11px] px-2.5 py-1 rounded-md flex items-center gap-1 font-medium">
                    <ZoomIn className="w-3 h-3 text-amber-400" />
                    <span>Zoom</span>
                  </div>
                </div>
              </div>
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-xs sm:text-sm line-clamp-1">
                    {photo.title}
                  </h4>
                  <p className="text-[11px] text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
                <div className="text-[10px] text-amber-800 font-medium mt-2 pt-2 border-t border-stone-100">
                  {photo.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Portfolio Collage Strip */}
        <div className="mt-8 border border-stone-200 bg-white p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">
                Complete Academic Submission Collage (Page 16)
              </h4>
              <p className="text-xs text-stone-500">
                Official photographic log submitted to Ms. Alexis Oliver Caraga, LPT.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenImageModal(getAssetUrl('/phase_documentation.png'), 'Phase 1 & 2 Campus Rollout Collage', 'Full documentation page 16 from the business plan showing production and campus sales.')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-900 bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-lg transition-colors cursor-pointer shrink-0"
          >
            <ZoomIn className="w-3.5 h-3.5" />
            <span>Enlarge Full Collage</span>
          </button>
        </div>

      </div>
    </section>
  );
}
