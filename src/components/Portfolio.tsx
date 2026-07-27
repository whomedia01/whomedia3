import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/companyData';
import { PortfolioCategory, PortfolioItem } from '../types';
import { Play, X, Plus } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PortfolioCategory>('all');
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const categories: { key: PortfolioCategory; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'board', label: '칠판강의' },
    { key: 'eboard', label: '전자칠판' },
    { key: 'chroma', label: '크로마키' },
    { key: 'intro', label: '인트로' },
    { key: 'promo', label: '홍보영상' },
  ];

  const filteredItems = activeTab === 'all' 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter(item => item.cat === activeTab);

  const displayedItems = filteredItems.slice(0, visibleCount);

  return (
    <section id="portfolio" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-red-600 tracking-wider uppercase bg-red-50 px-3 py-1 rounded-full">
            PORTFOLIO
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-3">
            PORTFOLIO
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            고품질 영상 제작 사례 및 커스텀 미디어 솔루션
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              id={`tab-${cat.key}`}
              onClick={() => {
                setActiveTab(cat.key);
                setVisibleCount(8);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                activeTab === cat.key
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedVideo(item)}
              className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative aspect-video bg-slate-200 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Tag Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {item.label}
                  </div>

                  {/* Client Tag */}
                  <div className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {item.tag}
                  </div>

                  {/* Play Button Icon Overlay */}
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 group-hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="px-4 pb-4 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                <span className="font-semibold text-slate-700">{item.tag}</span>
                <span>{item.duration || '03:30'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredItems.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="inline-flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-6 py-3 rounded-lg transition-colors border border-slate-300"
            >
              <span>더보기</span>
              <Plus className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-3xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <div className="p-4 bg-slate-950 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {selectedVideo.label}
                </span>
                <h3 className="text-sm font-bold text-white truncate max-w-md">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-slate-400 hover:text-white p-1 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video bg-black flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                  <Play className="w-8 h-8 fill-emerald-400 ml-1" />
                </div>
                <h4 className="text-white font-bold text-lg mb-1">{selectedVideo.title}</h4>
                <p className="text-slate-400 text-xs mb-4">클라이언트: {selectedVideo.tag} | HOOMEDIA 제작</p>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="bg-slate-800 hover:bg-slate-700 text-white text-xs px-4 py-2 rounded-md"
                >
                  미리보기 닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
