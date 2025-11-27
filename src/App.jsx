import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import DonationModal from './components/DonationModal';

import { trackEvent } from './analytics';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStarted = () => {
    trackEvent('click_get_started');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    trackEvent('modal_closed');
    setIsModalOpen(false);
  };

  const handleDownload = () => {
    trackEvent('download_product', { type: 'free_skip' });
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = '/Viral_Social_Media_Prompts.pdf';
    link.download = 'Viral_Social_Media_Prompts.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsModalOpen(false);
    alert("Thanks! Your download should start shortly.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onGetStarted={handleGetStarted} />
      <Features />
      <Testimonials />

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 AI Prompt Tools. All rights reserved.</p>
        </div>
      </footer>

      <DonationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onDownload={handleDownload}
      />
    </div>
  );
}

export default App;
