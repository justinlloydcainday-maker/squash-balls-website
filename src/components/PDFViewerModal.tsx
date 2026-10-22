import { useEffect, useState } from 'react';
import { X, FileText, Download, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface PDFViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PDFViewerModal({ isOpen, onClose }: PDFViewerModalProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 19;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentPage((p) => Math.min(totalPages, p + 1));
      if (e.key === 'ArrowLeft') setCurrentPage((p) => Math.max(1, p - 1));
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const paddedPage = String(currentPage).padStart(2, '0');
  const pageImagePath = `/page_${paddedPage}.png`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/85 backdrop-blur-sm p-2 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh] h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-stone-950 border-b border-stone-800 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base font-heading">
                Mini Business Plan Document
              </h3>
              <p className="text-[11px] text-stone-400">
                19-Page Academic Submission • BCSC-2A • Elective 211
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/mini_business_plan.pdf"
              download="Squash_Cheesy_Balls_Mini_Business_Plan.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <a
              href="/mini_business_plan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white text-xs flex items-center gap-1"
              title="Open raw PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-stone-800 text-stone-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Page Browser Toolbar */}
        <div className="bg-stone-950/70 border-b border-stone-800/80 px-4 py-2 flex items-center justify-between text-xs text-stone-300">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1 rounded bg-stone-800 hover:bg-stone-700 disabled:opacity-40 disabled:hover:bg-stone-800 cursor-pointer text-white flex items-center"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[11px] pr-1">Prev</span>
            </button>

            <span className="font-mono text-xs">
              Page <strong className="text-amber-400">{currentPage}</strong> of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-1 rounded bg-stone-800 hover:bg-stone-700 disabled:opacity-40 disabled:hover:bg-stone-800 cursor-pointer text-white flex items-center"
            >
              <span className="text-[11px] pl-1">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-1 text-[11px] text-stone-400">
            <span>Jump to:</span>
            <button onClick={() => setCurrentPage(1)} className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300">Cover</button>
            <button onClick={() => setCurrentPage(2)} className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300">Logo</button>
            <button onClick={() => setCurrentPage(3)} className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300">Summary</button>
            <button onClick={() => setCurrentPage(9)} className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300">Org Chart</button>
            <button onClick={() => setCurrentPage(11)} className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300">Financials</button>
            <button onClick={() => setCurrentPage(15)} className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300">Testing</button>
            <button onClick={() => setCurrentPage(17)} className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300">Permits</button>
          </div>
        </div>

        {/* Content Viewer: Crisp High-Res Render of PDF Page */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-stone-950/60 flex items-center justify-center">
          <div className="relative max-h-full shadow-2xl bg-white rounded-lg overflow-hidden border border-stone-700">
            <img
              src={pageImagePath}
              alt={`Page ${currentPage} of Business Plan`}
              className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-stone-950 border-t border-stone-800 text-stone-400 text-xs flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            Eastern Samar State University – Borongan • Department of Technology • College of Computer Studies
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-stone-500">Instructor: {BUSINESS_INFO.instructor}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
