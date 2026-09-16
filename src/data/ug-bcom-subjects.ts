import type { Subject } from '../models';

export const bcomSubjectsData: Subject[] = [
  {
    id: 'veda-subject-bcom-financial-accounting',
    slug: 'bcom-financial-accounting',
    title: 'Financial Accounting',
    shortTitle: 'Financial Acc',
    description: 'Accounting principles, journal entries, trial balance, final accounts, and company accounts.',
    guide: `## Overview
Financial Accounting is the language of business — it records every transaction and produces the financial statements that investors, tax authorities, and managers rely on. It is Paper 1 of CA Foundation.

## What You Will Learn
### Accounting Principles & Concepts
GAAP, IFRS overview. Accounting concepts: entity, going concern, accrual, matching, materiality, conservatism, consistency.

### Journal, Ledger & Trial Balance
Rules of debit and credit. Journal entries for purchases, sales, returns, cash, credit, and adjustments. Ledger posting. Trial balance preparation.

### Subsidiary Books
Cash book (single, double, triple column), petty cash. Purchases register, sales register, returns books. Bank reconciliation statement (BRS).

### Final Accounts (Sole Trader & Partnership)
Trading account, Profit & Loss account, Balance Sheet. Adjustments: closing stock, outstanding expenses, prepaid expenses, depreciation, bad debts, provisions. Partnership accounts: P&L appropriation, capital accounts (fixed vs fluctuating), admission, retirement, death, dissolution.

### Company Accounts
Issue, forfeiture, and reissue of shares. Debentures. Financial statements of companies (Revised Schedule VI).

### Depreciation
SLM, WDV, and sum-of-years methods. Change in method and treatment.

## CA Foundation
Financial Accounting is Paper 1 (100 marks) of CA Foundation — the most scoring paper if fundamentals are clear.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bcom-journal-ledger', 'veda-topic-bcom-final-accounts', 'veda-topic-bcom-company-accounts'],
    courseIds: [],
    examIds: ['veda-exam-ca-foundation', 'veda-exam-cuet-ug', 'veda-exam-ugc-net-commerce'],
    relatedSubjectIds: ['veda-subject-bcom-cost-accounting', 'veda-subject-bcom-corporate-law'],
    tags: ['financial-accounting', 'journal', 'balance-sheet', 'company-accounts', 'ca-foundation'],
    color: '#78350f',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bcom-cost-accounting',
    slug: 'bcom-cost-accounting',
    title: 'Cost & Management Accounting',
    shortTitle: 'Cost Accounting',
    description: 'Cost classification, job costing, process costing, standard costing, marginal costing, and budgetary control.',
    guide: `## Overview
Cost Accounting helps businesses understand what things actually cost — enabling pricing decisions, profitability analysis, and cost reduction. It feeds directly into CA Foundation Paper 3 (quantitative/management accounting).

## What You Will Learn
### Cost Concepts & Classification
Types of costs: fixed, variable, semi-variable; direct and indirect; product and period costs. Cost centre and cost unit.

### Material, Labour & Overhead
Material: FIFO, LIFO, Weighted Average valuation. Labour: overtime, idle time, labour turnover. Overhead: absorption, over/under-absorption.

### Job Costing & Contract Costing
Job cost sheet. Contract accounts, notional profit, work certified.

### Process Costing
Normal and abnormal loss, equivalent units, joint products and by-products.

### Standard Costing & Variance Analysis
Material, labour, variable overhead variances (price, quantity/efficiency, volume). Fixed overhead variances. Management by exception.

### Marginal Costing
Contribution = Sales − Variable Cost. P/V ratio, break-even point (BEP), margin of safety. Key factor analysis, make or buy, limiting factor.

### Budgetary Control
Functional, master, and flexible budgets. Sales budget, production budget, cash budget.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bcom-marginal-costing', 'veda-topic-bcom-standard-costing', 'veda-topic-bcom-process-costing'],
    courseIds: [],
    examIds: ['veda-exam-ca-foundation', 'veda-exam-ugc-net-commerce'],
    relatedSubjectIds: ['veda-subject-bcom-financial-accounting', 'veda-subject-bcom-business-management'],
    tags: ['cost-accounting', 'marginal-costing', 'standard-costing', 'budgeting', 'bep'],
    color: '#78350f',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bcom-taxation',
    slug: 'bcom-taxation',
    title: 'Income Tax & GST',
    shortTitle: 'Taxation',
    description: 'Indian income tax: heads of income, deductions, computation, TDS; GST: CGST/SGST/IGST, registration, returns.',
    guide: `## Overview
Taxation knowledge is mandatory for all commerce careers — accountants, auditors, financial analysts, and entrepreneurs must understand income tax and GST. These are also covered in CA Foundation/Intermediate.

## What You Will Learn
### Income Tax (Direct Tax)
Residential status, scope of total income. 5 heads of income: Salaries, HP, PGBP, Capital Gains, Other Sources. Key deductions: 80C, 80D, 80E, 80G, 80TTA. Agricultural income. Set-off and carry-forward of losses. Computation of tax liability.

### TDS & Advance Tax
TDS provisions: 194A (interest), 194C (contractor), 194J (professional fees). TDS returns (Form 24Q, 26Q). Advance tax schedule. Self-assessment tax.

### GST (Indirect Tax)
Dual GST: CGST, SGST, IGST. Taxable supply, exempt supply, zero-rated supply. Input Tax Credit (ITC): eligibility, conditions, reversal. Registration: mandatory threshold, voluntary. Returns: GSTR-1, GSTR-3B, GSTR-9. Invoice requirements.

### Customs Duty
Basic customs duty, countervailing duty, IGST on imports.

## Career Value
Every CA Foundation/Intermediate student, commerce graduate, and tax professional needs this — it is one of the highest-value skill sets in the Indian job market.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bcom-income-tax', 'veda-topic-bcom-tds-advance-tax', 'veda-topic-bcom-gst'],
    courseIds: [],
    examIds: ['veda-exam-ca-foundation', 'veda-exam-ugc-net-commerce'],
    relatedSubjectIds: ['veda-subject-bcom-financial-accounting', 'veda-subject-bcom-corporate-law'],
    tags: ['income-tax', 'gst', 'tds', 'taxation', 'ca'],
    color: '#78350f',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bcom-corporate-law',
    slug: 'bcom-corporate-law',
    title: 'Business Law & Company Law',
    shortTitle: 'Corporate Law',
    description: 'Contract Act 1872, Sale of Goods Act, Negotiable Instruments Act, Companies Act 2013, and corporate governance.',
    guide: `## Overview
Business Law forms the legal framework for all commercial activity — every contract, partnership, sale, and company incorporation is governed by these statutes.

## What You Will Learn
### Indian Contract Act 1872
Essentials of a valid contract. Offer and acceptance, consideration, capacity. Void, voidable, unenforceable contracts. Performance, discharge, breach, and remedies. Special contracts: indemnity, guarantee, bailment, pledge, agency.

### Sale of Goods Act 1930
Contract of sale, conditions and warranties. Transfer of property and risk. Remedies for breach.

### Negotiable Instruments Act 1881
Promissory note, bill of exchange, cheque. Negotiation, endorsement, dishonour, crossing of cheques. Liability of parties.

### Companies Act 2013
Types of companies. Incorporation procedure. Memorandum and Articles of Association. Share capital: types, issue, forfeiture. Directors: appointment, duties, disqualification, liabilities. Board meetings, AGM, resolutions. Auditors and audit. Winding up.

### Corporate Governance
Concept, SEBI regulations, independent directors, audit committee, corporate social responsibility (CSR Section 135).

## CA Foundation
Business Laws is Paper 2 of CA Foundation.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bcom-contract-law', 'veda-topic-bcom-companies-act', 'veda-topic-bcom-negotiable-instruments'],
    courseIds: [],
    examIds: ['veda-exam-ca-foundation', 'veda-exam-ugc-net-commerce'],
    relatedSubjectIds: ['veda-subject-bcom-financial-accounting', 'veda-subject-bcom-business-management'],
    tags: ['contract-act', 'companies-act', 'business-law', 'negotiable-instruments', 'corporate-governance'],
    color: '#78350f',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bcom-business-management',
    slug: 'bcom-business-management',
    title: 'Business Management & HRM',
    shortTitle: 'Management',
    description: 'Management functions, organisational behaviour, human resource management, and strategic management.',
    guide: `## Overview
Management knowledge is essential for anyone in a business role — from team leads to CEOs. Understanding how organisations work, motivate people, and make strategy is the foundation of every MBA programme.

## What You Will Learn
### Management Functions (POLC)
Planning: types, MBO. Organising: departmentation, span of control, delegation, decentralisation. Leading: leadership styles (autocratic, democratic, laissez-faire), motivation theories (Maslow, Herzberg, McGregor X/Y, Vroom). Controlling: types, MBO, balanced scorecard.

### Organisational Behaviour
Personality, perception, attitudes. Group dynamics, formal and informal groups, team building. Conflict and negotiation. Organisational culture and change.

### Human Resource Management
HRP, recruitment and selection, training and development, performance appraisal (360°, MBO-based). Compensation management, job evaluation. Industrial relations: trade unions, collective bargaining, grievance handling.

### Strategic Management
Vision, mission, SWOT analysis. Business strategies: cost leadership, differentiation, focus (Porter). PESTLE analysis, BCG matrix, Ansoff matrix.

### Entrepreneurship
Types of entrepreneurs, intrapreneurship, start-up ecosystem, funding stages (angel, VC, PE).`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bcom-management-functions', 'veda-topic-bcom-hrm', 'veda-topic-bcom-strategic-management'],
    courseIds: [],
    examIds: ['veda-exam-ugc-net-commerce', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-bcom-cost-accounting', 'veda-subject-bcom-taxation'],
    tags: ['management', 'hrm', 'organisational-behaviour', 'strategy', 'entrepreneurship'],
    color: '#78350f',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bcom-business-economics',
    slug: 'bcom-business-economics',
    title: 'Business Economics',
    shortTitle: 'Business Eco',
    description: 'Demand and supply, market structures, national income, money, banking, and Indian economic policy.',
    guide: `## Overview
Business Economics gives commerce students the economic framework for business decisions — from pricing products to understanding RBI policy and India's trade position.

## What You Will Learn
### Micro Economics (Business Application)
Demand analysis: law, elasticity (price, income, cross), demand forecasting. Supply analysis: cost functions (short-run, long-run), economies of scale. Market structures: perfect competition, monopoly, monopolistic competition, oligopoly (Cournot, kinked demand). Pricing strategies.

### Macro Economics
National income: GDP, GNP, NNP, NI — measurement methods. Business cycle: phases, indicators. Inflation: types, measures (WPI, CPI), control. Fiscal policy: budget, taxation, public debt. Monetary policy: RBI, REPO, Reverse REPO, CRR, SLR.

### Indian Economy
Planning and development — Five Year Plans, NITI Aayog. Poverty and inequality: BPL, MGNREGA. Sectors: agriculture, industry, services. Make in India, Digital India, PLI schemes. India in global trade (WTO, bilateral FTAs).

### Financial Markets
Primary and secondary markets. SEBI. Stock exchanges (NSE, BSE). Derivatives (futures and options) — basics.

## CA Foundation
Business Economics is a significant part of Paper 4 (BCK) of CA Foundation.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bcom-demand-supply', 'veda-topic-bcom-macro-monetary', 'veda-topic-bcom-indian-economy'],
    courseIds: [],
    examIds: ['veda-exam-ca-foundation', 'veda-exam-ugc-net-commerce', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-bcom-financial-accounting', 'veda-subject-bcom-business-management'],
    tags: ['business-economics', 'microeconomics', 'macroeconomics', 'indian-economy', 'monetary-policy'],
    color: '#78350f',
    updatedAt: '2026-09-16',
  },
];
