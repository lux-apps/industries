import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LUX Industries
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          Enterprise Blockchain Solutions
        </p>
        <p className="text-lg text-gray-400 max-w-2xl">
          Industry-specific blockchain solutions for enterprises of all sizes.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Supply Chain</h2>
          <p className="text-lg text-gray-400">Track products from origin to destination with immutable blockchain records.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Healthcare</h2>
          <p className="text-lg text-gray-400">Secure and interoperable health data management for patients and providers.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial Services</h2>
          <p className="text-lg text-gray-400">Streamline operations and reduce costs with blockchain-based settlement.</p>
        </div>
      </section>

    </main>
  )
}
