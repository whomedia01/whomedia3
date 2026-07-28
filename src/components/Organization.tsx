import React from 'react';
import { DIVISIONS_DATA, COMPANY_INFO } from '../data/companyData';
import { UserCheck, ShieldCheck, Video, BookOpen, Cpu, Briefcase } from 'lucide-react';

export const Organization: React.FC = () => {
  const getIcon = (code: string) => {
    switch (code) {
      case 'DIVISION 01': return <BookOpen className="w-5 h-5 text-blue-600" />;
      case 'DIVISION 02': return <Video className="w-5 h-5 text-indigo-600" />;
      case 'DIVISION 03': return <Cpu className="w-5 h-5 text-cyan-600" />;
      case 'DIVISION 04': return <Briefcase className="w-5 h-5 text-amber-600" />;
      default: return <ShieldCheck className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="organization" className="h-[100dvh] min-h-[100dvh] snap-start snap-always flex-shrink-0 flex flex-col justify-center items-center py-12 sm:py-16 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs font-bold text-red-600 tracking-wider uppercase mb-2">ORGANIZATION</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            전문적이고 효율적인 유기적 조직 체계
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {COMPANY_INFO.name}는 유기적인 부서간 연결을 통해 최고 품질의 콘텐츠를 안정적이고 정기적으로 기획/제작할 수 있는 전문 조직 체계를 구축하고 있습니다.
          </p>
        </div>

        {/* Top CEO & R&D Center Hierarchy */}
        <div className="flex flex-col items-center mb-10 relative">
          {/* CEO Node */}
          <div className="bg-slate-900 text-white px-7 py-3.5 rounded-xl shadow-sm border border-slate-800 text-center z-10 max-w-xs w-full">
            <div className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase mb-0.5">
              EXECUTIVE LEADERSHIP
            </div>
            <h3 className="text-base font-bold text-white">대표이사 / CEO</h3>
            <p className="text-xs text-slate-300 font-medium mt-0.5">{COMPANY_INFO.ceo} 대표이사 / CEO</p>
          </div>

          {/* Stem with Right Branch for R&D Center */}
          <div className="relative w-full max-w-3xl flex flex-col items-center">
            {/* Upper Stem Line */}
            <div className="w-0.5 h-6 bg-slate-300"></div>

            {/* Branch Junction Row */}
            <div className="relative w-full flex items-center justify-center min-h-[72px]">
              {/* Main Trunk Line */}
              <div className="absolute w-0.5 h-full bg-slate-300 left-1/2 -translate-x-1/2"></div>

              {/* Right Branch Container */}
              <div className="absolute left-1/2 top-1/2 -translate-y-1/2 flex items-center z-10">
                {/* Horizontal Branch Line */}
                <div className="w-6 sm:w-10 md:w-14 h-0.5 bg-slate-300 relative flex-shrink-0">
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                </div>

                {/* R&D Center Box */}
                <div className="bg-white text-slate-900 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow-sm border border-slate-200 text-left w-48 sm:w-60 md:w-72 flex-shrink-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase">R&amp;D CENTER</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">기업부설연구소</h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 font-normal mt-0.5 leading-snug">AI 에듀테크 · 미래 교육 콘텐츠 &amp; 미디어 기술 연구 개발</p>
                </div>
              </div>
            </div>

            {/* Lower Stem Line */}
            <div className="w-0.5 h-6 bg-slate-300"></div>

            {/* Horizontal Distribution Bar */}
            <div className="hidden md:block w-full max-w-3xl h-0.5 bg-slate-300 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="absolute left-[33%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal-500"></div>
              <div className="absolute left-[66%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-500"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-500"></div>
            </div>
          </div>
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIVISIONS_DATA.map((div) => (
            <div 
              key={div.id} 
              id={div.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-blue-600 tracking-wider uppercase bg-blue-50 px-2.5 py-1 rounded-md">
                    {div.code}
                  </span>
                  {getIcon(div.code)}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{div.name}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{div.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                {div.subCategories.map((sub, i) => (
                  <span key={i} className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                    • {sub}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
