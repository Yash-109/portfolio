# 🚀 Yash Parmar - Portfolio Website

A modern, performant portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Featuring smooth animations, responsive design, and comprehensive project showcases.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## ✨ Features

- **⚡ Blazing Fast** - Built on Next.js 16 with App Router for optimal performance
- **🎨 Modern UI** - Smooth animations with Framer Motion and polished design
- **📱 Fully Responsive** - Mobile-first design that works on all devices
- **🔍 SEO Optimized** - Complete metadata, Open Graph tags, and sitemap
- **📧 Contact Form** - Integrated EmailJS for handling contact submissions
- **🌙 Dark Mode** - Sleek dark theme with gradient accents
- **♿ Accessible** - Built with accessibility best practices
- **⚡ Type Safe** - Full TypeScript implementation

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 16.1.6 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12
- **Icons:** React Icons 5

### Features
- **Email Service:** EmailJS
- **Form Handling:** React Hook Form patterns
- **SEO:** Built-in Next.js metadata API
- **Analytics Ready:** Structure for Google Analytics integration

## 📦 Installation

### Prerequisites
- Node.js 20+ 
- npm or yarn or pnpm

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yash-109/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` with your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN=your_admin_template
   NEXT_PUBLIC_EMAILJS_TEMPLATE_USER=your_user_template
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 EmailJS Setup

For detailed instructions on setting up EmailJS for the contact form, see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md).

Quick setup:
1. Create account at [https://dashboard.emailjs.com](https://dashboard.emailjs.com)
2. Add email service (Gmail recommended)
3. Create two templates (admin notification + user confirmation)
4. Copy credentials to `.env.local`

## 🏗️ Project Structure

```
portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── projects/            # Project pages
│   │   ├── page.tsx        # Projects list
│   │   ├── tradejournal/   # TradeJournal project
│   │   └── electrotrack/   # Electrotrack project
│   ├── robots.ts           # Robots.txt configuration
│   └── sitemap.ts          # Sitemap generation
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx        # Landing section
│   │   ├── Navbar.tsx      # Navigation
│   │   ├── FeaturedProjects.tsx
│   │   ├── SkillsGrid.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Certifications.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   └── hooks/              # Custom React hooks
│       └── useScrollReveal.ts
├── public/                 # Static assets
│   ├── profile.jpg
│   ├── resume.pdf
│   └── certificates/
└── package.json
```

## 🎯 Key Sections

### 1. **Hero Section**
- Dynamic typing animation
- Professional introduction
- Quick links to social profiles
- Tech stack showcase

### 2. **About**
- Professional summary
- Development philosophy
- Technical interests

### 3. **Skills**
- Comprehensive tech stack grid
- Categorized by Frontend, Backend, Database, and Tools
- Visual proficiency indicators

### 4. **Projects**
- Featured project highlights
- Detailed project pages
- Tech stack breakdowns
- Live demos and GitHub links

### 5. **Education**
- Academic background
- Grades and achievements
- Timeline view

### 6. **Experience**
- Work history
- Role descriptions
- Duration and company details

### 7. **Certifications**
- Professional certifications
- Course completions
- Skill validations

### 8. **Contact**
- Working contact form
- Email integration
- Social media links
- Direct communication channels

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Yash-109/portfolio)

### Other Platforms

This Next.js app can also be deployed to:
- Netlify
- Railway
- AWS Amplify
- Azure Static Web Apps
- Google Cloud Run

## 📝 Customization Guide

### Update Personal Information

1. **Profile & Images**
   - Replace `public/profile.jpg` with your photo
   - Update `public/resume.pdf` with your resume

2. **Content**
   - Edit `src/components/Hero.tsx` for intro text
   - Update `src/components/About.tsx` for bio
   - Modify `src/components/SkillsGrid.tsx` for your skills

3. **Projects**
   - Add new project pages in `app/projects/[project-name]/`
   - Update `src/components/FeaturedProjects.tsx`

4. **Metadata**
   - Update SEO information in `app/layout.tsx`
   - Change social links in `src/components/Footer.tsx`

### Styling Customization

The project uses Tailwind CSS. Customize colors in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

## 🧪 Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENCE) file for details.

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📬 Contact

**Yash Parmar**
- Email: yashparmar1027@gmail.com
- LinkedIn: [Yash Parmar](https://linkedin.com/in/yash-parmar)
- GitHub: [@Yash-109](https://github.com/Yash-109)
- Portfolio: [yashparmar.dev](https://yashparmar.dev)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [EmailJS](https://www.emailjs.com/) - Email service
- [Vercel](https://vercel.com/) - Hosting platform

---

<div align="center">
  Made with ❤️ by Yash Parmar
  <br/>
  <sub>⭐ Star this repo if you find it helpful!</sub>
</div>

