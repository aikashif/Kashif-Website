import React from 'react';
import { 
  Trophy, 
  Activity, 
  ExternalLink, 
  Clock, 
  Flame, 
  Dumbbell, 
  RotateCw,
  Swords
} from 'lucide-react';
import { SPORTS_DATA } from '../../data/portfolioData';

interface SlideSportsProps {
  onOpenChessModal: () => void;
}

export const SlideSports: React.FC<SlideSportsProps> = ({ onOpenChessModal }) => {
  return (
    <section id="sports" className="py-5">
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2BFB2]/60 shadow-xs">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#FAF2EE]">
          <div className="flex items-center gap-2 text-[#A33900]">
            <span className="w-2 h-2 rounded-full bg-[#A33900]" />
            <span className="text-xs font-extrabold tracking-widest uppercase">
              SLIDE 08 • ATHLETICS &amp; RECREATION
            </span>
          </div>
          <span className="self-start sm:self-auto text-[11px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded bg-[#FAF2EE] text-[#735733] border border-[#E2BFB2]/40">
            REAL VERIFIED STATS
          </span>
        </div>

        <div className="mt-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B19] tracking-tight">
            Sports &amp; Active Life
          </h2>
          <p className="text-xs text-[#5A4138] mt-1">
            Physical discipline, cardiovascular conditioning, and tactical cognitive stamina balancing academic life.
          </p>
        </div>

        {/* 4 Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* 1. Badminton */}
          <div className="p-5 rounded-xl bg-white border border-[#E2BFB2]/50 hover:border-[#A33900] transition-all flex flex-col justify-between shadow-2xs group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl">🏸</span>
                <span className="text-[11px] font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-[#A33900] text-white uppercase">
                  PRIMARY DISCIPLINE
                </span>
              </div>

              <h3 className="text-base font-extrabold text-[#1E1B19] group-hover:text-[#A33900] transition-colors mb-2">
                Badminton
              </h3>

              <p className="text-xs text-[#5A4138] leading-relaxed">
                Competitive intermediate circuit with aspirations toward masters-tier national tournament play. Frequent champion across regional invitationals.
              </p>
            </div>

            {/* Drill Box */}
            <div className="mt-5 p-3 rounded-lg bg-[#FAF2EE] border border-[#E2BFB2]/40">
              <span className="text-[11px] font-extrabold tracking-wider text-[#A33900] uppercase block mb-1">
                CURRENT DRILL
              </span>
              <p className="text-xs text-[#5A4138] font-medium leading-snug">
                High-intensity multi-shuttle footwork and deceptive backhand drives.
              </p>
            </div>
          </div>

          {/* 2. Chess */}
          <div className="p-5 rounded-xl bg-white border border-[#E2BFB2]/50 hover:border-[#A33900] transition-all flex flex-col justify-between shadow-2xs group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl">♟️</span>
                <span className="text-[11px] font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-[#FAF2EE] text-[#735733] border border-[#E2BFB2]/50 uppercase">
                  STRATEGIC REGIMEN
                </span>
              </div>

              <h3 className="text-base font-extrabold text-[#1E1B19] group-hover:text-[#A33900] transition-colors mb-2">
                Chess
              </h3>

              <p className="text-xs text-[#5A4138] leading-relaxed">
                Tactical opening systems, rapid calculation, and daily puzzle benchmarks.
              </p>
            </div>

            {/* Lichess Box */}
            <div className="mt-5 space-y-2">
              <div className="flex items-center justify-between text-xs px-1">
                <span className="text-[11px] font-extrabold text-[#8E7166] uppercase">
                  LICHESS HANDLE
                </span>
                <span className="font-mono text-xs font-bold text-[#A33900]">
                  Kashifhrc
                </span>
              </div>

              <button
                onClick={onOpenChessModal}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-[#A33900] hover:bg-[#852E00] rounded-lg transition-colors shadow-2xs"
              >
                <Swords className="w-3.5 h-3.5" />
                <span>Rated Challenge Request</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* 3. Squash */}
          <div className="p-5 rounded-xl bg-white border border-[#E2BFB2]/50 hover:border-[#A33900] transition-all flex flex-col justify-between shadow-2xs group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl">🎾</span>
                <span className="text-[11px] font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-[#FAF2EE] text-[#735733] border border-[#E2BFB2]/50 uppercase">
                  COURT AGILITY
                </span>
              </div>

              <h3 className="text-base font-extrabold text-[#1E1B19] group-hover:text-[#A33900] transition-colors mb-2">
                Squash
              </h3>

              <p className="text-xs text-[#5A4138] leading-relaxed">
                Exploring racquet mechanics and glass-court positioning. Intense cardiovascular conditioning and rapid reflex sharpening.
              </p>
            </div>

            {/* Tactical Status */}
            <div className="mt-5 p-3 rounded-lg bg-[#FAF2EE] border border-[#E2BFB2]/40 flex items-center gap-2 text-xs text-[#735733]">
              <RotateCw className="w-3.5 h-3.5 text-[#A33900] animate-spin" style={{ animationDuration: '4s' }} />
              <span className="font-medium text-xs">Tactical progression underway</span>
            </div>
          </div>

          {/* 4. Swimming */}
          <div className="p-5 rounded-xl bg-white border border-[#E2BFB2]/50 hover:border-[#A33900] transition-all flex flex-col justify-between shadow-2xs group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl">🏊‍♂️</span>
                <span className="text-[11px] font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-[#FAF2EE] text-[#A33900] border border-[#A33900]/30 uppercase font-bold">
                  ACQUIRED 2025
                </span>
              </div>

              <h3 className="text-base font-extrabold text-[#1E1B19] group-hover:text-[#A33900] transition-colors mb-2">
                Swimming
              </h3>

              <p className="text-xs text-[#5A4138] leading-relaxed">
                Rigorous focus on hypoxic threshold, pacing telemetry, and VO2 max development.
              </p>
            </div>

            {/* Split Metrics */}
            <div className="mt-4 pt-3 border-t border-[#FAF2EE] space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#735733] text-xs">Freestyle 50m:</span>
                <span className="font-mono font-bold text-[#1E1B19]">43 secs</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#735733] text-xs">Backstroke 50m:</span>
                <span className="font-mono font-bold text-[#1E1B19]">51 secs</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#735733] text-xs">Underwater endurance:</span>
                <span className="font-mono font-bold text-[#1E1B19]">25 metres</span>
              </div>
              <div className="flex items-center justify-between pt-1 text-[#A33900] font-semibold text-xs">
                <span>Next progression:</span>
                <span className="font-bold">Butterfly stroke</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
