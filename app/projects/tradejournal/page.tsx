export default function TradeJournalPage() {
  return (
    <main className="bg-[#0F172A] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        
        {/* TITLE SECTION */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">TradeJournal Pro+</h1>
          
          <p className="text-lg text-gray-400 leading-relaxed">
            A multi-market trading analytics platform focused on risk discipline, behavioral consistency, 
            and structured performance tracking across Equity, F&O, and Forex markets.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="space-y-2 text-sm">
              <h3 className="text-base font-semibold text-gray-200 mb-3">Tech Stack</h3>
              <ul className="space-y-1 text-gray-400">
                <li><strong className="text-gray-300">Frontend:</strong> Next.js (App Router), TypeScript, Tailwind CSS</li>
                <li><strong className="text-gray-300">Backend:</strong> Node.js, Express</li>
                <li><strong className="text-gray-300">Database:</strong> MongoDB (Mongoose)</li>
                <li><strong className="text-gray-300">Authentication:</strong> JWT</li>
                <li><strong className="text-gray-300">Charts:</strong> Recharts</li>
              </ul>
            </div>

            <div className="space-y-2 text-sm">
              <h3 className="text-base font-semibold text-gray-200 mb-3">Project Info</h3>
              <ul className="space-y-1 text-gray-400">
                <li><strong className="text-gray-300">Role:</strong> Full-Stack Developer</li>
                <li><strong className="text-gray-300">Duration:</strong> Ongoing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* KEY CAPABILITIES SECTION */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Key Capabilities</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Multi-Market Tracking</h3>
              <p className="text-gray-400 text-sm">Supports Equity, F&O, Forex, Crypto, and Gold instruments.</p>
            </div>

            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Rule-Based Evaluation Engine</h3>
              <p className="text-gray-400 text-sm">Automated penalty scoring for discipline violations.</p>
            </div>

            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Session-Level Analytics</h3>
              <p className="text-gray-400 text-sm">Performance segmented by trading session.</p>
            </div>

            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Strategy Segmentation</h3>
              <p className="text-gray-400 text-sm">Win-rate and P&L breakdown by strategy.</p>
            </div>

            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Behavioral Insights</h3>
              <p className="text-gray-400 text-sm">Emotion tagging and consistency scoring.</p>
            </div>

            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Aggregation-Driven Analytics</h3>
              <p className="text-gray-400 text-sm">MongoDB pipelines powering backend analytics.</p>
            </div>
          </div>
        </section>

        {/* IMPACT SUMMARY SECTION */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Impact & Scope</h2>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-indigo-400">Multi-Market Coverage</h3>
              <p className="text-gray-400 text-sm">
                Supports Equity, F&O, Forex, Crypto, and Commodities.
              </p>
            </div>

            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-indigo-400">Discipline Scoring Engine</h3>
              <p className="text-gray-400 text-sm">
                Quantifies trade quality using automated penalty logic.
              </p>
            </div>

            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-indigo-400">Analytics-Driven Dashboard</h3>
              <p className="text-gray-400 text-sm">
                Session, strategy, and emotion-based performance insights.
              </p>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-gray-400 leading-relaxed">
            TradeJournal Pro+ is a full-stack trading analytics platform designed to help traders measure 
            not just profitability, but discipline and behavioral consistency. It integrates trade tracking, 
            rule validation, session analytics, and performance segmentation into a unified dashboard.
          </p>
        </section>

        {/* PROBLEM STATEMENT SECTION */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Problem Statement</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
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
          <h2 className="text-2xl font-semibold">System Architecture</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mt-4 text-indigo-400">Frontend</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mt-3">
                <li>Built with Next.js App Router.</li>
                <li>Modular dashboard layout.</li>
                <li>Reusable analytics components.</li>
                <li>Client/server component separation.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mt-4 text-indigo-400">Backend</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mt-3">
                <li>REST APIs for trades, sessions, and evaluations.</li>
                <li>Rule-based scoring engine.</li>
                <li>Aggregation logic for analytics.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mt-4 text-indigo-400">Database</h3>
              <p className="text-gray-300 mt-3 mb-2">Collections:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                <li>Users</li>
                <li>Trades</li>
                <li>Sessions</li>
                <li>Rules</li>
                <li>Evaluations</li>
              </ul>
              <p className="text-gray-300 mt-4 mb-2">Indexed queries used for:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                <li>Symbol filtering</li>
                <li>Session grouping</li>
                <li>Strategy segmentation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mt-4 text-indigo-400">Data Flow</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mt-3">
                <li>User → Journal Entry → MongoDB</li>
                <li>MongoDB → Aggregation → Analytics Engine</li>
                <li>Analytics → Dashboard Charts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE FLOW SECTION */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Architecture Flow</h2>
          
          <div className="flex flex-col items-center space-y-6 text-sm">
            <div className="w-full max-w-md border border-gray-700 rounded-lg p-4 text-center">
              <h3 className="font-semibold mb-2">UI Layer (Next.js Frontend)</h3>
              <p className="text-gray-400 text-sm">
                Handles trade entry, analytics visualization, and session evaluation UI.
              </p>
            </div>

            <div className="text-gray-500">↓</div>

            <div className="w-full max-w-md border border-gray-700 rounded-lg p-4 text-center">
              <h3 className="font-semibold mb-2">API Layer (Node + Express)</h3>
              <p className="text-gray-400 text-sm">
                Processes trade data, executes rule evaluation logic, and handles authentication.
              </p>
            </div>

            <div className="text-gray-500">↓</div>

            <div className="w-full max-w-md border border-gray-700 rounded-lg p-4 text-center">
              <h3 className="font-semibold mb-2">Business Logic Layer (Risk Engine + Scoring Engine)</h3>
              <p className="text-gray-400 text-sm">
                Implements risk validation, scoring engine, and analytics aggregation.
              </p>
            </div>

            <div className="text-gray-500">↓</div>

            <div className="w-full max-w-md border border-gray-700 rounded-lg p-4 text-center">
              <h3 className="font-semibold mb-2">Database Layer (MongoDB Collections + Aggregations)</h3>
              <p className="text-gray-400 text-sm">
                Stores users, trades, sessions, rules, and evaluation results.
              </p>
            </div>
          </div>
        </section>

        {/* CORE FEATURES SECTION */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Core Features</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mt-4 text-indigo-400">Multi-Market Support</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mt-3">
                <li>NSE (NIFTY, SENSEX)</li>
                <li>Crypto (BTCUSD)</li>
                <li>Forex (EURUSD)</li>
                <li>Gold (XAUUSD)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mt-4 text-indigo-400">Risk Engine</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mt-3">
                <li>Risk % validation</li>
                <li>R:R ratio calculation</li>
                <li>Stop-loss enforcement detection</li>
                <li>Penalty scoring for violations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mt-4 text-indigo-400">Trade Evaluation Module</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mt-3">
                <li>Quality score (0–100)</li>
                <li>BAD / AVERAGE / GOOD classification</li>
                <li>Issue detection with penalty mapping</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mt-4 text-indigo-400">Session Analytics</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mt-3">
                <li>Win/Loss distribution</li>
                <li>Rule compliance %</li>
                <li>Performance by trading session</li>
                <li>Emotion-based analysis</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mt-4 text-indigo-400">Behavioral Insights</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mt-3">
                <li>Strategy segmentation (ICT, Scalping, Supply/Demand)</li>
                <li>Emotion tagging</li>
                <li>Consistency scoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ENGINEERING CHALLENGES SECTION */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Engineering Challenges</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Handling floating point precision issues in financial calculations (P&L, Risk %, R-multiple).</li>
            <li>Designing a modular rule-based scoring engine for extensibility.</li>
            <li>Structuring MongoDB aggregation pipelines for session and strategy analytics.</li>
            <li>Maintaining UI state synchronization after trade mutations.</li>
            <li>Designing scalable schema relationships between trades, sessions, and evaluations.</li>
          </ul>
        </section>

        {/* TECHNICAL DECISIONS SECTION */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Technical Decisions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mt-4 text-indigo-400">Rule-Based Evaluation Engine</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mt-3">
                <li>Built a configurable penalty-based scoring system.</li>
                <li>Designed to allow adding new rules without modifying evaluation core.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mt-4 text-indigo-400">MongoDB Aggregation Strategy</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mt-3">
                <li>Used aggregation pipelines for grouped analytics.</li>
                <li>Reduced computation on frontend by pre-processing in backend.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mt-4 text-indigo-400">Component Architecture</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400 mt-3">
                <li>Separated analytics components for reusability.</li>
                <li>Maintained server/client separation for performance.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* LIVE ACCESS & SOURCE SECTION */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Live Access & Source</h2>
          
          <p className="text-gray-400 max-w-2xl">
            This project is structured as a full-stack analytical system with a modular architecture. 
            The source code demonstrates separation of concerns between UI, API, business logic, and data layers.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-md font-medium"
            >
              View Source Code
            </a>
            <a 
              href="#"
              className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-md font-medium"
            >
              Deployment Plan
            </a>
          </div>
        </section>

        {/* DEPLOYMENT & SCALABILITY PLAN SECTION */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Deployment & Scalability Plan</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Planned deployment using Vercel (frontend) and Render/Node hosting.</li>
            <li>MongoDB Atlas for production database.</li>
            <li>Environment-based configuration for secure JWT handling.</li>
            <li>Index optimization for large trade datasets.</li>
            <li>Pagination and lazy loading for analytics sections.</li>
          </ul>
        </section>

        {/* WHAT I LEARNED SECTION */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">What I Learned</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Designing analytical systems beyond CRUD.</li>
            <li>Financial metric normalization and consistency scoring.</li>
            <li>Backend-driven analytics vs frontend-heavy computation.</li>
            <li>Importance of rule validation in user-facing systems.</li>
            <li>Structuring full-stack projects with long-term scalability in mind.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
