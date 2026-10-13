import React from 'react';
import { GraduationCap, Award, Building, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../../data/portfolioData.ts';

export const EducationTab: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* Header */}
      <div className="border-b border-[#d8e2eb] dark:border-[#1e2e44] pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2d466f] dark:text-[#adc5d9]">
          <GraduationCap className="w-4 h-4" />
          <span>Academic Background & Honors Standing</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 mt-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1c2b3e] dark:text-[#f1f5f9]">
            Education
          </h1>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#edf2f7] dark:bg-[#1a283e] text-[#2d466f] dark:text-[#adc5d9] border border-[#d8e2eb] dark:border-[#2d466f]">
            Dean's & President's Lister (Academic Honors)
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#566c84] dark:text-[#95a7bc] mt-1">
          Rigorous foundation in accounting principles, computational information systems, and strategic management at Mapúa University with continuous academic honors.
        </p>
      </div>

      {/* Main Timeline of Degrees */}
      <div className="space-y-8">
        {educationData.map((edu, idx) => (
          <div 
            key={idx}
            className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden"
          >
            {/* Soft accent glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#95b3cd]/15 dark:bg-[#2d466f]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[#566c84] dark:text-[#adc5d9] font-semibold">
                    <Building className="w-4 h-4" />
                    <span>{edu.institution}</span>
                    <span aria-hidden="true">·</span>
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.campus}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1c2b3e] dark:text-[#f1f5f9]">
                    {edu.degree}
                  </h2>
                </div>

                <div className="flex sm:flex-col items-end gap-1 shrink-0 text-right">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#edf2f7] dark:bg-[#1a283e] text-[#2d466f] dark:text-[#adc5d9] text-xs font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                  <span className="text-[11px] text-[#566c84] dark:text-[#95a7bc] mt-1">
                    {edu.status}
                  </span>
                </div>
              </div>

              {/* Honors & Accolades */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#2d466f] dark:text-[#adc5d9] uppercase tracking-wider">
                  Academic Distinctions
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.honors.map((honor, hIdx) => (
                    <div 
                      key={hIdx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#d8e2eb] dark:border-[#1e2e44] text-xs font-semibold text-[#1c2b3e] dark:text-[#f1f5f9]"
                    >
                      <Award className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{honor}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-[#2d466f] dark:text-[#adc5d9] uppercase tracking-wider">
                  Key Accomplishments
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {edu.keyHighlights.map((hl, hlIdx) => (
                    <div key={hlIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#42556b] dark:text-[#9fb2c5]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="pt-4 border-t border-[#d8e2eb] dark:border-[#1e2e44]">
                <div className="text-xs font-semibold text-[#2d466f] dark:text-[#adc5d9] uppercase tracking-wider mb-2">
                  Relevant Coursework
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCoursework.map((course, cIdx) => (
                    <span 
                      key={cIdx}
                      className="px-2.5 py-1 text-xs rounded-md bg-[#f6f8fb] dark:bg-[#0c1421] text-[#42556b] dark:text-[#adc5d9] border border-[#d8e2eb] dark:border-[#1e2e44]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* University Institutional Legacy Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#edf2f7] to-[#f6f8fb] dark:from-[#0c1421] dark:to-[#162335] border border-[#d8e2eb] dark:border-[#1e2e44] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="text-xs font-bold text-[#2d466f] dark:text-[#adc5d9] uppercase tracking-wider">
            Mapúa Centennial Excellence
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#1c2b3e] dark:text-[#f1f5f9]">
            First University in Southeast Asia with ABET Accreditation in Information Systems
          </h3>
          <p className="text-xs text-[#566c84] dark:text-[#95a7bc] max-w-2xl leading-relaxed">
            Founded in 1925, Mapúa University holds ISO 9001:2015 and ISO 14001:2015 certifications and is ranked in the Times Higher Education (THE) World University Rankings.
          </p>
        </div>
        <div className="shrink-0 text-center md:text-right">
          <div className="text-2xl font-black text-[#2d466f] dark:text-[#adc5d9]">1925 – 2026+</div>
          <div className="text-[11px] text-[#566c84] dark:text-[#95a7bc]">Centennial of Innovation</div>
        </div>
      </div>
    </div>
  );
};
