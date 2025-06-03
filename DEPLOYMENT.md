# 🚀 Deploying Leia's Cabin Party to GitHub Pages

This guide will help you deploy your awesome cabin party landing page to GitHub Pages for free hosting!

## 📋 Prerequisites

- A GitHub account
- Git installed on your computer
- The cabin party project files

## 🛠️ Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name your repository (e.g., `cabin-party`, `leias-cabin-party`, or `cabin-party-2024`)
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### 2. Push Your Code to GitHub

In your terminal/command prompt, navigate to your cabin-party folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: Leia's Cabin Party landing page"

# Add your GitHub repository as origin (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **GitHub Actions**
5. The workflow file we created (`.github/workflows/deploy.yml`) will automatically be detected

### 4. Configure the Deployment

If your repository name is **different** from `cabin-party`, you need to update the `next.config.js` file:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Update this line with your actual repository name
  basePath: '/YOUR_REPO_NAME',
}
```

### 5. Deploy!

Once you push your code to the `main` branch, GitHub Actions will automatically:

1. Install dependencies
2. Build your Next.js app
3. Deploy it to GitHub Pages

You can monitor the deployment progress by:
1. Going to the **Actions** tab in your GitHub repository
2. Watching the "Deploy Cabin Party to GitHub Pages" workflow

### 6. Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

For example: `https://johndoe.github.io/cabin-party/`

## 🔧 Project Configuration

The project is already configured for GitHub Pages deployment with:

- ✅ **Static Export**: `output: 'export'` in `next.config.js`
- ✅ **Image Optimization**: Disabled for static export
- ✅ **GitHub Actions**: Automatic deployment workflow
- ✅ **Jekyll Bypass**: `.nojekyll` file prevents Jekyll processing
- ✅ **ESLint**: Configured to allow quotes/apostrophes in text

## 🎨 What's Included

Your deployed site includes all the amazing features:

### 🎯 **Sections**
1. **Hero Section** - Animated landing with event details
2. **The Lowdown** - Event information and schedule
3. **Survival Kit** - Categorized packing lists
4. **Back to the 2000s** - Prom theme with costumes
5. **Voting Section** - Interactive Prom King/Queen voting
6. **Footer** - Event summary and animated elements

### ✨ **Features**
- **Framer Motion animations** throughout
- **Custom Tailwind design system** with party colors
- **Interactive voting form** (logs to browser console)
- **Responsive design** for all devices
- **Glass morphism effects** and gradients
- **Custom SVG logo** with animations
- **2000s nostalgia theming**
- **Smooth scrolling** between sections

## 🔄 Making Updates

To update your deployed site:

1. Make changes to your code locally
2. Test with `npm run dev`
3. Commit and push changes:
   ```bash
   git add .
   git commit -m "Update: describe your changes"
   git push
   ```
4. GitHub Actions will automatically redeploy

## 🐛 Troubleshooting

### Build Fails
- Check the Actions tab for error details
- Ensure all dependencies are in `package.json`
- Test locally with `npm run build`

### Site Not Loading
- Verify GitHub Pages is enabled in repository settings
- Check that the repository is public
- Ensure the `basePath` in `next.config.js` matches your repo name

### Images Not Showing
- Make sure images are in the `public/` folder
- Use relative paths starting with `/`
- Images are automatically optimized for static export

## 🎉 Success!

Once deployed, your Leia's Cabin Party landing page will be live for everyone to see! Share the URL with your party crew and get ready for an epic summer adventure! 🏖️🎊

---

**Need help?** Check the GitHub Actions logs in your repository's Actions tab for detailed deployment information.

**Ready to party?** July 10-13 at 108 Pinecrest Lake Rd! 🎉 