import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  Sparkles, 
  Megaphone, 
  Award, 
  BookOpen, 
  CheckCircle,
  Share2,
  ExternalLink
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/portfolioData';

interface SlideBioProps {
  onOpenPerFi: () => void;
}

export const SlideBio: React.FC<SlideBioProps> = ({ onOpenPerFi }) => {
  return (
    <section id="about" className="py-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
        
        {/* SLIDE 01 • PROFILE */}
        <div className="bg-white rounded-2xl p-6 border border-[#E2BFB2]/60 flex flex-col justify-between shadow-xs">
          <div>
            {/* Slide Header */}
            <div className="flex items-center justify-between text-[#A33900] mb-4">
              <span className="text-[11px] font-extrabold tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A33900]" />
                SLIDE 01 • PROFILE
              </span>
              <Share2 className="w-3.5 h-3.5 text-[#8E7166] hover:text-[#A33900] cursor-pointer transition-colors" />
            </div>

            <h2 className="text-xl font-extrabold text-[#1E1B19] mb-5 tracking-tight">
              About me
            </h2>

            {/* Bullet Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-md bg-[#FAF2EE] text-[#A33900] shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-xs sm:text-sm text-[#1E1B19]">
                    Finance Professor
                  </span>{' '}
                  <span className="text-xs sm:text-sm text-[#5A4138]">
                    @ O P Jindal Global University, Delhi-NCR
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-md bg-[#FAF2EE] text-[#A33900] shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm text-[#5A4138]">
                    Previously Assistant Professor @{' '}
                  </span>
                  <span className="font-bold text-xs sm:text-sm text-[#1E1B19]">
                    Hansraj College, DU
                  </span>
                  <div className="text-[11px] text-[#735733] mt-0.5">
                    Drafted Delhi University's 1st NEP tax curriculum
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-md bg-[#FAF2EE] text-[#A33900] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm text-[#5A4138]">Founder,</span>
                  <button 
                    onClick={onOpenPerFi}
                    className="font-extrabold text-xs sm:text-sm text-[#A33900] hover:underline flex items-center gap-1"
                  >
                    PerFi
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-md bg-[#FAF2EE] text-[#A33900] shrink-0 mt-0.5">
                  <Megaphone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-xs sm:text-sm text-[#1E1B19]">
                    Personal Finance
                  </span>{' '}
                  <span className="text-xs sm:text-sm text-[#5A4138]">
                    content creator &amp; national educator
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Guiding Principle Box */}
          <div className="mt-6 pt-4 border-t border-[#FAF2EE]">
            <div className="text-[10px] font-extrabold tracking-wider text-[#A33900] uppercase mb-1">
              GUIDING PRINCIPLE
            </div>
            <blockquote className="text-xs italic text-[#5A4138] leading-relaxed bg-[#FFF8F5] p-3 rounded-lg border border-[#E2BFB2]/40">
              "{PROFILE_DATA.aboutMe.guidingPrinciple}"
            </blockquote>
          </div>
        </div>

        {/* SLIDE 02 • ACADEMIA */}
        <div className="bg-white rounded-2xl p-6 border border-[#E2BFB2]/60 flex flex-col justify-between shadow-xs">
          <div>
            {/* Slide Header */}
            <div className="flex items-center justify-between text-[#A33900] mb-4">
              <span className="text-[11px] font-extrabold tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A33900]" />
                SLIDE 02 • ACADEMIA
              </span>
              <Award className="w-4 h-4 text-[#A33900]" />
            </div>

            <h2 className="text-xl font-extrabold text-[#1E1B19] mb-5 tracking-tight">
              My education
            </h2>

            {/* Academic Steps */}
            <div className="space-y-3.5">
              {PROFILE_DATA.education.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-xl bg-[#FAF2EE]/60 border border-[#E2BFB2]/30 hover:border-[#A33900]/40 transition-colors flex items-center justify-between"
                >
                  <div>
                    <div className="font-extrabold text-xs sm:text-sm text-[#1E1B19]">
                      {item.degree}
                    </div>
                    <div className="text-xs text-[#5A4138]">
                      {item.institution}
                    </div>
                    {item.highlight && (
                      <div className="text-[10px] text-[#A33900] font-semibold mt-0.5">
                        {item.highlight}
                      </div>
                    )}
                  </div>
                  <span className="text-xl shrink-0" title={item.country}>
                    {item.flag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Footer */}
          <div className="mt-6 pt-4 border-t border-[#FAF2EE] flex items-center gap-2 text-[11px] font-semibold text-[#735733]">
            <CheckCircle className="w-4 h-4 text-[#A33900] shrink-0" />
            <span>{PROFILE_DATA.educationFooter}</span>
          </div>
        </div>

        {/* SLIDE 03 • ODYSSEY (Terracotta Solid Card) */}
        <div className="bg-[#A33900] text-white rounded-2xl p-6 border border-[#782B00] flex flex-col justify-between shadow-sm">
          <div>
            {/* Slide Header */}
            <div className="flex items-center justify-between text-[#FFDBCE] mb-4">
              <span className="text-[11px] font-extrabold tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFDBCE]" />
                SLIDE 03 • ODYSSEY
              </span>
              <BookOpen className="w-4 h-4 text-[#FFDBCE]" />
            </div>

            <h2 className="text-xl font-extrabold text-white mb-5 tracking-tight">
              {PROFILE_DATA.teachingStory.title}
            </h2>

            {/* 4 Narrative Bullet Points */}
            <div className="space-y-3 text-xs sm:text-[13px] text-[#FFDBCE] leading-relaxed">
              {PROFILE_DATA.teachingStory.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-white font-bold select-none">•</span>
                  <div>
                    <span className="font-bold text-white">{pt.kicker}:</span>{' '}
                    <span>{pt.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quotation Footer */}
          <div className="mt-6 pt-4 border-t border-white/20">
            <blockquote className="text-xs sm:text-[13px] italic font-medium text-[#FFDBCE] bg-[#782B00]/40 p-3 rounded-lg border border-white/10">
              "{PROFILE_DATA.teachingStory.quote}"
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
};
