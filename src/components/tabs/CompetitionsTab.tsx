import React from 'react';
import { 
  Trophy, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Users, 
  ArrowLeft, 
  ArrowRight, 
  BarChart2, 
  FileCheck2, 
  ExternalLink,
  Building2,
  Globe,
  ShieldCheck,
  Sparkles,
  FileText
} from 'lucide-react';
import { competitionsData } from '../../data/portfolioData.ts';

interface CompetitionsTabProps {
  selectedCompetitionId?: string;
  onSelectCompetitionId?: (id: string) => void;
}

export const CompetitionsTab: React.FC<CompetitionsTabProps> = ({
  selectedCompetitionId = 'all',
  onSelectCompetitionId
}) => {
  const currentCompIndex = competitionsData.findIndex(c => c.id === selectedCompetitionId);
  const currentComp = currentCompIndex !== -1 ? competitionsData[currentCompIndex] : null;

  const subNavItems = [
    { id: 'all', label: 'All Competitions (Overview)', count: '3' },
    { id: 'hsbc-case', label: 'HSBC Case Competition', badge: 'Top 12', icon: Trophy, color: 'text-amber-500' },
    { id: 'dv-sustainability', label: '1st D&V Sustainability', badge: 'Semifinalist', icon: ShieldCheck, color: 'text-emerald-500' },
    { id: 'asean-future-leader', label: 'ASEAN Future Student Leader', badge: 'Top 8', icon: Globe, color: 'text-sky-500' }
  ];

  const handlePrev = () => {
    if (currentCompIndex > 0) {
      onSelectCompetitionId?.(competitionsData[currentCompIndex - 1].id);
    } else {
      onSelectCompetitionId?.(competitionsData[competitionsData.length - 1].id);
    }
  };

  const handleNext = () => {
    if (currentCompIndex < competitionsData.length - 1) {
      onSelectCompetitionId?.(competitionsData[currentCompIndex + 1].id);
    } else {
      onSelectCompetitionId?.(competitionsData[0].id);
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      {/* Header */}
      <div className="border-b border-[#d8e2eb] dark:border-[#1e2e44] pb-6 space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2d466f] dark:text-[#adc5d9]">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Collegiate Case Cracking & Leadership Simulations</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1c2b3e] dark:text-[#f1f5f9] mt-1">
            Competitions & Case Simulations
          </h1>
          <p className="text-xs sm:text-sm text-[#566c84] dark:text-[#95a7bc] mt-1 max-w-3xl leading-relaxed">
            Verified competitive records representing Mapúa University across premier national business case leagues, corporate sustainability frameworks, and regional ASEAN student leadership.
          </p>
        </div>

        {/* Sub-Navigation Tabs Bar (matches Jairu Dion Cruz's portfolio navigation pattern) */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {subNavItems.map((item) => {
            const isActive = selectedCompetitionId === item.id;
            const ItemIcon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => onSelectCompetitionId?.(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#2d466f] text-white shadow-xs font-semibold'
                    : 'bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] text-[#566c84] dark:text-[#95a7bc] hover:border-[#95b3cd] hover:text-[#1c2b3e] dark:hover:text-[#f1f5f9]'
                }`}
              >
                {ItemIcon && <ItemIcon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : item.color}`} />}
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-sm font-semibold ${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : 'bg-[#d8e2eb] text-[#2d466f] dark:bg-[#1a283e] dark:text-[#adc5d9]'
                  }`}>
                    {item.badge}
                  </span>
                )}
                {item.count && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-sm font-semibold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#d8e2eb] text-[#2d466f] dark:bg-[#1a283e] dark:text-[#adc5d9]'
                  }`}>
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* DETAILED SPOTLIGHT VIEW IF A SPECIFIC COMPETITION IS SELECTED */}
      {selectedCompetitionId !== 'all' && currentComp && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Navigation Controls Bar */}
          <div className="flex items-center justify-between text-xs">
            <button
              onClick={() => onSelectCompetitionId?.('all')}
              className="inline-flex items-center gap-1.5 font-semibold text-[#2d466f] dark:text-[#adc5d9] hover:underline cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Competitions Overview</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="px-2.5 py-1 rounded-md bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] text-[#566c84] dark:text-[#95a7bc] hover:text-[#1c2b3e] dark:hover:text-[#f1f5f9] transition-colors cursor-pointer"
                title="Previous Competition"
              >
                ← Prev
              </button>
              <span className="text-[11px] text-[#6f8399] dark:text-[#7f94aa] font-mono">
                {currentCompIndex + 1} of {competitionsData.length}
              </span>
              <button
                onClick={handleNext}
                className="px-2.5 py-1 rounded-md bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] text-[#566c84] dark:text-[#95a7bc] hover:text-[#1c2b3e] dark:hover:text-[#f1f5f9] transition-colors cursor-pointer"
                title="Next Competition"
              >
                Next →
              </button>
            </div>
          </div>

          {/* Spotlight Hero Card */}
          <div className="bg-gradient-to-br from-[#ffffff] via-[#f6f8fb] to-[#d8e2eb]/40 dark:from-[#0e1724] dark:via-[#121c2d] dark:to-[#162335] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#edf2f7] dark:border-[#1e2e44]">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-[#2d466f] text-white">
                    {currentComp.award}
                  </span>
                  <span className="text-xs font-mono text-[#566c84] dark:text-[#adc5d9]">
                    {currentComp.year}
                  </span>
                  {currentComp.standingRank && (
                    <span className="text-[11px] px-2 py-0.5 rounded bg-[#d8e2eb] dark:bg-[#1a283e] text-[#2d466f] dark:text-[#adc5d9] font-medium">
                      {currentComp.standingRank}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c2b3e] dark:text-[#f1f5f9]">
                  {currentComp.title}
                </h2>

                <div className="text-xs text-[#566c84] dark:text-[#95a7bc]">
                  Role: <strong className="text-[#1c2b3e] dark:text-[#f1f5f9]">{currentComp.role}</strong> · Organizer: {currentComp.organizer}
                </div>
              </div>

              {/* Verified Links Buttons */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {currentComp.links && currentComp.links.length > 0 ? (
                  currentComp.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2d466f] hover:bg-[#223657] text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{link.label}</span>
                    </a>
                  ))
                ) : (
                  <>
                    {currentComp.externalUrl && (
                      <a
                        href={currentComp.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2d466f] hover:bg-[#223657] text-white text-xs font-bold shadow-xs transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Official Coverage</span>
                      </a>
                    )}
                    {currentComp.additionalLink && (
                      <a
                        href={currentComp.additionalLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] text-[#2d466f] dark:text-[#adc5d9] text-xs font-semibold hover:border-[#95b3cd] transition-colors"
                      >
                        <span>{currentComp.additionalLink.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Strategic Overview */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#2d466f] dark:text-[#adc5d9]">
                Strategic Case Overview & Challenge Context
              </h3>
              <p className="text-xs sm:text-sm text-[#42556b] dark:text-[#adc5d9] leading-relaxed">
                {currentComp.overview}
              </p>
            </div>

            {/* In-depth 3-Column Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1c2b3e] dark:text-[#f1f5f9]">
                  <BarChart2 className="w-4 h-4 text-[#2d466f] dark:text-[#adc5d9]" />
                  <span>Financial Rigor</span>
                </div>
                <p className="text-xs text-[#566c84] dark:text-[#95a7bc] leading-relaxed">
                  Engineered quantitative valuation models, multi-scenario sensitivity tables, and capital expenditure forecasts to defend strategic feasibility.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1c2b3e] dark:text-[#f1f5f9]">
                  <Users className="w-4 h-4 text-[#2d466f] dark:text-[#adc5d9]" />
                  <span>Team Leadership</span>
                </div>
                <p className="text-xs text-[#566c84] dark:text-[#95a7bc] leading-relaxed">
                  Delegated research streams, synchronized slide visualizations, and led executive Q&A responses during high-pressure evaluation panels.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1c2b3e] dark:text-[#f1f5f9]">
                  <FileCheck2 className="w-4 h-4 text-[#2d466f] dark:text-[#adc5d9]" />
                  <span>Executive Presentation</span>
                </div>
                <p className="text-xs text-[#566c84] dark:text-[#95a7bc] leading-relaxed">
                  Presented structured recommendation decks directly to senior banking directors, industry partners, and academic faculty evaluators.
                </p>
              </div>
            </div>

            {/* Key Contributions & Deliverables */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#2d466f] dark:text-[#adc5d9]">
                Key Deliverables & Action Items Delivered
              </h3>
              <div className="space-y-2">
                {currentComp.keyContributions.map((kc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#33465b] dark:text-[#c3d1de]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{kc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Competencies Validated */}
            <div className="pt-4 border-t border-[#edf2f7] dark:border-[#1e2e44] space-y-2">
              <div className="text-xs font-bold text-[#1c2b3e] dark:text-[#f1f5f9]">
                Competencies Validated in this Competition:
              </div>
              <div className="flex flex-wrap gap-2">
                {currentComp.skillsDemonstrated.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-xs rounded-md bg-[#d8e2eb] dark:bg-[#1a283e] text-[#2d466f] dark:text-[#adc5d9] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* COMPREHENSIVE OVERVIEW (WHEN 'ALL' IS SELECTED) */}
      {selectedCompetitionId === 'all' && (
        <div className="space-y-8">
          {/* Top Summary Banner */}
          <div className="bg-gradient-to-r from-[#2d466f] to-[#1c2b3e] rounded-2xl p-6 sm:p-8 text-white shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#c3d1de]">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Mapúa University Delegation Track Record</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">
                3 Premier National & Regional Competitions Joined
              </h2>
              <p className="text-xs sm:text-sm text-[#d8e2eb] leading-relaxed">
                Demonstrated high-pressure case analysis, quantitative financial modeling, and sustainability frameworks across nationwide and ASEAN student arenas.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0 bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/15 text-center">
              <div>
                <div className="text-2xl font-black text-white">Top 12</div>
                <div className="text-[10px] text-[#c3d1de] uppercase">HSBC National</div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <div className="text-2xl font-black text-white">Top 8</div>
                <div className="text-[10px] text-[#c3d1de] uppercase">ASEAN Regional</div>
              </div>
            </div>
          </div>

          {/* Cards Grid for All 3 Competitions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {competitionsData.map((comp) => {
              const isHSBC = comp.id === 'hsbc-case';
              const isDV = comp.id === 'dv-sustainability';
              const isASEAN = comp.id === 'asean-future-leader';

              return (
                <div
                  key={comp.id}
                  className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl p-6 shadow-sm hover:border-[#95b3cd] transition-all flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-4">
                    {/* Card Top Pill & Year */}
                    <div className="flex items-start justify-between gap-2">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${
                        isHSBC 
                          ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300' 
                          : isDV
                            ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                            : 'bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300'
                      }`}>
                        {comp.award}
                      </span>
                      <span className="text-xs font-mono text-[#6f8399] dark:text-[#7f94aa]">
                        {comp.year}
                      </span>
                    </div>

                    {/* Title & Role */}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#1c2b3e] dark:text-[#f1f5f9] leading-snug">
                        {comp.title}
                      </h3>
                      <div className="text-xs text-[#566c84] dark:text-[#95a7bc] mt-1 font-medium">
                        {comp.role}
                      </div>
                      <div className="text-[11px] text-[#6f8399] dark:text-[#7f94aa] mt-0.5">
                        {comp.organizer}
                      </div>
                    </div>

                    {/* Brief Narrative */}
                    <p className="text-xs text-[#42556b] dark:text-[#adc5d9] leading-relaxed line-clamp-4">
                      {comp.overview}
                    </p>

                    {/* Key Deliverables Bullet Points */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[11px] font-bold text-[#2d466f] dark:text-[#adc5d9] uppercase tracking-wider">
                        Key Deliverables:
                      </div>
                      {comp.keyContributions.slice(0, 2).map((contrib, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-[#33465b] dark:text-[#c3d1de]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{contrib}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Links & Action */}
                  <div className="pt-4 border-t border-[#edf2f7] dark:border-[#1e2e44] space-y-3">
                    {/* External verified links buttons */}
                    <div className="flex flex-wrap gap-1.5">
                      {comp.links ? (
                        comp.links.map((link, lIdx) => (
                          <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-md bg-[#edf2f7] dark:bg-[#1a283e] text-[#2d466f] dark:text-[#adc5d9] hover:bg-[#d8e2eb] transition-colors"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ))
                      ) : comp.externalUrl ? (
                        <a
                          href={comp.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-md bg-[#edf2f7] dark:bg-[#1a283e] text-[#2d466f] dark:text-[#adc5d9] hover:bg-[#d8e2eb] transition-colors"
                        >
                          <span>Official Link</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : null}
                    </div>

                    {/* Deep Dive Button */}
                    <button
                      onClick={() => onSelectCompetitionId?.(comp.id)}
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#2d466f] hover:bg-[#223657] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                    >
                      <span>Explore Case Analysis</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
