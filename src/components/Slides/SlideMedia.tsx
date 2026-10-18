import React from 'react';
import { 
  Radio, 
  MessageSquare, 
  Play, 
  ArrowRight, 
  TrendingUp, 
  ExternalLink,
  Tv
} from 'lucide-react';
import { PODCASTS_DATA, PRESS_QUOTES, PodcastEpisode, PressQuote } from '../../data/portfolioData';

interface SlideMediaProps {
  onSelectPodcast: (podcast: PodcastEpisode) => void;
  onSelectQuote: (quote: PressQuote) => void;
}

export const SlideMedia: React.FC<SlideMediaProps> = ({ 
  onSelectPodcast, 
  onSelectQuote 
}) => {
  return (
    <section id="media" className="py-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
        
        {/* BROADCASTS (Link of my podcasts) */}
        <div className="bg-white rounded-2xl p-6 border border-[#E2BFB2]/60 shadow-xs flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between text-[#A33900] mb-3">
              <span className="text-xs font-extrabold tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A33900]" />
                BROADCASTS
              </span>
              <div className="flex items-center gap-1 text-xs font-bold text-[#A33900]">
                <Tv className="w-3.5 h-3.5" />
                <span>Embedded Player Available</span>
              </div>
            </div>

            <h2 className="text-xl font-extrabold text-[#1E1B19] tracking-tight mb-1">
              Link of my podcasts
            </h2>
            <p className="text-xs text-[#5A4138] mb-4">
              Long-form broadcast discussions on sovereign finance, credit card mechanics, and university commerce reform.
            </p>

            {/* Podcasts List */}
            <div className="space-y-3">
              {PODCASTS_DATA.map((pod) => (
                <div
                  key={pod.id}
                  onClick={() => onSelectPodcast(pod)}
                  className="p-3.5 rounded-xl bg-[#FAF2EE]/70 hover:bg-[#FAF2EE] border border-[#E2BFB2]/40 hover:border-[#A33900]/60 transition-all cursor-pointer group flex items-center justify-between gap-3 shadow-2xs"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Play Button Indicator */}
                    <div className="w-9 h-9 rounded-full bg-[#FFDBCE] text-[#A33900] group-hover:bg-[#A33900] group-hover:text-white flex items-center justify-center shrink-0 transition-all">
                      <Play className="w-4 h-4 ml-0.5 fill-current" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xs sm:text-[13px] font-extrabold text-[#1E1B19] group-hover:text-[#A33900] transition-colors truncate">
                          {pod.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#5A4138] truncate mt-0.5">
                        {pod.summary}
                      </p>
                    </div>
                  </div>

                  {/* View Count Badge & Interactive Watch Indicator */}
                  <div className="shrink-0 flex flex-col items-end gap-1">
                    <span className="px-2 py-0.5 text-[11px] font-extrabold rounded-md bg-[#A33900] text-white whitespace-nowrap">
                      {pod.metric}
                    </span>
                    <span className="text-[11px] font-semibold text-[#8E7166] group-hover:text-[#A33900] flex items-center gap-0.5">
                      <span>Watch</span>
                      <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-[#FAF2EE] flex items-center justify-between text-xs text-[#735733]">
            <span>Verified YouTube &amp; Audio Broadcasts</span>
            <span className="font-semibold text-[#A33900]">Click any dialogue to stream inside browser</span>
          </div>
        </div>

        {/* PRESS QUOTES (Media interviews / expert opinion) */}
        <div className="bg-white rounded-2xl p-6 border border-[#E2BFB2]/60 shadow-xs flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between text-[#A33900] mb-3">
              <span className="text-xs font-extrabold tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A33900]" />
                PRESS QUOTES
              </span>
              <MessageSquare className="w-4 h-4 text-[#A33900]" />
            </div>

            <h2 className="text-xl font-extrabold text-[#1E1B19] tracking-tight mb-1">
              Media interviews / expert opinion
            </h2>
            <p className="text-xs text-[#5A4138] mb-4">
              Televised panel commentary, investigative profiles, and expert contributions in national and global press.
            </p>

            {/* Press Quotes List */}
            <div className="space-y-3">
              {PRESS_QUOTES.map((quote) => {
                const isSpecial = quote.isSpecialPanel;

                return (
                  <div
                    key={quote.id}
                    onClick={() => onSelectQuote(quote)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer group flex items-center justify-between gap-3 shadow-2xs ${
                      isSpecial 
                        ? 'bg-[#FFDBCE]/50 border-[#A33900]/40 hover:bg-[#FFDBCE]'
                        : 'bg-[#FAF2EE]/70 hover:bg-[#FAF2EE] border-[#E2BFB2]/40 hover:border-[#A33900]/50'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Code Badge */}
                      <span className={`w-11 h-9 rounded-lg flex items-center justify-center font-extrabold text-xs shrink-0 tracking-wider ${
                        isSpecial
                          ? 'bg-[#A33900] text-white'
                          : 'bg-[#FAF2EE] text-[#735733] border border-[#E2BFB2]/60'
                      }`}>
                        {quote.code}
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xs sm:text-[13px] font-extrabold text-[#1E1B19] group-hover:text-[#A33900] transition-colors truncate">
                            {quote.headline}
                          </h3>
                        </div>
                        <p className="text-xs text-[#5A4138] truncate mt-0.5">
                          {quote.publication} · {quote.topic}
                        </p>
                      </div>
                    </div>

                    {/* Arrow / Special Icon */}
                    <div className="shrink-0 text-[#8E7166] group-hover:text-[#A33900] transition-colors">
                      {isSpecial ? (
                        <TrendingUp className="w-4 h-4 text-[#A33900]" />
                      ) : (
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-[#FAF2EE] flex items-center justify-between text-xs text-[#735733]">
            <span>National Television &amp; Financial Press</span>
            <span className="font-semibold text-[#A33900]">Click to view editorial context &amp; preview</span>
          </div>
        </div>

      </div>
    </section>
  );
};
