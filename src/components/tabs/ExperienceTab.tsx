import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Star, 
  Clock, 
  Building, 
  ChevronDown, 
  ChevronUp, 
  UserCheck
} from 'lucide-react';
import { experienceData } from '../../data/portfolioData.ts';

export const ExperienceTab: React.FC = () => {
  const [expandedJournal, setExpandedJournal] = useState<boolean>(false);

  const weeklyMilestones = [
    { week: 'Week 1', date: 'Aug 10–14, 2026', hours: 39, task: 'Orientation, GlobalQuest prize budget drafting & revisions, payroll validation, CRM encoding.' },
    { week: 'Week 2', date: 'Aug 17–20, 2026', hours: 31, task: 'Credit card (CC) reconciliation against receipts, GlobalQuest cash flow briefing, video reels scripting.' },
    { week: 'Week 3', date: 'Aug 24–28, 2026', hours: 40, task: 'Prize procurement for winners/speakers, initiated Statement of Cash Flows, partner updates for Flinders & Griffith.' },
    { week: 'Week 4', date: 'Sep 1–4, 2026', hours: 32, task: 'Adjustments in Statement of Cash Flow, compiled invoices & receipts audit trail, contacted event delegates.' },
    { week: 'Week 5', date: 'Sep 7–11, 2026', hours: 24, task: 'Finalized speaker tokens, event prep for GlobalQuest 2026, cash flow variance reconciliation.' },
    { week: 'Week 6', date: 'Sep 14–18, 2026', hours: 39, task: 'Post-event adjustments in cash flow statement, compiled all supporting invoices, CC reconciliation, CRM lead ingestion.' },
    { week: 'Week 7', date: 'Sep 21–25, 2026', hours: 38, task: 'Formal finalization of GlobalQuest budget liquidation, credit card expense matching, variance documentation.' },
    { week: 'Week 8', date: 'Sep 28–Oct 2, 2026', hours: 16, task: 'Completed official GlobalQuest budget liquidation package, closing of project accounts.' },
    { week: 'Week 9', date: 'Oct 5–8, 2026', hours: 31.5, task: 'Updated MD financial analysis models, completed executive decision reporting, delivered exit presentation.' }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* Header */}
      <div className="border-b border-[#d8e2eb] dark:border-[#1e2e44] pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2d466f] dark:text-[#adc5d9]">
          <Briefcase className="w-4 h-4" />
          <span>Practical Industry Experience</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1c2b3e] dark:text-[#f1f5f9] mt-1">
          Experiences
        </h1>
        <p className="text-xs sm:text-sm text-[#566c84] dark:text-[#95a7bc] mt-1">
          Demonstrated competence in financial liquidation, corporate credit card reconciliation, and administrative accounting.
        </p>
      </div>

      {/* Main Experience Cards */}
      <div className="space-y-10">
        {experienceData.map((exp) => (
          <div 
            key={exp.id}
            className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#d8e2eb] dark:border-[#1e2e44]">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-[#566c84] dark:text-[#adc5d9] font-semibold">
                  <Building className="w-4 h-4" />
                  <span>{exp.company}</span>
                  {exp.department && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{exp.department}</span>
                    </>
                  )}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1c2b3e] dark:text-[#f1f5f9]">
                  {exp.role}
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-[#6f8399] dark:text-[#7f94aa]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <div className="flex sm:flex-col items-end gap-1 shrink-0 text-right">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#edf2f7] dark:bg-[#1a283e] text-[#2d466f] dark:text-[#adc5d9] text-xs font-bold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
                {exp.durationHours && (
                  <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{exp.durationHours} Verified Hours</span>
                  </div>
                )}
              </div>
            </div>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-[#42556b] dark:text-[#adc5d9] leading-relaxed">
              {exp.summary}
            </p>

            {/* Responsibilities & Achievements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-[#2d466f] dark:text-[#adc5d9] uppercase tracking-wider">
                  Core Responsibilities
                </h3>
                <div className="space-y-2">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs text-[#42556b] dark:text-[#9fb2c5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2d466f] dark:bg-[#adc5d9] shrink-0 mt-1.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-bold text-[#2d466f] dark:text-[#adc5d9] uppercase tracking-wider">
                  Verified Deliverables & Accomplishments
                </h3>
                <div className="space-y-2">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-[#42556b] dark:text-[#9fb2c5]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Supervisor Formal Evaluation Callout */}
            {exp.supervisorEvaluation && (
              <div className="p-5 rounded-xl bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#d8e2eb] dark:border-[#1e2e44] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#2d466f] dark:text-[#adc5d9]" />
                    <span className="text-xs font-bold text-[#1c2b3e] dark:text-[#f1f5f9]">
                      Official Workplace Appraisal: {exp.supervisorEvaluation.rating}
                    </span>
                  </div>
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-xs sm:text-sm text-[#42556b] dark:text-[#9fb2c5] italic leading-relaxed">
                  "{exp.supervisorEvaluation.quote}"
                </blockquote>
                <div className="text-[11px] text-[#566c84] dark:text-[#adc5d9] pt-1">
                  Evaluated by <strong>{exp.supervisorEvaluation.evaluator}</strong>, {exp.supervisorEvaluation.position}
                </div>
              </div>
            )}

            {/* Technologies Used row */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#566c84] dark:text-[#95a7bc] mr-1">Stack Applied:</span>
              {exp.technologies.map((tech, tIdx) => (
                <span 
                  key={tIdx}
                  className="px-2.5 py-1 text-xs rounded-md bg-[#f6f8fb] dark:bg-[#0c1421] text-[#2d466f] dark:text-[#adc5d9] border border-[#d8e2eb] dark:border-[#1e2e44]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Expandable 9-Week Operations Journal Breakdown */}
      <div className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#1c2b3e] dark:text-[#f1f5f9]">
              Expert Education Weekly Operations Journal & Timecard Log
            </h3>
            <p className="text-xs text-[#566c84] dark:text-[#95a7bc]">
              Summary of 306.5 verified training hours across 9 weeks of operations.
            </p>
          </div>
          <button
            onClick={() => setExpandedJournal(!expandedJournal)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#edf2f7] dark:bg-[#1a283e] text-[#2d466f] dark:text-[#adc5d9] hover:bg-[#d8e2eb] transition-colors cursor-pointer"
          >
            <span>{expandedJournal ? 'Hide Journal' : 'View 9-Week Breakdown'}</span>
            {expandedJournal ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {expandedJournal && (
          <div className="pt-4 divide-y divide-[#edf2f7] dark:divide-[#1e2e44] text-xs">
            {weeklyMilestones.map((item, mIdx) => (
              <div key={mIdx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#2d466f] dark:text-[#adc5d9] w-16">{item.week}</span>
                  <span className="text-[#6f8399] dark:text-[#7f94aa] w-32">{item.date}</span>
                  <span className="text-[#33465b] dark:text-[#c3d1de]">{item.task}</span>
                </div>
                <span className="text-right font-medium text-[#566c84] dark:text-[#95a7bc] shrink-0">
                  {item.hours} hrs
                </span>
              </div>
            ))}
            <div className="pt-4 flex justify-between font-bold text-sm text-[#1c2b3e] dark:text-[#f1f5f9]">
              <span>Total Hours Rendered:</span>
              <span className="text-emerald-600 dark:text-emerald-400">306.5 Hours (100% Complete)</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
