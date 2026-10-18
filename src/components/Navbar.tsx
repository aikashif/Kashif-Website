import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenAcademicModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenAcademicModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About & Teaching' },
    { id: 'research', label: 'Research Interests' },
    { id: 'articles', label: 'Newspaper Articles' },
    { id: 'media', label: 'Podcasts & Media' },
    { id: 'sports', label: 'Sports & Pursuits' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF8F5]/90 backdrop-blur-md border-b border-[#E2BFB2]/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleLinkClick('hero')}
              className="text-left group flex items-baseline gap-2 focus:outline-none"
            >
              <span className="text-xs font-extrabold tracking-widest text-[#A33900] uppercase bg-[#FFDBCE] px-1.5 py-0.5 rounded">
                KASHIFHUB
              </span>
              <span className="text-base font-bold tracking-tight text-[#1E1B19] group-hover:text-[#A33900] transition-colors whitespace-nowrap">
                / Kashif Ansari
              </span>
            </button>
          </div>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#A33900] text-white shadow-xs'
                      : 'text-[#5A4138] hover:text-[#1E1B19] hover:bg-[#FAF2EE]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action / Academic Desk */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAcademicModal}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-lg border border-[#A33900]/30 text-[#A33900] bg-[#FAF2EE] hover:bg-[#FFDBCE] hover:border-[#A33900] transition-colors whitespace-nowrap shadow-xs"
              title="View Academic Credentials & Faculty Appointment"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>FACULTY & FELLOW</span>
              <span className="text-[11px] bg-[#A33900] text-white px-1 py-0.2 rounded font-mono">JGU</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenAcademicModal}
              className="p-1.5 text-[#A33900] hover:bg-[#FAF2EE] rounded-md sm:hidden"
              aria-label="Academic Hub"
            >
              <GraduationCap className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#5A4138] hover:text-[#1E1B19] hover:bg-[#FAF2EE] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E2BFB2]/50 bg-[#FFF8F5] px-4 pt-2 pb-4 space-y-1 shadow-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-[#A33900] text-white font-semibold'
                    : 'text-[#1E1B19] hover:bg-[#FAF2EE]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#E2BFB2]/30 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAcademicModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#A33900] rounded-lg hover:bg-[#852E00] transition-colors"
            >
              <GraduationCap className="w-4 h-4" />
              <span>FACULTY & FELLOW Academic Hub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
