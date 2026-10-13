import React, { useState } from 'react';
import { 
  Cpu, 
  BarChart3, 
  FileSpreadsheet, 
  LineChart, 
  BookOpen, 
  Layers, 
  Palette, 
  PieChart, 
  CheckCircle2
} from 'lucide-react';
import { softwareData } from '../../data/portfolioData.ts';

const iconMap: Record<string, React.ElementType> = {
  FileSpreadsheet,
  BarChart3,
  PieChart,
  BookOpen,
  LineChart,
  Cpu,
  Layers,
  Palette
};

export const SoftwareTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Financial & Accounting',
    'Data & Business Intelligence',
    'Computational & Math',
    'Creative & Productivity'
  ];

  const filteredSoftware = softwareData.filter(item => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* Header */}
      <div className="border-b border-[#d8e2eb] dark:border-[#1e2e44] pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2d466f] dark:text-[#adc5d9]">
          <Cpu className="w-4 h-4" />
          <span>Technical Tools & Systems</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1c2b3e] dark:text-[#f1f5f9] mt-1">
          Softwares & Technological Stack
        </h1>
        <p className="text-xs sm:text-sm text-[#566c84] dark:text-[#95a7bc] mt-1">
          Industry-standard accounting platforms, business intelligence suites, computational tools, and productivity applications.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#2d466f] text-white shadow-xs font-semibold'
                  : 'bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] text-[#566c84] dark:text-[#95a7bc] hover:border-[#95b3cd]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Softwares */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSoftware.map((item) => {
          const Icon = iconMap[item.icon] || Cpu;
          return (
            <div
              key={item.name}
              className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl p-6 shadow-sm hover:border-[#95b3cd] transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#d8e2eb] dark:bg-[#1a283e] flex items-center justify-center text-[#2d466f] dark:text-[#adc5d9] shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#f6f8fb] dark:bg-[#0c1421] text-[#2d466f] dark:text-[#adc5d9] text-xs font-bold border border-[#d8e2eb] dark:border-[#1e2e44]">
                    <span>{item.proficiency}</span>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold text-[#2d466f] dark:text-[#adc5d9] uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-bold text-[#1c2b3e] dark:text-[#f1f5f9] mt-0.5">
                    {item.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#42556b] dark:text-[#adc5d9] leading-relaxed">
                  {item.description}
                </p>

                {/* Practical Use Cases */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-semibold text-[#566c84] dark:text-[#95a7bc]">
                    Practical Applications & Projects:
                  </div>
                  {item.useCases.map((uc, uIdx) => (
                    <div key={uIdx} className="flex items-start gap-2 text-xs text-[#33465b] dark:text-[#c3d1de]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{uc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Featured In pill */}
              <div className="pt-4 mt-4 border-t border-[#edf2f7] dark:border-[#1e2e44] text-[11px] text-[#566c84] dark:text-[#adc5d9]">
                <span className="font-semibold text-[#1c2b3e] dark:text-[#f1f5f9]">Featured In:</span> {item.featuredIn}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
