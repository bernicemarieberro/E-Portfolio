import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../../data/portfolioData.ts';

export const SkillsTab: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* Header */}
      <div className="border-b border-[#d8e2eb] dark:border-[#1e2e44] pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2d466f] dark:text-[#adc5d9]">
          <CheckCircle2 className="w-4 h-4" />
          <span>Capability Matrix</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1c2b3e] dark:text-[#f1f5f9] mt-1">
          Key Skills & Core Competencies
        </h1>
        <p className="text-xs sm:text-sm text-[#566c84] dark:text-[#95a7bc] mt-1">
          Quantitative accounting rigor, data systems architecture, and professional executive leadership traits.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="space-y-10">
        {skillCategories.map((category, cIdx) => (
          <div 
            key={cIdx}
            className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
          >
            <div className="border-b border-[#edf2f7] dark:border-[#1e2e44] pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-[#1c2b3e] dark:text-[#f1f5f9]">
                {category.title}
              </h2>
              <p className="text-xs text-[#566c84] dark:text-[#95a7bc] mt-1">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {category.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#edf2f7] dark:border-[#1e2e44] hover:border-[#95b3cd] transition-colors"
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
  );
};
