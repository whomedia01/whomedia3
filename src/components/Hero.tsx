import React, { useState, useEffect } from 'react';
import { KEYWORDS } from '../data/portfolioData';
import { Play, Sparkles, ChevronDown, Award, Users, CheckCircle, Video } from 'lucide-react';

const BG_IMAGES = [
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=85',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=85',
  'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1920&q=85',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=85'
];

export const Hero: React.FC = () => {
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Keyword rolling interval (2.8 seconds)
  useEffect(() => {
    const keywordInterval = setInterval(() => {
      setCurrentKeywordIndex((prev) => (prev + 1) % KEYWORDS.length);
    }, 2800);

    return () => clearInterval(keywordInterval);
  }, []);

  // Background image slider interval (3.8 seconds)
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % BG_IMAGES.length);
    }, 3800);

    return () => clearInterval(bgInterval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Dynamic Background Image Slider with Overlays */}
      {BG_IMAGES.map((imgUrl, index) => (
        <div
          key={imgUrl}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentBgIndex ? 'opacity-35 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{
            backgroundImage: `url('${imgUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Radial Gradient & Grid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-slate-950/80 to-slate-950 pointer-events-none" />

      {/* Grid Pattern Decorative SVG */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-red-500/30 shadow-inner backdrop-blur-md text-xs sm:text-sm font-semibold text-slate-200">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-red-400 font-bold">4K Multi-Studio</span>
            <span className="text-slate-500">|</span>
            <span>교육 미디어 제작 전문 기업 (주)후미디어</span>
          </div>

          {/* Rolling Keyword Display Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              대한민국 대표 <br className="sm:hidden" />
              <span className="inline-block relative text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 font-black min-h-[1.3em] transition-all duration-500">
                {KEYWORDS[currentKeywordIndex]}
              </span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
              EBS, 메가스터디, NE능률, 주요 대학 및 공공기관이 검증한 <br className="hidden sm:inline" />
              <strong className="text-white font-bold">고품격 칠판강의 · 전자칠판 · 크로마키 · AI 미디어 제작 파트너</strong>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 shadow-xl shadow-red-600/30 hover:shadow-red-600/50 transition-all flex items-center gap-2 group active:scale-95"
            >
              <Play className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
              <span>포트폴리오 보러가기</span>
            </a>
            <a
              href="#studio"
              className="px-8 py-4 rounded-xl text-base font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 transition-all flex items-center gap-2 backdrop-blur-md active:scale-95"
            >
              <Video className="w-5 h-5 text-red-400" />
              <span>4K 스튜디오 시설 투어</span>
            </a>
          </div>

          {/* Key Metrics / Achievements */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-slate-800/80 text-left">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-white font-montserrat flex items-center gap-1">
                <span>15</span><span className="text-red-500">+년</span>
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">교육 미디어 누적 노하우</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-white font-montserrat flex items-center gap-1">
                <span>1,200</span><span className="text-red-500">+</span>
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">콘텐츠 성공 제작 건수</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-white font-montserrat flex items-center gap-1">
                <span>98.6</span><span className="text-red-500">%</span>
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">고객사 다시 찾는 재계약률</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-white font-montserrat flex items-center gap-1">
                <span>4K</span><span className="text-red-500">UHD</span>
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">멀티 스튜디오 전용 라인업</div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-2 text-slate-500 hover:text-white transition-colors animate-bounce"
        aria-label="아래 섹션으로 스크롤"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};
