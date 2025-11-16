/**
 * 404 Not Found Page
 */

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-3xl font-semibold">Page Not Found</h2>
        <p className="text-gray-600 text-lg max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been removed or doesn't exist.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/" className="btn-primary">
            Back to Home
          </a>
          <a href="/pod" className="btn-secondary">
            Create Custom Design
          </a>
        </div>
      </div>
    </div>
  );
}

