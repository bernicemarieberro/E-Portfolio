import React, { useState, useEffect } from 'react';
import { TabId } from './types/portfolio.ts';
import { Sidebar } from './components/Sidebar.tsx';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { CommandPalette } from './components/CommandPalette.tsx';

// Tab Components
import { ProfileTab } from './components/tabs/ProfileTab.tsx';
import { EducationTab } from './components/tabs/EducationTab.tsx';
import { ExperienceTab } from './components/tabs/ExperienceTab.tsx';
import { CertificationsTab } from './components/tabs/CertificationsTab.tsx';
import { SoftwareTab } from './components/tabs/SoftwareTab.tsx';
import { SkillsTab } from './components/tabs/SkillsTab.tsx';
import { ResearchTab } from './components/tabs/ResearchTab.tsx';
import { CompetitionsTab } from './components/tabs/CompetitionsTab.tsx';
import { ContactTab } from './components/tabs/ContactTab.tsx';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('profile');
  const [selectedCompetitionId, setSelectedCompetitionId] = useState<string>('all');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('bernice_portfolio_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  // Sync dark mode class on HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('bernice_portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('bernice_portfolio_theme', 'light');
    }
  }, [darkMode]);

  // Keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle responsive sidebar initial state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleSelectTab = (tab: TabId) => {
    if (tab === 'software' || tab === 'skills') {
      setActiveTab('profile');
      setTimeout(() => {
        const el = document.getElementById('more-about-me');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    if (tab === 'research') {
      setActiveTab('profile');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCompetition = (competitionId: string) => {
    setSelectedCompetitionId(competitionId);
    setActiveTab('competitions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f6f8fb] dark:bg-[#0c1421] text-[#1c2b3e] dark:text-[#f1f5f9] transition-colors duration-300 font-sans flex flex-col">
      {/* Collapsible Left Navigation Sidebar with Nested Sub-Menus */}
      <Sidebar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        selectedCompetitionId={selectedCompetitionId}
        onSelectCompetition={handleSelectCompetition}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(prev => !prev)}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Area (Expands to full width when sidebar is hidden) */}
      <div 
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'lg:ml-72' : 'ml-0'
        }`}
      >
        {/* Sticky Top Header */}
        <Header
          activeTab={activeTab}
          selectedCompetitionId={selectedCompetitionId}
          onSelectCompetition={handleSelectCompetition}
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen(prev => !prev)}
          darkMode={darkMode}
          onToggleDarkMode={handleToggleDarkMode}
          onOpenSearch={() => setSearchOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
          onNavigateToContact={() => handleSelectTab('contact')}
        />

        {/* Tab Content Container */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-12">
          {activeTab === 'profile' && (
            <ProfileTab 
              onNavigate={handleSelectTab} 
              onOpenResume={() => setResumeOpen(true)} 
            />
          )}
          {activeTab === 'education' && <EducationTab />}
          {activeTab === 'experiences' && <ExperienceTab />}
          {activeTab === 'certifications' && <CertificationsTab />}
          {activeTab === 'software' && <SoftwareTab />}
          {activeTab === 'skills' && <SkillsTab />}
          {activeTab === 'research' && <ResearchTab />}
          {activeTab === 'competitions' && (
            <CompetitionsTab 
              selectedCompetitionId={selectedCompetitionId}
              onSelectCompetitionId={handleSelectCompetition}
            />
          )}
          {activeTab === 'contact' && <ContactTab />}
        </main>

        {/* Universal Footer with Emphasized Mode for Home/Profile Tab */}
        <Footer
          isHome={activeTab === 'profile'}
          onNavigate={handleSelectTab}
          onOpenResume={() => setResumeOpen(true)}
        />
      </div>

      {/* Quick Jump Search Palette */}
      <CommandPalette
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectTab={handleSelectTab}
      />

      {/* Formal Printable Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
