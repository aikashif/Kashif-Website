import React, { useState, useMemo } from 'react';
import { Newspaper, ExternalLink, Search, Filter, BookOpen } from 'lucide-react';
import { Article, ARTICLES_DATA } from '../../data/portfolioData';

interface SlideArticlesProps {
  onSelectArticle: (article: Article) => void;
}

export const SlideArticles: React.FC<SlideArticlesProps> = ({ onSelectArticle }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesFilter =
        activeFilter === 'all' ||
        (activeFilter === 'MINT' && article.publication === 'MINT') ||
        (activeFilter === 'ET WEALTH' && article.publication === 'ET WEALTH') ||
        (activeFilter === 'DAINIK BHASKAR' && article.publication === 'DAINIK BHASKAR') ||
        (activeFilter === 'tax' && (article.tag.toLowerCase().includes('tax') || article.summary.toLowerCase().includes('tax') || article.summary.toLowerCase().includes('itr'))) ||
        (activeFilter === 'credit' && (article.tag.toLowerCase().includes('credit') || article.title.toLowerCase().includes('credit') || article.tag.toLowerCase().includes('fintech')));

      const matchesSearch =
        searchQuery === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tag.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="articles" className="py-5">
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2BFB2]/60 shadow-xs">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#FAF2EE]">
          <div className="flex items-center gap-2 text-[#A33900]">
            <span className="w-2 h-2 rounded-full bg-[#A33900]" />
            <span className="text-[11px] font-extrabold tracking-widest uppercase">
              SLIDE 06 • EDITORIAL OP-EDS
            </span>
          </div>
          <span className="self-start sm:self-auto text-[10px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded bg-[#FAF2EE] text-[#735733] border border-[#E2BFB2]/40">
            NATIONAL PRINT PRESS
          </span>
        </div>

        <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B19] tracking-tight">
              My newspaper articles
            </h2>
            <p className="text-xs text-[#5A4138] mt-1">
              National columns deconstructing taxation policy, consumer debt, algorithmic finance, and sovereign economic reform.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8E7166]" />
            <input
              type="text"
              placeholder="Search op-eds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#FAF2EE] border border-[#E2BFB2]/50 rounded-lg text-[#1E1B19] placeholder-[#8E7166] focus:outline-none focus:border-[#A33900] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8E7166] hover:text-[#1E1B19]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-3 mt-2 no-scrollbar">
          {[
            { id: 'all', label: 'All Columns', count: ARTICLES_DATA.length },
            { id: 'MINT', label: 'Mint', count: 5 },
            { id: 'ET WEALTH', label: 'ET Wealth', count: 2 },
            { id: 'DAINIK BHASKAR', label: 'Dainik Bhaskar', count: 1 },
            { id: 'credit', label: 'Credit & BNPL' },
            { id: 'tax', label: 'Tax & Compliance' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1 text-xs font-semibold rounded-md whitespace-nowrap transition-colors ${
                activeFilter === tab.id
                  ? 'bg-[#A33900] text-white shadow-2xs'
                  : 'bg-[#FAF2EE] text-[#5A4138] hover:bg-[#FFDBCE]/50'
              }`}
            >
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`ml-1.5 text-[10px] ${activeFilter === tab.id ? 'text-[#FFDBCE]' : 'text-[#8E7166]'}`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* 8-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {filteredArticles.map((article) => {
            const isET = article.publication === 'ET WEALTH';
            const isBhaskar = article.publication === 'DAINIK BHASKAR';

            return (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="p-4 rounded-xl bg-white border border-[#E2BFB2]/50 hover:border-[#A33900] hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Publication & Tag Bar */}
                  <div className="flex items-center justify-between gap-1 mb-2.5">
                    <span 
                      className={`text-[9px] font-extrabold tracking-wider px-1.5 py-0.5 rounded uppercase ${
                        isET 
                          ? 'bg-[#CC4900] text-white' 
                          : isBhaskar
                            ? 'bg-[#735733] text-white'
                            : 'bg-[#A33900] text-white'
                      }`}
                    >
                      {article.publication}
                    </span>

                    <span className="text-[10px] font-semibold text-[#8E7166] truncate max-w-[120px]">
                      {article.tag}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-xs sm:text-[13px] font-extrabold text-[#1E1B19] group-hover:text-[#A33900] transition-colors leading-snug line-clamp-3">
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-[11px] text-[#5A4138] mt-2 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                {/* Bottom Action Trigger */}
                <div className="pt-3 mt-3 border-t border-[#FAF2EE] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#A33900] group-hover:underline flex items-center gap-1 text-[11px]">
                    {article.publication === 'ET WEALTH' ? 'Read Edition' : 'Read Op-ed'}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8E7166] group-hover:text-[#A33900] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {filteredArticles.length === 0 && (
          <div className="py-12 text-center text-[#8E7166] text-xs">
            No articles match your current search or filter.
            <button
              onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
              className="block mx-auto mt-2 text-[#A33900] font-bold hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
