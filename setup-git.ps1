# PowerShell script to set up git and push to GitHub
# Run this script in PowerShell: .\setup-git.ps1

Write-Host "🎉 Setting up Leia's Cabin Party for GitHub deployment..." -ForegroundColor Cyan

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
}

# Configure git user (update these with your details)
Write-Host "Configuring git user..." -ForegroundColor Yellow
$userName = Read-Host "Enter your GitHub username"
$userEmail = Read-Host "Enter your GitHub email"

git config user.name "$userName"
git config user.email "$userEmail"

# Add all files
Write-Host "Adding files to git..." -ForegroundColor Yellow
git add .

# Commit
Write-Host "Committing files..." -ForegroundColor Yellow
git commit -m "Initial commit: Leia's Cabin Party landing page with Next.js, Tailwind CSS, and Framer Motion"

# Get repository URL
Write-Host "Enter your GitHub repository URL (e.g., https://github.com/username/cabin-party.git):" -ForegroundColor Cyan
$repoUrl = Read-Host

# Add remote origin
Write-Host "Adding remote origin..." -ForegroundColor Yellow
git remote add origin $repoUrl

# Set main branch and push
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git branch -M main
git push -u origin main

Write-Host "🚀 Success! Your cabin party site is now on GitHub!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Go to your GitHub repository settings" -ForegroundColor White
Write-Host "2. Navigate to Pages section" -ForegroundColor White
Write-Host "3. Select 'GitHub Actions' as the source" -ForegroundColor White
Write-Host "4. Your site will be available at: https://$userName.github.io/[repository-name]/" -ForegroundColor Green 