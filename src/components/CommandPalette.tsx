import React, { useState, useEffect } from 'react';
import { Search, X, CornerDownLeft } from 'lucide-react';
import { TabId } from '../types/portfolio.ts';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: TabId) => void;
}

interface SearchItem {
  id: string;
  tabId: TabId;
  title: string;
  category: string;
  description: string;
}

const searchItems: SearchItem[] = [
  { id: '1', tabId: 'profile', title: 'Profile & Executive Summary', category: 'Overview', description: 'Bernice Marie Berro bio, background, and career goals' },
  { id: '2', tabId: 'education', title: 'Mapúa University BS AIS', category: 'Education', description: "Makati Campus, Dean's Lister and President's Lister" },
  { id: '3', tabId: 'education', title: 'Senior High School (ABM)', category: 'Education', description: 'Mapúa Senior High, Graduated With High Honors' },
  { id: '4', tabId: 'experiences', title: 'Expert Education & Visa Services Operations', category: 'Experience', description: 'Operations intern, 306.5 hours, GlobalQuest 2026 liquidation (held in PH with international partner schools)' },
  { id: '5', tabId: 'experiences', title: 'CREOTEC Philippines Inc.', category: 'Experience', description: 'Accounting work immersion, tax reports, payroll register' },
  { id: '6', tabId: 'certifications', title: 'Data Analysis with R Certification', category: 'Certifications', description: 'Statistical programming, ggplot2, reproducible reports' },
  { id: '7', tabId: 'certifications', title: 'Business Writing Certification', category: 'Certifications', description: 'Executive memos, audit reports, correspondence' },
  { id: '8', tabId: 'certifications', title: 'Ethical Leadership (Giving Voice to Values)', category: 'Certifications', description: 'Governance standards, whistleblowing, ethical scripts' },
  { id: '9', tabId: 'certifications', title: 'Data-Driven Animation Certification', category: 'Certifications', description: 'Visual storytelling, science communication' },
  { id: '10', tabId: 'profile', title: 'Microsoft Excel & Office (Software)', category: 'Profile Overview', description: 'Advanced formulas, financial models, cash flow statements' },
  { id: '11', tabId: 'profile', title: 'Power BI & Looker Studio (Software)', category: 'Profile Overview', description: 'DAX modeling, business intelligence dashboards, conversion funnels' },
  { id: '12', tabId: 'profile', title: 'Zoho Books & Accounting Systems (Software)', category: 'Profile Overview', description: 'Bank reconciliation, cloud general ledger, expense tracking' },
  { id: '13', tabId: 'profile', title: 'Tableau & MATLAB (Software)', category: 'Profile Overview', description: 'Exploratory data analysis, quantitative risk simulations' },
  { id: '14', tabId: 'profile', title: 'Cash Flow & Budget Liquidation (Skill)', category: 'Profile Overview', description: 'Auditing vouchers, receipts, and balancing event accounts' },
  { id: '16', tabId: 'competitions', title: 'HSBC Philippine Business Case Competition', category: 'Competitions', description: 'National Semifinalist (Apr 2026), 5-year financial model, case cracking' },
  { id: '17', tabId: 'competitions', title: '1st D&V Sustainability Challenge', category: 'Competitions', description: 'Semifinalist (Jan–Mar 2026), ESG financial modeling, corporate sustainability' },
  { id: '18', tabId: 'competitions', title: 'ASEAN Future Student Leader 2025', category: 'Competitions', description: 'Top 8 Finalist (Sep–Oct 2025), cross-cultural leadership, ethical governance' },
  { id: '21', tabId: 'contact', title: 'Reference: Mr. Julian S. Pilapil', category: 'Contact', description: 'Character & professional reference: (+63) 920 947 0441' },
  { id: '22', tabId: 'contact', title: 'Email & LinkedIn Channels', category: 'Contact', description: 'Direct contact channels for Bernice Marie Berro' },
];

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onSelectTab }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = searchItems.filter(item => {
    return item.title.toLowerCase().includes(query.toLowerCase()) ||
           item.category.toLowerCase().includes(query.toLowerCase()) ||
           item.description.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-start justify-center pt-20 px-4"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Search Input */}
        <div className="p-4 border-b border-[#d8e2eb] dark:border-[#1e2e44] flex items-center gap-3">
          <Search className="w-4 h-4 text-[#566c84] dark:text-[#adc5d9] shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search skills, software, experiences, research..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-xs sm:text-sm bg-transparent text-[#1c2b3e] dark:text-[#f1f5f9] placeholder-[#6f8399] dark:placeholder-[#7f94aa] focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-[#6f8399] hover:text-[#1c2b3e] dark:hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-[#f6f8fb] dark:bg-[#0c1421] text-[#6f8399] dark:text-[#7f94aa] border border-[#d8e2eb] dark:border-[#1e2e44]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-[#f6f8fb] dark:divide-[#162335]">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-[#566c84] dark:text-[#95a7bc]">
              No results found for "{query}".
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.tabId);
                  onClose();
                }}
                className="w-full text-left p-3 rounded-lg hover:bg-[#f6f8fb] dark:hover:bg-[#162335] flex items-center justify-between gap-3 group transition-colors cursor-pointer"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#d8e2eb] dark:bg-[#1a283e] text-[#2d466f] dark:text-[#adc5d9]">
                      {item.category}
                    </span>
                    <span className="text-xs font-bold text-[#1c2b3e] dark:text-[#f1f5f9] group-hover:text-[#2d466f] dark:group-hover:text-[#adc5d9]">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#566c84] dark:text-[#95a7bc] line-clamp-1">
                    {item.description}
                  </p>
                </div>
                <CornerDownLeft className="w-3.5 h-3.5 text-[#6f8399] dark:text-[#7f94aa] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
