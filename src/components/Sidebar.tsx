import React, { useState, useEffect } from 'react';
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Trophy, 
  PhoneCall, 
  Sun, 
  Moon, 
  FileText, 
  PanelLeftClose, 
  PanelLeftOpen,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { TabId } from '../types/portfolio.ts';
import { personalInfo } from '../data/portfolioData.ts';

interface NavSubItem {
  id: string;
  label: string;
  badge?: string;
}

interface NavItem {
  id: TabId;
  label: string;
  icon: React.ElementType;
  badge?: string;
  subItems?: NavSubItem[];
}

interface SidebarProps {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
  selectedCompetitionId?: string;
  onSelectCompetition?: (id: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenResume: () => void;
}

const navItems: NavItem[] = [
  { id: 'profile', label: 'Profile & Overview', icon: User },
  { id: 'education', label: 'Education', icon: GraduationCap, badge: 'Honors' },
  { id: 'experiences', label: 'Experiences', icon: Briefcase, badge: '306.5 hrs' },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { 
    id: 'competitions', 
    label: 'Competitions', 
    icon: Trophy, 
    badge: '3 Joined',
    subItems: [
      { id: 'all', label: 'All Competitions (Overview)' },
      { id: 'hsbc-case', label: 'HSBC Case Competition', badge: 'Top 12' },
      { id: 'dv-sustainability', label: '1st D&V Sustainability', badge: 'Semifinalist' },
      { id: 'asean-future-leader', label: 'ASEAN Future Student Leader', badge: 'Top 8' }
    ]
  },
  { id: 'contact', label: 'Contact & Reference', icon: PhoneCall },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  selectedCompetitionId = 'all',
  onSelectCompetition,
  isOpen,
  onToggle,
  darkMode,
  onToggleDarkMode,
  onOpenResume
}) => {
  // Track expanded state for accordions - default competitions to open
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    competitions: true
  });

  // Keep competitions expanded when on competitions tab
  useEffect(() => {
    if (activeTab === 'competitions') {
      setExpandedMenus(prev => ({ ...prev, competitions: true }));
    }
  }, [activeTab]);

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedMenus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          onClick={onToggle}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Floating Access Button when Sidebar is fully Hidden */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="fixed top-4 left-4 z-50 p-2.5 rounded-lg bg-white/95 dark:bg-[#121c2d]/95 border border-[#d8e2eb] dark:border-[#1e2e44] text-[#2d466f] dark:text-[#adc5d9] shadow-md hover:bg-[#f6f8fb] dark:hover:bg-[#1a283e] transition-all flex items-center gap-2 group cursor-pointer"
          aria-label="Open Navigation Sidebar"
          title="Open Navigation"
        >
          <PanelLeftOpen className="w-5 h-5 text-[#2d466f] dark:text-[#adc5d9] group-hover:scale-105 transition-transform" />
          <span className="hidden sm:inline text-xs font-semibold text-[#1c2b3e] dark:text-[#f1f5f9]">
            Menu
          </span>
        </button>
      )}

      {/* Main Left Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-white/95 dark:bg-[#0e1724]/95 backdrop-blur-md border-r border-[#d8e2eb] dark:border-[#1e2e44] flex flex-col transition-all duration-300 ease-in-out shadow-lg lg:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Header / Profile Info */}
        <div className="p-5 border-b border-[#d8e2eb] dark:border-[#1e2e44] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.fullName}
                className="w-11 h-11 rounded-full object-cover border-2 border-[#95b3cd] dark:border-[#2d466f] shadow-xs"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0e1724]" title="Available for opportunities" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#1c2b3e] dark:text-[#f1f5f9] tracking-tight leading-snug">
                {personalInfo.preferredName} Berro
              </h2>
              <div className="text-[11px] text-[#566c84] dark:text-[#95a7bc] leading-tight">
                Mapúa University · BS AIS
              </div>
            </div>
          </div>

          {/* Toggle / Hide Sidebar Button */}
          <button
            onClick={onToggle}
            className="p-1.5 rounded-md hover:bg-[#edf2f7] dark:hover:bg-[#1a283e] text-[#566c84] dark:text-[#95a7bc] hover:text-[#1c2b3e] dark:hover:text-[#f1f5f9] transition-colors cursor-pointer"
            title="Hide Sidebar for cleaner view"
            aria-label="Hide navigation sidebar"
          >
            <PanelLeftClose className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Tabs */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <div className="px-3 pb-2 text-[10px] font-semibold tracking-wider uppercase text-[#6f8399] dark:text-[#7f94aa]">
            Portfolio Navigation
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            const hasSubItems = !!(item.subItems && item.subItems.length > 0);
            const isExpanded = expandedMenus[item.id] ?? false;

            return (
              <div key={item.id} className="space-y-0.5">
                {/* Main Nav Button */}
                <div
                  onClick={() => {
                    onSelectTab(item.id);
                    if (item.id === 'competitions') {
                      onSelectCompetition?.('all');
                      setExpandedMenus(prev => ({ ...prev, competitions: true }));
                    } else if (hasSubItems) {
                      setExpandedMenus(prev => ({ ...prev, [item.id]: !prev[item.id] }));
                    }
                    if (!hasSubItems && window.innerWidth < 1024) {
                      onToggle();
                    }
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all group cursor-pointer ${
                    isActive
                      ? 'bg-[#2d466f] text-white shadow-xs font-semibold'
                      : 'text-[#42556b] dark:text-[#9fb2c5] hover:bg-[#edf2f7] dark:hover:bg-[#152030] hover:text-[#1c2b3e] dark:hover:text-[#f1f5f9]'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <Icon className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? 'text-white' : 'text-[#566c84] dark:text-[#adc5d9] group-hover:text-[#2d466f] dark:group-hover:text-[#f1f5f9]'
                    }`} />
                    <span className="truncate">{item.label}</span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {item.badge && (
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-sm ${
                        isActive 
                          ? 'bg-white/20 text-white' 
                          : 'bg-[#d8e2eb] text-[#2d466f] dark:bg-[#1a283e] dark:text-[#adc5d9]'
                      }`}>
                        {item.badge}
                      </span>
                    )}

                    {hasSubItems && (
                      <button
                        onClick={(e) => toggleExpand(item.id, e)}
                        className={`p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer ${
                          isActive ? 'text-white' : 'text-[#6f8399] dark:text-[#7f94aa]'
                        }`}
                        title={isExpanded ? 'Collapse sub-menu' : 'Expand sub-menu'}
                        aria-label="Toggle competitions submenu"
                      >
                        {isExpanded ? (
                          <ChevronDown className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5" />
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Nested Sub-Menu items for Competitions (like Jairu Dion Cruz's portfolio) */}
                {hasSubItems && isExpanded && (
                  <div className="ml-3 pl-2.5 border-l-2 border-[#d8e2eb] dark:border-[#1e2e44] my-1.5 space-y-1 animate-in fade-in slide-in-from-top-1 duration-200">
                    {item.subItems!.map((sub) => {
                      const isSubActive = item.id === 'competitions'
                        ? activeTab === 'competitions' && selectedCompetitionId === sub.id
                        : activeTab === item.id;

                      return (
                        <button
                          key={sub.id}
                          onClick={() => {
                            onSelectTab(item.id);
                            if (item.id === 'competitions') {
                              onSelectCompetition?.(sub.id);
                            }
                            if (window.innerWidth < 1024) {
                              onToggle();
                            }
                          }}
                          className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-[11px] transition-all cursor-pointer text-left group/sub ${
                            isSubActive
                              ? 'bg-[#2d466f] text-white font-semibold shadow-xs'
                              : 'text-[#42556b] dark:text-[#9fb2c5] hover:bg-[#edf2f7] dark:hover:bg-[#152030] hover:text-[#1c2b3e] dark:hover:text-[#f1f5f9]'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate pr-1">
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              isSubActive 
                                ? 'bg-white' 
                                : sub.id === 'all' 
                                  ? 'bg-[#95b3cd]' 
                                  : sub.id === 'hsbc-case'
                                    ? 'bg-amber-400'
                                    : sub.id === 'dv-sustainability'
                                      ? 'bg-emerald-400'
                                      : 'bg-sky-400'
                            }`} />
                            <span className="truncate">{sub.label}</span>
                          </div>

                          {sub.badge && (
                            <span className={`text-[9px] px-1.5 py-0.5 rounded-sm font-semibold shrink-0 transition-colors ${
                              isSubActive
                                ? 'bg-white/20 text-white'
                                : 'bg-[#d8e2eb] text-[#2d466f] dark:bg-[#1a283e] dark:text-[#adc5d9]'
                            }`}>
                              {sub.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-[#d8e2eb] dark:border-[#1e2e44] space-y-2 bg-[#f8fafc] dark:bg-[#0c1421]">
          {/* Quick Resume Button */}
          <button
            onClick={onOpenResume}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-[#d8e2eb] hover:bg-[#c3d1de] dark:bg-[#162335] dark:hover:bg-[#1e2e44] text-[#2d466f] dark:text-[#adc5d9] transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg text-[#566c84] dark:text-[#95a7bc] hover:bg-[#edf2f7] dark:hover:bg-[#162335] transition-colors cursor-pointer"
            title="Toggle color theme"
          >
            <div className="flex items-center gap-2">
              {darkMode ? <Moon className="w-4 h-4 text-amber-300" /> : <Sun className="w-4 h-4 text-amber-500" />}
              <span>{darkMode ? 'Dark Theme' : 'Light Theme'}</span>
            </div>
            <span className="text-[10px] text-[#6f8399] dark:text-[#7f94aa] uppercase">
              {darkMode ? 'Dark' : 'Light'}
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};
