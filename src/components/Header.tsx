import React from 'react';
import { 
  PanelLeft, 
  PanelLeftClose, 
  Sun, 
  Moon, 
  Search, 
  FileText, 
  Mail, 
  ChevronRight 
} from 'lucide-react';
import { TabId } from '../types/portfolio.ts';
import { personalInfo } from '../data/portfolioData.ts';

interface HeaderProps {
  activeTab: TabId;
  selectedCompetitionId?: string;
  onSelectCompetition?: (id: string) => void;
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSearch: () => void;
  onOpenResume: () => void;
  onNavigateToContact: () => void;
}

const tabTitles: Record<TabId, { title: string; subtitle: string }> = {
  profile: { title: 'Profile & Overview', subtitle: 'Accounting Information Systems Specialist' },
  education: { title: 'Education', subtitle: "Academic Honors (Dean's & President's Lister) · Mapúa University" },
  experiences: { title: 'Experiences', subtitle: 'Expert Education Operations & CREOTEC Immersion' },
  certifications: { title: 'Professional Certifications', subtitle: 'Analytics, Ethics, Business Writing & Media' },
  software: { title: 'Softwares & Technical Stack', subtitle: 'Excel, Power BI, Looker Studio, Zoho, Tableau' },
  skills: { title: 'Core Skills & Competencies', subtitle: 'Financial Rigor, BI Analytics & Leadership' },
  research: { title: 'Research & Applied Studies', subtitle: 'Internal Controls, Cloud AIS & ESG Materiality' },
  competitions: { title: 'Competitions', subtitle: 'HSBC Semifinalist, D&V & ASEAN Leader' },
  contact: { title: 'Contact & Reference', subtitle: 'Direct Channels, Inquiries & Mentors' }
};

const competitionShortNames: Record<string, string> = {
  'hsbc-case': 'HSBC Case (Top 12)',
  'dv-sustainability': '1st D&V Challenge',
  'asean-future-leader': 'ASEAN Future Leader (Top 8)'
};

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  selectedCompetitionId = 'all',
  onSelectCompetition,
  sidebarOpen,
  onToggleSidebar,
  darkMode,
  onToggleDarkMode,
  onOpenSearch,
  onOpenResume,
  onNavigateToContact
}) => {
  const current = tabTitles[activeTab] || tabTitles.profile;
  const isCompSpotlight = activeTab === 'competitions' && selectedCompetitionId !== 'all';
  const compShortName = competitionShortNames[selectedCompetitionId];

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-[#0c1421]/90 backdrop-blur-md border-b border-[#d8e2eb] dark:border-[#1e2e44] px-4 sm:px-6 lg:px-8 py-3 transition-colors">
      <div className="flex items-center justify-between gap-4">
        {/* Left side: Toggle button + Breadcrumb */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg bg-[#edf2f7] hover:bg-[#d8e2eb] dark:bg-[#121c2d] dark:hover:bg-[#1a283e] text-[#2d466f] dark:text-[#adc5d9] transition-colors cursor-pointer"
            aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
            title={sidebarOpen ? 'Hide sidebar (clean canvas)' : 'Show navigation tabs'}
          >
            {sidebarOpen ? <PanelLeftClose className="w-5 h-5" /> : <PanelLeft className="w-5 h-5" />}
          </button>

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#566c84] dark:text-[#adc5d9]">
            <span className="font-medium text-[#1c2b3e] dark:text-[#f1f5f9]">
              {personalInfo.preferredName} Berro
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#95b3cd]" />
            {isCompSpotlight ? (
              <>
                <button
                  onClick={() => onSelectCompetition?.('all')}
                  className="font-medium text-[#566c84] dark:text-[#95a7bc] hover:text-[#2d466f] dark:hover:text-[#adc5d9] transition-colors cursor-pointer"
                >
                  Competitions
                </button>
                <ChevronRight className="w-3.5 h-3.5 text-[#95b3cd]" />
                <span className="font-semibold text-[#2d466f] dark:text-[#adc5d9]">
                  {compShortName || 'Case Spotlight'}
                </span>
              </>
            ) : (
              <span className="font-semibold text-[#2d466f] dark:text-[#adc5d9]">
                {current.title}
              </span>
            )}
          </div>
          <div className="sm:hidden font-semibold text-xs text-[#1c2b3e] dark:text-[#f1f5f9] truncate">
            {isCompSpotlight ? compShortName : current.title}
          </div>
        </div>

        {/* Right side: Search, Theme Toggle, Resume & Contact */}
        <div className="flex items-center gap-2">
          {/* Quick Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs bg-[#f6f8fb] hover:bg-[#edf2f7] dark:bg-[#121c2d] dark:hover:bg-[#1a283e] text-[#566c84] dark:text-[#95a7bc] border border-[#d8e2eb] dark:border-[#1e2e44] transition-colors cursor-pointer"
            title="Search portfolio (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-[#566c84] dark:text-[#adc5d9]" />
            <span className="hidden md:inline">Quick Jump</span>
            <kbd className="hidden md:inline-block px-1 py-0.2 rounded text-[10px] bg-white dark:bg-[#0c1421] text-[#6f8399] dark:text-[#7f94aa] border border-[#d8e2eb] dark:border-[#1e2e44]">
              ⌘K
            </kbd>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg bg-[#edf2f7] hover:bg-[#d8e2eb] dark:bg-[#121c2d] dark:hover:bg-[#1a283e] text-[#566c84] dark:text-[#adc5d9] transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <Moon className="w-4 h-4 text-amber-300" />
            ) : (
              <Sun className="w-4 h-4 text-amber-600" />
            )}
          </button>

          {/* Resume Modal trigger */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#d8e2eb] hover:bg-[#c3d1de] dark:bg-[#162335] dark:hover:bg-[#1e2e44] text-[#2d466f] dark:text-[#adc5d9] transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Contact quick button */}
          <button
            onClick={onNavigateToContact}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#2d466f] hover:bg-[#223657] text-white shadow-xs transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Contact</span>
          </button>
        </div>
      </div>
    </header>
  );
};
