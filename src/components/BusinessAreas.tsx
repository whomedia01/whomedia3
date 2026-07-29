import React from 'react';
import { BUSINESS_PILLARS } from '../data/companyData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const BusinessAreas: React.FC = () => {
  return (
    <section id="business" className="h-[100dvh] min-h-[100dvh] snap-start snap-always flex-shrink-0 flex flex-col justify-center items-center py-12 sm:py-16 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Category Header: Business Areas */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold text-blue-600 tracking-wider bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60 shadow-2xs uppercase inline-block mb-2">
            콘텐츠 개발부터 언론 마케팅까지 통합 비즈니스
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            디지털 통합 미디어 비즈니스 허브
          </h2>
          <p className="text-xs sm:text-sm font-bold text-blue-900 mb-2">
            "기업 브랜드 가치를 극대화하는 가장 확실한 원스톱 미디어 솔루션"
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            단순한 콘텐츠 개발을 넘어 교육 컨설팅, 브랜딩, 언론 홍보·마케팅까지 한 번에 실현하는 <strong className="text-slate-900 font-bold">(주)후미디어 고유의 3대 핵심 미디어 네트워크 시스템</strong>입니다.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BUSINESS_PILLARS.map((pillar) => (
            <div 
              key={pillar.id}
              id={pillar.id}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                    {pillar.code}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="space-y-2.5">
                    {pillar.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-slate-700">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-4">
                <a 
                  href="#contact"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>상세 솔루션 문의</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
