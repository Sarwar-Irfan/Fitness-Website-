import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Membership from './components/Membership';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import JoinModal from './components/JoinModal';
import ProgramModal from './components/ProgramModal';
import LightboxModal from './components/LightboxModal';

import './App.css';

export default function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState('Premium Plan ($49/mo)');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  const handleOpenJoinModal = (planOrTopic = 'Premium Plan ($49/mo)') => {
    setSelectedPlanForModal(planOrTopic);
    setJoinModalOpen(true);
  };

  const handleSelectProgram = (program) => {
    setSelectedProgram(program);
  };

  const handleEnrollFromProgram = (programTitle) => {
    handleOpenJoinModal(`${programTitle} Program`);
  };

  const handleSelectGalleryImage = (imageItem) => {
    setSelectedGalleryImage(imageItem);
  };

  return (
    <div className="iron-elite-app">
      {/* Navigation Header */}
      <Navbar onOpenJoinModal={handleOpenJoinModal} />

      {/* Main Page Content */}
      <main>
        <Hero onOpenJoinModal={handleOpenJoinModal} />
        <About onOpenJoinModal={handleOpenJoinModal} />
        <Programs onSelectProgram={handleSelectProgram} />
        <Trainers onOpenJoinModal={handleOpenJoinModal} />
        <Membership onOpenJoinModal={handleOpenJoinModal} />
        <Gallery onSelectImage={handleSelectGalleryImage} />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
        initialPlan={selectedPlanForModal}
      />

      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onEnroll={handleEnrollFromProgram}
      />

      <LightboxModal
        imageItem={selectedGalleryImage}
        onClose={() => setSelectedGalleryImage(null)}
      />
    </div>
  );
}
