export interface Article {
  id: string;
  title: string;
  publication: 'MINT' | 'ET WEALTH' | 'DAINIK BHASKAR';
  tag: string;
  summary: string;
  date: string;
  readTime: string;
  url: string;
  embedUrl?: string;
  keyInsights: string[];
  fullAnalysis: string;
  quote: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  guestHost: string;
  summary: string;
  metric: string;
  duration: string;
  platform: string;
  url: string;
  youtubeId?: string;
  topics: string[];
  editorialContext: string;
  keyTimestampQuote: string;
}

export interface PressQuote {
  id: string;
  publication: string;
  code: string;
  headline: string;
  topic: string;
  summary: string;
  url: string;
  embedUrl?: string;
  date: string;
  isSpecialPanel?: boolean;
  editorialCommentary: string;
}

export interface SportsDiscipline {
  id: string;
  name: string;
  badge: string;
  category: string;
  description: string;
  drillTitle?: string;
  drillDescription?: string;
  handle?: string;
  handleLink?: string;
  metrics?: { label: string; value: string }[];
  nextMilestone?: string;
}

export const PROFILE_DATA = {
  name: "Kashif Ansari",
  fullName: "Mohd. Kashif Ansari",
  // Put your photo in the public/ folder (for example public/profile.jpg)
  // and set this to "/profile.jpg". Empty shows the "KA" monogram.
  photo: "",
  deckView: "DECK VIEW 01",
  region: "Delhi-NCR • Global",
  headline: "Finance Faculty, O.P. Jindal Global University | Founder, PerFi | National Financial Columnist",
  dispatch: "Welcome to this curated intellectual archive. Here you will find my academic research at O.P. Jindal Global University, national financial commentary across Mint and The Economic Times, long-form podcast dialogues on sovereign credit and fintech architectures, and verified physical conditioning regimens. Explore each dossier interactively below.",
  quickMetrics: [
    { label: "JGU", sub: "Faculty Desk", code: "ACAD" },
    { label: "1M+", sub: "Dialogue Listeners", code: "AUDIO" },
    { label: "15+", sub: "National Op-Eds (Mint & ET)", code: "PRESS" },
    { label: "Daily", sub: "Regimen (Badminton & Chess)", code: "SPORT" }
  ],
  aboutMe: {
    title: "About me",
    points: [
      {
        role: "Finance Professor",
        org: "O.P. Jindal Global University (JGU)",
        narrative: "Directing the CRAFT and Banking Research Centre, spearheading experiential courses across corporate finance, financial derivatives, and taxation architecture.",
        icon: "school"
      },
      {
        role: "Former Assistant Professor",
        org: "Hansraj College, University of Delhi",
        narrative: "Spent seven years advancing academic finance and was privileged to draft Delhi University's first National Education Policy (NEP) curriculum for Income Tax and Corporate Tax Planning.",
        icon: "landmark"
      },
      {
        role: "Founder",
        org: "PerFi",
        narrative: "Engineering practical financial frameworks that empower ambitious professionals and students to master credit, investments, and statutory compliance.",
        icon: "rocket"
      },
      {
        role: "Financial Columnist & Educator",
        org: "National Media & Public Forums",
        narrative: "Translating opaque sovereign fiscal policy and banking mechanics into rigorous, actionable editorial essays read by over one million people.",
        icon: "megaphone"
      }
    ],
    guidingPrinciple: "Unpacking high finance, tax intricacies, and wealth-building into crisp, usable frameworks that bridge academic theory with real-world balance sheets."
  },
  education: [
    {
      degree: "B.Com (Hons)",
      institution: "Hansraj College, University of Delhi",
      country: "India",
      flag: "🇮🇳",
      highlight: "Foundational grounding in commerce & accounting theory"
    },
    {
      degree: "M.Com",
      institution: "Delhi School of Economics (DSE)",
      country: "India",
      flag: "🇮🇳",
      highlight: "Advanced corporate finance, capital markets & taxation"
    },
    {
      degree: "Research (M.Phil / Doctoral)",
      institution: "Delhi School of Economics (DSE)",
      country: "India",
      flag: "🇮🇳",
      highlight: "Institutional research in credit mechanics & tax economics"
    },
    {
      degree: "Executive Program",
      institution: "The Wharton School, University of Pennsylvania",
      country: "USA",
      flag: "🇺🇸",
      highlight: "Global executive education in financial strategy & institutional analytics"
    }
  ],
  educationFooter: "Dual Delhi University Scholar • Wharton Alumni Credentials",
  teachingStory: {
    title: "My teaching story",
    quote: "Classrooms without live market telemetry and spreadsheet mechanics are merely theoretical museums.",
    points: [
      {
        kicker: "Confronting Theoretical Detachment",
        text: "I entered academia with profound skepticism toward traditional rote syllabi that trained students to pass textbook exams while remaining paralyzed before actual corporate filings."
      },
      {
        kicker: "Pioneering Pedagogical Reform",
        text: "I committed to replacing abstract derivations with real-world case simulations: requiring students to prepare authentic tax returns, analyze real balance sheets, and stress-test loan portfolios."
      },
      {
        kicker: "Cultivating Institutional Autonomy",
        text: "Transitioning to forward-thinking academic chairs gave me full pedagogical freedom to turn seminar halls into active financial laboratories and open-market simulation centers."
      },
      {
        kicker: "The Enduring Mission",
        text: "What began as an intellectual rebellion evolved into a calling: mentoring thousands of future financial leaders who graduate not just credentialed, but market-ready and ethically grounded."
      }
    ]
  },
  researchInterests: [
    {
      kicker: "CORE ARCHITECTURE",
      title: "Generative AI in Finance",
      description: "Evaluating large language model architectures applied to sovereign financial documents, audit trails, and automated regulatory parsing.",
      domain: "AI & Neural Modeling"
    },
    {
      kicker: "CREDIT MODELING",
      title: "Consumer Credit Dynamics",
      description: "Dissecting borrower behavioral elasticity, revolving interest traps, and modern multi-card portfolio management.",
      domain: "Credit Analytics"
    },
    {
      kicker: "AUTOMATION",
      title: "Algorithmic Finance",
      description: "Structuring automated pipelines for predictive cash flow management, corporate compliance audits, and taxation reconciliation.",
      domain: "Applied Fintech"
    },
    {
      kicker: "FISCAL ARCHITECTURE",
      title: "Income Tax Frameworks",
      description: "Analyzing the interplay between corporate incentives, capital gains grandfathering, and sovereign revenue optimization.",
      domain: "Tax Policy"
    },
    {
      kicker: "REGULATORY POLICY",
      title: "GST Architecture",
      description: "Assessing indirect tax reforms, platform contest entry levies, and their macroeconomic ripple effects across emerging sectors.",
      domain: "Sovereign Reform"
    },
    {
      kicker: "COLLABORATION",
      title: "Continuous Inquiry",
      description: "Conducting interdisciplinary inquiries bridging behavioral economics, banking supervision, and public consumer protection.",
      domain: "Academic Hub"
    }
  ],
  pedagogy: {
    title: "Pedagogical Frameworks",
    description: "Systematic classroom engagement protocols designed to eliminate passive lecture formats through tactical, real-world case simulations.",
    calloutTitle: "Tools & Activities for Applied Mastery",
    notionIdeasUrl: "https://kashifhub.notion.site/My-teaching-ideas-3bd228957fb748068e6374dafd1390bf",
    badges: [
      "Live Portfolio Simulations",
      "ITR Filing Case Practicums",
      "Fintech & Credit Hackathons"
    ],
    adoption: "Adopted across graduate & undergraduate cohorts at JGU & DU."
  }
};

export const ARTICLES_DATA: Article[] = [
  {
    id: "art-1",
    title: "Boost your credit score: 5 crucial factors you need to know",
    publication: "MINT",
    tag: "Credit Analytics",
    summary: "A rigorous mathematical dissection of algorithmic scoring engines, credit utilization ratios, and systemic behavioral debt traps.",
    date: "30 April 2023",
    readTime: "5 min read",
    url: "https://www.livemint.com/money/personal-finance/boost-your-credit-score-5-crucial-factors-you-need-to-know-11682877602646.html",
    keyInsights: [
      "Credit Utilization Ratio: Maintaining aggregate spending below 30% of authorized limits is paramount; algorithms interpret higher velocity as liquidity distress.",
      "Vintage Preservation: Closing your earliest credit line permanently destroys historical tenure depth, contracting your score maturity index.",
      "Repayment Precision: Settlement timeliness accounts for 35% of total score weight. A single 30-day delinquency can erase over 65 points in one cycle.",
      "Balanced Exposure: Maintaining a disciplined ratio between secured facilities (mortgages) and unsecured instruments (cards, lines) reinforces underwriting stability."
    ],
    fullAnalysis: "Credit scoring models operated by CIBIL, Experian, and Equifax are algorithmic engines that value consistency over volume. A common fallacy among affluent retail consumers is assuming that paying minimum dues keeps their credit profile healthy. In reality, carrying revolving debt degrades the internal risk metric and dramatically increases the cost of borrowing when applying for sovereign mortgages.",
    quote: "A credit score is not merely a record of whether you pay your bills; it is an algorithmic gauge of how comfortably your lifestyle sits inside your sanctioned capital boundaries."
  },
  {
    id: "art-2",
    title: "How to file ITRs when it's belated, revised, updated",
    publication: "MINT",
    tag: "Statutory Taxation",
    summary: "A definitive compliance roadmap navigating Sections 139(4), 139(5), and 139(8A) of the Indian Income Tax Act.",
    date: "10 October 2022",
    readTime: "6 min read",
    url: "https://www.livemint.com/money/personal-finance/how-to-file-itrs-when-it-s-belated-revised-updated-11665420452753.html",
    keyInsights: [
      "Section 139(4) Belated Filing: Missing the statutory July 31 deadline carries immediate penalty fees and permanently forfeits business loss carry-forward benefits.",
      "Section 139(5) Revised Returns: Genuine computational oversights and AIS discrepancies can be rectified up to December 31 without punitive litigation.",
      "Section 139(8A) Updated ITR-U: Extends statutory window up to 24 months post-assessment year, subject to steep additional tax levies of 25% to 50%.",
      "Refund Exclusion: Taxpayers cannot leverage Section 139(8A) to claim an additional tax refund or reduce net self-assessment liability."
    ],
    fullAnalysis: "The Indian income tax apparatus has transitioned from physical assessment queues to algorithmic facial tax reconciliation through the Annual Information Statement (AIS). Taxpayers who miss filing deadlines often panic, but the Income Tax Act provides structured remedial pathways. Knowing the precise boundaries between belated, revised, and updated returns protects investors from compounding interest charges.",
    quote: "Procedural precision in tax compliance is just as critical as investment yield. Misunderstanding filing sections can transform a routine omission into punitive statutory recovery."
  },
  {
    id: "art-3",
    title: "Know all about paying rent using your credit card",
    publication: "MINT",
    tag: "Consumer Credit",
    summary: "An unsparing economic calculation of merchant category codes, convenience surcharges, and the reality of reward point arbitrage.",
    date: "10 July 2022",
    readTime: "5 min read",
    url: "https://www.livemint.com/money/personal-finance/know-all-about-paying-rent-using-your-credit-card-11657463899021.html",
    keyInsights: [
      "MCC 6513 Reclassification: Leading banking institutions systematically recategorized rental payment gateways to cap accelerated rewards.",
      "Surcharge Stacking: Added 1% processing charges plus 18% GST erase cash-back spreads for more than 90% of mid-tier retail cards.",
      "Milestone Exceptions: Super-premium cards (e.g. Infinia, Emeralde) remain the rare exception where fee waiver thresholds outpace processing friction.",
      "Statutory Withholding: Monthly rental outlays surpassing ₹50,000 mandate formal PAN reporting and 5% TDS deduction under Section 194-IB."
    ],
    fullAnalysis: "During the zenith of fintech rental aggregators, retail cardholders engaged in widespread manufactured spend arbitrage. However, commercial banks quickly realized they were bleeding interchange revenue while absorbing heightened default risk. The subsequent imposition of MCC-specific fee structures decisively closed this arbitrage for the average consumer.",
    quote: "When financial platforms market 'effortless rewards' on high-value non-merchant transactions, you must always compute the post-tax, post-surcharge net IRR before celebrating points."
  },
  {
    id: "art-4",
    title: "Do you really need the buy now pay later cards?",
    publication: "MINT",
    tag: "Fintech Architecture",
    summary: "A structural critique of the shadow credit mechanism, invisible bureau entries, and behavioral friction reduction in BNPL apps.",
    date: "12 April 2022",
    readTime: "5 min read",
    url: "https://www.livemint.com/money/personal-finance/do-you-really-need-the-buy-now-pay-later-cards-11649782698430.html",
    keyInsights: [
      "Shadow Credit Bureau Footprint: Every BNPL onboarding creates an active consumer durable loan sanctioned by an underlying NBFC.",
      "Micro-Default Cascades: A single missed payment on a trivial ₹300 order is reported with identical bureau severity as a defaulted car loan.",
      "Behavioral Velocity: Eliminating point-of-sale friction inflates discretionary purchase frequency by 25% to 35% among young demographics.",
      "Regulatory Hardening: The Reserve Bank of India stepped in with strict First Loss Default Guarantee (FLDG) mandates to curb unhedged fintech balance sheets."
    ],
    fullAnalysis: "Buy-Now-Pay-Later was sold as an egalitarian consumer revolution for uncarded youth. In practice, it operates as high-velocity shadow consumer lending. Unlike transparent credit cards that offer 45-day grace periods with clear billing dates, BNPL platforms disaggregate loans across multiple lending partners, creating fragmented repayment calendars designed to capture penalty fees.",
    quote: "Friction in financial transactions is not always an evil; sometimes, that two-second pause is the only shield protecting a young saver from predatory impulsive consumption."
  },
  {
    id: "art-5",
    title: "A breakdown of India's fantasy sports industry",
    publication: "MINT",
    tag: "Gaming Economics",
    summary: "Sovereign fiscal analysis evaluating the 28% GST imposition, unit economics compression, and venture capital recalibrations.",
    date: "31 October 2021",
    readTime: "6 min read",
    url: "https://www.livemint.com/money/personal-finance/a-breakdown-of-india-s-fantasy-sports-industry-11635699153058.html",
    keyInsights: [
      "Tax Base Shift: Transitioning the 28% GST levy from Gross Gaming Revenue (platform take-rate) to Total Contest Entry fees resulted in a fourfold statutory cost jump.",
      "EBITDA Margin Squeeze: Early-stage operators could not absorb the sovereign levy into customer acquisition budgets, sparking industry consolidation.",
      "Offshore Capital Migration: Over-taxation risks driving sophisticated high-frequency players toward unregulated offshore betting nodes outside India's jurisdiction.",
      "Regulatory Clarity: The Supreme Court and GST Council established firm precedents defining the legal boundaries of online skill gaming."
    ],
    fullAnalysis: "The online gaming and fantasy sports sector expanded with explosive momentum backed by venture capital. However, the sovereign decision to levy 28% GST on the entry face value fundamentally transformed the economic equation. Platforms were forced to pivot from aggressive subscriber acquisition to ruthless balance-sheet preservation and unit-level profitability.",
    quote: "When sovereign taxation models tax entry capital rather than operator margins, only the most capitalized institutions with pristine unit economics can survive the fiscal winter."
  },
  {
    id: "art-6",
    title: "Wealth – edition 20-Oct-2025 to 26-October-2025",
    publication: "ET WEALTH",
    tag: "Wealth Engineering",
    summary: "Curated portfolio allocation architectures, debt-equity rebalancing, and tax-efficient strategies for modern retail wealth builders.",
    date: "26 October 2025",
    readTime: "7 min read",
    url: "https://economictimes.indiatimes.com/wealth/26-october-2025/editionlist/124665012.cms?from=mdr",
    keyInsights: [
      "Dynamic Asset Allocation: Balancing sovereign debt instruments and large-cap equities amid fluctuating repo expectations.",
      "Post-Indexation Strategy: Tactical allocation frameworks responding to the statutory removal of debt mutual fund indexation benefits.",
      "Multi-Asset Hedging: Incorporating physical gold and high-grade liquid corporate paper for systemic portfolio stabilization."
    ],
    fullAnalysis: "A comprehensive institutional dossier published in The Economic Times Wealth, analyzing how retail investors must redesign their investment portfolios in a shifting interest rate environment. Emphasizes the need to calculate real post-tax compounding rates rather than relying on historical nominal yields.",
    quote: "Asset allocation is the only free lunch in financial economics. In a volatile macro cycle, your portfolio's survivability depends entirely on uncorrelated balance sheet buffers."
  },
  {
    id: "art-7",
    title: "Wealth – edition 21-Jul-2025 to 27-July-2025",
    publication: "ET WEALTH",
    tag: "Capital Gains Strategy",
    summary: "Navigating revised statutory capital gains brackets, asset holding tenures, and mid-year tax harvesting protocols.",
    date: "27 July 2025",
    readTime: "6 min read",
    url: "https://economictimes.indiatimes.com/wealth/19-july-2025/editionlist/122788759.cms?from=mdr",
    keyInsights: [
      "Capital Gains Harmonization: Managing portfolio impact following the revised 12.5% LTCG and 20% STCG benchmarks across listed instruments.",
      "Grandfathering Shield: Maximizing statutory base cost protections on long-held real estate and legacy mutual fund holdings.",
      "Tax Harvesting Windows: Utilizing the annual ₹1.25 lakh LTCG exemption window systematically prior to fiscal year close."
    ],
    fullAnalysis: "Following the historic restructuring of India's capital gains tax code, this feature in ET Wealth delivers a strategic blueprint for family offices and retail investors. It outlines step-by-step methodologies to recalibrate asset portfolios without triggering premature tax liabilities.",
    quote: "The tax code changes continuously; your financial roadmap cannot remain static. An annual mid-year tax audit is as essential to wealth preservation as disciplined saving."
  },
  {
    id: "art-8",
    title: "Dainik Bhaskar all editions | RBI Ombudsman Scheme",
    publication: "DAINIK BHASKAR",
    tag: "Consumer Protection",
    summary: "A national investigative review of the Reserve Bank of India Integrated Ombudsman Scheme and statutory banking redressal.",
    date: "September 2024",
    readTime: "5 min read",
    url: "https://drive.google.com/file/d/1sOJ8CodK1Z18-ubWgJ3AxASLAWaPKva6/view?usp=drivesdk",
    embedUrl: "https://drive.google.com/file/d/1sOJ8CodK1Z18-ubWgJ3AxASLAWaPKva6/preview",
    keyInsights: [
      "Integrated Redressal: The RBI's One-Nation One-Ombudsman framework unified previously disparate banking, NBFC, and digital wallet dispute portals.",
      "Zero Liability Statutory Shield: Complete consumer indemnity guaranteed when unauthorized digital UPI or card transactions are formally reported within 72 hours.",
      "30-Day Mandatory Escalation: Clear procedural hierarchy detailing how to compel commercial bank nodal officers to settle grievances before appellate intervention."
    ],
    fullAnalysis: "Published across all national Hindi editions of Dainik Bhaskar, reaching millions of everyday banking consumers. Demystifies the exact legal protocols to challenge fraudulent deductions, hidden charges, and unresponsive branch managers through the Reserve Bank's statutory ombudsman portal.",
    quote: "Banking rights exist in sovereign law, but they are meaningless if citizens do not know the exact timeline and procedure to enforce them."
  }
];

export const PODCASTS_DATA: PodcastEpisode[] = [
  {
    id: "pod-1",
    title: "Podcast with Ishan Sharma",
    guestHost: "Ishan Sharma Show",
    summary: "A high-octane deep dive into credit card optimization, building generational wealth, and why theoretical commerce curricula fail Indian youth.",
    metric: "500K+ views",
    duration: "1 hr 18 min",
    platform: "YouTube",
    url: "https://youtu.be/aIi4IIeSsw0?si=XGnxGcQWqbUVBwSN",
    youtubeId: "aIi4IIeSsw0",
    topics: ["Credit Card Perks", "Rote Education Failure", "Wealth Compounding", "Student Debt"],
    editorialContext: "This viral conversation crossed half a million views within weeks. We discussed the mathematics of reward point arbitrage, how credit bureaus quietly classify borrowers, and practical career strategies for college students entering modern finance.",
    keyTimestampQuote: "If you cannot calculate the true post-tax internal rate of return on your investment, you are not investing—you are merely donating capital to institutional balance sheets."
  },
  {
    id: "pod-2",
    title: "Podcast with IndMoney",
    guestHost: "IndMoney Exclusive Series",
    summary: "Global equity allocations, Liberalised Remittance Scheme (LRS) tax collection rules, and international portfolio diversification for Indian citizens.",
    metric: "150K+ views",
    duration: "48 min",
    platform: "YouTube",
    url: "https://youtu.be/r_IzeNxx3pI?si=Pjh8scyMCQ7htKM6",
    youtubeId: "r_IzeNxx3pI",
    topics: ["Global Equity", "LRS & TCS Rules", "US Markets", "Currency Hedging"],
    editorialContext: "A focused dialogue for sophisticated retail investors examining the mechanics of investing in US stocks, navigating the 20% Tax Collection at Source (TCS) levy, and structuring long-term international dollar hedges.",
    keyTimestampQuote: "The 20% TCS rule fundamentally changed international remittances; understanding how to offset it against your advance tax liabilities is the key to preventing severe liquidity drag."
  },
  {
    id: "pod-3",
    title: "Podcast with Kotak Bank",
    guestHost: "Kotak Institutional Dialogues",
    summary: "The evolution of Indian banking infrastructure, digital public goods, and empowering consumers through transparent credit scoring.",
    metric: "120K+ views",
    duration: "54 min",
    platform: "YouTube",
    url: "https://youtu.be/Dy9tahaIyY8?si=nmrBgmgER8Uz4tcf",
    youtubeId: "Dy9tahaIyY8",
    topics: ["Banking Infrastructure", "Credit Optimization", "RBI Compliance", "Digital Lending"],
    editorialContext: "Partnering with one of India's premier scheduled commercial banks, we explored how modern core banking architectures assess consumer risk, the rise of account aggregators, and how disciplined cardholders maximize sovereign interest-free grace periods.",
    keyTimestampQuote: "Credit cards represent the most sophisticated interest-free short-term loans in monetary history—provided you never surrender your autonomy to revolving balances."
  },
  {
    id: "pod-4",
    title: "Podcast with Neeraj Arora",
    guestHost: "Neeraj Arora Conversations",
    summary: "The future of accounting and finance pedagogy, breaking free from rote certifications, and creating high-impact educators.",
    metric: "Featured Episode",
    duration: "1 hr 05 min",
    platform: "YouTube",
    url: "https://youtu.be/gkh_L_FYmpE?si=aJgNKNQyDP4Tuw4R",
    youtubeId: "gkh_L_FYmpE",
    topics: ["Commerce Pedagogy", "NEP Syllabus", "CA Education", "Classroom Telemetry"],
    editorialContext: "A reflective conversation with renowned educator Neeraj Arora on how commercial accounting education must evolve. We shared insights on drafting Delhi University's first NEP tax syllabus and integrating live market terminals into university classrooms.",
    keyTimestampQuote: "Teaching taxation by having students file actual anonymized returns creates tenfold higher retention than forcing them to memorize dry section numbers."
  },
  {
    id: "pod-5",
    title: "Podcast with Moneycontrol: Credit Card Devaluation",
    guestHost: "Moneycontrol 'Simply Save' Podcast (Host: Maulik)",
    summary: "An analytical examination of credit card reward devaluations, bank interchange economics, and how cardholders can protect accumulated points.",
    metric: "Moneycontrol Special",
    duration: "36 min",
    platform: "Moneycontrol Podcast",
    url: "https://www.moneycontrol.com/news/podcast/credit-card-devaluation-what-banks-give-they-can-take-away-too-simply-save-10947511.html",
    topics: ["Reward Cuts", "Axis Magnus Devaluation", "Bank Interchange", "Loyalty Currencies"],
    editorialContext: "Amid widespread public consternation regarding reward cuts on popular premium cards (such as Axis Magnus and Infinia), Moneycontrol invited me on their premier personal finance show to deconstruct bank unit economics and recommend tactical exit strategies.",
    keyTimestampQuote: "Reward points are an unsecured, non-interest-bearing currency issued by commercial banks with zero price stability. Never hoard points as if they were savings; burn them on planned travel as fast as you earn them."
  }
];

export const PRESS_QUOTES: PressQuote[] = [
  {
    id: "quote-1",
    publication: "The Ken",
    code: "KEN",
    headline: "I just got my 30th credit card and I'm planning to get more",
    topic: "Neo-banking & fintech infrastructure",
    summary: "Featured profile analyzing the mathematical mechanics of multi-card management, interchange fee models, and credit bureau optimization in India.",
    url: "https://the-ken.com/kaching/i-just-got-my-30th-credit-card-and-im-planning-to-get-more/",
    date: "2024",
    editorialCommentary: "A front-page feature in India's premier subscription business publication, examining how disciplined financial analysts construct and operate multi-card credit networks while maintaining a pristine credit rating."
  },
  {
    id: "quote-2",
    publication: "HT Mint",
    code: "HT",
    headline: "How credit card aficionados fund globe-trotting adventures through strategic point accumulation",
    topic: "Retail credit optimization & travel rewards",
    summary: "National investigative feature dissecting how informed cardholders leverage milestone bonuses, airline partner transfers, and merchant category codes.",
    url: "https://www.livemint.com/money/personal-finance/how-credit-card-aficionados-are-funding-their-globe-trotting-adventures-through-strategic-point-accumulation-without-spending-a-single-penny-11684860986153.html",
    date: "May 2023",
    editorialCommentary: "Quoted extensively as a faculty expert on consumer credit mechanics, explaining how airlines and banks structure redemption charts and how informed travelers exploit genuine reward spreads."
  },
  {
    id: "quote-3",
    publication: "Deutsche Welle",
    code: "DW",
    headline: "Iran conflict triggers fertilizer crisis for India's agricultural economy",
    topic: "Macro-fiscal stability & sovereign supply chains",
    summary: "International television analysis regarding sovereign agricultural subsidies, global supply-chain shocks, and foreign exchange reserves exposure.",
    url: "https://www.dw.com/en/iran-war-triggers-fertilizer-crisis-for-indias-farmers/video-76796705",
    date: "2024",
    editorialCommentary: "Provided televised economic commentary for Germany's public international broadcaster, explaining how geopolitical tensions in the Middle East create direct fiscal subsidy burdens on India's sovereign balance sheet."
  },
  {
    id: "quote-4",
    publication: "The Lallantop",
    code: "LT",
    headline: "Consumer finance mechanics, tax compliance, and citizen rights",
    topic: "Prime television education broadcast",
    summary: "Extensive video interview breaking down household savings allocation, ITR filing deadlines, and statutory banking grievance mechanisms.",
    url: "https://drive.google.com/file/d/1xqHMHdOh3Yl5KTXzc0tUxE14zvTlhm3b/view?usp=drivesdk",
    embedUrl: "https://drive.google.com/file/d/1xqHMHdOh3Yl5KTXzc0tUxE14zvTlhm3b/preview",
    date: "2024",
    editorialCommentary: "Broadcast across India's largest Hindi digital news network, translating dense tax statutes and consumer banking protections into accessible, engaging guidance for millions of families."
  },
  {
    id: "quote-5",
    publication: "The Lallantop (Live Broadcast)",
    code: "PANEL",
    headline: "Union Budget Day Live Television Panelist",
    topic: "Real-time Union Budget broadcast analysis",
    summary: "Live nationwide television breakdown analyzing tax slab restructurings, capital expenditure allocations, and middle-class purchasing power.",
    url: "https://www.thelallantop.com/",
    date: "Budget Day",
    isSpecialPanel: true,
    editorialCommentary: "Invited as the designated finance faculty expert on set for the full Union Budget presentation, providing minute-by-minute evaluation of macroeconomic targets and direct tax changes as the Finance Minister spoke."
  }
];

export const SPORTS_DATA: SportsDiscipline[] = [
  {
    id: "badminton",
    name: "Badminton",
    badge: "PRIMARY DISCIPLINE",
    category: "Racquet Sports",
    description: "Competitive intermediate circuit with clear aspirations toward masters-tier national tournament play. Frequent champion across regional invitationals.",
    drillTitle: "CURRENT DRILL",
    drillDescription: "High-intensity multi-shuttle footwork, court transition speed, and deceptive backhand drives."
  },
  {
    id: "chess",
    name: "Chess",
    badge: "STRATEGIC REGIMEN",
    category: "Mind Sports",
    description: "Tactical opening systems, rapid calculation, and daily puzzle benchmarks. Grounded in classical positional strategy and rapid tactical awareness.",
    handle: "Kashifhrc",
    handleLink: "https://lichess.org/@/Kashifhrc"
  },
  {
    id: "squash",
    name: "Squash",
    badge: "COURT AGILITY",
    category: "Cardio Agility",
    description: "Developing glass-court positioning, wall rail consistency, and intense cardiovascular conditioning to complement badminton endurance.",
    drillTitle: "TACTICAL PROGRESSION",
    drillDescription: "Cross-court boast recoveries, front-wall drop precision, and anaerobic threshold training."
  },
  {
    id: "swimming",
    name: "Swimming",
    badge: "ACQUIRED 2025",
    category: "Aquatic Conditioning",
    description: "Rigorous focus on hypoxic threshold, pacing telemetry, and VO2 max development. Acquired as a core discipline in 2025.",
    metrics: [
      { label: "Freestyle 50m", value: "43 secs" },
      { label: "Backstroke 50m", value: "51 secs" },
      { label: "Underwater endurance", value: "25 metres" }
    ],
    nextMilestone: "Butterfly stroke mastery"
  }
];

export const SOCIAL_OUTPOSTS = [
  {
    name: "PerFi Hub",
    url: "https://kashifhub.notion.site/Kashif-Ansari-35fe4bf0b51b803e97c9ceee60bbbead",
    icon: "bookmark",
    badge: "Founder Portal",
    isPrimary: true
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@PerFiHub",
    icon: "youtube",
    badge: "Lectures & Pods",
    isPrimary: false
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kashif-ansari-05244919/",
    icon: "linkedin",
    badge: "Academic Network",
    isPrimary: false
  },
  {
    name: "Twitter / X",
    url: "https://twitter.com/kashif_ansari",
    icon: "twitter",
    badge: "Economic Commentary",
    isPrimary: false
  },
  {
    name: "Lichess (Kashifhrc)",
    url: "https://lichess.org/@/Kashifhrc",
    icon: "chess",
    badge: "Rated Games",
    isPrimary: false
  }
];
