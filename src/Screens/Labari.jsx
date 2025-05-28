import React from 'react'

const Labari = () => {
  return (
    <div className="bg-blue-50 rounded-2xl shadow-lg p-6 md:p-10 mb-12 border-l-8 border-blue-600">
      <div className="flex items-start gap-4">
        <div className="mt-1">
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            NEW • 2025
          </span>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
            📚 Labari — Preserving African Literature
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-4">
            Labari is a storytelling platform that transforms African books into
            animations, audiobooks, and interactive reading experiences. Our
            mission is to preserve African literature, engage the younger
            generation, and showcase the beauty of African stories to the world.
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-1 mb-4">
            <li>Promotes African storytelling culture 🌍</li>
            <li>Empowers youth through engaging formats 🎧📖🎬</li>
            <li>Aligned with SDG Goal 15 — Life on Land 🌿</li>
          </ul>
          <p className="text-sm text-gray-600 italic mb-6">
            Supported by: Independent Initiative | Committed to Sustainable
            Development Goals
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Explore Labari
          </a>
        </div>
      </div>
    </div>
  )
}

export default Labari
