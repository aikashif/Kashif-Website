import React from 'react';
import { X, FileSpreadsheet, Layers, Sparkles, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

interface AppliedMasteryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreTopic?: (topic: string) => void;
}

export const AppliedMasteryModal: React.FC<AppliedMasteryModalProps> = ({ 
  isOpen, 
  onClose,
  onExploreTopic 
}) => {
  if (!isOpen) return null;

  const frameworks = [
    {
      title: "Live Portfolio Simulations",
      kicker: "CAPITAL MARKETS",
      description: "Students manage simulated institutional portfolios under dynamic market shocks, testing duration risk, dividend yields, and capital gains tax liabilities in real time.",
      outcomes: [
        "Hands-on risk parity and beta management",
        "Tax-aware rebalancing simulations",
        "Real-world market telemetry integration"
      ]
    },
    {
      title: "ITR Filing Case Practicums",
      kicker: "STATUTORY COMPLIANCE",
      description: "Moving beyond theoretical rote memorization to prepare real, anonymized Income Tax Returns (ITR-1 through ITR-4) factoring in capital gains, house property TDS, and Section 139 nuances.",
      outcomes: [
        "End-to-end AIS (Annual Information Statement) reconciliation",
        "Belated vs. Revised return execution under Section 139",
        "Direct tax optimization strategies"
      ]
    },
    {
      title: "Fintech & Credit Hackathons",
      kicker: "ALGORITHMIC FINANCE",
      description: "Interdisciplinary project labs where students architect credit scoring engines, dissect Buy-Now-Pay-Later (BNPL) default curves, and evaluate UPI unit economics.",
      outcomes: [
        "Alternative data credit underwriting models",
        "Merchant Category Code (MCC) fee architecture analysis",
        "Algorithmic cash-flow stress testing"
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Surface */}
      <div className="relative w-full max-w-2xl bg-[#FFF8F5] rounded-2xl border border-[#E2BFB2] shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col justify-between">
        
        {/* Header */}
        <div className="bg-[#A33900] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#782B00] rounded-xl text-white">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#FFDBCE]">
                PEDAGOGY IN ACTION
              </span>
              <h3 className="text-lg font-extrabold">Tools &amp; Activities for Applied Mastery</h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-[#FFDBCE] hover:text-white hover:bg-[#782B00] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 overflow-y-auto flex-1">
          <p className="text-xs sm:text-sm text-[#5A4138] leading-relaxed">
            "Classrooms without live market telemetry and spreadsheet mechanics are merely theoretical museums." These applied frameworks translate complex fiscal law and market mathematics into rigorous student competencies.
          </p>

          <div className="space-y-4">
            {frameworks.map((f, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#E2BFB2]/60 shadow-2xs space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-extrabold tracking-wider text-[#A33900] uppercase bg-[#FFDBCE] px-2 py-0.5 rounded">
                    {f.kicker}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#8E7166]">
                    MOD 0{idx + 1}
                  </span>
                </div>

                <h4 className="text-base font-extrabold text-[#1E1B19]">
                  {f.title}
                </h4>

                <p className="text-xs text-[#5A4138] leading-relaxed">
                  {f.description}
                </p>

                <div className="pt-2 border-t border-[#FAF2EE] space-y-1">
                  {f.outcomes.map((out, oIdx) => (
                    <div key={oIdx} className="flex items-center gap-2 text-[11px] text-[#735733]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A33900] shrink-0" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FAF2EE] border-t border-[#E2BFB2]/60 flex items-center justify-between">
          <a
            href="https://kashifhub.notion.site/My-teaching-ideas-3bd228957fb748068e6374dafd1390bf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#A33900] hover:underline flex items-center gap-1"
          >
            <span>Open Original Teaching Ideas Dossier</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold text-white bg-[#A33900] hover:bg-[#852E00] rounded-lg transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
