/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroHeader } from './components/HeroHeader';
import { SlideBio } from './components/Slides/SlideBio';
import { SlideResearch } from './components/Slides/SlideResearch';
import { SlideArticles } from './components/Slides/SlideArticles';
import { SlideMedia } from './components/Slides/SlideMedia';
import { SlideSports } from './components/Slides/SlideSports';
import { SlideSocial } from './components/Slides/SlideSocial';
import { PreviewDrawer } from './components/PreviewDrawer';
import { LichessModal } from './components/LichessModal';
import { AcademicHubModal } from './components/AcademicHubModal';
import { AppliedMasteryModal } from './components/AppliedMasteryModal';
import { Article, PodcastEpisode, PressQuote } from './data/portfolioData';

type DrawerItem = 
  | { type: 'article'; data: Article }
  | { type: 'podcast'; data: PodcastEpisode }
  | { type: 'press'; data: PressQuote };

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [selectedDrawerItem, setSelectedDrawerItem] = useState<DrawerItem | null>(null);
  const [isChessModalOpen, setIsChessModalOpen] = useState<boolean>(false);
  const [isAcademicModalOpen, setIsAcademicModalOpen] = useState<boolean>(false);
  const [isAppliedMasteryOpen, setIsAppliedMasteryOpen] = useState<boolean>(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Scroll spy observer for section tracking
  useEffect(() => {
    const sections = ['hero', 'about', 'research', 'articles', 'media', 'sports', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-20% 0px -60% 0px' }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F5] text-[#1E1B19] selection:bg-[#FFDBCE] selection:text-[#A33900]">
      {/* 3-Zone Sticky Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenAcademicModal={() => setIsAcademicModalOpen(true)}
      />

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4">
        {/* Hero Section & Global Dispatch */}
        <HeroHeader onExploreSection={handleNavigate} />

        {/* Profile, Academia, Odyssey */}
        <SlideBio 
          onOpenPerFi={() => window.open('https://kashifhub.notion.site/Kashif-Ansari-35fe4bf0b51b803e97c9ceee60bbbead', '_blank', 'noopener,noreferrer')} 
        />

        {/* Intellectual Focus & Pedagogy */}
        <SlideResearch 
          onSelectTopic={(topic) => handleNavigate('articles')}
          onOpenAppliedMastery={() => setIsAppliedMasteryOpen(true)}
        />

        {/* Editorial Op-Eds (Newspaper Articles) */}
        <SlideArticles 
          onSelectArticle={(article) => setSelectedDrawerItem({ type: 'article', data: article })}
        />

        {/* Broadcasts & Press Quotes */}
        <SlideMedia
          onSelectPodcast={(podcast) => setSelectedDrawerItem({ type: 'podcast', data: podcast })}
          onSelectQuote={(quote) => setSelectedDrawerItem({ type: 'press', data: quote })}
        />

        {/* Athletics & Recreation (Sports & Active Life) */}
        <SlideSports 
          onOpenChessModal={() => setIsChessModalOpen(true)}
        />

        {/* Contact form, social links & Editorial Footer */}
        <SlideSocial
          onNavigate={handleNavigate}
          onOpenChessModal={() => setIsChessModalOpen(true)}
          onOpenAcademicModal={() => setIsAcademicModalOpen(true)}
        />
      </main>

      {/* Slide-over Preview Drawer */}
      <PreviewDrawer
        item={selectedDrawerItem}
        onClose={() => setSelectedDrawerItem(null)}
      />

      {/* Interactive Lichess Challenge Modal */}
      <LichessModal
        isOpen={isChessModalOpen}
        onClose={() => setIsChessModalOpen(false)}
      />

      {/* Faculty Credentials & Academic Hub Modal */}
      <AcademicHubModal
        isOpen={isAcademicModalOpen}
        onClose={() => setIsAcademicModalOpen(false)}
      />

      {/* Applied Mastery Pedagogical Frameworks Modal */}
      <AppliedMasteryModal
        isOpen={isAppliedMasteryOpen}
        onClose={() => setIsAppliedMasteryOpen(false)}
      />
    </div>
  );
}
