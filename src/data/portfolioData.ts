import { 
  EducationItem, 
  ExperienceItem, 
  CertificationItem, 
  SoftwareItem, 
  SkillCategory, 
  ResearchStudy, 
  CompetitionItem, 
  ReferencePerson 
} from '../types/portfolio.ts';

export const personalInfo = {
  fullName: 'Bernice Marie M. Berro',
  preferredName: 'Bernice',
  title: 'Accounting Information Systems Specialist & Financial Analyst',
  tagline: 'Bridging financial rigor and intelligent data systems to drive actionable business decisions.',
  studentNumber: '2021136012',
  email: 'berniceberro@gmail.com',
  alternateEmail: 'bmmberro.school@gmail.com',
  phone: '+63 994 437 1030',
  formattedPhone: '(+63) 994 437 1030',
  linkedInUrl: 'https://www.linkedin.com/in/bernice-marie-berro-074a112b6',
  linkedInHandle: 'in/bernice-marie-berro-074a112b6',
  location: 'Manila, Philippines',
  institution: 'Mapúa University',
  degree: 'Bachelor of Science in Accounting Information Systems (BS AIS)',
  yearLevel: 'Fourth Year Undergraduate',
  avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  profileAltUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80',
  bio: `I am a fourth-year Bachelor of Science in Accounting Information Systems student at Mapúa University, recognized as Dean's Lister and President's Lister. Skilled in analyzing, transforming, and interpreting complex financial datasets through modern analytics architectures including Microsoft Excel, Power BI, Looker Studio, and Zoho Books.

My extensive exposure to interschool business case competitions, corporate operations experience at Expert Education & Visa Services, and quantitative accounting coursework has honed my precision in budget liquidation, corporate credit card reconciliation, cash flow forecasting, and executive decision dashboards. I specialize in turning complex numbers into clear, actionable financial narratives.`,
  missionStatement: 'To empower organizations with transparent financial data structures, audit-ready operational records, and intuitive visual dashboards that eliminate reporting friction.'
};

export const educationData: EducationItem[] = [
  {
    institution: 'Mapúa University',
    campus: 'Makati Campus — E.T. Yuchengco School of Business',
    degree: 'Bachelor of Science in Accounting Information Systems (BS AIS)',
    period: '2023 – Present',
    status: 'In Progress (Fourth Year)',
    honors: [
      "Dean's Lister (Academic Year 2023 – Present)",
      "President's Lister (Academic Year 2024 – Present)"
    ],
    keyHighlights: [
      'Ranked top tier across quantitative accounting and information systems cohorts.',
      'Selected to represent Mapúa University as Semifinalist in the prestigious HSBC Philippine Business Case Competition.',
      'Completed 306.5 verified hours of practical corporate operations & financial reconciliation.',
      'Core focus on enterprise resource planning (ERP), internal control frameworks, and computerized accounting systems.'
    ],
    relevantCoursework: [
      'Accounting Information Systems (AIS104, AIS105, AIS106)',
      'Financial Accounting & Reporting',
      'Cost Accounting & Control',
      'Strategic Cost Management',
      'Auditing & Assurance Principles in CIS Environments',
      'Quantitative Methods & Applied Analytics',
      'Enterprise Business Processes'
    ]
  },
  {
    institution: 'Mapúa University Senior High School',
    campus: 'Manila Campus',
    degree: 'Senior High School — Accountancy, Business, and Management (ABM Strand)',
    period: '2021 – 2023',
    status: 'Graduated',
    honors: [
      'Graduated With High Honors (A.Y. 2021 – 2022)'
    ],
    keyHighlights: [
      'Maintained consistent high academic standing in fundamental accounting, business mathematics, and economics.',
      'Selected for hands-on corporate work immersion at CREOTEC Philippines Inc., managing tax and payroll logs.',
      'Active participant in student business simulations and leadership initiatives.'
    ],
    relevantCoursework: [
      'Fundamentals of Accountancy, Business & Management I & II',
      'Business Mathematics & Finance',
      'Applied Economics',
      'Business Ethics and Social Responsibility'
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'expert-education',
    role: 'Accounting Operations Intern',
    company: 'Expert Education and Visa Services Philippines, Inc.',
    location: '6th Floor, Icon Plaza, 26th Street, Bonifacio Global City (BGC), Taguig',
    period: 'August 10, 2026 – October 8, 2026',
    durationHours: 306.5,
    department: 'Operations Department',
    summary: 'Spearheaded budget preparation, credit card reconciliation, cash flow statement adjustments, and final liquidation for GlobalQuest 2026, an educational exhibition held in the Philippines featuring participating international schools and institutional delegations. Developed rapid executive Excel dashboards for decision-making under tight timelines.',
    responsibilities: [
      'Managed end-to-end budget liquidation for GlobalQuest 2026, an event held in the Philippines bringing together participating international schools, consolidating and verifying over 100+ supplier invoices, official receipts, and cash advances.',
      'Performed corporate credit card (CC) reconciliation against official receipts to identify discrepancies and maintain clean audit trails.',
      'Prepared and dynamically adjusted Statement of Cash Flows tracking all event inflows, vendor disbursements, and venue outlays.',
      'Engineered an interactive Excel dashboard for the Managing Director to calculate and evaluate student "Show Money" and visa proof-of-funds requirements.',
      'Executed prize procurement, vendor quotation comparisons, and expense negotiations to maintain strict compliance with corporate budget thresholds.',
      'Validated payroll records, timesheet submissions, and encoded student leads into the enterprise CRM system.'
    ],
    achievements: [
      'Successfully balanced and completed the GlobalQuest 2026 event liquidation, clearing all pending accounts and reimbursement items for the Philippines-hosted event with international partner schools.',
      'Developed a last-minute executive decision dashboard in Excel 3 days before internship conclusion, receiving stellar feedback for delivery speed and analytical quality.',
      'Earned an overall performance evaluation of 4.33 / 5.0 (Exemplary/Accomplished) from site leadership.',
      'Completed 306.5 verified on-duty hours, surpassing the university requirement.'
    ],
    supervisorEvaluation: {
      evaluator: 'Mark Jason Z. Fuyoc',
      position: 'Operations Support Officer',
      rating: '4.33 / 5.00 (Exemplary)',
      quote: 'Bernice stands out for her high learning agility, resilience, and adaptability. She approaches tasks with strong analytical initiative—asking sharp, well-considered questions—and demonstrates a growth mindset. Her work on finalizing the GlobalQuest budget liquidation and delivering a last-minute dashboard project showed great technical ability, initiative, and attention to detail.'
    },
    technologies: ['Microsoft Excel (Advanced)', 'CRM Systems', 'Cash Flow Modeling', 'Credit Card Reconciliation', 'Google Workspace', 'Canva']
  },
  {
    id: 'creotec-immersion',
    role: 'Accounting Work Immersion Trainee',
    company: 'CREOTEC Philippines Inc.',
    location: 'Metro Manila, Philippines',
    period: 'Academic Year 2022 – 2023',
    department: 'Accounting & Human Capital Department',
    summary: 'Completed intensive hands-on practical accounting work immersion, gaining exposure to corporate payroll registers, tax filings, and employee timekeeping compliance.',
    responsibilities: [
      'Prepared and audited daily time records (DTR) for employee workforce batches.',
      'Assisted in computing gross compensation, statutory withholding deductions, and net paycheck documentation.',
      'Supported compilation and maintenance of annual income tax reports and compliance filings.',
      'Organized transaction vouchers, receipts, and supporting schedules for monthly review.'
    ],
    achievements: [
      'Achieved 100% accuracy on allocated timesheet logs and tax schedule verifications.',
      'Received outstanding commendation from workplace mentors for dependability and punctuality.'
    ],
    technologies: ['Microsoft Excel', 'Tax Compliance Schedules', 'Payroll Registers', 'Documentation Control']
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'data-analysis-r',
    title: 'Data Analysis with R',
    issuer: 'IBM (via Coursera)',
    issueDate: 'September 2024',
    credentialCategory: 'Data & Analytics',
    credentialId: 'COURSERA-8adc5e812d0b',
    verificationUrl: 'https://coursera.org/share/8adc5e812d0b3f21c7e3140b2266e1b4',
    description: 'Comprehensive mastery of quantitative data analysis, data wrangling (dplyr, tidyr), exploratory data analysis, and statistical hypothesis testing using R programming.',
    skillsAcquired: [
      'Data Cleansing & Transformation',
      'Descriptive & Inferential Statistics',
      'Data Visualization (ggplot2)',
      'Reproducible Financial Reporting'
    ]
  },
  {
    id: 'business-writing',
    title: 'English for Effective Business Writing',
    issuer: 'The Hong Kong University of Science and Technology (via Coursera)',
    issueDate: 'September 2024',
    credentialCategory: 'Business & Communication',
    credentialId: 'COURSERA-6c35970777b0',
    verificationUrl: 'https://coursera.org/share/6c35970777b08bc9c97431cb9fe6dc8a',
    description: 'Credential covering high-impact corporate correspondence, executive summary drafting, formal proposal writing, and cross-cultural stakeholder communication.',
    skillsAcquired: [
      'Executive Financial Reporting',
      'Cross-Functional Stakeholder Communication',
      'Audit Memo Drafting',
      'Professional Pitch Formatting'
    ]
  },
  {
    id: 'ethical-leadership',
    title: 'Ethical Leadership Through Giving Voice to Values',
    issuer: 'University of Virginia (via Coursera)',
    issueDate: 'September 2024',
    credentialCategory: 'Ethics & Leadership',
    credentialId: 'COURSERA-1aac70151587',
    verificationUrl: 'https://coursera.org/share/1aac701515876196acc37331ed64d3a6',
    description: 'Framework-based certification on recognizing ethical conflicts in business, building scripts and action plans, and upholding integrity in financial reporting and auditing.',
    skillsAcquired: [
      'Financial Whistleblowing & Safeguards',
      'Ethical Conflict Resolution',
      'Corporate Governance Standards',
      'Accountability Principles'
    ]
  },
  {
    id: 'data-animation',
    title: 'Data-Driven Animation for Science Communication',
    issuer: 'University of California, Santa Cruz (via Coursera)',
    issueDate: 'September 2024',
    credentialCategory: 'Digital Media',
    credentialId: 'COURSERA-d54c636c6dc7',
    verificationUrl: 'https://coursera.org/share/d54c636c6dc76c2311e397f1f890e51c',
    description: 'Techniques for transforming complex temporal data and statistical curves into engaging, accurate animations and motion graphics for non-technical stakeholders.',
    skillsAcquired: [
      'Dynamic Chart Animation',
      'Visual Storytelling with Numbers',
      'Exploratory Data Narrative Design',
      'Infographic Content Production'
    ]
  }
];

export const softwareData: SoftwareItem[] = [
  {
    name: 'Microsoft Excel & Office',
    category: 'Financial & Accounting',
    proficiency: 'Advanced',
    description: 'Primary computational engine for financial models, automated cash flow statements, budget liquidation, nested lookup functions (XLOOKUP, INDEX/MATCH), and pivot tables.',
    useCases: [
      'Built GlobalQuest 2026 cash flow statement and budget liquidation sheets with automated discrepancy checks.',
      'Created executive "Show Money" calculation dashboard for Expert Education Managing Director.'
    ],
    icon: 'FileSpreadsheet',
    featuredIn: 'GlobalQuest Liquidation, Show Money Dashboard'
  },
  {
    name: 'Power BI',
    category: 'Data & Business Intelligence',
    proficiency: 'Advanced',
    description: 'Interactive dashboard authoring, DAX expressions, data relationship modeling, and executive KPI scorecards for complex business case scenarios.',
    useCases: [
      'Modeled competitive landscape and financial forecasting for HSBC Philippine Business Case Competition.',
      'Automated multi-table financial statement drilldowns.'
    ],
    icon: 'BarChart3',
    featuredIn: 'HSBC Case Competition, Financial Modeling'
  },
  {
    name: 'Looker Studio',
    category: 'Data & Business Intelligence',
    proficiency: 'Proficient',
    description: 'Cloud dashboarding for real-time lead analytics, student inquiry conversion rates, and event marketing ROI visual monitoring.',
    useCases: [
      'Visualized lead influx from global education fairs across branches.',
      'Tracked registration milestones and conversion funnel dynamics.'
    ],
    icon: 'PieChart',
    featuredIn: 'Lead Management & Funnel Analytics'
  },
  {
    name: 'Zoho Books',
    category: 'Financial & Accounting',
    proficiency: 'Proficient',
    description: 'Cloud-based accounting system for chart of accounts maintenance, automated journal entries, customer billing, and bank reconciliation.',
    useCases: [
      'Executed bank feed reconciliation and categorized supplier disbursement vouchers.',
      'Generated trial balances and monthly revenue summaries.'
    ],
    icon: 'BookOpen',
    featuredIn: 'General Ledger Operations & Expense Tracking'
  },
  {
    name: 'Tableau',
    category: 'Data & Business Intelligence',
    proficiency: 'Proficient',
    description: 'Data exploration and interactive storytelling with spatial maps, trend forecasting, and multi-attribute filters.',
    useCases: [
      'Constructed exploratory visualizations on student migration corridors and institution partnerships.',
      'Developed sensitivity analysis dashboards for variable cost drivers.'
    ],
    icon: 'LineChart',
    featuredIn: 'Strategic Data Exploration'
  },
  {
    name: 'MATLAB',
    category: 'Computational & Math',
    proficiency: 'Intermediate',
    description: 'Numerical computing, matrix mathematics, statistical probability simulations, and quantitative modeling.',
    useCases: [
      'Simulated financial risk probabilities and cost variance bounds in academic research.',
      'Analyzed regression relationships between organizational investments and profitability.'
    ],
    icon: 'Cpu',
    featuredIn: 'Academic Quantitative Research'
  },
  {
    name: 'Google Workspace & Antigravity',
    category: 'Creative & Productivity',
    proficiency: 'Advanced',
    description: 'Real-time collaborative financial audits, centralized sheet templates, team documentation, and shared cloud drive repositories.',
    useCases: [
      'Maintained collaborative university contact logs, OJT journals, and timecards.',
      'Conducted synchronized audit reviews with team leads and faculty advisers.'
    ],
    icon: 'Layers',
    featuredIn: 'Operational Document Control'
  },
  {
    name: 'Canva & CapCut',
    category: 'Creative & Productivity',
    proficiency: 'Advanced',
    description: 'Graphic design for school update publication materials (pubmats), event posters, presentation decks, and short-form video reels.',
    useCases: [
      'Authored scripts and filmed reels for NTCA and GlobalQuest 2026 event promos.',
      'Designed official institution update announcements and slide decks.'
    ],
    icon: 'Palette',
    featuredIn: 'Event Marketing & Visual Pubmats'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Financial & Accounting Rigor',
    description: 'Hands-on technical accounting disciplines practiced in corporate environments and Mapúa university coursework.',
    skills: [
      { name: 'Budget Liquidation', level: '95%', context: 'Managed full liquidation lifecycle for GlobalQuest 2026 ($25k+ scale)' },
      { name: 'Cash Flow Statement Preparation', level: '92%', context: 'Tracked inflows/outflows, adjusting entries, and closing variance' },
      { name: 'Bank & Credit Card Reconciliation', level: '90%', context: 'Line-by-line verification against invoices and supplier receipts' },
      { name: 'Payroll & Timesheet Validation', level: '88%', context: 'Verified timecards, overtime allocations, and statutory deductions' },
      { name: 'Internal Controls & Audit Trails', level: '89%', context: 'Enforcing document compliance before disbursement approvals' },
      { name: 'Financial Statement Analysis', level: '91%', context: 'Ratio analysis, horizontal/vertical analysis, and variance detection' }
    ]
  },
  {
    title: 'Data Systems & Business Analytics',
    description: 'Transforming raw transactional records into executive-ready dashboards and operational intelligence.',
    skills: [
      { name: 'Data Transformation & Cleansing', level: '94%', context: 'Normalizing disparate supplier invoices and CRM leads' },
      { name: 'Dashboard Design & BI Storytelling', level: '93%', context: 'Crafting intuitive Power BI, Excel, and Looker Studio models' },
      { name: 'CRM & Lead Management', level: '87%', context: 'Encoding student pipelines and event attendee information' },
      { name: 'Statistical Data Analysis (R / MATLAB)', level: '84%', context: 'Hypothesis testing, variance models, and trend regression' },
      { name: 'Process Workflow Optimization', level: '89%', context: 'Streamlining receipt submission to liquidation approval paths' }
    ]
  },
  {
    title: 'Professional & Adaptive Strengths',
    description: 'Interpersonal acumen, crisis agility, and leadership qualities validated by workplace supervisors.',
    skills: [
      { name: 'Clear Stakeholder Communication', level: '92%', context: 'Negotiating with external suppliers and presenting to senior management' },
      { name: 'High Learning Agility & Resilience', level: '96%', context: 'Praised by workplace supervisor for rapid adaptation to complex workflows' },
      { name: 'Analytical Initiative', level: '94%', context: 'Proactively identifying discrepancies and proposing corrective entries' },
      { name: 'Critical Thinking under Deadlines', level: '91%', context: 'Built complete executive dashboards in 72 hours for leadership review' },
      { name: 'Ethical Stewardship', level: '95%', context: 'Commitment to strict accuracy and transparency in public records' }
    ]
  }
];

export const researchStudies: ResearchStudy[] = [
  {
    id: 'study-1',
    title: 'Internal Control Architectures & Financial Discrepancy Prevention in High-Turnaround Educational Exhibitions',
    type: 'Undergraduate Applied Research / Corporate Practicum Case Study',
    date: 'October 2026',
    focusArea: 'Internal Controls & Event Liquidation',
    abstract: 'An empirical investigation into cash disbursement vulnerabilities during large-scale educational expos held in the Philippines with participating international schools. Utilizing real transaction records from the GlobalQuest 2026 lifecycle, this paper presents a 4-tier receipt-matching verification protocol that reduced post-event reconciliation lag by 64% and prevented unrecorded cash slippage.',
    keyFindings: [
      'Pre-approving supplier price tiers reduced last-minute expenditure variance by 28%.',
      'Synchronous digital receipt capture minimized lost invoice documentation from 14% to 0.8%.',
      'Segregation between procurement authorization and petty cash disbursement established an airtight audit trail.'
    ],
    methodologies: ['Empirical variance analysis', 'Process flow mapping', 'Audit trail verification', 'Comparative cost modeling']
  },
  {
    id: 'study-2',
    title: 'Evaluating Cloud-Based Accounting Information Systems (AIS) Adoption in Cross-Border Advisory Firms',
    type: 'Academic Capstone Research',
    date: 'A.Y. 2024 – 2025',
    focusArea: 'Enterprise Information Systems',
    abstract: 'Analyzed the technical transition from legacy spreadsheets to distributed multi-currency cloud accounting solutions (Zoho Books / ERP modules) across Asia-Pacific consultancy branches. Explores data integrity, role-based access controls (RBAC), and regulatory compliance across tax jurisdictions.',
    keyFindings: [
      'Multi-currency automated exchange rate feeds eliminated 92% of manual conversion errors.',
      'Centralized cloud document repositories expedited quarterly external audit sign-offs by 11 business days.',
      'Role-based permissions curtailed unauthorized expense adjustments while boosting accountability.'
    ],
    methodologies: ['Qualitative interviews', 'System architecture review', 'Information security audit', 'Cost-benefit ROI analysis']
  },
  {
    id: 'study-3',
    title: 'ESG Reporting Quality and Financial Materiality: An Analysis of Philippine Public Listed Corporations',
    type: 'Business Case & Policy Study',
    date: 'March 2024',
    focusArea: 'Sustainability Accounting & Corporate Governance',
    abstract: 'Evaluated the correlation between sustainability reporting rigor and cost of capital among publicly listed firms in the Philippine Stock Exchange (PSE). Synthesizes environmental disclosure indices with audited balance sheet performance to propose standardized ESG accounting metrics for emerging markets.',
    keyFindings: [
      'Companies with verified Scope 1 & 2 carbon disclosures exhibited 42 basis points lower debt financing costs.',
      'Integrated sustainability reporting increased institutional investor engagement by 35%.',
      'Highlights the urgent necessity for accounting students to master dual materiality and non-financial metrics.'
    ],
    methodologies: ['Panel regression', 'Content analysis of 10-K disclosures', 'Materiality matrix mapping', 'Comparative index benchmarking']
  }
];

export const competitionsData: CompetitionItem[] = [
  {
    id: 'hsbc-case',
    title: 'HSBC Philippine Business Case Competition',
    role: 'Lead Financial Modeler & Strategic Analyst (Mapúa University Delegation)',
    award: 'National Semifinalist (Top 12 in the Philippines)',
    standingRank: 'Top 12 National Semifinalist',
    year: 'Apr 2026',
    organizer: 'HSBC Philippines & Academic Advisory Board',
    overview: 'Represented Mapúa University (E.T. Yuchengco School of Business) in the prestigious nationwide business case tilt, emerging among the Top 12 semifinalist teams across the Philippines out of 23 premier universities. Formulated a multi-year turnaround strategy and financial feasibility model during high-pressure 6-hour case cracking rounds, addressing supply chain volatility, digital integration, and capital allocation.',
    keyContributions: [
      'Built dynamic 5-year discounted cash flow (DCF) model and scenario sensitivity matrix in Microsoft Excel.',
      'Constructed executive slide deck visualizing CAPEX allocation, payback horizon, and break-even milestones.',
      'Defended strategic financial assumptions before a panel of senior corporate banking executives and McKinsey consultants.'
    ],
    skillsDemonstrated: ['Financial Modeling', 'Strategic Analysis', 'Executive Pitching', 'Valuation & Sensitivity', 'High-Stress Problem Solving'],
    externalUrl: 'https://business.inquirer.net/588385/uplb-to-carry-ph-flag-at-hsbc-biz-case-tilt',
    additionalLink: {
      label: 'Mapúa ETYSB Top 12 Official Announcement',
      url: 'https://www.facebook.com/etymapuauniv/posts/map%C3%BAa-university-emerged-as-one-of-the-top-12-teams-in-the-philippine-leg-of-the/1476476770942665/'
    },
    links: [
      {
        label: 'Inquirer National News Feature',
        url: 'https://business.inquirer.net/588385/uplb-to-carry-ph-flag-at-hsbc-biz-case-tilt',
        type: 'media'
      },
      {
        label: 'Mapúa ETYSB Top 12 Official Announcement',
        url: 'https://www.facebook.com/etymapuauniv/posts/map%C3%BAa-university-emerged-as-one-of-the-top-12-teams-in-the-philippine-leg-of-the/1476476770942665/',
        type: 'university'
      }
    ]
  },
  {
    id: 'dv-sustainability',
    title: '1st D&V Sustainability Challenge',
    role: 'Sustainability Financial Strategist & Team Lead',
    award: 'National Semifinalist',
    standingRank: 'National Semifinalist',
    year: 'Jan 2026 – Mar 2026',
    organizer: 'D&V Philippines (Finance & Accounting Shared Services)',
    overview: 'Advanced as a National Semifinalist in the first nationwide accounting-centered Sustainability Challenge organized by D&V Philippines. Tasked with developing innovative, scalable business and accounting solutions integrating ESG (Environmental, Social, and Governance) metrics, Green IT, and eco-friendly resource efficiency for D&V Philippines\' BPO operations and global expansion into Australia and Europe.',
    keyContributions: [
      'Designed an ESG-linked cost-benefit model measuring the direct financial payback and efficiency gains of sustainable operational transitions.',
      'Formulated an implementation roadmap aligning BPO operational cost reductions with measurable energy and resource reduction targets.',
      'Presented sustainable financial policy recommendations to senior accounting and advisory leaders from D&V Philippines.'
    ],
    skillsDemonstrated: ['ESG Financial Modeling', 'Cost-Benefit Analysis', 'Sustainable Accounting', 'Corporate Governance', 'Strategic Planning'],
    externalUrl: 'https://www.dvphilippines.com/blog/dv-philippines-concludes-first-nationwide-accounting-centered-sustainability-challenge',
    links: [
      {
        label: 'D&V Philippines Official Blog Article',
        url: 'https://www.dvphilippines.com/blog/dv-philippines-concludes-first-nationwide-accounting-centered-sustainability-challenge',
        type: 'official'
      }
    ]
  },
  {
    id: 'asean-future-leader',
    title: 'ASEAN Future Student Leader 2025',
    role: 'Philippine Delegate & Youth Leadership Representative (Mapúa University)',
    award: 'Top 8 Finalist',
    standingRank: 'Top 8 Finalist (ASEAN Regional)',
    year: 'Sep 2025 – Oct 2025',
    organizer: 'NFJPIA / ASEAN Student Leaders Network',
    overview: 'Achieved Top 8 Finalist standing representing Mapúa University in the prestigious ASEAN Future Student Leader 2025 competition. Competed with high-caliber student leaders across Southeast Asian institutions, analyzing regional socio-economic challenges, ethical governance models, and cross-border accounting and youth-led economic impact initiatives.',
    keyContributions: [
      'Collaborated with delegates across ASEAN universities to propose a sustainable regional social enterprise framework.',
      'Synthesized quantitative socio-economic data and community impact metrics into an actionable policy proposal.',
      'Demonstrated ethical stewardship principles and cross-cultural communication during final committee defense.'
    ],
    skillsDemonstrated: ['Ethical Leadership', 'Cross-Cultural Collaboration', 'Strategic Governance', 'Policy Analysis', 'Stakeholder Alignment'],
    externalUrl: 'https://www.facebook.com/share/p/18UEvdW5m3/',
    links: [
      {
        label: 'Official ASEAN / NFJPIA Announcement Post',
        url: 'https://www.facebook.com/share/p/18UEvdW5m3/',
        type: 'social'
      }
    ]
  }
];

export const referencePersons: ReferencePerson[] = [
  {
    name: 'Mr. Julian S. Pilapil',
    title: 'Character & Professional Reference',
    relationship: 'Academic & Professional Reference',
    phone: '(+63) 920 947 0441',
    email: 'julianpilapil2@gmail.com'
  }
];
