import React, { useState } from 'react';
import { BookOpen, Calendar, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { researchStudies } from '../../data/portfolioData.ts';
import { ResearchStudy } from '../../types/portfolio.ts';

export const ResearchTab: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<ResearchStudy | null>(null);

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* Header */}
      <div className="border-b border-[#d8e2eb] dark:border-[#1e2e44] pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2d466f] dark:text-[#adc5d9]">
          <BookOpen className="w-4 h-4" />
          <span>Academic & Applied Investigation</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1c2b3e] dark:text-[#f1f5f9] mt-1">
          Research Studies & Scholarly Projects
        </h1>
        <p className="text-xs sm:text-sm text-[#566c84] dark:text-[#95a7bc] mt-1">
          Empirical research into internal controls, enterprise cloud accounting systems, and ESG financial materiality.
        </p>
      </div>

      {/* Research Studies List */}
      <div className="space-y-8">
        {researchStudies.map((study) => (
          <div
            key={study.id}
            className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl p-6 sm:p-8 shadow-sm hover:border-[#95b3cd] transition-all space-y-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-[#2d466f] dark:text-[#adc5d9] uppercase tracking-wider">
                  {study.focusArea}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-[#1c2b3e] dark:text-[#f1f5f9]">
                  {study.title}
                </h2>
                <div className="text-xs text-[#6f8399] dark:text-[#7f94aa]">
                  {study.type}
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f6f8fb] dark:bg-[#0c1421] text-[#2d466f] dark:text-[#adc5d9] text-xs font-bold border border-[#d8e2eb] dark:border-[#1e2e44] shrink-0">
                <Calendar className="w-3.5 h-3.5" />
                <span>{study.date}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#42556b] dark:text-[#adc5d9] leading-relaxed">
              {study.abstract}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-semibold text-[#2d466f] dark:text-[#adc5d9] uppercase tracking-wider">
                Key Findings & Empirical Takeaways
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {study.keyFindings.map((finding, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#33465b] dark:text-[#c3d1de]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{finding}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#edf2f7] dark:border-[#1e2e44] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-semibold text-[#566c84] dark:text-[#95a7bc] mr-1">Methodologies:</span>
                {study.methodologies.map((method, mIdx) => (
                  <span
                    key={mIdx}
                    className="px-2 py-0.5 text-[11px] rounded bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#d8e2eb] dark:border-[#1e2e44] text-[#566c84] dark:text-[#95a7bc]"
                  >
                    {method}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedStudy(study)}
                className="text-xs font-semibold text-[#2d466f] dark:text-[#adc5d9] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Read Research Abstract Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for In-depth Study Review */}
      {selectedStudy && (
        <div 
          onClick={() => setSelectedStudy(null)}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-xl relative animate-in zoom-in-95 duration-200 space-y-5"
          >
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-4 right-4 p-1.5 rounded-md text-[#566c84] dark:text-[#95a7bc] hover:bg-[#edf2f7] dark:hover:bg-[#1a283e] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-semibold text-[#2d466f] dark:text-[#adc5d9] uppercase tracking-wider">
                {selectedStudy.focusArea}
              </span>
              <h3 className="text-xl font-bold text-[#1c2b3e] dark:text-[#f1f5f9] mt-1">
                {selectedStudy.title}
              </h3>
              <div className="text-xs text-[#566c84] dark:text-[#95a7bc] mt-1">
                {selectedStudy.type} · {selectedStudy.date} · Author: Bernice Marie M. Berro
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1c2b3e] dark:text-[#f1f5f9]">
                Executive Abstract
              </h4>
              <p className="text-xs sm:text-sm text-[#42556b] dark:text-[#adc5d9] leading-relaxed p-4 rounded-xl bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#d8e2eb] dark:border-[#1e2e44]">
                {selectedStudy.abstract}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1c2b3e] dark:text-[#f1f5f9]">
                Core Analytical Methodology
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedStudy.methodologies.map((m, idx) => (
                  <span key={idx} className="px-2.5 py-1 text-xs rounded-md bg-[#d8e2eb] dark:bg-[#1a283e] text-[#2d466f] dark:text-[#adc5d9] font-medium">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#edf2f7] dark:border-[#1e2e44] flex justify-end">
              <button
                onClick={() => setSelectedStudy(null)}
                className="px-4 py-2 rounded-lg bg-[#2d466f] hover:bg-[#223657] text-white text-xs font-semibold cursor-pointer"
              >
                Close Abstract
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
