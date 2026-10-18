import React, { useState } from 'react';
import { X, ExternalLink, Swords, Trophy, Copy, Check, Flame, Shield } from 'lucide-react';

interface LichessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LichessModal: React.FC<LichessModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText('Kashifhrc');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-[#FFF8F5] rounded-2xl border border-[#E2BFB2] shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-150">
        
        {/* Header Banner */}
        <div className="bg-[#A33900] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#782B00] rounded-lg">
              <Swords className="w-5 h-5 text-[#FFDBCE]" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#FFDBCE]">
                CHESS PROTOCOL • LICHESS.ORG
              </span>
              <h3 className="text-lg font-extrabold">Rated Challenge Request</h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-[#FFDBCE] hover:text-white hover:bg-[#782B00] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-5 space-y-4">
          {/* Player Card */}
          <div className="p-4 rounded-xl bg-white border border-[#E2BFB2]/60 flex items-center justify-between shadow-2xs">
            <div>
              <span className="text-[10px] font-bold text-[#8E7166] uppercase">Active Handle</span>
              <div className="text-xl font-extrabold font-mono text-[#A33900] flex items-center gap-2 mt-0.5">
                Kashifhrc
              </div>
              <span className="text-xs text-[#5A4138]">Competitive correspondence &amp; rapid</span>
            </div>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border border-[#E2BFB2] bg-[#FAF2EE] hover:bg-[#FFDBCE] text-[#A33900] transition-colors"
              title="Copy handle"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Benchmark Metrics */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2.5 rounded-lg bg-[#FAF2EE] border border-[#E2BFB2]/40">
              <span className="text-[10px] font-bold text-[#735733] uppercase block">Rapid</span>
              <span className="font-mono text-sm font-extrabold text-[#1E1B19]">1800+</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#FAF2EE] border border-[#E2BFB2]/40">
              <span className="text-[10px] font-bold text-[#735733] uppercase block">Puzzles</span>
              <span className="font-mono text-sm font-extrabold text-[#1E1B19]">2100+</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#FAF2EE] border border-[#E2BFB2]/40">
              <span className="text-[10px] font-bold text-[#735733] uppercase block">Tactics</span>
              <span className="font-mono text-sm font-extrabold text-[#1E1B19]">Daily</span>
            </div>
          </div>

          {/* Tactical Repertoire */}
          <div className="text-xs text-[#5A4138] space-y-1.5">
            <span className="font-bold text-[#1E1B19] block text-[11px] uppercase tracking-wider">
              Preferred Openings &amp; Structures
            </span>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 bg-white rounded border border-[#E2BFB2]/50 font-medium">Sicilian Defense</span>
              <span className="px-2 py-0.5 bg-white rounded border border-[#E2BFB2]/50 font-medium">Catalan System</span>
              <span className="px-2 py-0.5 bg-white rounded border border-[#E2BFB2]/50 font-medium">Queen's Gambit</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#FAF2EE] border-t border-[#E2BFB2]/60 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-semibold text-[#5A4138] hover:text-[#1E1B19]"
          >
            Cancel
          </button>

          <a
            href="https://lichess.org/@/Kashifhrc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#A33900] hover:bg-[#852E00] rounded-lg transition-colors shadow-2xs"
          >
            <span>Open Lichess Profile &amp; Challenge</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
