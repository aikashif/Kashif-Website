import React, { useEffect, useState } from 'react';
import { copyText, useDialog } from '../hooks/useDialog';

const LICHESS_USER = 'Kashifhrc';

type Ratings = { rapid?: number; blitz?: number; puzzle?: number };
type PerfMap = Record<string, { rating?: number; prov?: boolean } | undefined>;

// Reads the current ratings from the public Lichess API.
// Provisional ratings (too few games) are left out.
async function fetchRatings(signal: AbortSignal): Promise<Ratings> {
  const res = await fetch(`https://lichess.org/api/user/${LICHESS_USER}`, {
    headers: { Accept: 'application/json' },
    signal,
  });
  if (!res.ok) throw new Error(`Lichess returned ${res.status}`);
  const perfs: PerfMap = (await res.json()).perfs ?? {};
  const pick = (key: string) => {
    const perf = perfs[key];
    return perf && !perf.prov && typeof perf.rating === 'number' ? perf.rating : undefined;
  };
  return { rapid: pick('rapid'), blitz: pick('blitz'), puzzle: pick('puzzle') };
}
import { X, ExternalLink, Swords, Trophy, Copy, Check, Flame, Shield } from 'lucide-react';

interface LichessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LichessModal: React.FC<LichessModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [ratings, setRatings] = useState<Ratings | null>(null);
  const [ratingsFailed, setRatingsFailed] = useState(false);
  const dialogRef = useDialog<HTMLDivElement>(isOpen, onClose);

  useEffect(() => {
    if (!isOpen || ratings) return;
    const controller = new AbortController();
    setRatingsFailed(false);
    fetchRatings(controller.signal)
      .then(setRatings)
      .catch((err) => {
        if (err.name !== 'AbortError') setRatingsFailed(true);
      });
    return () => controller.abort();
  }, [isOpen, ratings]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    if (!(await copyText(LICHESS_USER))) return;
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const showRating = (value?: number) => (ratings ? (value ?? '—') : ratingsFailed ? '—' : '…');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lichess-title"
        className="relative w-full max-w-md bg-[#FFF8F5] rounded-2xl border border-[#E2BFB2] shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-150"
      >
        
        {/* Header Banner */}
        <div className="bg-[#A33900] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#782B00] rounded-lg">
              <Swords className="w-5 h-5 text-[#FFDBCE]" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#FFDBCE]">
                CHESS PROTOCOL • LICHESS.ORG
              </span>
              <h3 id="lichess-title" className="text-lg font-extrabold">Rated Challenge Request</h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close"
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
              <span className="text-[11px] font-bold text-[#8E7166] uppercase">Active Handle</span>
              <div className="text-xl font-extrabold font-mono text-[#A33900] flex items-center gap-2 mt-0.5">
                {LICHESS_USER}
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
          <div>
            <div className="grid grid-cols-3 gap-2 text-center" aria-live="polite">
              {([
                ['Rapid', ratings?.rapid],
                ['Blitz', ratings?.blitz],
                ['Puzzles', ratings?.puzzle],
              ] as const).map(([label, value]) => (
                <div key={label} className="p-2.5 rounded-lg bg-[#FAF2EE] border border-[#E2BFB2]/40">
                  <span className="text-[11px] font-bold text-[#735733] uppercase block">{label}</span>
                  <span className="font-mono text-sm font-extrabold text-[#1E1B19]">{showRating(value)}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#8E7166] mt-1.5 text-center">
              {ratingsFailed ? 'Live ratings are not available now. See the profile on Lichess.' : 'Live ratings from Lichess.'}
            </p>
          </div>

          {/* Tactical Repertoire */}
          <div className="text-xs text-[#5A4138] space-y-1.5">
            <span className="font-bold text-[#1E1B19] block text-xs uppercase tracking-wider">
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
            href={`https://lichess.org/@/${LICHESS_USER}`}
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
