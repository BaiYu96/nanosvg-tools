# ⚡ NanoSVG Tools

![nanosvg](./public/nanosvg-logo-1024.png)

English | [简体中文](./README_zh-cn.md)

A lightweight, blazing-fast, and multi-language SVG developer toolbox built with Astro and Tailwind CSS. 100% client-side execution ensures your design assets never leave your browser sandbox.

---

## 🎯 Features

- **100% Private & Secure:** No server-side uploads. All conversion and parsing logic runs strictly inside your local browser.
- **Native Multi-Language Support:** Full built-in i18n routing supporting English, 简体中文, and Deutsch seamlessly.
- **Instant Live Preview:** Input your SVG raw code and see the visual render instantly with auto-scaling preview container.
- **Production-Ready Outputs:** 
  - **CSS Data URI:** Properly escaped symbols (`#`, `{`, `}`, `<`, `>`, etc.) optimized directly for CSS `background-image` use.
  - **Base64 String:** Raw base64 encoding suitable for HTML `<img>` src tags.
- **SVG Optimizer:** Compress SVG markup locally with SVGO, compare file sizes, and preview original vs optimized output.
- **SVG to React Component:** Convert SVG markup into JSX or TSX components with prop spreading.
- **SVG Sprite Generator:** Merge multiple SVG files into a symbol-based sprite and usage snippets.
- **Enhanced UX:** Interactive textareas with "click-to-select-all" and one-click clipboard copying.

---

## 🛠️ Tech Stack

- **Framework:** [Astro v5+](https://astro.build/) (Utilizing native i18n engine & serverless-first routing)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment:** Vercel / Netlify / Cloudflare Pages (Jamstack optimized)

---

## 🚀 Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or higher recommended).

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/BaiYu96/nanosvg-tools.git
   cd nanosvg-tools
```
2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

Open http://localhost:4321 in your browser.

4. **Build for production**
```bash
npm run build
```

### 📁 Project Structure
```plaintext
├── src/
│   ├── components/
│   │   └── SvgConverter.astro  # Core toolbox component with clean tech-focused comments
│   │   └── SvgOptimizer.astro  # Local SVGO-powered optimizer component
│   │   └── SvgComponentConverter.astro
│   │   └── SvgSpriteGenerator.astro
│   ├── layouts/
│   │   └── Layout.astro        # Global layout with language switcher
│   └── pages/                  # File-based i18n routing
│       ├── index.astro         # Default English Landing
│       ├── svg2base64/
│       │   └── index.astro     # English SVG to Base64 Converter
│       ├── optimizer/
│       │   └── index.astro     # English SVG Optimizer
│       ├── component/
│       │   └── index.astro     # English SVG to React Component
│       ├── sprite/
│       │   └── index.astro     # English SVG Sprite Generator
│       ├── zh/
│       │   ├── index.astro     # Simplified Chinese Tool Directory
│       │   └── svg2base64/     # Simplified Chinese SVG to Base64
│       │   └── optimizer/      # Simplified Chinese SVG Optimizer
│       │   └── component/      # Simplified Chinese Component Converter
│       │   └── sprite/         # Simplified Chinese Sprite Generator
│       └── de/
│           ├── index.astro     # German Tool Directory
│           └── svg2base64/     # German SVG to Base64
│           └── optimizer/      # German SVG Optimizer
│           └── component/      # German Component Converter
│           └── sprite/         # German Sprite Generator
```

## 🗺️ Roadmap (All-in-One Toolbox)

We are actively expanding this tool into an All-in-One SVG Suite.

### Completed

- [x] SVG to Base64: Convert SVG code into CSS Data URI and Base64 strings.

- [x] SVG Optimizer: Minify bloated SVG codes using SVGO logic locally.

- [x] SVG to JSX/TSX: Convert raw SVGs into clean, copy-pasteable React components.

- [x] SVG Sprite Generator: Combine multiple icons into a single SVG sprite sheet.

### Upcoming

Next, we plan to add more export and conversion tools:

- [ ] SVG to PNG

- [ ] SVG to JPG

- [ ] SVG to WebP

- [ ] SVG to PDF

- [ ] SVG to Icon

## 📄 License

This project is open-source and available under the Apache-2.0 license.
