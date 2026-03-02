import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Electrotrack',
  description: 'Full-stack e-commerce platform for electronics retail with secure authentication, integrated Razorpay payments, and comprehensive admin analytics.',
  openGraph: {
    title: 'Electrotrack | Yash Parmar',
    description: 'Professional e-commerce platform for electronics retail with secure authentication and integrated payments.',
    url: 'https://yashparmar.dev/projects/electrotrack',
  },
};

export default function ElectrotrackPage() {
  return (
    <main className="text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-12">

        {/* BACK LINK */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-base font-semibold transition-all duration-200 hover:gap-3"
            style={{ color: '#60a5fa' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </div>
        
        {/* TITLE SECTION */}
        <section className="space-y-6">
          <h1 className="text-4xl font-black tracking-tight">Electrotrack</h1>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            A full-stack professional e-commerce platform for electronics retail with secure authentication, 
            integrated payments, and comprehensive admin analytics for revenue tracking.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-200 mb-3">Tech Stack</h3>
              <ul className="space-y-3 text-gray-300 text-base">
                <li><strong className="text-white">Frontend:</strong> Next.js 15.2.4 (App Router), TypeScript</li>
                <li><strong className="text-white">UI:</strong> Tailwind CSS, shadcn/ui, Lucide Icons</li>
                <li><strong className="text-white">Database:</strong> MongoDB</li>
                <li><strong className="text-white">Authentication:</strong> NextAuth.js, Google OAuth, bcryptjs</li>
                <li><strong className="text-white">Payment:</strong> Razorpay</li>
                <li><strong className="text-white">Email:</strong> Nodemailer (Gmail SMTP)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-200 mb-3">Project Info</h3>
              <ul className="space-y-3 text-gray-300 text-base">
                <li><strong className="text-white">Role:</strong> Full-Stack Developer</li>
                <li><strong className="text-white">Duration:</strong> Ongoing</li>
                <li>
                  <strong className="text-white">GitHub:</strong>{' '}
                  <a href="https://github.com/Yash-109/Electrotrack" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Yash-109/Electrotrack</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CORE FEATURES SECTION */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Core Features</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group rounded-xl p-6 border border-gray-700 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)' }}>
              <h3 className="font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors duration-200">Product Catalog & Filtering</h3>
              <p className="text-gray-300 text-base leading-relaxed">Browse electronics with advanced filtering and search capabilities.</p>
            </div>

            <div className="group rounded-xl p-6 border border-gray-700 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)' }}>
              <h3 className="font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors duration-200">Shopping Cart with Persistence</h3>
              <p className="text-gray-300 text-base leading-relaxed">Local storage-based cart that persists across sessions.</p>
            </div>

            <div className="group rounded-xl p-6 border border-gray-700 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)' }}>
              <h3 className="font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors duration-200">Razorpay Integration</h3>
              <p className="text-gray-300 text-base leading-relaxed">Secure payment processing with Razorpay checkout.</p>
            </div>

            <div className="group rounded-xl p-6 border border-gray-700 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)' }}>
              <h3 className="font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors duration-200">Google OAuth Login</h3>
              <p className="text-gray-300 text-base leading-relaxed">One-click authentication with Google accounts via NextAuth.js.</p>
            </div>

            <div className="group rounded-xl p-6 border border-gray-700 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)' }}>
              <h3 className="font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors duration-200">Admin Dashboard</h3>
              <p className="text-gray-300 text-base leading-relaxed">Revenue analytics, transaction monitoring, and order management.</p>
            </div>

            <div className="group rounded-xl p-6 border border-gray-700 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.5) 100%)' }}>
              <h3 className="font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors duration-200">Contact Form</h3>
              <p className="text-gray-300 text-base leading-relaxed">Nodemailer-powered email notifications for customer inquiries.</p>
            </div>
          </div>
        </section>

        {/* KEY CAPABILITIES SECTION */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Key Capabilities</h2>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="group rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,58,138,0.15) 100%)' }}>
              <h3 className="font-bold text-lg mb-3 text-blue-400">Full Authentication Flow</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Secure user registration, Google OAuth integration, and session management.
              </p>
            </div>

            <div className="group rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,58,138,0.15) 100%)' }}>
              <h3 className="font-bold text-lg mb-3 text-blue-400">Responsive E-commerce UI</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Mobile-first design with shadcn/ui components and Lucide icons.
              </p>
            </div>

            <div className="group rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,58,138,0.15) 100%)' }}>
              <h3 className="font-bold text-lg mb-3 text-blue-400">Admin Analytics</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Real-time revenue tracking, transaction history, and business insights.
              </p>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Overview</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Electrotrack is a professional-grade e-commerce platform built specifically for electronics retail. 
            The platform combines modern web technologies with secure payment processing and authentication to 
            deliver a seamless shopping experience. Built with Next.js 15.2.4 App Router and TypeScript, it 
            features a fully functional shopping cart, integrated Razorpay payments, Google OAuth authentication, 
            and a comprehensive admin dashboard for business analytics.
          </p>
        </section>

        {/* PROBLEM STATEMENT SECTION */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Problem Statement</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300 text-base leading-relaxed">
            <li>Need for a secure, scalable e-commerce platform for electronics products.</li>
            <li>Complex authentication flows requiring OAuth and traditional login support.</li>
            <li>Requirement for persistent shopping cart across sessions without database overhead.</li>
            <li>Integration challenges with payment gateways (Razorpay) in Next.js environment.</li>
            <li>Admin dashboard needs for real-time revenue and transaction analytics.</li>
            <li>Email notification system for order confirmations and customer inquiries.</li>
          </ul>
        </section>

        {/* SYSTEM ARCHITECTURE SECTION */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">System Architecture</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mt-4 text-blue-400">Frontend (Next.js 15.2.4)</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base mt-3">
                <li>App Router for file-based routing and layouts.</li>
                <li>TypeScript for type safety and better developer experience.</li>
                <li>shadcn/ui component library for consistent UI design.</li>
                <li>Tailwind CSS for utility-first styling.</li>
                <li>Lucide Icons for modern iconography.</li>
                <li>Client-side cart management with Local Storage.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mt-4 text-blue-400">Backend APIs (Next.js API Routes)</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base mt-3">
                <li>RESTful API endpoints for products, orders, and users.</li>
                <li>NextAuth.js for authentication middleware.</li>
                <li>MongoDB integration with Mongoose ODM.</li>
                <li>Server-side validation and error handling.</li>
                <li>Razorpay webhook handlers for payment verification.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mt-4 text-blue-400">Authentication (NextAuth.js)</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base mt-3">
                <li>Google OAuth provider configuration.</li>
                <li>Credentials provider with bcryptjs password hashing.</li>
                <li>JWT session strategy for stateless authentication.</li>
                <li>Protected API routes with middleware.</li>
                <li>Role-based access control (user/admin).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mt-4 text-blue-400">Database (MongoDB)</h3>
              <p className="text-gray-300 mt-3 mb-2 text-base">Collections:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base ml-4">
                <li>Users (authentication, profiles, roles)</li>
                <li>Products (catalog, pricing, inventory)</li>
                <li>Orders (transactions, payment status)</li>
                <li>Sessions (NextAuth.js session storage)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mt-4 text-blue-400">Payment Integration (Razorpay)</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300 text-base mt-3">
                <li>Razorpay Checkout integration for secure payments.</li>
                <li>Server-side payment verification with signature validation.</li>
                <li>Order creation and payment status tracking.</li>
                <li>Webhook handling for payment confirmations.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE FLOW SECTION */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Architecture Flow</h2>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full max-w-lg flex flex-col items-center">
              <div className="w-full rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500/40 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.6) 100%)' }}>
                <h3 className="font-bold text-lg mb-2">Frontend (Next.js UI)</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Product browsing, cart management, checkout interface, and user dashboard.
                </p>
              </div>
              <div className="text-gray-500 text-2xl mt-4">↓</div>
            </div>

            <div className="w-full max-w-lg flex flex-col items-center">
              <div className="w-full rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500/40 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.6) 100%)' }}>
                <h3 className="font-bold text-lg mb-2">API Layer (Next.js Routes)</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Handles authentication, product queries, order processing, and payment verification.
                </p>
              </div>
              <div className="text-gray-500 text-2xl mt-4">↓</div>
            </div>

            <div className="w-full max-w-lg flex flex-col items-center">
              <div className="w-full rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500/40 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.6) 100%)' }}>
                <h3 className="font-bold text-lg mb-2">Authentication (NextAuth.js)</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Validates user sessions, manages OAuth flow, and protects admin routes.
                </p>
              </div>
              <div className="text-gray-500 text-2xl mt-4">↓</div>
            </div>

            <div className="w-full max-w-lg">
              <div className="w-full rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500/40 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.6) 100%)' }}>
                <h3 className="font-bold text-lg mb-2">Database (MongoDB)</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Stores users, products, orders, and analytics data with indexed queries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* USER FLOW SECTION */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">User Flow</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-lg text-blue-400 mb-2">1. Authentication</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                User signs in via Google OAuth or credentials → NextAuth.js creates session → 
                JWT token stored in cookies → Session persists across pages.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-lg text-blue-400 mb-2">2. Product Browsing</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                User browses catalog → Applies filters → Views product details → 
                Adds items to cart (Local Storage) → Cart persists across sessions.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-lg text-blue-400 mb-2">3. Checkout & Payment</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                User proceeds to checkout → Razorpay modal opens → Payment processed → 
                Webhook verifies payment → Order created in MongoDB → Confirmation email sent.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-lg text-blue-400 mb-2">4. Admin Dashboard</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Admin logs in → Views revenue analytics → Monitors transactions → 
                Manages orders → Tracks customer data → Exports reports.
              </p>
            </div>
          </div>
        </section>

        {/* CHALLENGES & SOLUTIONS SECTION */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Challenges & Solutions</h2>

          <div className="space-y-4">
            <div className="rounded-xl p-6 border border-gray-700/50 border-l-4 border-l-red-500/60" style={{ background: 'rgba(15,23,42,0.7)' }}>
              <h3 className="font-bold text-lg text-red-400 mb-3">Challenge: NextAuth.js OAuth Configuration</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                Complex setup for Google OAuth with proper callback URLs and session management in Next.js App Router.
              </p>
              <p className="text-green-400 text-base leading-relaxed">
                <strong>Solution:</strong> Implemented custom callbacks in NextAuth config, properly configured 
                JWT strategy, and used middleware for protected routes.
              </p>
            </div>

            <div className="rounded-xl p-6 border border-gray-700/50 border-l-4 border-l-red-500/60" style={{ background: 'rgba(15,23,42,0.7)' }}>
              <h3 className="font-bold text-lg text-red-400 mb-3">Challenge: Razorpay Payment Integration</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                Ensuring secure payment verification and handling webhook events for payment confirmation.
              </p>
              <p className="text-green-400 text-base leading-relaxed">
                <strong>Solution:</strong> Implemented server-side signature verification using Razorpay SDK, 
                created webhook handlers with proper error handling, and added payment status tracking.
              </p>
            </div>

            <div className="rounded-xl p-6 border border-gray-700/50 border-l-4 border-l-red-500/60" style={{ background: 'rgba(15,23,42,0.7)' }}>
              <h3 className="font-bold text-lg text-red-400 mb-3">Challenge: Cart Persistence Strategy</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                Deciding between database-stored carts vs. local storage for performance and user experience.
              </p>
              <p className="text-green-400 text-base leading-relaxed">
                <strong>Solution:</strong> Used Local Storage for cart state to reduce database calls, 
                synced with server only during checkout, and implemented cart recovery for logged-in users.
              </p>
            </div>

            <div className="rounded-xl p-6 border border-gray-700/50 border-l-4 border-l-red-500/60" style={{ background: 'rgba(15,23,42,0.7)' }}>
              <h3 className="font-bold text-lg text-red-400 mb-3">Challenge: Admin Analytics Queries</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                Optimizing MongoDB aggregation queries for real-time revenue metrics and transaction analytics.
              </p>
              <p className="text-green-400 text-base leading-relaxed">
                <strong>Solution:</strong> Implemented indexed queries on date fields, used MongoDB aggregation 
                pipeline for efficient calculations, and added caching layer for frequently accessed metrics.
              </p>
            </div>
          </div>
        </section>

        {/* TECHNICAL IMPLEMENTATION SECTION */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Technical Implementation Highlights</h2>

          <div className="space-y-4">
            <div className="rounded-xl p-6 border border-gray-700" style={{ background: 'rgba(15,23,42,0.7)' }}>
              <h3 className="font-bold text-lg text-white mb-3">Shopping Cart Logic</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                Local Storage-based cart with real-time updates and quantity management.
              </p>
              <code className="text-blue-400 text-base block rounded-lg p-4" style={{ background: 'rgba(2,6,23,0.8)' }}>
                localStorage.setItem('cart', JSON.stringify(cartItems))
              </code>
            </div>

            <div className="rounded-xl p-6 border border-gray-700" style={{ background: 'rgba(15,23,42,0.7)' }}>
              <h3 className="font-bold text-lg text-white mb-3">Razorpay Checkout</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                Client-side Razorpay initialization with order creation and payment verification.
              </p>
              <code className="text-blue-400 text-base block rounded-lg p-4" style={{ background: 'rgba(2,6,23,0.8)' }}>
                const razorpay = new Razorpay(&#123; key: process.env.RAZORPAY_KEY &#125;)
              </code>
            </div>

            <div className="rounded-xl p-6 border border-gray-700" style={{ background: 'rgba(15,23,42,0.7)' }}>
              <h3 className="font-bold text-lg text-white mb-3">Protected Routes</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                NextAuth.js middleware for authentication-required pages.
              </p>
              <code className="text-blue-400 text-base block rounded-lg p-4" style={{ background: 'rgba(2,6,23,0.8)' }}>
                export &#123; default &#125; from "next-auth/middleware"
              </code>
            </div>
          </div>
        </section>

        {/* TECH LEARNINGS SECTION */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Technical Learnings</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300 text-base leading-relaxed">
            <li>Next.js 15 App Router architecture and server/client component patterns.</li>
            <li>NextAuth.js OAuth configuration and session management strategies.</li>
            <li>Razorpay payment gateway integration and webhook security.</li>
            <li>MongoDB schema design for e-commerce applications.</li>
            <li>JWT authentication and role-based access control implementation.</li>
            <li>Local Storage strategies for client-side state persistence.</li>
            <li>shadcn/ui component integration and customization with Tailwind CSS.</li>
            <li>Nodemailer SMTP configuration for transactional emails.</li>
            <li>TypeScript type definitions for API responses and data models.</li>
          </ul>
        </section>

        {/* FUTURE ENHANCEMENTS SECTION */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Future Enhancements</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="group rounded-xl p-6 border border-gray-700 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.4) 100%)' }}>
              <h3 className="font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors duration-200">Product Reviews & Ratings</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                User-generated reviews with star ratings and verified purchase badges.
              </p>
            </div>

            <div className="group rounded-xl p-6 border border-gray-700 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.4) 100%)' }}>
              <h3 className="font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors duration-200">Wishlist Feature</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Save products for later with database-synced wishlist functionality.
              </p>
            </div>

            <div className="group rounded-xl p-6 border border-gray-700 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.4) 100%)' }}>
              <h3 className="font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors duration-200">Order Tracking</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Real-time order status updates with shipping integration (Shiprocket/Delhivery).
              </p>
            </div>

            <div className="group rounded-xl p-6 border border-gray-700 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.4) 100%)' }}>
              <h3 className="font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors duration-200">Advanced Analytics</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Customer behavior tracking, conversion funnel analysis, and sales forecasting.
              </p>
            </div>

            <div className="group rounded-xl p-6 border border-gray-700 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.4) 100%)' }}>
              <h3 className="font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors duration-200">Inventory Management</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Real-time stock tracking, low-stock alerts, and automated reorder points.
              </p>
            </div>

            <div className="group rounded-xl p-6 border border-gray-700 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.4) 100%)' }}>
              <h3 className="font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors duration-200">Multi-Currency Support</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                International payments with automatic currency conversion and localization.
              </p>
            </div>
          </div>
        </section>

        {/* BACK TO PROJECTS LINK */}
        <section className="pt-8 border-t border-gray-800">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-base font-semibold transition-all duration-200 hover:gap-3"
            style={{ color: '#60a5fa' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </section>

      </div>
    </main>
  );
}
