import React from 'react';
import { STUDIO_PACKAGES } from '../data/companyData';
import { Check, Calendar } from 'lucide-react';

interface StudioRentalProps {
  onSelectStudio?: (studioTitle: string) => void;
}

export const StudioRental: React.FC<StudioRentalProps> = ({ onSelectStudio }) => {
  const handleBooking = (title: string) => {
    if (onSelectStudio) {
      onSelectStudio(title);
    } else {
      const elem = document.getElementById('contact');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="studio" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full uppercase tracking-wider">
            STUDIO RENTAL & INFRA
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-3">
            160평 최첨단 전문 스튜디오
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            쾌적한 촬영 환경과 완벽한 방음 시스템, 최신형 4K 카메라 및 멀티 세트 완비
          </p>
        </div>

        {/* Studio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STUDIO_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id}
              id={pkg.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                    {pkg.badge}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-4">
                    {pkg.title}
                  </h3>

                  <ul className="space-y-3 mb-6">
                    {pkg.specs.map((spec, i) => (
                      <li key={i} className="flex items-start space-x-2.5 text-xs text-slate-700">
                        <span className="flex-shrink-0 bg-emerald-50 text-emerald-600 p-0.5 rounded mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => handleBooking(pkg.title)}
                  className="w-full bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{pkg.title} 예약 문의하기</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
