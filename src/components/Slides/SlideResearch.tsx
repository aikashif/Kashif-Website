import React from 'react';
import { 
  Lightbulb, 
  Compass, 
  ArrowRight, 
  Users, 
  Cpu, 
  CreditCard, 
  Bot, 
  FileSpreadsheet, 
  Scale, 
  Network
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/portfolioData';

interface SlideResearchProps {
  onSelectTopic: (topic: string) => void;
  onOpenAppliedMastery: () => void;
}

export const SlideResearch: React.FC<SlideResearchProps> = ({ 
  onSelectTopic,
  onOpenAppliedMastery 
}) => {
  return (
    <section id="research" className="py-5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* INTELLECTUAL FOCUS (Research Interests) */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-[#E2BFB2]/60 flex flex-col justify-between shadow-xs">
          <div>
            {/* Slide Header */}
            <div className="flex items-center justify-between text-[#A33900] mb-2">
              <span className="text-xs font-extrabold tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A33900]" />
                INTELLECTUAL FOCUS
              </span>
              <Compass className="w-4 h-4 text-[#A33900]" />
            </div>

            <h2 className="text-xl font-extrabold text-[#1E1B19] tracking-tight">
              Research interest
            </h2>
            <p className="text-xs text-[#5A4138] mt-1 mb-5">
              Active scholarly investigations, institutional publications, and algorithmic finance domains.
            </p>

            {/* 6 Research Focus Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PROFILE_DATA.researchInterests.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => onSelectTopic(item.title)}
                  className="p-3.5 rounded-xl bg-[#FAF2EE] border border-[#E2BFB2]/30 hover:border-[#A33900]/60 hover:bg-[#FFDBCE]/20 transition-all cursor-pointer group flex flex-col justify-between min-h-[110px]"
                >
                  <div>
                    <span className="text-[11px] font-extrabold tracking-wider text-[#A33900] uppercase block mb-1">
                      {item.kicker}
                    </span>
                    <h3 className="text-xs sm:text-[13px] font-extrabold text-[#1E1B19] group-hover:text-[#A33900] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#5A4138] leading-tight mt-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#FAF2EE] flex items-center justify-between text-xs text-[#735733]">
            <span>Quantitative &amp; Statutory Architecture</span>
            <span className="font-semibold text-[#A33900]">Click any area to explore focus</span>
          </div>
        </div>

        {/* PEDAGOGY (Pedagogical Frameworks) */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-[#E2BFB2]/60 flex flex-col justify-between shadow-xs">
          <div>
            {/* Slide Header */}
            <div className="flex items-center justify-between text-[#A33900] mb-2">
              <span className="text-xs font-extrabold tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A33900]" />
                PEDAGOGY
              </span>
              <Lightbulb className="w-4 h-4 text-[#A33900]" />
            </div>

            <h2 className="text-xl font-extrabold text-[#1E1B19] tracking-tight">
              Pedagogical Frameworks
            </h2>
            <p className="text-xs text-[#5A4138] mt-1 mb-5 leading-relaxed">
              Systematic classroom engagement protocols designed to eliminate passive lecture formats through tactical, real-world case simulations.
            </p>

            {/* Primary Callout: Tools & Activities for Applied Mastery */}
            <button 
              type="button"
              onClick={onOpenAppliedMastery}
              className="w-full text-left p-4 rounded-xl bg-[#FAF2EE] border border-[#A33900]/30 hover:border-[#A33900] transition-all cursor-pointer group flex items-center justify-between mb-4 shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#A33900] text-white flex items-center justify-center shrink-0">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[#1E1B19] group-hover:text-[#A33900] transition-colors">
                    Tools &amp; Activities for Applied Mastery
                  </h3>
                  <p className="text-xs text-[#5A4138]">
                    Interactive simulators, spreadsheet telemetry &amp; live casebooks
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#A33900] group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            {/* Framework Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {PROFILE_DATA.pedagogy.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#FAF2EE] text-[#5A4138] border border-[#E2BFB2]/50 hover:bg-[#FFDBCE] hover:text-[#A33900] transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Adoption Note */}
          <div className="pt-4 border-t border-[#FAF2EE] flex items-center gap-3 text-xs text-[#5A4138]">
            <div className="w-8 h-8 rounded-full bg-[#FAF2EE] text-[#A33900] flex items-center justify-center shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <span className="font-medium">
              Adopted across graduate &amp; undergraduate cohorts at JGU &amp; DU.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
