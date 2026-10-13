import React, { useState } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Cpu,
  BookOpen,
  FileSpreadsheet,
  BarChart3,
  PieChart,
  LineChart,
  Layers,
  Palette
} from 'lucide-react';
import { TabId } from '../../types/portfolio.ts';
import { personalInfo, experienceData, softwareData, skillCategories } from '../../data/portfolioData.ts';

interface ProfileTabProps {
  onNavigate: (tab: TabId) => void;
  onOpenResume: () => void;
}

const softwareIconMap: Record<string, React.ElementType> = {
  FileSpreadsheet,
  BarChart3,
  PieChart,
  BookOpen,
  LineChart,
  Cpu,
  Layers,
  Palette
};

export const ProfileTab: React.FC<ProfileTabProps> = ({ onNavigate, onOpenResume }) => {
  const [selectedSoftwareCategory, setSelectedSoftwareCategory] = useState<string>('All');

  const softwareCategories = [
    'All',
    'Financial & Accounting',
    'Data & Business Intelligence',
    'Computational & Math',
    'Creative & Productivity'
  ];

  const filteredSoftware = softwareData.filter(item => {
    return selectedSoftwareCategory === 'All' || item.category === selectedSoftwareCategory;
  });

  const scrollToMoreInfo = () => {
    document.getElementById('more-about-me')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#ffffff] via-[#f6f8fb] to-[#d8e2eb]/40 dark:from-[#0e1724] dark:via-[#121c2d] dark:to-[#162335] border border-[#d8e2eb] dark:border-[#1e2e44] p-6 sm:p-10 lg:p-12 shadow-sm">
        {/* Soft background decorative glow matching muted blue palette */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#95b3cd]/20 dark:bg-[#2d466f]/25 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-24 w-72 h-72 rounded-full bg-[#c3d1de]/30 dark:bg-[#1e2e44]/40 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status kicker - clean unboxed metadata with bullet */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#566c84] dark:text-[#95a7bc]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>BS Accounting Information Systems</span>
              <span aria-hidden="true">·</span>
              <span>Dean's & President's Lister</span>
              <span aria-hidden="true">·</span>
              <span>Mapúa University</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1c2b3e] dark:text-[#f1f5f9] leading-[1.15]">
                Bernice Marie M. Berro
              </h1>
              <p className="text-base sm:text-lg text-[#42556b] dark:text-[#adc5d9] mt-3 font-normal leading-relaxed">
                {personalInfo.title}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#566c84] dark:text-[#9fb2c5] leading-relaxed">
              Specialized in modern financial reconciliation, enterprise budget liquidation, and automated reporting systems. Experienced in translating raw operational data into audit-ready financial insights with tools like Microsoft Excel, Power BI, Looker Studio, and Zoho Books.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('experiences')}
                className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#2d466f] hover:bg-[#223657] text-white shadow-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>View Experiences</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-white hover:bg-[#edf2f7] dark:bg-[#121c2d] dark:hover:bg-[#1a283e] text-[#2d466f] dark:text-[#adc5d9] border border-[#d8e2eb] dark:border-[#1e2e44] shadow-xs flex items-center gap-2 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Curriculum Vitae</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-[#42556b] dark:text-[#95a7bc] hover:text-[#1c2b3e] dark:hover:text-[#f1f5f9] transition-colors cursor-pointer"
              >
                Contact Channels
              </button>
            </div>
          </div>

          {/* Right Visual Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] shadow-md p-4">
                <div className="relative aspect-4/5 rounded-xl overflow-hidden bg-[#d8e2eb] dark:bg-[#1a283e]">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.fullName}
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1421]/75 via-transparent to-transparent" />
                  
                  {/* Overlay text */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-semibold tracking-wide text-[#c3d1de]">
                      Mapúa University (Makati Campus)
                    </div>
                    <div className="text-sm font-bold mt-0.5">
                      Class of 2027 · Accounting Information Systems
                    </div>
                  </div>
                </div>

                {/* Key stats row beneath photo - no OJT */}
                <div className="grid grid-cols-3 gap-2 pt-4 text-center divide-x divide-[#d8e2eb] dark:divide-[#1e2e44]">
                  <div>
                    <div className="text-base font-bold text-[#2d466f] dark:text-[#adc5d9]">306.5</div>
                    <div className="text-[11px] text-[#566c84] dark:text-[#95a7bc]">Verified Hours</div>
                  </div>
                  <div>
                    <div className="text-base font-bold text-[#2d466f] dark:text-[#adc5d9]">4.33 / 5</div>
                    <div className="text-[11px] text-[#566c84] dark:text-[#95a7bc]">Supervisor Eval</div>
                  </div>
                  <div>
                    <div className="text-base font-bold text-[#2d466f] dark:text-[#adc5d9]">HSBC</div>
                    <div className="text-[11px] text-[#566c84] dark:text-[#95a7bc]">Semifinalist</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Core Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-xl p-6 shadow-sm hover:border-[#95b3cd] transition-all">
          <div className="w-10 h-10 rounded-lg bg-[#d8e2eb] dark:bg-[#1a283e] flex items-center justify-center text-[#2d466f] dark:text-[#adc5d9] mb-4">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#1c2b3e] dark:text-[#f1f5f9] mb-2">
            Audit-Ready Precision
          </h3>
          <p className="text-xs sm:text-sm text-[#566c84] dark:text-[#95a7bc] leading-relaxed">
            Hands-on corporate experience in cash flow liquidation, corporate credit card reconciliation, receipt verification, and internal control compliance for major corporate events.
          </p>
        </div>

        <div className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-xl p-6 shadow-sm hover:border-[#95b3cd] transition-all">
          <div className="w-10 h-10 rounded-lg bg-[#d8e2eb] dark:bg-[#1a283e] flex items-center justify-center text-[#2d466f] dark:text-[#adc5d9] mb-4">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#1c2b3e] dark:text-[#f1f5f9] mb-2">
            Systems & Applied Analytics
          </h3>
          <p className="text-xs sm:text-sm text-[#566c84] dark:text-[#95a7bc] leading-relaxed">
            Proficient in Microsoft Excel modeling, Power BI, Looker Studio, and Zoho Books, bridging technical enterprise database concepts with accounting workflows.
          </p>
        </div>

        <div className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-xl p-6 shadow-sm hover:border-[#95b3cd] transition-all">
          <div className="w-10 h-10 rounded-lg bg-[#d8e2eb] dark:bg-[#1a283e] flex items-center justify-center text-[#2d466f] dark:text-[#adc5d9] mb-4">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#1c2b3e] dark:text-[#f1f5f9] mb-2">
            Strategic Case Cracking
          </h3>
          <p className="text-xs sm:text-sm text-[#566c84] dark:text-[#95a7bc] leading-relaxed">
            National Semifinalist in the HSBC Philippine Business Case Competition, solving complex corporate turnaround challenges under intense time pressure and executive defense.
          </p>
        </div>
      </section>

      {/* Featured Experience Spotlight - No OJT Word */}
      <section className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#d8e2eb] dark:border-[#1e2e44]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2d466f] dark:text-[#adc5d9]">
              Corporate Operations Experience
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1c2b3e] dark:text-[#f1f5f9] mt-1">
              Expert Education & Visa Services Philippines
            </h2>
            <div className="text-xs text-[#566c84] dark:text-[#95a7bc] mt-1">
              Operations Department · BGC Manila Office · 306.5 Verified Hours Completed (Aug – Oct 2026)
            </div>
          </div>
          <button
            onClick={() => onNavigate('experiences')}
            className="self-start sm:self-auto text-xs font-semibold text-[#2d466f] dark:text-[#adc5d9] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>View Full Experience Report</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-start">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs sm:text-sm text-[#42556b] dark:text-[#adc5d9] leading-relaxed">
              Assigned to the Operations Department with direct responsibility for the financial lifecycle of <strong>GlobalQuest 2026</strong>, a premier educational fair held in the Philippines featuring participating international schools and universities. Managed cash flow statements, vendor prize procurement, corporate credit card reconciliation, and administrative liquidation.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2 text-xs sm:text-sm text-[#33465b] dark:text-[#c3d1de]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Reconciled 100+ supplier receipts and corporate credit card balances to complete liquidation.</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-[#33465b] dark:text-[#c3d1de]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Prepared and updated dynamic cash flow statements across the multi-month event timeline.</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-[#33465b] dark:text-[#c3d1de]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Awarded 4.33 / 5.0 (Exemplary) overall industry appraisal score by company superiors.</span>
              </div>
            </div>
          </div>

          {/* Supervisor Quote Callout */}
          <div className="lg:col-span-5 bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-xl p-5 space-y-3">
            <div className="text-xs font-semibold text-[#2d466f] dark:text-[#adc5d9]">
              Supervisor Commendation
            </div>
            <p className="text-xs text-[#42556b] dark:text-[#9fb2c5] italic leading-relaxed">
              "{experienceData[0].supervisorEvaluation?.quote}"
            </p>
            <div className="pt-2 border-t border-[#d8e2eb] dark:border-[#1e2e44] flex items-center justify-between text-[11px] text-[#566c84] dark:text-[#adc5d9]">
              <span className="font-semibold text-[#1c2b3e] dark:text-[#f1f5f9]">
                {experienceData[0].supervisorEvaluation?.evaluator}
              </span>
              <span>{experienceData[0].supervisorEvaluation?.position}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Sections Grid */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1c2b3e] dark:text-[#f1f5f9]">
            Portfolio Sections
          </h2>
          <p className="text-xs text-[#566c84] dark:text-[#95a7bc]">
            Explore academic milestones, verified experiences, certifications, and case competitions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Education (Honors Included) */}
          <div 
            onClick={() => onNavigate('education')}
            className="group p-5 bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-xl hover:border-[#95b3cd] shadow-xs cursor-pointer transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-[#d8e2eb] dark:bg-[#1a283e] flex items-center justify-center text-[#2d466f] dark:text-[#adc5d9] mb-3 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-[#1c2b3e] dark:text-[#f1f5f9] group-hover:text-[#2d466f] dark:group-hover:text-[#adc5d9] transition-colors">
                Education
              </h3>
              <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-[#edf2f7] dark:bg-[#1a283e] text-[#2d466f] dark:text-[#adc5d9]">
                Honors
              </span>
            </div>
            <p className="text-xs text-[#566c84] dark:text-[#95a7bc] mt-1 line-clamp-2">
              Mapúa University BS AIS, Dean's & President's Lister (Academic Honors), ABM High Honors.
            </p>
            <div className="mt-3 flex items-center text-xs font-semibold text-[#2d466f] dark:text-[#adc5d9] gap-1">
              <span>View details</span> <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Experiences (No OJT) */}
          <div 
            onClick={() => onNavigate('experiences')}
            className="group p-5 bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-xl hover:border-[#95b3cd] shadow-xs cursor-pointer transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-[#d8e2eb] dark:bg-[#1a283e] flex items-center justify-center text-[#2d466f] dark:text-[#adc5d9] mb-3 group-hover:scale-105 transition-transform">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#1c2b3e] dark:text-[#f1f5f9] group-hover:text-[#2d466f] dark:group-hover:text-[#adc5d9] transition-colors">
              Experiences
            </h3>
            <p className="text-xs text-[#566c84] dark:text-[#95a7bc] mt-1 line-clamp-2">
              306.5 verified operations hours, credit card reconciliations, and CREOTEC immersion.
            </p>
            <div className="mt-3 flex items-center text-xs font-semibold text-[#2d466f] dark:text-[#adc5d9] gap-1">
              <span>View logs</span> <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Competitions */}
          <div 
            onClick={() => onNavigate('competitions')}
            className="group p-5 bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-xl hover:border-[#95b3cd] shadow-xs cursor-pointer transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-[#d8e2eb] dark:bg-[#1a283e] flex items-center justify-center text-[#2d466f] dark:text-[#adc5d9] mb-3 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#1c2b3e] dark:text-[#f1f5f9] group-hover:text-[#2d466f] dark:group-hover:text-[#adc5d9] transition-colors">
              Competitions
            </h3>
            <p className="text-xs text-[#566c84] dark:text-[#95a7bc] mt-1 line-clamp-2">
              HSBC Case (Top 12), 1st D&V Sustainability, ASEAN Future Student Leader 2025 (Top 8).
            </p>
            <div className="mt-3 flex items-center text-xs font-semibold text-[#2d466f] dark:text-[#adc5d9] gap-1">
              <span>See cases</span> <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Certifications */}
          <div 
            onClick={() => onNavigate('certifications')}
            className="group p-5 bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-xl hover:border-[#95b3cd] shadow-xs cursor-pointer transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-[#d8e2eb] dark:bg-[#1a283e] flex items-center justify-center text-[#2d466f] dark:text-[#adc5d9] mb-3 group-hover:scale-105 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#1c2b3e] dark:text-[#f1f5f9] group-hover:text-[#2d466f] dark:group-hover:text-[#adc5d9] transition-colors">
              Certifications
            </h3>
            <p className="text-xs text-[#566c84] dark:text-[#95a7bc] mt-1 line-clamp-2">
              R Data Analysis, Business Writing, Ethical Leadership, Data Animation.
            </p>
            <div className="mt-3 flex items-center text-xs font-semibold text-[#2d466f] dark:text-[#adc5d9] gap-1">
              <span>View credentials</span> <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TRANSFERRED SECTION: MORE INFORMATION REGARDING ME
          (Softwares Used & Key Skills relocated from top nav to bottom of overview)
          - No descriptions for software (used only during school)
          - No descriptions for key skills
         ========================================================================= */}
      <section id="more-about-me" className="space-y-12 pt-10 border-t border-[#d8e2eb] dark:border-[#1e2e44]">
        {/* Section Heading */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2d466f] dark:text-[#adc5d9]">
            <Sparkles className="w-4 h-4" />
            <span>Academic Tools & Skills</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c2b3e] dark:text-[#f1f5f9]">
            More Information Regarding Me
          </h2>
          <p className="text-xs sm:text-sm text-[#566c84] dark:text-[#95a7bc] max-w-3xl">
            Software tools and fundamental accounting competencies learned and utilized during school and undergraduate academic coursework at Mapúa University.
          </p>
        </div>

        {/* 1. SOFTWARES USED (Academic Coursework - No description) */}
        <div className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#edf2f7] dark:border-[#1e2e44]">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2d466f] dark:text-[#adc5d9]">
                <Cpu className="w-4 h-4" />
                <span>School Coursework Tools</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1c2b3e] dark:text-[#f1f5f9]">
                Softwares Used
              </h3>
              <p className="text-xs text-[#566c84] dark:text-[#95a7bc]">
                Software applications and tools learned and practiced during school coursework.
              </p>
            </div>

            {/* Category filter pills */}
            <div className="flex flex-wrap items-center gap-1.5 shrink-0">
              {softwareCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedSoftwareCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    selectedSoftwareCategory === cat
                      ? 'bg-[#2d466f] text-white shadow-xs font-semibold'
                      : 'bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#d8e2eb] dark:border-[#1e2e44] text-[#566c84] dark:text-[#95a7bc] hover:border-[#95b3cd]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Software Cards Grid - Clean, No Description */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredSoftware.map((item, idx) => {
              const IconComp = item.icon ? softwareIconMap[item.icon] || Cpu : Cpu;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#edf2f7] dark:border-[#1e2e44] hover:border-[#95b3cd] transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] flex items-center justify-center text-[#2d466f] dark:text-[#adc5d9]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      item.proficiency === 'Advanced'
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                        : item.proficiency === 'Proficient'
                        ? 'bg-[#edf2f7] dark:bg-[#1a283e] text-[#2d466f] dark:text-[#adc5d9] border border-[#d8e2eb] dark:border-[#2d466f]'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}>
                      {item.proficiency}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#1c2b3e] dark:text-[#f1f5f9]">
                      {item.name}
                    </h4>
                    <span className="text-[11px] text-[#566c84] dark:text-[#adc5d9] font-medium block mt-0.5">
                      {item.category}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-[#edf2f7] dark:border-[#1e2e44] flex items-center justify-between text-[10px] text-[#566c84] dark:text-[#95a7bc]">
                    <span className="inline-flex items-center gap-1 font-medium">
                      <GraduationCap className="w-3 h-3 text-[#2d466f] dark:text-[#adc5d9]" /> School Tool
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. KEY SKILLS (Academic & Core Competencies - No description) */}
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2d466f] dark:text-[#adc5d9]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Competencies</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#1c2b3e] dark:text-[#f1f5f9]">
              Key Skills
            </h3>
            <p className="text-xs text-[#566c84] dark:text-[#95a7bc]">
              Core skills and competencies developed through BS AIS coursework and academic training.
            </p>
          </div>

          <div className="space-y-6">
            {skillCategories.map((category, cIdx) => (
              <div 
                key={cIdx}
                className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-[#edf2f7] dark:border-[#1e2e44] pb-2">
                  <h4 className="text-base sm:text-lg font-bold text-[#1c2b3e] dark:text-[#f1f5f9]">
                    {category.title}
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#edf2f7] dark:border-[#1e2e44] hover:border-[#95b3cd] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2d466f] dark:bg-[#adc5d9] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-[#1c2b3e] dark:text-[#f1f5f9]">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
