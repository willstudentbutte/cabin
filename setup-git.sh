#!/bin/bash
# Bash script to set up git and push to GitHub
# Run this script: chmod +x setup-git.sh && ./setup-git.sh

echo "🎉 Setting up Leia's Cabin Party for GitHub deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing git repository..."
    git init
fi

# Configure git user
echo "Configuring git user..."
read -p "Enter your GitHub username: " userName
read -p "Enter your GitHub email: " userEmail

git config user.name "$userName"
git config user.email "$userEmail"

# Add all files
echo "Adding files to git..."
git add .

# Commit
echo "Committing files..."
git commit -m "Initial commit: Leia's Cabin Party landing page with Next.js, Tailwind CSS, and Framer Motion"

# Get repository URL
echo "Enter your GitHub repository URL (e.g., https://github.com/username/cabin-party.git):"
read repoUrl

# Add remote origin
echo "Adding remote origin..."
git remote add origin $repoUrl

# Set main branch and push
echo "Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "🚀 Success! Your cabin party site is now on GitHub!"
echo "Next steps:"
echo "1. Go to your GitHub repository settings"
echo "2. Navigate to Pages section"
echo "3. Select 'GitHub Actions' as the source"
echo "4. Your site will be available at: https://$userName.github.io/[repository-name]/" 