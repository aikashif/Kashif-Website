import React, { useState } from 'react';
import { copyText, useDialog } from '../hooks/useDialog';
import { X, GraduationCap, Mail, Copy, Check, ExternalLink, Award, BookOpen, Building2 } from 'lucide-react';

// The address is kept in parts so it never appears whole in the page source,
// where spam bots look for it. It is joined only when a visitor clicks.
const EMAIL_USER = 'Kashif.dsedu';
const EMAIL_DOMAIN = 'gmail.com';
const getEmail = () => `${EMAIL_USER}@${EMAIL_DOMAIN}`;

interface AcademicHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AcademicHubModal: React.FC<AcademicHubModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const dialogRef = useDialog<HTMLDivElement>(isOpen, onClose);

  if (!isOpen) return null;

  const handleCopy = async () => {
    if (!(await copyText(getEmail()))) return;
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmail = () => {
    const subject = encodeURIComponent('Scholarly Inquiry / Faculty Dialogue');
    window.location.href = `mailto:${getEmail()}?subject=${subject}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Surface */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="academic-hub-title"
        className="relative w-full max-w-lg bg-[#FFF8F5] rounded-2xl border border-[#E2BFB2] shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col justify-between"
      >
        
        {/* Header */}
        <div className="bg-[#A33900] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#782B00] rounded-xl text-white">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#FFDBCE]">
                FACULTY DOSSIER &amp; CREDENTIALS
              </span>
              <h3 id="academic-hub-title" className="text-lg font-extrabold">Academic Hub</h3>
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

        {/* Content Body */}
        <div className="p-6 space-y-5 overflow-y-auto flex-1">
          {/* Faculty Header */}
          <div className="p-4 rounded-xl bg-white border border-[#E2BFB2]/60 shadow-2xs">
            <h4 className="text-base font-extrabold text-[#1E1B19]">
              Mohd. Kashif Ansari
            </h4>
            <p className="text-xs font-semibold text-[#A33900] mt-0.5">
              Assistant Professor of Finance · O.P. Jindal Global University (JGU)
            </p>
            <p className="text-xs text-[#735733] mt-1">
              Director, Centre for Research in Applied Finance and Taxation (CRAFT) &amp; Banking Research Centre
            </p>
          </div>

          {/* Institutional Highlights */}
          <div className="space-y-3">
            <h5 className="text-xs font-extrabold uppercase tracking-wider text-[#1E1B19] flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#A33900]" />
              Institutional Milestones &amp; Appointments
            </h5>

            <div className="space-y-2 text-xs text-[#5A4138]">
              <div className="p-3 rounded-lg bg-[#FAF2EE] border border-[#E2BFB2]/40">
                <span className="font-bold text-[#1E1B19] block mb-0.5">National Education Policy (NEP) Author</span>
                Contributed to drafting the first National Education Policy (NEP) curriculum for Income Tax and Corporate Tax Planning at the University of Delhi.
              </div>

              <div className="p-3 rounded-lg bg-[#FAF2EE] border border-[#E2BFB2]/40">
                <span className="font-bold text-[#1E1B19] block mb-0.5">Hansraj College Faculty Tenure (7 Years)</span>
                Taught graduate and undergraduate cohorts in direct tax, capital markets, and corporate finance at Hansraj College, University of Delhi.
              </div>

              <div className="p-3 rounded-lg bg-[#FAF2EE] border border-[#E2BFB2]/40">
                <span className="font-bold text-[#1E1B19] block mb-0.5">Executive &amp; Corporate Training</span>
                Designed and led sovereign finance and credit card analytics training for institutions including RBI Grade B officers and Boeing India.
              </div>
            </div>
          </div>

          {/* Academic Inquiries & Contact */}
          <div className="p-4 rounded-xl bg-[#FAF2EE] border border-[#A33900]/30 space-y-2">
            <span className="text-[11px] font-extrabold text-[#A33900] uppercase tracking-wider block">
              RESEARCH INQUIRIES &amp; SCHOLARLY CORRESPONDENCE
            </span>
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs font-bold text-[#1E1B19] truncate">
                {EMAIL_USER} [at] {EMAIL_DOMAIN}
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 text-xs font-semibold rounded bg-white border border-[#E2BFB2] hover:bg-[#FFDBCE] text-[#A33900] transition-colors flex items-center gap-1"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <button
                  onClick={handleEmail}
                  className="px-2.5 py-1 text-xs font-bold rounded bg-[#A33900] text-white hover:bg-[#852E00] transition-colors flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FAF2EE] border-t border-[#E2BFB2]/60 flex items-center justify-between">
          <a
            href="https://jgu.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#A33900] hover:underline flex items-center gap-1"
          >
            <span>Visit O.P. Jindal Global University</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 text-xs font-bold text-[#5A4138] hover:text-[#1E1B19] rounded-lg transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
