import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ML Risk Predictor',
  description: 'Machine learning model for predictive risk analysis and pattern recognition using TensorFlow and Scikit-learn.',
  openGraph: {
    title: 'ML Risk Predictor | Yash Parmar',
    description: 'Machine learning model for predictive risk analysis and pattern recognition.',
    url: 'https://yashparmar.dev/projects/ml-predictor',
  },
};

const PLANNED_STACK = [
  { name: 'Python',       role: 'Core language for model development and data processing' },
  { name: 'TensorFlow',   role: 'Deep learning framework for neural network architecture' },
  { name: 'Scikit-learn', role: 'Classical ML models, preprocessing, and evaluation metrics' },
  { name: 'Pandas',       role: 'Data manipulation, cleaning, and feature engineering' },
  { name: 'Flask',        role: 'REST API layer for model inference and integration' },
];

const PLANNED_FEATURES = [
  {
    title:       'Risk Classification Engine',
    description: 'Multi-class classification model to categorize risk levels from structured input data.',
  },
  {
    title:       'Pattern Recognition',
    description: 'Identifies recurring patterns in historical data using time-series analysis techniques.',
  },
  {
    title:       'Feature Importance Analysis',
    description: 'SHAP-based explainability layer to surface which features drive predictions.',
  },
  {
    title:       'REST API Inference',
    description: 'Flask API endpoint for real-time predictions with request validation and rate limiting.',
  },
  {
    title:       'Model Evaluation Dashboard',
    description: 'Precision, recall, F1 score, and confusion matrix tracking across model iterations.',
  },
  {
    title:       'Data Pipeline',
    description: 'Automated ingestion, preprocessing, and validation pipeline using Pandas.',
  },
];

export default function MLPredictorPage() {
  return (
    <main className="text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">

        {/* BACK LINK */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: '#60a5fa' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </div>

        {/* TITLE SECTION */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: 'rgba(168,85,247,0.12)',
                border:     '1px solid rgba(168,85,247,0.3)',
                color:      '#c084fc',
              }}
            >
              In Development
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight">ML Risk Predictor</h1>

          <p className="text-lg text-gray-400 leading-relaxed">
            A machine learning system for predictive risk analysis and pattern recognition.
            Designed to classify risk levels from structured data and surface actionable insights
            through an explainability layer and REST API interface.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="space-y-2 text-sm">
              <h3 className="text-base font-semibold text-gray-200 mb-3">Planned Stack</h3>
              <ul className="space-y-1 text-gray-400">
                <li><strong className="text-gray-300">Model:</strong> TensorFlow, Scikit-learn</li>
                <li><strong className="text-gray-300">Data:</strong> Pandas, NumPy</li>
                <li><strong className="text-gray-300">API:</strong> Flask</li>
                <li><strong className="text-gray-300">Explainability:</strong> SHAP</li>
                <li><strong className="text-gray-300">Language:</strong> Python 3.11+</li>
              </ul>
            </div>

            <div className="space-y-2 text-sm">
              <h3 className="text-base font-semibold text-gray-200 mb-3">Project Info</h3>
              <ul className="space-y-1 text-gray-400">
                <li><strong className="text-gray-300">Role:</strong> ML Engineer</li>
                <li><strong className="text-gray-300">Status:</strong> In Development</li>
                <li><strong className="text-gray-300">GitHub:</strong> <span className="text-gray-500">Coming soon</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-gray-400 leading-relaxed">
            ML Risk Predictor is a machine learning project aimed at building a production-ready
            risk analysis pipeline. The core objective is to move beyond rule-based risk checks
            toward data-driven probabilistic classification — enabling faster, more nuanced
            risk assessments across structured datasets. The system will expose predictions
            via a Flask REST API for downstream integration.
          </p>
        </section>

        {/* PROBLEM STATEMENT */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Problem Statement</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Rule-based risk systems are brittle and require constant manual tuning.</li>
            <li>No automated pattern detection in historical risk data.</li>
            <li>Lack of explainability in current risk classification workflows.</li>
            <li>No API interface for model inference in existing pipelines.</li>
            <li>Difficulty quantifying compound risk from multi-variable inputs.</li>
          </ul>
        </section>

        {/* PLANNED TECH STACK */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Planned Tech Stack</h2>
          <div className="space-y-3">
            {PLANNED_STACK.map(item => (
              <div
                key={item.name}
                className="flex items-start gap-4 border border-gray-700 rounded-lg p-4"
                style={{ background: 'rgba(15,23,42,0.5)' }}
              >
                <span
                  className="shrink-0 px-2.5 py-0.5 text-xs font-semibold rounded-md mt-0.5"
                  style={{
                    background: 'rgba(59,130,246,0.12)',
                    border:     '1px solid rgba(59,130,246,0.25)',
                    color:      '#93c5fd',
                  }}
                >
                  {item.name}
                </span>
                <p className="text-gray-400 text-sm">{item.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PLANNED FEATURES */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Planned Features</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {PLANNED_FEATURES.map(feature => (
              <div
                key={feature.title}
                className="border border-gray-700 rounded-lg p-4"
                style={{ background: 'rgba(15,23,42,0.5)' }}
              >
                <h3 className="font-semibold mb-2 text-blue-400">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE FLOW */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Planned Architecture</h2>
          <div className="flex flex-col items-center space-y-4 text-sm">
            {[
              { label: 'Data Ingestion',         desc: 'Raw structured data input → Pandas preprocessing pipeline' },
              { label: 'Feature Engineering',    desc: 'Normalization, encoding, and SHAP-compatible feature selection' },
              { label: 'Model Training',          desc: 'Scikit-learn baseline + TensorFlow deep classification model' },
              { label: 'Evaluation & Tuning',    desc: 'Cross-validation, confusion matrix, precision & recall scoring' },
              { label: 'Flask API Deployment',   desc: 'REST endpoint for real-time inference with input validation' },
            ].map((step, i, arr) => (
              <div key={step.label} className="w-full max-w-lg">
                <div
                  className="border border-gray-700 rounded-lg p-4 text-center"
                  style={{ background: 'rgba(15,23,42,0.5)' }}
                >
                  <h3 className="font-semibold mb-1">{step.label}</h3>
                  <p className="text-gray-400 text-xs">{step.desc}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="text-center mt-4 text-gray-600">↓</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* EXPECTED TIMELINE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Expected Milestones</h2>
          <div className="space-y-3">
            {[
              { phase: 'Phase 1', task: 'Dataset collection and preprocessing pipeline',       status: 'Planned' },
              { phase: 'Phase 2', task: 'Baseline Scikit-learn model and evaluation metrics',  status: 'Planned' },
              { phase: 'Phase 3', task: 'TensorFlow deep classification model',                status: 'Planned' },
              { phase: 'Phase 4', task: 'SHAP explainability integration',                     status: 'Planned' },
              { phase: 'Phase 5', task: 'Flask REST API and deployment',                       status: 'Planned' },
            ].map(item => (
              <div
                key={item.phase}
                className="flex items-center gap-4 border border-gray-800 rounded-lg px-4 py-3 text-sm"
              >
                <span className="shrink-0 font-mono text-xs text-blue-400 w-16">{item.phase}</span>
                <span className="flex-1 text-gray-300">{item.task}</span>
                <span
                  className="shrink-0 px-2 py-0.5 text-xs rounded-full"
                  style={{
                    background: 'rgba(168,85,247,0.1)',
                    border:     '1px solid rgba(168,85,247,0.25)',
                    color:      '#c084fc',
                  }}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* BACK TO PROJECTS LINK */}
        <section className="pt-8 border-t border-gray-800">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: '#60a5fa' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </section>

      </div>
    </main>
  );
}
