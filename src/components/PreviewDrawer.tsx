import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Maximize2, 
  Minimize2, 
  Play, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Quote, 
  Radio, 
  Newspaper,
  BookOpen,
  FileText,
  Share2,
  Check
} from 'lucide-react';
import { Article, PodcastEpisode, PressQuote } from '../data/portfolioData';
import { copyText, useDialog } from '../hooks/useDialog';

type DrawerItem = 
  | { type: 'article'; data: Article }
  | { type: 'podcast'; data: PodcastEpisode }
  | { type: 'press'; data: PressQuote };

interface PreviewDrawerProps {
  item: DrawerItem | null;
  onClose: () => void;
}

export const PreviewDrawer: React.FC<PreviewDrawerProps> = ({ item, onClose }) => {
  const [activeTab, setActiveTab] = useState<'reader' | 'embed'>('reader');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Reset tab on item change
  useEffect(() => {
    if (item?.type === 'podcast' && item.data.youtubeId) {
      setActiveTab('embed');
    } else {
      setActiveTab('reader');
    }
    setIsExpanded(false);
  }, [item]);

  const dialogRef = useDialog<HTMLDivElement>(item !== null, onClose);

  if (!item) return null;

  const isArticle = item.type === 'article';
  const isPodcast = item.type === 'podcast';
  const isPress = item.type === 'press';

  const embedUrl = isArticle ? item.data.embedUrl : isPress ? item.data.embedUrl : undefined;
  const youtubeId = isPodcast ? item.data.youtubeId : undefined;
  const titleText = isArticle ? item.data.title : isPodcast ? item.data.title : item.data.headline;

  const handleCopyLink = async () => {
    if (!(await copyText(item.data.url))) return;
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop Scrim */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Drawer Surface */}
      <div 
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={titleText}
        className={`relative bg-[#FFF8F5] border-l border-[#E2BFB2] h-full shadow-2xl flex flex-col justify-between overflow-hidden z-10 transition-all duration-300 ease-in-out ${
          isExpanded ? 'w-full lg:w-4/5 xl:w-3/4' : 'w-full max-w-2xl'
        }`}
      >
        {/* Drawer Sticky Header */}
        <div className="sticky top-0 bg-[#FFF8F5]/95 backdrop-blur-md px-5 sm:px-6 py-4 border-b border-[#E2BFB2]/60 flex items-center justify-between z-20">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[11px] font-extrabold tracking-widest uppercase bg-[#FFDBCE] text-[#A33900] px-2 py-0.5 rounded shrink-0">
              {isArticle ? 'EDITORIAL OP-ED' : isPodcast ? 'PODCAST DIALOGUE' : 'MEDIA CITATION'}
            </span>
            <span className="text-xs font-bold text-[#735733] truncate">
              {isArticle ? item.data.publication : isPodcast ? item.data.guestHost : item.data.code}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {/* Copy Link Button */}
            <button
              onClick={handleCopyLink}
              className="p-1.5 text-[#5A4138] hover:text-[#A33900] hover:bg-[#FAF2EE] rounded-lg transition-colors"
              title="Copy original link"
              aria-label="Copy original link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Expand / Minimize Width */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 text-[#5A4138] hover:text-[#A33900] hover:bg-[#FAF2EE] rounded-lg transition-colors hidden sm:block"
              title={isExpanded ? "Collapse width" : "Expand width"}
              aria-label={isExpanded ? "Collapse width" : "Expand width"}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#5A4138] hover:bg-[#FAF2EE] hover:text-[#1E1B19] transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Mode Toggle: Interactive Reader vs Interactive Embedded Player */}
        <div className="bg-[#FAF2EE] px-5 sm:px-6 py-2 border-b border-[#E2BFB2]/40 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab('reader')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'reader'
                  ? 'bg-white text-[#A33900] shadow-xs'
                  : 'text-[#735733] hover:text-[#1E1B19]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Editorial Dossier</span>
            </button>

            {youtubeId || embedUrl ? (
              <button
                onClick={() => setActiveTab('embed')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeTab === 'embed'
                    ? 'bg-white text-[#A33900] shadow-xs'
                    : 'text-[#735733] hover:text-[#1E1B19]'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Interactive Embedded View</span>
              </button>
            ) : null}
          </div>

          <a
            href={item.data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#A33900] hover:underline flex items-center gap-1"
          >
            <span>Direct Link</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Drawer Body Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* TAB 1: INTERACTIVE EMBEDDED VIEW */}
          {activeTab === 'embed' && (
            <div className="space-y-4">
              {/* YouTube Embed */}
              {youtubeId && (
                <div className="rounded-2xl overflow-hidden border border-[#E2BFB2] bg-black shadow-md aspect-video w-full">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
                    title={titleText}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              )}

              {/* Google Drive Document / Video Embed */}
              {embedUrl && (
                <div className="rounded-2xl overflow-hidden border border-[#E2BFB2] bg-white shadow-md h-[480px] sm:h-[560px] w-full">
                  <iframe
                    src={embedUrl}
                    title={titleText}
                    sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full border-0"
                  />
                </div>
              )}

              {/* Episode or Document Quick Notes under the embed */}
              <div className="p-4 rounded-xl bg-white border border-[#E2BFB2]/60 space-y-2">
                <h3 className="text-sm font-extrabold text-[#1E1B19]">
                  {titleText}
                </h3>
                <p className="text-xs text-[#5A4138] leading-relaxed">
                  {isPodcast 
                    ? item.data.editorialContext 
                    : isArticle 
                      ? item.data.fullAnalysis 
                      : item.data.editorialCommentary}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: EDITORIAL READER DOSSIER */}
          {activeTab === 'reader' && (
            <div className="space-y-6">
              {/* Headline & Metadata */}
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E1B19] leading-tight tracking-tight">
                  {titleText}
                </h2>

                <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-[#735733] font-medium">
                  {isArticle && (
                    <>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#A33900]" />
                        <span>{item.data.date}</span>
                      </div>
                      <span>·</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#A33900]" />
                        <span>{item.data.readTime}</span>
                      </div>
                      <span>·</span>
                      <span className="text-[#A33900] font-semibold">{item.data.tag}</span>
                    </>
                  )}

                  {isPodcast && (
                    <>
                      <div className="flex items-center gap-1">
                        <Radio className="w-3.5 h-3.5 text-[#A33900]" />
                        <span>{item.data.platform}</span>
                      </div>
                      <span>·</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#A33900]" />
                        <span>{item.data.duration}</span>
                      </div>
                      <span>·</span>
                      <span className="text-[#A33900] font-semibold">{item.data.metric}</span>
                    </>
                  )}

                  {isPress && (
                    <>
                      <div className="flex items-center gap-1">
                        <Newspaper className="w-3.5 h-3.5 text-[#A33900]" />
                        <span>{item.data.publication}</span>
                      </div>
                      <span>·</span>
                      <span className="text-[#A33900] font-semibold">{item.data.topic}</span>
                    </>
                  )}
                </div>
              </div>

              {/* YouTube Thumbnail Preview if podcast */}
              {isPodcast && item.data.youtubeId && (
                <button
                  type="button"
                  onClick={() => setActiveTab('embed')}
                  aria-label={`Play ${item.data.title}`}
                  className="relative block w-full text-left rounded-2xl overflow-hidden border border-[#E2BFB2] group cursor-pointer shadow-xs"
                >
                  <img 
                    src={`https://img.youtube.com/vi/${item.data.youtubeId}/hqdefault.jpg`} 
                    alt={item.data.title}
                    className="w-full h-52 sm:h-64 object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-[#A33900] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 ml-1 fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/80 text-white text-[11px] font-bold px-2.5 py-1 rounded backdrop-blur-xs">
                    Click to Play Inside Browser
                  </div>
                </button>
              )}

              {/* Executive Summary Card */}
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#E2BFB2]/60 shadow-2xs space-y-2">
                <span className="text-[11px] font-extrabold tracking-wider text-[#A33900] uppercase block">
                  EXECUTIVE SUMMARY &amp; THESIS
                </span>
                <p className="text-xs sm:text-sm text-[#5A4138] leading-relaxed">
                  {item.data.summary}
                </p>
              </div>

              {/* Article Deep Analysis */}
              {isArticle && item.data.fullAnalysis && (
                <div className="space-y-3">
                  <h3 className="text-xs font-extrabold tracking-wider text-[#1E1B19] uppercase">
                    Editorial Analysis
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A4138] leading-relaxed bg-[#FAF2EE] p-4 rounded-xl border border-[#E2BFB2]/40">
                    {item.data.fullAnalysis}
                  </p>
                </div>
              )}

              {/* Structured Takeaways / Key Insights */}
              {isArticle && item.data.keyInsights && (
                <div className="space-y-3">
                  <h3 className="text-xs font-extrabold tracking-wider text-[#1E1B19] uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#A33900]" />
                    STATUTORY &amp; STRUCTURAL TAKEAWAYS
                  </h3>
                  <div className="space-y-2.5">
                    {item.data.keyInsights.map((insight, idx) => (
                      <div 
                        key={idx}
                        className="p-3.5 rounded-lg bg-white border border-[#E2BFB2]/50 text-xs text-[#5A4138] leading-relaxed flex items-start gap-3 shadow-2xs"
                      >
                        <span className="font-mono text-[#A33900] font-bold text-xs shrink-0 select-none">
                          0{idx + 1}.
                        </span>
                        <span>{insight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pull Quote Box */}
              {isArticle && item.data.quote && (
                <div className="p-4 sm:p-5 rounded-xl bg-[#FAF2EE] border-l-4 border-[#A33900] relative">
                  <Quote className="w-6 h-6 text-[#A33900]/25 absolute top-3 right-3" />
                  <div className="text-[11px] font-extrabold tracking-wider text-[#A33900] uppercase mb-1">
                    FROM THE EDITORIAL ESSAY
                  </div>
                  <blockquote className="text-xs sm:text-[13px] italic font-medium text-[#1E1B19] leading-relaxed">
                    "{item.data.quote}"
                  </blockquote>
                  <div className="text-xs font-bold text-[#735733] mt-2">
                    — Prof. Mohd. Kashif Ansari, {item.data.publication}
                  </div>
                </div>
              )}

              {/* Podcast Editorial Context & Topics */}
              {isPodcast && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#FAF2EE] border-l-4 border-[#A33900] space-y-1">
                    <span className="text-[11px] font-extrabold tracking-wider text-[#A33900] uppercase block">
                      KEY TAKEAWAY QUOTE
                    </span>
                    <blockquote className="text-xs sm:text-[13px] italic font-medium text-[#1E1B19] leading-relaxed">
                      "{item.data.keyTimestampQuote}"
                    </blockquote>
                  </div>

                  <div>
                    <h3 className="text-xs font-extrabold text-[#1E1B19] uppercase tracking-wider mb-2">
                      Core Subjects Examined
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.data.topics.map((t, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs font-semibold rounded-lg bg-white border border-[#E2BFB2]/60 text-[#5A4138]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xs font-extrabold text-[#1E1B19] uppercase tracking-wider">
                      Dialogue Background
                    </h3>
                    <p className="text-xs text-[#5A4138] leading-relaxed bg-[#FAF2EE] p-4 rounded-xl border border-[#E2BFB2]/40">
                      {item.data.editorialContext}
                    </p>
                  </div>
                </div>
              )}

              {/* Press Quote Commentary */}
              {isPress && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-[#E2BFB2]/60 shadow-2xs space-y-2">
                    <span className="text-[11px] font-extrabold tracking-wider text-[#A33900] uppercase block">
                      EDITORIAL CONTEXT &amp; SIGNIFICANCE
                    </span>
                    <p className="text-xs sm:text-sm text-[#5A4138] leading-relaxed">
                      {item.data.editorialCommentary}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Drawer Sticky Footer */}
        <div className="sticky bottom-0 bg-[#FFF8F5] px-5 sm:px-6 py-4 border-t border-[#E2BFB2]/60 flex items-center justify-between gap-3 z-20">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-[#5A4138] hover:text-[#1E1B19] hover:bg-[#FAF2EE] rounded-lg transition-colors"
          >
            Close Dossier
          </button>

          <a
            href={item.data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#A33900] hover:bg-[#852E00] rounded-lg transition-all shadow-xs"
          >
            <span>
              {isArticle 
                ? `Read Original on ${item.data.publication}` 
                : isPodcast 
                  ? `Open on ${item.data.platform}` 
                  : `Read Complete Citation`}
            </span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
