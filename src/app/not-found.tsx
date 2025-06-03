import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cabin-900 via-party-900 to-neon-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-cabin-200 mb-8">
          Looks like you got lost on the way to the party! 🎉
        </p>
        <Link 
          href="/" 
          className="party-button inline-flex items-center px-6 py-3 text-lg"
        >
          Back to the Party! 🏖️
        </Link>
      </div>
    </div>
  )
} 