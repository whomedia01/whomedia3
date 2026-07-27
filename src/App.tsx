import React, { useState } from 'react';
import { Header } from './components/Header';
import { Organization } from './components/Organization';
import { BusinessAreas } from './components/BusinessAreas';
import { StudioRental } from './components/StudioRental';
import { StudioGallery } from './components/StudioGallery';
import { Portfolio } from './components/Portfolio';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [selectedStudio, setSelectedStudio] = useState<string>('');

  const handleStudioSelect = (title: string) => {
    setSelectedStudio(title);
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-red-500 selection:text-white">
      {/* Navigation Bar */}
      <Header />

      {/* Main Content Layout matching video sequence */}
      <main className="pt-16">
        {/* 1. Organization (조직구성) */}
        <Organization />

        {/* 2. Business Areas (사업영역) */}
        <BusinessAreas />

        {/* 3. Studio Rental (스튜디오 임대) */}
        <StudioRental onSelectStudio={handleStudioSelect} />

        {/* 4. Studio Gallery (스튜디오 갤러리) */}
        <StudioGallery />

        {/* 5. Portfolio (포트폴리오) */}
        <Portfolio />

        {/* 6. Clients & Partners (주요 파트너사) */}
        <Clients />

        {/* 7. Contact & Estimate (제작 문의 및 견적) */}
        <Contact initialStudioSelect={selectedStudio} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
