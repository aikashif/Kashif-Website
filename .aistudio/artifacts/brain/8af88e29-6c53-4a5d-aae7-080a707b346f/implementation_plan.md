# Kashif Ansari Academic & Editorial Portfolio Deck ("Terracotta Deck")

A responsive, high-performance academic, editorial, and public finance portfolio for **Mohd. Kashif Ansari** (Finance Faculty at O.P. Jindal Global University, Founder of PerFi, and National Financial Columnist), faithfully translating the "Terracotta Deck" aesthetic into an interactive, mobile-first web experience.

***

## User Review & Critical Decisions

> [!IMPORTANT]
> Key decisions confirmed through Phase 1 user input and brief requirements:
> - **Navigation Mode**: Unified editorial presentation page with a sticky top bar contract, active section tracking, and smooth slide jump anchors.
> - **Media & Article Interactions**: Interactive slide-over preview drawer with comprehensive editorial summaries, key takeaways, metadata, and high-contrast direct external links.
> - **Consulting Scheduling**: Explicitly omitted as requested.
> - **Enhancements ("How it can be bettered")**: In-app article category filtering and live search, embedded podcast audio preview simulations, interactive Lichess rating verification / challenge dialog, and clean citation/dossier copy tools.

***

## 1. Overview & Core Concept

- **What It Does**: Presents Professor Kashif Ansari's complete scholarly dossier, teaching philosophy, national print op-eds (Mint, ET Wealth, Dainik Bhaskar), broadcast appearances (podcasts & national news panels), athletic disciplines (badminton, chess, squash, swimming), and public finance outposts in a tactile, slide-inspired editorial grid.
- **Target Audience / Persona**: Academic peers, university leadership, finance students, media producers/journalists, fintech founders, and general readers seeking authoritative commentary on Indian taxation, banking, consumer credit, and algorithmic finance.
- **Key Value**: Replaces conventional boring CVs and rigid Notion pages with a publication-grade, tactile presentation deck that communicates intellectual gravitas and athletic energy with zero corporate fluff.

***

## 2. User Experience & Visual Design

### Visual Identity & Theme ("Terracotta Deck")
- **Aesthetic Direction**: Warm Editorial Minimalism meets modular presentation slides. Tactile cream and crisp parchment surfaces anchored by bold terracotta and citrus accents.
- **Color Palette**:
  - Canvas Base: `#FFFBF7` / `#FFF8F5` (warm cream/parchment)
  - Primary Signature: `#EA580C` (vibrant terracotta orange for key cards, accent pills, and active states)
  - Secondary Accent: `#F97316` / `#CC4900` (deep terracotta & active triggers)
  - Card Surfaces: `#FFFFFF` (elevated cards) and `#FAF2EE` / `#FFF7ED` (subtle containers)
  - Typography: `#1C1917` (deep warm charcoal for contrast) and `#78716C` (muted stone for secondary metadata)
  - Hairline Borders: `1px solid #FDBA74` (subtle 20% opacity) or `#E7E5E4` (clean graphic framing)
- **Typography & Scale**:
  - Primary Font: **Plus Jakarta Sans** (Google Fonts) with tight tracking (`-0.02em` to `-0.03em`) for high-impact deck headlines and comfortable reading.
  - Monospace Data Font: Tabular figures (`tabular-nums`) for verification metrics, swim times, and dates.
- **Top Bar Contract**:
  - Single-row, 3-zone layout:
    - **Zone 1 (Brand)**: `KASHIFHUB` / `Kashif Ansari`
    - **Zone 2 (Nav Links)**: `About & Teaching`, `Research`, `Columns`, `Podcasts & Media`, `Sports & Regimen`
    - **Zone 3 (Action)**: High-contrast terracotta button `Academic Hub` / `Connect`

### Key Content Sections (Slide Architecture)
1. **Header & Global Dispatch**:
   - Deck View indicator: `DECK VIEW 01 · Delhi-NCR • Global`
   - Hero profile photo with verified gold border badge
   - Name, titles, and institutions (`JGU Faculty Desk`, `Founder, PerFi`, `National Financial Columnist`)
   - Dispatch & Overview narrative card
   - Quick KPI telemetry strip: `JGU Faculty Desk`, `1M+ Dialogue Listeners`, `15+ National Op-Eds`, `Daily Regimen`
2. **Slide 01 • Profile**:
   - Faculty role, Hansraj College DU tenure, PerFi founder story, guiding principle quotation block.
3. **Slide 02 • Academia**:
   - Step-by-step credential timeline: B.Com (Hons) Hansraj College, M.Com Delhi School of Economics, Research at DSE, Executive Program at Wharton Business School (with country flag badges and verified credential footer).
4. **Slide 03 • Odyssey (Terracotta Anchor Card)**:
   - Full-bleed rich terracotta slide explaining the teaching philosophy: early academic skepticism, theoretical reform, pedagogical autonomy, and enduring student mission.
5. **Slide 04 • Intellectual Focus**:
   - Research interest card matrix: Generative AI in Finance, Consumer Credit Dynamics, Algorithmic Finance, Income Tax Frameworks, GST Architecture, Continuous Inquiry.
6. **Slide 05 • Pedagogy**:
   - Applied mastery frameworks: live portfolio simulations, ITR filing case practicums, fintech & credit hackathons, JGU & DU adoption badges.
7. **Slide 06 • Editorial Op-Eds (Newspaper Articles)**:
   - 8 publication cards across **Mint**, **ET Wealth**, and **Dainik Bhaskar**, with category tags (Authored, Taxation, Credit Cards, Fintech, Gaming Economy, All Editions), summaries, and slide-over preview triggers.
8. **Slide 07A & 07B • Media Broadcasts & Press Quotes**:
   - **Podcasts**: Ishan Sharma, indMoney, Kotak Bank, Neeraj Arora, moneycontrol, Maulik credit card devaluation (with view counts and audio preview modal).
   - **Press Quotes**: The Ken, HT Mint, Deutsche Welle, The Lallantop, and Union Budget Day live broadcast.
9. **Slide 08 • Athletics & Active Life**:
   - Quad matrix: Badminton (Primary discipline & multi-shuttle drills), Chess (Lichess handle `Kashifhrc` with interactive challenge link), Squash (glass-court conditioning), Swimming (2025 verified split times: 50m Free 43s, 50m Back 51s, 25m Underwater).
10. **Final Slide • Connect Directly & Footer**:
    - Social outpost buttons (PerFi Hub, YouTube, LinkedIn, Twitter/X, Lichess), copyright notice, and parchment deck imprint.

### Interactive Slide-Over Preview Drawer
- Smooth backdrop scrim and animated right-hand slide-over panel.
- Displays full publication details, key takeaways, pull quotes, publication metadata, reading time, and an external link button to read on Mint / ET / YouTube.

***

## 3. How the Experience Can Be Bettered

To elevate the portfolio beyond a static document, the following enhancements are incorporated:
1. **Interactive Content Drawer**: Rather than immediately bouncing visitors off the page to external paywalls or video platforms, clicking any op-ed or broadcast opens a curated executive summary, thesis statement, and structured takeaways before offering the external redirect.
2. **Live Category Filter & Search**: Instant client-side filtering by topic (`All`, `Credit & Banking`, `Tax & Policy`, `Fintech & AI`, `Podcasts`, `Interviews`) so journalists and students can quickly locate relevant material.
3. **Audio / Media Preview Simulation**: Ambient podcast episode player bar that simulates dialogue excerpts and links out to Spotify/YouTube.
4. **Interactive Lichess Chess Widget**: Direct modal preview showing chess rating tier and a one-click button to challenge Professor Ansari on Lichess.
5. **Responsive Touch Drawer & Keyboard Navigation**: Full keyboard accessibility (`Escape` closes drawer, `Tab` navigates cards) and bottom-sheet touch drawer behavior on mobile viewports.

***

## 4. Technical Architecture & Data Strategy

### System & Component Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│                       App Container                         │
│   (Sticky Navigation Bar + Active Section Scroll Observer)   │
└──────────────────────────────┬──────────────────────────────┘
                               │
       ┌───────────────────────┴───────────────────────┐
       ▼                                               ▼
┌──────────────────────────────┐       ┌──────────────────────────────┐
│       Deck Content Area      │       │   Slide-Over Preview Drawer  │
│                              │       │   (Detailed summaries,       │
│ • Hero & Dispatch Card       │       │    takeaways & source links) │
│ • Quick Telemetry Metric Bar │       └──────────────────────────────┘
│ • Slides 01-03 (Bio/Edu/Ody) │
│ • Slides 04-05 (Research/Ped)│
│ • Slide 06 (Op-Ed Grid)      │
│ • Slides 07A/B (Media/Press) │
│ • Slide 08 (Sports Regimen)  │
│ • Outpost Links & Footer     │
└──────────────────────────────┘
```

### Data Model & State Strategy
- **`activeSection`**: Managed via IntersectionObserver on section IDs (`#about`, `#research`, `#articles`, `#media`, `#sports`, `#contact`).
- **`selectedItem`**: State for active article or media item displayed inside the slide-over drawer (`null` when closed).
- **`selectedFilter`**: Active topic filter (`"all"`, `"taxation"`, `"credit"`, `"fintech"`, `"macro"`).
- **`searchQuery`**: Real-time search query filtering across articles, podcasts, and research areas.
- **Static Dataset**: Curated, type-safe array of all 8+ op-eds, 6 podcasts, 5 media quotes, and 4 sports disciplines with verified dates and metadata.

***

## 5. Verification & Implementation Steps

1. Configure Tailwind CSS with the Terracotta palette tokens and import Google Font **Plus Jakarta Sans**.
2. Construct data structures in `src/data/portfolioData.ts` with complete metadata for all articles, podcasts, and achievements.
3. Build the core layout components:
   - Sticky Top Bar (`Navbar.tsx`) with 3-zone contract.
   - Hero & Dispatch Header (`HeroHeader.tsx`).
   - Profile, Education & Teaching Story (`BioSection.tsx`).
   - Research & Pedagogical Frameworks (`ResearchSection.tsx`).
   - Editorial Op-Eds with filtering (`ArticlesSection.tsx`).
   - Broadcasts & Media Quotes (`MediaSection.tsx`).
   - Sports & Active Life (`SportsSection.tsx`).
   - Interactive Preview Drawer (`PreviewDrawer.tsx`).
   - Footer & Social Outposts (`Footer.tsx`).
4. Verify responsiveness across mobile (375px), tablet (768px), and desktop (1440px).
5. Run `compile_applet` and verify zero TypeScript/lint issues.
