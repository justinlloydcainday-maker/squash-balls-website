import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import DocumentationSection from './components/DocumentationSection';
import FinancialSection from './components/FinancialSection';
import TeamSection from './components/TeamSection';
import OrderSection from './components/OrderSection';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import PDFViewerModal from './components/PDFViewerModal';

export default function App() {
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    caption?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
    caption: '',
  });

  const handleOpenImageModal = (imageUrl: string, title: string, caption?: string) => {
    setLightboxState({
      isOpen: true,
      imageUrl,
      title,
      caption,
    });
  };

  const handleCloseImageModal = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleScrollToOrder = () => {
    const orderElement = document.getElementById('order');
    if (orderElement) {
      orderElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fffdfa] text-stone-800 antialiased selection:bg-amber-200 selection:text-amber-900">
      {/* 3-Zone Clean Header */}
      <Navbar
        onOpenOrderModal={handleScrollToOrder}
        onOpenPdfModal={() => setPdfModalOpen(true)}
      />

      {/* Main Streamlined Content */}
      <main className="flex-1">
        {/* 1. Value Proposition Hero */}
        <Hero
          onOpenOrderModal={handleScrollToOrder}
          onOpenPdfModal={() => setPdfModalOpen(true)}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 2. Signature Product & Step Process */}
        <ProductSection
          onOpenOrderModal={handleScrollToOrder}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 3. High-Res Photo Gallery & Campus Rollout */}
        <DocumentationSection
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 4. Unit Economics & Interactive Batch Simulator */}
        <FinancialSection
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 5. Student Innovators & Academic/Legal Governance */}
        <TeamSection
          onOpenPdfModal={() => setPdfModalOpen(true)}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 6. Campus Pre-Order System */}
        <OrderSection />
      </main>

      {/* Clean Footer */}
      <Footer
        onOpenPdfModal={() => setPdfModalOpen(true)}
        onOpenOrderModal={handleScrollToOrder}
      />

      {/* High-Resolution Photo Zoom Modal */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseImageModal}
        imageUrl={lightboxState.imageUrl}
        title={lightboxState.title}
        caption={lightboxState.caption}
      />

      {/* 19-Page Academic Submission PDF Viewer */}
      <PDFViewerModal
        isOpen={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
      />
    </div>
  );
}
