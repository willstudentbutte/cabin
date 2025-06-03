# 🎉 Leia's Cabin Party Landing Page

A stunning, modern single-page landing site built with **Next.js**, **Tailwind CSS**, and **Framer Motion** for the ultimate summer cabin party experience!

## ✨ Features

### 🎨 **Modern Design & Animations**
- **Framer Motion** powered animations throughout
- Smooth scroll-triggered animations
- Interactive hover effects and micro-interactions
- Glass morphism effects with backdrop blur
- Gradient backgrounds and neon glows

### 🎯 **Key Sections**
1. **Hero Section** - Eye-catching animated landing with party details
2. **The Lowdown** - Event details and what to expect
3. **Survival Kit** - Categorized packing lists with custom icons
4. **Back to the 2000s** - Prom night theme with costume inspiration
5. **Elect Your Royalty** - Interactive voting form for Prom King & Queen
6. **Footer** - Stylish conclusion with animated elements

### 🎪 **Interactive Elements**
- **Voting System** - Frontend-only form with submission feedback
- **Smooth Scrolling** - Navigation between sections
- **Responsive Design** - Flawless across mobile, tablet, and desktop
- **Custom Animations** - Floating elements, rotating icons, and more

## 🛠️ **Tech Stack**

- **Framework**: Next.js 15.3.3 with App Router
- **Styling**: Tailwind CSS 3.4.0 with custom configuration
- **Animations**: Framer Motion 11.0.0
- **Icons**: Lucide React 0.344.0
- **Language**: TypeScript
- **Fonts**: Inter + Dancing Script (Google Fonts)

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development Server
Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🌐 **Deployment**

This project is configured for **GitHub Pages** deployment! 

### Quick Deploy
1. **Run the setup script:**
   - Windows: `.\setup-git.ps1`
   - macOS/Linux: `chmod +x setup-git.sh && ./setup-git.sh`

2. **Or deploy manually:**
   ```bash
   # Create a GitHub repository
   # Then run these commands:
   git init
   git add .
   git commit -m "Initial commit: Cabin party landing page"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Select "GitHub Actions" as the source
   - Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

📖 **Detailed deployment guide:** See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete instructions.

## 🎨 **Custom Design System**

### Color Palette
```javascript
// Custom color scheme in tailwind.config.js
'cabin': { /* Warm orange tones */ },
'neon': { /* Electric blue tones */ },
'party': { /* Vibrant purple/pink tones */ }
```

### Custom Components
- **Glass Effect**: Backdrop blur with transparency
- **Gradient Text**: Multi-color gradient text effects  
- **Party Button**: Animated gradient buttons with hover effects
- **Neon Glow**: Custom shadow effects

## 📁 **Project Structure**

```
cabin-party/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main landing page
│   │   ├── not-found.tsx       # 404 error page
│   │   └── globals.css         # Global styles & Tailwind
│   └── components/
│       ├── Logo.tsx            # Animated SVG logo
│       ├── HeroSection.tsx     # Landing hero section
│       ├── EventDetails.tsx    # Event information
│       ├── SurvivalKit.tsx     # Packing lists
│       ├── PromSection.tsx     # 2000s prom theme
│       ├── VotingSection.tsx   # Interactive voting form
│       └── Footer.tsx          # Site footer
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions deployment
├── public/
│   └── .nojekyll               # GitHub Pages configuration
├── tailwind.config.js          # Custom Tailwind configuration
├── next.config.js              # Next.js configuration (static export)
├── DEPLOYMENT.md               # Detailed deployment guide
└── setup-git.{ps1,sh}         # Quick setup scripts
```

## 🎭 **Component Breakdown**

### **Logo Component**
- Custom SVG with animated path drawing
- Cabin, lake wave, and star elements
- Hover rotation animation
- Gradient color scheme

### **Hero Section**
- Full-screen animated background
- Floating party emojis
- Glass effect event detail cards
- Scroll indicator with animation

### **Survival Kit**
- Four categorized packing lists
- Custom icon integration
- Staggered animation reveals
- Hover interactions on list items

### **Voting Section**
- Complete form handling (frontend only)
- Success state with animation
- Form validation and UX feedback
- Responsive two-column layout

## 🎨 **Animation Philosophy**

### Entrance Animations
- Fade-in-up for text content
- Slide-in from sides for cards
- Scale animations for interactive elements

### Continuous Animations
- Floating background elements
- Rotating and pulsing icons
- Subtle bounce effects for attention

### Interaction Animations  
- Hover scale and rotation effects
- Button press feedback
- Form submission celebrations

## 🌐 **Performance & SEO**

- **Next.js App Router** for optimal performance
- **Static Export** for GitHub Pages compatibility
- **Metadata optimization** for social sharing
- **Responsive images** optimized for static hosting
- **Smooth scroll behavior** for UX
- **Minimal bundle size** with tree-shaking

## 🎉 **Party Theme Elements**

### Visual Motifs
- **Cabin**: Warm orange tones, cozy vibes
- **Lake**: Cool blue gradients, water themes  
- **Party**: Vibrant purples/pinks, energy
- **2000s Nostalgia**: Authentic early 2000s references

### Emoji Usage
Strategically placed animated emojis enhance the fun atmosphere:
- 🎉 🍻 🏖️ 🎊 (Party vibes)
- 👑 ✨ 📸 (Prom royalty)
- 🌅 🔥 💃 🎮 (Activities)

## 🎯 **Future Enhancements**

- [ ] Add image gallery section
- [ ] Integrate with real backend for voting
- [ ] Add countdown timer to event
- [ ] Create shareable social media cards
- [ ] Add music player with 2000s hits
- [ ] Implement dark/light mode toggle

## 📱 **Mobile Optimization**

- Fully responsive design using Tailwind's responsive utilities
- Touch-friendly interactive elements  
- Optimized typography scaling
- Smooth touch animations

---

**Built with ❤️ for the ultimate cabin party experience!** 

*Ready to get rowdy? July 10-13 at 108 Pinecrest Lake Rd!* 🏖️🎉 