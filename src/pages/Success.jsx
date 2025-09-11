export default function Success() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-8">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-3">Thanks—message received!</h1>
        <p className="text-gray-300 mb-6">
          I’ll get back to you within 24 hours.
        </p>
        <a href="/" className="text-blue-400 hover:text-blue-300 underline">
          Back to Home
        </a>
      </div>
    </main>
  );
}
