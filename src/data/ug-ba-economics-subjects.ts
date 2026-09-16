import type { Subject } from '../models';

export const baEconomicsSubjectsData: Subject[] = [
  {
    id: 'veda-subject-ba-eco-micro',
    slug: 'ba-economics-microeconomics',
    title: 'Microeconomics',
    shortTitle: 'Microeconomics',
    description: 'Consumer theory, producer theory, market structures, game theory, and welfare economics.',
    guide: `## Overview
Microeconomics is the study of individual economic agents — consumers, firms, and markets. It provides the toolkit for understanding prices, incentives, and resource allocation.

## What You Will Learn
### Consumer Theory
Utility maximisation: ordinal utility, indifference curves, budget constraint, consumer equilibrium. Engel curves, demand curve derivation. Substitution and income effects (Slutsky equation). Consumer surplus.

### Producer Theory
Production functions: TP, AP, MP, isoquants, isocosts. Returns to scale. Cost curves: TC, TVC, TFC, MC, AVC, AC. Short-run and long-run cost analysis. Duality between cost and production.

### Market Structures
Perfect competition: equilibrium, shutdown, supply curve. Monopoly: profit maximisation, deadweight loss, price discrimination (1st, 2nd, 3rd degree). Monopolistic competition: short-run and long-run equilibrium, excess capacity theorem. Oligopoly: Cournot, Bertrand, Stackelberg, kinked demand curve. Game theory: Nash equilibrium, prisoner's dilemma, dominant strategy.

### Factor Markets
Labour demand and supply, wage determination, bilateral monopoly, minimum wages. Capital theory, present value.

### Welfare Economics
Pareto efficiency, social welfare functions, Arrow's impossibility theorem. Externalities (Coase theorem), public goods (free rider problem).

## UGC NET Economics
Microeconomics is Unit 1 and accounts for **15–20%** of UGC NET Economics.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-ba-eco-consumer-theory', 'veda-topic-ba-eco-market-structures', 'veda-topic-ba-eco-welfare'],
    courseIds: [],
    examIds: ['veda-exam-ugc-net-economics', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-ba-eco-macro', 'veda-subject-ba-eco-statistics'],
    tags: ['microeconomics', 'consumer-theory', 'game-theory', 'market-structures', 'welfare'],
    color: '#4a044e',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ba-eco-macro',
    slug: 'ba-economics-macroeconomics',
    title: 'Macroeconomics',
    shortTitle: 'Macroeconomics',
    description: 'National income, IS-LM, aggregate demand-supply, monetary and fiscal policy, and open economy models.',
    guide: `## Overview
Macroeconomics analyses the economy as a whole — GDP, inflation, unemployment, and policy. It is the framework for understanding RBI decisions, Union Budgets, and global economic events.

## What You Will Learn
### National Income
GDP: expenditure, income, and output methods. GNP, NNP, NNI at factor cost. GDP deflator vs CPI. Circular flow of income. Multiplier effect: investment, government, balanced budget.

### Classical & Keynesian Models
Classical: Say's Law, quantity theory of money, dichotomy. Keynesian: effective demand, consumption function (MPC, MPS), investment function (MEC, MEI). 45° line model.

### IS-LM Model
Goods market (IS curve): Y = C+I+G, fiscal multiplier. Money market (LM curve): money demand (Liquidity Preference), money supply. Policy analysis: crowding out, liquidity trap.

### Aggregate Demand & Supply
AD curve and its derivation from IS-LM. SRAS and LRAS. Stagflation, supply shocks, Phillips curve (short-run and long-run), natural rate of unemployment.

### Monetary Policy
RBI tools: REPO rate, Reverse REPO, CRR, SLR, OMO. Monetary transmission mechanism. Inflation targeting.

### Fiscal Policy
Budget: revenue and capital, deficit types (revenue, fiscal, primary). Automatic stabilisers. Ricardian equivalence. FRBM Act.

### Open Economy
Balance of Payments (current and capital account). Exchange rate: fixed vs flexible, PPP theory, interest rate parity. Mundell-Fleming model.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-ba-eco-national-income', 'veda-topic-ba-eco-is-lm', 'veda-topic-ba-eco-monetary-fiscal'],
    courseIds: [],
    examIds: ['veda-exam-ugc-net-economics', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-ba-eco-micro', 'veda-subject-ba-eco-development'],
    tags: ['macroeconomics', 'gdp', 'is-lm', 'fiscal-policy', 'monetary-policy'],
    color: '#4a044e',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ba-eco-development',
    slug: 'ba-economics-development',
    title: 'Development Economics & Indian Economy',
    shortTitle: 'Development Eco',
    description: 'Theories of development, poverty, inequality, planning, agriculture, industry, and India\'s economic policy.',
    guide: `## Overview
Development Economics explains why some countries grow rich while others remain poor — and what policies can accelerate growth. Indian Economy applies these concepts to India's unique context.

## What You Will Learn
### Development Theories
Lewis two-sector model. Rostow's stages of growth. Big Push theory (Rosenstein-Rodan). Human Development Index (HDI). Sustainable Development Goals (SDGs).

### Poverty & Inequality
Poverty line: NSSO surveys, Tendulkar Committee, Rangarajan Committee. Poverty measures: headcount ratio, poverty gap, FGT index. Lorenz curve and Gini coefficient. Redistribution policies.

### Indian Planning
Five Year Plans, NITI Aayog (replaced Planning Commission 2015). Green Revolution and its impact. Industrial Policy — licence raj to liberalisation (1991 reforms).

### Agriculture in India
Structure, Green Revolution, MSP, APMC, PM-FASAL, Farmer Income Doubling. Agricultural credit, NABARD, Kisan Credit Card.

### Industry & Services
Make in India, PLI schemes. MSME sector — definition, importance, schemes. IT/ITES sector — India's comparative advantage. Start-up India, Digital India.

### External Sector
India's trade policy evolution. Import substitution vs export promotion. WTO, FTAs (UAE, Australia, UK negotiations). FDI and FPI flows. Exchange rate management by RBI.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-ba-eco-poverty-inequality', 'veda-topic-ba-eco-indian-planning', 'veda-topic-ba-eco-agriculture'],
    courseIds: [],
    examIds: ['veda-exam-ugc-net-economics', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-ba-eco-macro', 'veda-subject-ba-eco-international'],
    tags: ['development-economics', 'indian-economy', 'poverty', 'planning', 'agriculture'],
    color: '#4a044e',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ba-eco-international',
    slug: 'ba-economics-international',
    title: 'International Economics',
    shortTitle: 'International Eco',
    description: 'Trade theories, trade policy, balance of payments, exchange rates, and international financial institutions.',
    guide: `## Overview
International Economics explains why countries trade, what restricts trade, and how exchange rates are determined. India's place in the global economy makes this highly relevant.

## What You Will Learn
### Theories of Trade
Absolute advantage (Smith), comparative advantage (Ricardo). Heckscher-Ohlin theorem: factor endowments determine trade. Stolper-Samuelson theorem. Leontief paradox. New trade theory (Krugman): economies of scale and product differentiation.

### Trade Policy
Free trade vs protection: infant industry, terms of trade, optimum tariff arguments. Tariff analysis: consumer surplus, producer surplus, DWL. Non-tariff barriers (quotas, VERs, subsidies). WTO: GATT principles, dispute settlement, Doha Round.

### Balance of Payments
Current account (trade in goods, trade in services, primary income, transfers). Capital and financial account (FDI, FPI, ECBs). BOP equilibrium and adjustment.

### Exchange Rate
Determination: purchasing power parity (absolute and relative PPP). Interest rate parity (covered, uncovered). Fixed, floating, and managed float regimes. Currency appreciation/depreciation effects on trade.

### International Financial Institutions
IMF: SDRs, programs, conditionality. World Bank Group. ADB, NDB. India and these institutions.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-ba-eco-trade-theories', 'veda-topic-ba-eco-bop', 'veda-topic-ba-eco-exchange-rate'],
    courseIds: [],
    examIds: ['veda-exam-ugc-net-economics', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-ba-eco-macro', 'veda-subject-ba-eco-development'],
    tags: ['international-economics', 'trade', 'comparative-advantage', 'bop', 'exchange-rate'],
    color: '#4a044e',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ba-eco-statistics',
    slug: 'ba-economics-statistics',
    title: 'Statistics & Econometrics',
    shortTitle: 'Econometrics',
    description: 'Descriptive statistics, probability, hypothesis testing, regression, and econometric methods.',
    guide: `## Overview
Econometrics gives economists the tools to test theories with data — it is the empirical engine of economics research. Data science and economic research both require regression analysis.

## What You Will Learn
### Descriptive Statistics
Mean, median, mode. Measures of dispersion: range, variance, standard deviation, coefficient of variation. Skewness, kurtosis. Index numbers: Laspeyres, Paasche, Fisher.

### Probability & Distributions
Probability axioms. Normal, Binomial, Poisson, t, F, chi-square distributions. Central Limit Theorem.

### Hypothesis Testing
Type I and Type II errors, p-values, significance levels. z-test, t-test, F-test, chi-square test (goodness of fit, independence).

### Regression Analysis
Simple OLS: assumptions (BLUE — Gauss-Markov), interpretation of β, R², t-statistics, F-statistics. Multiple regression, multicollinearity, heteroscedasticity (White test, GLS), autocorrelation (Durbin-Watson).

### Econometric Methods
Panel data: fixed effects vs random effects. Instrumental variables. Probit and logit models. Time series: stationarity, ADF test, cointegration, Granger causality, ARIMA basics.

### Applications
Demand estimation, wage equations, production functions — empirical exercises.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-ba-eco-regression', 'veda-topic-ba-eco-hypothesis-testing', 'veda-topic-ba-eco-panel-data'],
    courseIds: [],
    examIds: ['veda-exam-ugc-net-economics', 'veda-exam-jam-mathematics'],
    relatedSubjectIds: ['veda-subject-ba-eco-micro', 'veda-subject-ba-eco-macro'],
    tags: ['econometrics', 'statistics', 'regression', 'hypothesis-testing', 'panel-data'],
    color: '#4a044e',
    updatedAt: '2026-09-16',
  },
];
