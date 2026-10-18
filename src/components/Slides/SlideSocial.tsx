import React from 'react';
import { 
  ExternalLink, 
  Youtube, 
  Linkedin, 
  Twitter, 
  Bookmark, 
  Swords,
  GraduationCap
} from 'lucide-react';
import { SOCIAL_OUTPOSTS } from '../../data/portfolioData';

interface SlideSocialProps {
  onNavigate: (sectionId: string) => void;
  onOpenChessModal: () => void;
  onOpenAcademicModal: () => void;
}

export const SlideSocial: React.FC<SlideSocialProps> = ({ 
  onNavigate,
  onOpenChessModal,
  onOpenAcademicModal
}) => {
  return (
    <section id="contact" className="pt-5 pb-12">
      {/* FINAL SLIDE • CONNECT DIRECTLY */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2BFB2]/60 shadow-xs mb-10">
        <div className="flex items-center gap-2 text-[#A33900] mb-3">
          <span className="w-2 h-2 rounded-full bg-[#A33900]" />
          <span className="text-xs font-extrabold tracking-widest uppercase">
            FINAL SLIDE • CONNECT DIRECTLY
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B19] tracking-tight">
              My Social Media Links &amp; Outposts
            </h2>
            <p className="text-xs sm:text-sm text-[#5A4138] mt-2 leading-relaxed">
              Intellectual dialogues, financial literacy media on PerFi, long-form editorial essays, research collaborations, or competitive chess correspondence.
            </p>
          </div>

          {/* Outpost Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            {SOCIAL_OUTPOSTS.map((item, idx) => {
              const isPrimary = item.isPrimary;
              const isChess = item.name.includes('Lichess');

              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (isChess) {
                      e.preventDefault();
                      onOpenChessModal();
                    }
                  }}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${
                    isPrimary
                      ? 'bg-[#A33900] hover:bg-[#852E00] text-white shadow-xs'
                      : 'bg-[#FAF2EE] hover:bg-[#FFDBCE] text-[#1E1B19] border border-[#E2BFB2]/40'
                  }`}
                >
                  {item.icon === 'bookmark' && <Bookmark className="w-3.5 h-3.5 fill-current" />}
                  {item.icon === 'youtube' && <Youtube className="w-3.5 h-3.5 text-red-600" />}
                  {item.icon === 'linkedin' && <Linkedin className="w-3.5 h-3.5 text-blue-700" />}
                  {item.icon === 'twitter' && <Twitter className="w-3.5 h-3.5" />}
                  {item.icon === 'chess' && <Swords className="w-3.5 h-3.5 text-[#A33900]" />}

                  <span>{item.name}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="border-t border-[#E2BFB2]/50 pt-8 text-[#5A4138]">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6">
          
          {/* Brand & Mission Statement */}
          <div className="max-w-md">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-xs font-extrabold tracking-widest text-[#A33900] uppercase bg-[#FFDBCE] px-1.5 py-0.5 rounded">
                KASHIFHUB
              </span>
              <span className="text-base font-bold text-[#1E1B19]">
                / Kashif Ansari
              </span>
            </div>
            <p className="text-xs text-[#735733] leading-relaxed">
              Academic portfolio, intellectual scholarship, public columns, broadcast commentary, and personal endurance pursuits.
            </p>
          </div>

          {/* Nav Jumps */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-[#5A4138]">
            <button onClick={() => onNavigate('about')} className="hover:text-[#A33900] transition-colors">
              About &amp; Teaching
            </button>
            <button onClick={() => onNavigate('research')} className="hover:text-[#A33900] transition-colors">
              Research
            </button>
            <button onClick={() => onNavigate('articles')} className="hover:text-[#A33900] transition-colors">
              Columns
            </button>
            <button onClick={() => onNavigate('media')} className="hover:text-[#A33900] transition-colors">
              Media
            </button>
            <button onClick={() => onNavigate('sports')} className="hover:text-[#A33900] transition-colors">
              Sports
            </button>
            <button onClick={onOpenAcademicModal} className="text-[#A33900] hover:underline flex items-center gap-1 font-bold">
              <GraduationCap className="w-3.5 h-3.5" />
              Faculty Dossier
            </button>
          </div>
        </div>

        {/* Imprint & Copyright */}
        <div className="border-t border-[#E2BFB2]/30 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E7166] gap-2">
          <div>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> KASHIF ANSARI. CURATED EDITORIAL &amp; RESEARCH PORTFOLIO.
          </div>
          <div className="font-mono text-[11px] tracking-wider uppercase text-[#A33900] font-bold">
            PARCHMENT DECK EDITION
          </div>
        </div>
      </footer>
    </section>
  );
};
