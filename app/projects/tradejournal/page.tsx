import type { Metadata } from 'next';
import Link from 'next/link';
import FeatureCard from '@/components/ui/FeatureCard';

export const metadata: Metadata = {
  title: 'TradeJournal Pro+',
  description: 'Multi-market trading analytics platform with rule-based scoring, session analytics, and behavioral tracking across Equity, F&O, and Forex markets.',
  openGraph: {
    title: 'TradeJournal Pro+ | Yash Parmar',
    description: 'Multi-market trading analytics platform focused on risk discipline and structured performance tracking.',
    url: 'https://yashparmar.dev/projects/tradejournal',
  },
};

export default function TradeJournalPage() {
  return (
    <main className="text-white min-h-screen pt-8">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">

        {/* BACK LINK */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors duration-200 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </span>
            Back to Projects
          </Link>
        </div>

        {/* TITLE SECTION */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">TradeJournal Pro+</h1>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            A multi-market trading analytics platform focused on risk discipline, behavioral consistency, 
            and structured performance tracking across Equity, F&O, and Forex markets.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-200 mb-3">Tech Stack</h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li><strong className="text-white">Frontend:</strong> Next.js (App Router), TypeScript, Tailwind CSS</li>
                <li><strong className="text-white">Backend:</strong> Node.js, Express</li>
                <li><strong className="text-white">Database:</strong> MongoDB (Mongoose)</li>
                <li><strong className="text-white">Authentication:</strong> JWT</li>
                <li><strong className="text-white">Charts:</strong> Recharts</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-200 mb-3">Project Info</h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li><strong className="text-white">Role:</strong> Full-Stack Developer</li>
                <li><strong className="text-white">Duration:</strong> Ongoing</li>
                <li>
                  <strong className="text-white">GitHub:</strong>{' '}
                  <a href="https://github.com/Yash-109/Trading-Journal" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Yash-109/Trading-Journal</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* KEY CAPABILITIES SECTION */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Key Capabilities</h2>
            <div className="h-[2px] w-10 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Multi-Market Tracking"
              description="Supports Equity, F&O, Forex, Crypto, and Gold instruments."
            />

            <FeatureCard
              title="Rule-Based Evaluation Engine"
              description="Automated penalty scoring for discipline violations."
            />

            <FeatureCard
              title="Session-Level Analytics"
              description="Performance segmented by trading session."
            />

            <FeatureCard
              title="Strategy Segmentation"
              description="Win-rate and P&L breakdown by strategy."
            />

            <FeatureCard
              title="Behavioral Insights"
              description="Emotion tagging and consistency scoring."
            />

            <FeatureCard
              title="Aggregation-Driven Analytics"
              description="MongoDB pipelines powering backend analytics."
              className="border-gray-700 hover:border-blue-500/40"
              titleClassName="group-hover:text-blue-400"
              style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)' }}
            />
          </div>
        </section>

        {/* IMPACT SUMMARY SECTION */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Impact & Scope</h2>
            <div className="h-[2px] w-10 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full" />
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <FeatureCard
              title="Multi-Market Coverage"
              description="Supports Equity, F&O, Forex, Crypto, and Commodities."
              hoverTitle={false}
              titleClassName="text-teal-400"
            />

            <FeatureCard
              title="Discipline Scoring Engine"
              description="Quantifies trade quality using automated penalty logic."
              hoverTitle={false}
              titleClassName="text-teal-400"
            />

            <FeatureCard
              title="Analytics-Driven Dashboard"
              description="Session, strategy, and emotion-based performance insights."
              hoverTitle={false}
              titleClassName="text-teal-400"
            />
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Overview</h2>
            <div className="h-[2px] w-10 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full" />
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            TradeJournal Pro+ is a full-stack trading analytics platform designed to help traders measure 
            not just profitability, but discipline and behavioral consistency. It integrates trade tracking, 
            rule validation, session analytics, and performance segmentation into a unified dashboard.
          </p>
        </section>

        {/* PROBLEM STATEMENT SECTION */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Problem Statement</h2>
            <div className="h-[2px] w-10 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full" />
          </div>
          <ul className="list-disc list-inside space-y-3 text-gray-300 text-base leading-relaxed">
            <li>Retail traders rely on spreadsheets or unstructured notes.</li>
            <li>No automated risk validation.</li>
            <li>No rule compliance scoring.</li>
            <li>No session-based analytics.</li>
            <li>No behavioral pattern tracking.</li>
            <li>Difficult to identify performance weaknesses.</li>
          </ul>
        </section>

        {/* SYSTEM ARCHITECTURE SECTION */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">System Architecture</h2>
            <div className="h-[2px] w-10 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full" />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mt-4 text-teal-400">Frontend</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base mt-3">
                <li>Built with Next.js App Router.</li>
                <li>Modular dashboard layout.</li>
                <li>Reusable analytics components.</li>
                <li>Client/server component separation.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mt-4 text-teal-400">Backend</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base mt-3">
                <li>REST APIs for trades, sessions, and evaluations.</li>
                <li>Rule-based scoring engine.</li>
                <li>Aggregation logic for analytics.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mt-4 text-teal-400">Database</h3>
              <p className="text-gray-300 mt-3 mb-2 text-base">Collections:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base ml-4">
                <li>Users</li>
                <li>Trades</li>
                <li>Sessions</li>
                <li>Rules</li>
                <li>Evaluations</li>
              </ul>
              <p className="text-gray-300 mt-4 mb-2 text-base">Indexed queries used for:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base ml-4">
                <li>Symbol filtering</li>
                <li>Session grouping</li>
                <li>Strategy segmentation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mt-4 text-teal-400">Data Flow</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base mt-3">
                <li>User → Journal Entry → MongoDB</li>
                <li>MongoDB → Aggregation → Analytics Engine</li>
                <li>Analytics → Dashboard Charts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE FLOW SECTION */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Architecture Flow</h2>
            <div className="h-[2px] w-10 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full" />
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full max-w-lg flex flex-col items-center">
              <div className="w-full rounded-xl p-6 text-center border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:border-teal-500/40 transition-all duration-300">
                <h3 className="font-bold text-lg mb-2">UI Layer (Next.js Frontend)</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Handles trade entry, analytics visualization, and session evaluation UI.
                </p>
              </div>
              <div className="text-gray-500 text-2xl mt-4">↓</div>
            </div>

            <div className="w-full max-w-lg flex flex-col items-center">
              <div className="w-full rounded-xl p-6 text-center border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:border-teal-500/40 transition-all duration-300">
                <h3 className="font-bold text-lg mb-2">API Layer (Node + Express)</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Processes trade data, executes rule evaluation logic, and handles authentication.
                </p>
              </div>
              <div className="text-gray-500 text-2xl mt-4">↓</div>
            </div>

            <div className="w-full max-w-lg flex flex-col items-center">
              <div className="w-full rounded-xl p-6 text-center border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:border-teal-500/40 transition-all duration-300">
                <h3 className="font-bold text-lg mb-2">Business Logic Layer (Risk Engine + Scoring Engine)</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Implements risk validation, scoring engine, and analytics aggregation.
                </p>
              </div>
              <div className="text-gray-500 text-2xl mt-4">↓</div>
            </div>

            <div className="w-full max-w-lg">
              <div className="w-full rounded-xl p-6 text-center border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:border-teal-500/40 transition-all duration-300">
                <h3 className="font-bold text-lg mb-2">Database Layer (MongoDB Collections + Aggregations)</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Stores users, trades, sessions, rules, and evaluation results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE FEATURES SECTION */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Core Features</h2>
            <div className="h-[2px] w-10 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full" />
          </div>

            <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mt-4 text-blue-400">Multi-Market Support</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base mt-3">
                <li>NSE (NIFTY, SENSEX)</li>
                <li>Crypto (BTCUSD)</li>
                <li>Forex (EURUSD)</li>
                <li>Gold (XAUUSD)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mt-4 text-blue-400">Risk Engine</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base mt-3">
                <li>Risk % validation</li>
                <li>R:R ratio calculation</li>
                <li>Stop-loss enforcement detection</li>
                <li>Penalty scoring for violations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mt-4 text-blue-400">Trade Evaluation Module</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base mt-3">
                <li>Quality score (0–100)</li>
                <li>BAD / AVERAGE / GOOD classification</li>
                <li>Issue detection with penalty mapping</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mt-4 text-blue-400">Session Analytics</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base mt-3">
                <li>Win/Loss distribution</li>
                <li>Rule compliance %</li>
                <li>Performance by trading session</li>
                <li>Emotion-based analysis</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mt-4 text-blue-400">Behavioral Insights</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base mt-3">
                <li>Strategy segmentation (ICT, Scalping, Supply/Demand)</li>
                <li>Emotion tagging</li>
                <li>Consistency scoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ENGINEERING CHALLENGES SECTION */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Engineering Challenges</h2>
            <div className="h-[2px] w-10 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full" />
          </div>
          <ul className="list-disc list-inside space-y-3 text-gray-300 text-base leading-relaxed">
            <li>Handling floating point precision issues in financial calculations (P&L, Risk %, R-multiple).</li>
            <li>Designing a modular rule-based scoring engine for extensibility.</li>
            <li>Structuring MongoDB aggregation pipelines for session and strategy analytics.</li>
            <li>Maintaining UI state synchronization after trade mutations.</li>
            <li>Designing scalable schema relationships between trades, sessions, and evaluations.</li>
          </ul>
        </section>

        {/* TECHNICAL DECISIONS SECTION */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Technical Decisions</h2>
            <div className="h-[2px] w-10 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full" />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mt-4 text-blue-400">Rule-Based Evaluation Engine</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base mt-3">
                <li>Built a configurable penalty-based scoring system.</li>
                <li>Designed to allow adding new rules without modifying evaluation core.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mt-4 text-blue-400">MongoDB Aggregation Strategy</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base mt-3">
                <li>Used aggregation pipelines for grouped analytics.</li>
                <li>Reduced computation on frontend by pre-processing in backend.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mt-4 text-blue-400">Component Architecture</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base mt-3">
                <li>Separated analytics components for reusability.</li>
                <li>Maintained server/client separation for performance.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* LIVE ACCESS & SOURCE SECTION */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Live Access & Source</h2>
            <div className="h-[2px] w-10 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full" />
          </div>
          
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            This project is structured as a full-stack analytical system with a modular architecture. 
            The source code demonstrates separation of concerns between UI, API, business logic, and data layers.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://github.com/Yash-109/Trading-Journal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-blue-500/60 px-6 py-3 rounded-xl font-semibold text-base text-gray-300 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              View on GitHub
            </a>
          </div>
        </section>

        {/* DEPLOYMENT & SCALABILITY PLAN SECTION */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Deployment & Scalability Plan</h2>
            <div className="h-[2px] w-10 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full" />
          </div>
          <ul className="list-disc list-inside space-y-3 text-gray-300 text-base leading-relaxed">
            <li>Planned deployment using Vercel (frontend) and Render/Node hosting.</li>
            <li>MongoDB Atlas for production database.</li>
            <li>Environment-based configuration for secure JWT handling.</li>
            <li>Index optimization for large trade datasets.</li>
            <li>Pagination and lazy loading for analytics sections.</li>
          </ul>
        </section>

        {/* WHAT I LEARNED SECTION */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">What I Learned</h2>
            <div className="h-[2px] w-10 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full" />
          </div>
          <ul className="list-disc list-inside space-y-3 text-gray-300 text-base leading-relaxed">
            <li>Designing analytical systems beyond CRUD.</li>
            <li>Financial metric normalization and consistency scoring.</li>
            <li>Backend-driven analytics vs frontend-heavy computation.</li>
            <li>Importance of rule validation in user-facing systems.</li>
            <li>Structuring full-stack projects with long-term scalability in mind.</li>
          </ul>
        </section>

        {/* BACK TO PROJECTS LINK */}
        <section className="pt-8 border-t border-white/10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors duration-200 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </span>
            Back to Projects
          </Link>
        </section>

      </div>
    </main>
  );
}
