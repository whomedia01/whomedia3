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
    <section id="organization" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold text-red-600 tracking-wider uppercase mb-2">ORGANIZATION</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            전문적이고 효율적인 유기적 조직 체계
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {COMPANY_INFO.name}는 유기적인 부서간 연결을 통해 최고 품질의 콘텐츠를 안정적이고 정기적으로 기획/제작할 수 있는 전문 조직 체계를 구축하고 있습니다.
          </p>
        </div>

        {/* CEO / Executive Card */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white px-8 py-5 rounded-xl shadow-lg border border-slate-800 text-center w-full max-w-md relative overflow-hidden">
            <div className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              EXECUTIVE LEADERSHIP
            </div>
            <h3 className="text-xl font-extrabold tracking-tight">대표이사 / CEO</h3>
            <p className="text-sm font-semibold text-slate-300 mt-1">{COMPANY_INFO.ceo} 대표이사 / CEO</p>
          </div>
          {/* Connector line */}
          <div className="w-0.5 h-8 bg-blue-300 my-1"></div>
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
