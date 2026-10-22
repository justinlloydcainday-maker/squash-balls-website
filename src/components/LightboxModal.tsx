import { useEffect } from 'react';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  caption?: string;
}

export default function LightboxModal({
  isOpen,
  onClose,
  imageUrl,
  title,
  caption,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/85 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-stone-950 border-b border-stone-800 text-white">
          <div className="flex items-center gap-2">
            <ZoomIn className="w-4 h-4 text-amber-400" />
            <h3 className="font-bold text-sm sm:text-base font-heading truncate max-w-md">
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 text-xs flex items-center gap-1"
              title="Open full image in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Raw Size</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Image Display */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-stone-950/40 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl shadow-lg border border-stone-800/80 bg-stone-900"
          />
        </div>

        {/* Modal Caption Footer */}
        {caption && (
          <div className="px-6 py-3 bg-stone-950 border-t border-stone-800 text-stone-300 text-xs flex items-center justify-between">
            <p className="leading-relaxed text-stone-300">{caption}</p>
            <span className="text-[10px] text-stone-500 uppercase tracking-widest shrink-0 ml-4 hidden sm:inline">
              ESC to close
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
