import React from 'react';
import { X, Printer, Download, Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo, educationData, experienceData, certificationsData, softwareData, referencePersons } from '../data/portfolioData.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-[#0c1421] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative animate-in zoom-in-95 duration-200"
      >
        {/* Top Action Bar */}
        <div className="p-4 sm:px-6 border-b border-[#d8e2eb] dark:border-[#1e2e44] flex items-center justify-between bg-[#f8fafc] dark:bg-[#0c1421] rounded-t-2xl">
          <div className="text-xs font-bold text-[#2d466f] dark:text-[#adc5d9] uppercase tracking-wider">
            Official Curriculum Vitae · Resume Preview
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#2d466f] hover:bg-[#223657] text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-[#566c84] dark:text-[#95a7bc] hover:bg-[#edf2f7] dark:hover:bg-[#1a283e] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 text-slate-800 dark:text-slate-200 font-sans leading-relaxed space-y-6 bg-white dark:bg-[#0f1722]">
          {/* Header */}
          <div className="border-b-2 border-slate-900 dark:border-slate-300 pb-4">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {personalInfo.fullName}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400 mt-2 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> {personalInfo.email}
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> {personalInfo.formattedPhone}
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5" /> {personalInfo.linkedInUrl}
              </span>
            </div>
          </div>

          {/* Profile Section */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1">
              PROFILE
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 text-justify">
              I am a fourth-year Bachelor of Science in Accounting Information Systems student at Mapúa University, skilled in analyzing and interpreting financial data through tools such as Power BI, Looker Studio, and Microsoft Excel. My exposure to business case, sustainability, and leadership competitions has sharpened my analytical thinking, problem-solving, and communication skills, which I aim to apply in delivering value through financial insights.
            </p>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-3 text-xs sm:text-[13px]">
              <div>
                <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                  <span>Mapúa University - Makati Campus, College (B.S. Accounting Information Systems)</span>
                  <span className="font-mono text-xs">2023 – Present</span>
                </div>
                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 mt-1 text-xs">
                  <li>Recognized as Dean's Lister and President's Lister for A.Y. 2023–Present and A.Y. 2024–Present, respectively.</li>
                  <li>Represented the university in several interschool case competitions, advancing as a Semifinalist in the HSBC Philippine Business Case Competition, among others.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                  <span>Mapúa University, Senior High School (ABM)</span>
                  <span className="font-mono text-xs">2021 – 2023</span>
                </div>
                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 mt-1 text-xs">
                  <li>Graduated With High Honors for A.Y. 2021–2022.</li>
                  <li>Completed a work immersion in the Accounting Department of CREOTEC Philippines Inc., gaining hands-on exposure to accounting operations and practices.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experiences Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1">
              EXPERIENCES
            </h2>
            <div className="space-y-3 text-xs sm:text-[13px]">
              <div>
                <div className="font-bold text-slate-900 dark:text-white">
                  Accounting Operations Intern
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 italic">
                  Expert Education and Visa Services - Philippines
                </div>
                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 mt-1 text-xs">
                  <li>Assisted with payroll, timesheet validation, budget liquidation, and expense reconciliation, including corporate credit card reconciliation, invoice and receipt verification, and discrepancy resolution.</li>
                  <li>Spearheaded budget preparation, cash flow statement adjustments, and liquidation for GlobalQuest 2026 (held in the Philippines featuring participating international schools).</li>
                  <li>Created dynamic Excel dashboard for the Managing Director to analyze student show-money calculations.</li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-slate-900 dark:text-white">
                  Accounting Work Immersion Trainee
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 italic">
                  CREOTEC Philippines Inc.
                </div>
                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 mt-1 text-xs">
                  <li>Prepared and maintained annual income tax reports, daily time records, employee payroll, and paycheck documentation.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Competitions Section */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1">
              COMPETITIONS
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex justify-between font-medium">
                <span>HSBC Philippine Business Case Competition Semifinalist (Top 12)</span>
                <span className="font-mono text-slate-500">Apr 2026</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>1st D&V Sustainability Challenge Semifinalist</span>
                <span className="font-mono text-slate-500">Jan 2026 – Mar 2026</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>ASEAN Future Student Leader 2025 Top 8 Finalist</span>
                <span className="font-mono text-slate-500">Sep 2025 – Oct 2025</span>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1">
              CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <a 
                href="https://coursera.org/share/6c35970777b08bc9c97431cb9fe6dc8a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between text-slate-700 dark:text-slate-300 hover:text-[#2d466f] dark:hover:text-[#adc5d9] hover:underline"
              >
                <span>English for Effective Business Writing</span>
                <span className="font-mono text-slate-500">Sept 2024</span>
              </a>
              <a 
                href="https://coursera.org/share/8adc5e812d0b3f21c7e3140b2266e1b4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between text-slate-700 dark:text-slate-300 hover:text-[#2d466f] dark:hover:text-[#adc5d9] hover:underline"
              >
                <span>Data Analysis with R</span>
                <span className="font-mono text-slate-500">Sept 2024</span>
              </a>
              <a 
                href="https://coursera.org/share/1aac701515876196acc37331ed64d3a6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between text-slate-700 dark:text-slate-300 hover:text-[#2d466f] dark:hover:text-[#adc5d9] hover:underline"
              >
                <span>Ethical Leadership Through Giving Voice to Values</span>
                <span className="font-mono text-slate-500">Sept 2024</span>
              </a>
              <a 
                href="https://coursera.org/share/d54c636c6dc76c2311e397f1f890e51c"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between text-slate-700 dark:text-slate-300 hover:text-[#2d466f] dark:hover:text-[#adc5d9] hover:underline"
              >
                <span>Data-Driven Animation for Science Communication</span>
                <span className="font-mono text-slate-500">Sept 2024</span>
              </a>
            </div>
          </div>

          {/* Software Used Section */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1">
              SOFTWARE USED
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-700 dark:text-slate-300">
              <div>· Microsoft Office</div>
              <div>· Zoho Books</div>
              <div>· Power BI</div>
              <div>· Looker Studio</div>
              <div>· Tableau</div>
              <div>· MATLAB</div>
              <div>· Google Antigravity</div>
              <div>· Canva & CapCut</div>
            </div>
          </div>

          {/* Key Skills Section */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1">
              KEY SKILLS
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700 dark:text-slate-300">
              <div>· Accounting & Liquidation</div>
              <div>· Data Transformation</div>
              <div>· Data Analysis & BI</div>
              <div>· Data Visualization</div>
              <div>· Financial Statement Analysis</div>
              <div>· Critical Thinking & Writing</div>
              <div>· Communication & Teamwork</div>
              <div>· Adaptability & Resilience</div>
              <div>· Goal Oriented & Stewardship</div>
            </div>
          </div>

          {/* Reference Person Section */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1">
              REFERENCE PERSON
            </h2>
            <div className="text-xs text-slate-700 dark:text-slate-300">
              <div className="font-semibold text-slate-900 dark:text-white">Mr. Julian S. Pilapil</div>
              <div>Mobile No.: (+63) 920 947 0441</div>
              <div>Email Address: julianpilapil2@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
