import React from 'react';
import { 
  CheckCircle2, 
  GraduationCap, 
  Headphones, 
  Newspaper, 
  Activity, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface HeroHeaderProps {
  onExploreSection: (sectionId: string) => void;
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({ onExploreSection }) => {
  return (
    <section id="hero" className="pt-6 pb-4">
      {/* Top Split Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Hero Profile Card */}
        <div className="lg:col-span-7 bg-[#FAF2EE] rounded-2xl p-5 sm:p-6 border border-[#E2BFB2]/60 flex flex-col sm:flex-row gap-5 items-start sm:items-center shadow-xs">
          
          {/* Profile Avatar / Photo with Gold Verification */}
          <div className="relative shrink-0 mx-auto sm:mx-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#A33900]/20 bg-gradient-to-br from-[#FFDBCE] via-[#FAF2EE] to-[#E9E1DD] flex items-center justify-center shadow-xs">
              {PROFILE_DATA.photo ? (
                <img 
                  src={PROFILE_DATA.photo}
                  alt={`Portrait of ${PROFILE_DATA.fullName}`}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-[#A33900] bg-[#FFDBCE]" role="img" aria-label={PROFILE_DATA.fullName}>
                  <span className="text-2xl font-extrabold tracking-tighter">KA</span>
                  <span className="text-[11px] font-bold tracking-widest uppercase">JGU · DU</span>
                </div>
              )}
            </div>
            
            {/* Gold Verified Check Badge */}
            <div className="absolute -bottom-1.5 -right-1.5 bg-[#A33900] text-white p-1 rounded-full ring-2 ring-[#FFF8F5] shadow-xs" title="Verified Faculty & Columnist Credentials">
              <CheckCircle2 className="w-4 h-4 fill-amber-400 text-[#A33900]" />
            </div>
          </div>

          {/* Identity & Faculty Position */}
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="text-xs font-semibold text-[#735733] flex items-center gap-1">
                <span>{PROFILE_DATA.region}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1E1B19]">
              {PROFILE_DATA.name}
            </h1>

            <p className="text-xs sm:text-sm font-medium text-[#5A4138] leading-relaxed">
              Finance Faculty, O.P. Jindal Global University | Founder, PerFi | National Financial Columnist
            </p>
          </div>
        </div>

        {/* Right Dispatch & Overview Card */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-6 border border-[#E2BFB2]/60 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-[#A33900]" />
              <h2 className="text-xs font-extrabold tracking-widest text-[#A33900] uppercase">
                DISPATCH & OVERVIEW
              </h2>
            </div>
            <p className="text-xs sm:text-[13px] text-[#5A4138] leading-relaxed font-normal">
              {PROFILE_DATA.dispatch}
            </p>
          </div>

          <div className="pt-4 flex items-center gap-3">
            <button
              onClick={() => onExploreSection('articles')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A33900] hover:text-[#782B00] transition-colors"
            >
              <span>Explore Editorial Articles</span>
              <ExternalLink className="w-3 h-3" />
            </button>
            <span className="text-[#E2BFB2]">·</span>
            <button
              onClick={() => onExploreSection('about')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#735733] hover:text-[#1E1B19] transition-colors"
            >
              <span>Teaching Dossier</span>
            </button>
          </div>
        </div>

      </div>

      {/* 4-Item Telemetry Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-4">
        
        {/* Metric 1 */}
        <button 
          type="button"
          onClick={() => onExploreSection('about')}
          className="bg-white rounded-xl p-3.5 sm:p-4 border border-[#E2BFB2]/40 hover:border-[#A33900]/50 transition-all cursor-pointer group shadow-2xs flex items-center gap-3 text-left"
        >
          <div className="w-9 h-9 rounded-lg bg-[#FFDBCE] text-[#A33900] flex items-center justify-center shrink-0 group-hover:bg-[#A33900] group-hover:text-white transition-colors">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm sm:text-base font-extrabold tracking-tight text-[#1E1B19]">
              JGU
            </div>
            <div className="text-xs font-medium text-[#735733]">
              Faculty Desk
            </div>
          </div>
        </button>

        {/* Metric 2 */}
        <button 
          type="button"
          onClick={() => onExploreSection('media')}
          className="bg-white rounded-xl p-3.5 sm:p-4 border border-[#E2BFB2]/40 hover:border-[#A33900]/50 transition-all cursor-pointer group shadow-2xs flex items-center gap-3 text-left"
        >
          <div className="w-9 h-9 rounded-lg bg-[#FFDBCE] text-[#A33900] flex items-center justify-center shrink-0 group-hover:bg-[#A33900] group-hover:text-white transition-colors">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm sm:text-base font-extrabold tracking-tight text-[#1E1B19]">
              1M+
            </div>
            <div className="text-xs font-medium text-[#735733]">
              Dialogue Listeners
            </div>
          </div>
        </button>

        {/* Metric 3 */}
        <button 
          type="button"
          onClick={() => onExploreSection('articles')}
          className="bg-white rounded-xl p-3.5 sm:p-4 border border-[#E2BFB2]/40 hover:border-[#A33900]/50 transition-all cursor-pointer group shadow-2xs flex items-center gap-3 text-left"
        >
          <div className="w-9 h-9 rounded-lg bg-[#FFDBCE] text-[#A33900] flex items-center justify-center shrink-0 group-hover:bg-[#A33900] group-hover:text-white transition-colors">
            <Newspaper className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm sm:text-base font-extrabold tracking-tight text-[#1E1B19]">
              15+
            </div>
            <div className="text-xs font-medium text-[#735733]">
              National Op-Eds (Mint & ET)
            </div>
          </div>
        </button>

        {/* Metric 4 */}
        <button 
          type="button"
          onClick={() => onExploreSection('sports')}
          className="bg-white rounded-xl p-3.5 sm:p-4 border border-[#E2BFB2]/40 hover:border-[#A33900]/50 transition-all cursor-pointer group shadow-2xs flex items-center gap-3 text-left"
        >
          <div className="w-9 h-9 rounded-lg bg-[#FFDBCE] text-[#A33900] flex items-center justify-center shrink-0 group-hover:bg-[#A33900] group-hover:text-white transition-colors">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm sm:text-base font-extrabold tracking-tight text-[#1E1B19]">
              Daily
            </div>
            <div className="text-xs font-medium text-[#735733]">
              Regimen (Badminton & Chess)
            </div>
          </div>
        </button>

      </div>
    </section>
  );
};
