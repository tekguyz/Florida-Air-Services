import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-navy-deep)] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-[var(--color-orange)] text-6xl font-black font-outfit mb-4">404</h2>
      <h3 className="text-white text-3xl font-bold mb-6">Page Not Found</h3>
      <p className="text-white/70 text-lg max-w-md mb-8">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link 
        href="/"
        className="bg-[var(--color-orange)] hover:bg-[var(--color-orange-dark)] text-white font-bold rounded-lg px-8 py-4 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
