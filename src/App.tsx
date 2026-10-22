/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import DocumentationSection from './components/DocumentationSection';
import BehindTheScenes from './components/BehindTheScenes';
import TeamSection from './components/TeamSection';
import ManagementStructure from './components/ManagementStructure';
import FinancialSection from './components/FinancialSection';
import PermitsSection from './components/PermitsSection';
import AboutSection from './components/AboutSection';
import OrderSection from './components/OrderSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import PDFViewerModal from './components/PDFViewerModal';

export default function App() {
  // Modal states
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
    <div className="min-h-screen flex flex-col bg-[#fffdf7] text-stone-800 antialiased selection:bg-amber-200 selection:text-amber-900">
      {/* Sticky Navigation */}
      <Navbar
        onOpenOrderModal={handleScrollToOrder}
        onOpenPdfModal={() => setPdfModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenOrderModal={handleScrollToOrder}
          onOpenPdfModal={() => setPdfModalOpen(true)}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 2. Our Product Section */}
        <ProductSection
          onOpenOrderModal={handleScrollToOrder}
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 3. Product & Customer Documentation (Photo Gallery) */}
        <DocumentationSection
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 4. Behind the Scenes (Production Process) */}
        <BehindTheScenes />

        {/* 5. Meet Our Team */}
        <TeamSection />

        {/* 6. Management Structure & Hierarchy */}
        <ManagementStructure
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 7. Financial Documentation & Simulator */}
        <FinancialSection
          onOpenImageModal={handleOpenImageModal}
        />

        {/* 8. Business Permits & Legal Dossier */}
        <PermitsSection
          onOpenImageModal={handleOpenImageModal}
          onOpenPdfModal={() => setPdfModalOpen(true)}
        />

        {/* 9. About Us, Mission, Objectives & SWOT Matrix */}
        <AboutSection />

        {/* 10. Order Now & Pre-order System */}
        <OrderSection />

        {/* 11. Contact Us & Campus Map Info */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPdfModal={() => setPdfModalOpen(true)}
        onOpenOrderModal={handleScrollToOrder}
      />

      {/* High-Resolution Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseImageModal}
        imageUrl={lightboxState.imageUrl}
        title={lightboxState.title}
        caption={lightboxState.caption}
      />

      {/* Full 19-Page PDF Business Plan Viewer Modal */}
      <PDFViewerModal
        isOpen={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
      />
    </div>
  );
}
