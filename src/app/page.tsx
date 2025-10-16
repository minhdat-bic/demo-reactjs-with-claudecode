"use client";

import Link from "next/link";
import { useState } from "react";
import { demoExamples, categories } from "@/data/examples";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredExamples = demoExamples.filter((example) => {
    const matchesCategory =
      selectedCategory === "All" || example.category === selectedCategory;
    const matchesSearch =
      example.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      example.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      example.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
              🚀 Demo Playground
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Quick demos to showcase ideas to the team
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search demos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 px-6 py-4">
            <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <span>{filteredExamples.length} demos found</span>
              <span>•</span>
              <span>{categories.length} categories</span>
              <span>•</span>
              <span>Ready to explore!</span>
            </div>
          </div>
        </div>

        {/* Static Demo Pages Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border-2 border-purple-200 dark:border-purple-700 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-2">
                  <span className="text-2xl">📄</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Static Integration Guides
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Complete documentation and integration examples
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {/* Beincom Partner Integration Card */}
                <a
                  href="/bic-partner-integration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-purple-200 dark:border-purple-700 hover:scale-105 hover:border-purple-400 dark:hover:border-purple-500"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-3">
                      <span className="text-3xl">🚀</span>
                    </div>
                    <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium">Open</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Beincom Partner Integration
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    Complete guide for integrating with Beincom&apos;s partner
                    API. Includes user referrals, webhooks, event tracking, and
                    code examples.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs rounded-md font-medium">
                      API Integration
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded-md font-medium">
                      Webhooks
                    </span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-xs rounded-md font-medium">
                      Documentation
                    </span>
                  </div>
                </a>

                {/* Placeholder for future static pages */}
                <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6 border-2 border-dashed border-slate-300 dark:border-slate-600 flex flex-col items-center justify-center text-center min-h-[240px]">
                  <div className="text-4xl mb-3 opacity-50">➕</div>
                  <h3 className="text-base font-semibold text-slate-600 dark:text-slate-400 mb-1">
                    More Guides Coming Soon
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    Additional integration examples and documentation will be
                    added here
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/60 dark:bg-slate-800/60 rounded-lg border border-purple-200 dark:border-purple-700">
                <div className="flex items-start gap-3">
                  <span className="text-xl">💡</span>
                  <div className="flex-1">
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>Tip:</strong> These are standalone HTML pages with
                      complete, self-contained documentation. Perfect for
                      sharing with team members or embedding in other platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demos Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg p-2">
              <span className="text-2xl">⚡</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Interactive Demos
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 ml-14">
            Try out live examples and interactive components
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExamples.map((example) => (
            <Link key={example.id} href={`/example/${example.name}`}>
              <div className="group bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden hover:scale-105">
                <div
                  className={`h-32 bg-gradient-to-br ${example.gradient} flex items-center justify-center`}
                >
                  <span className="text-4xl">{example.icon}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {example.title}
                    </h3>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        example.difficulty === "Beginner"
                          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                          : example.difficulty === "Intermediate"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                          : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                      }`}
                    >
                      {example.difficulty}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                    {example.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {example.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                      {example.tags.length > 2 && (
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs rounded-md">
                          +{example.tags.length - 2}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {example.category}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No results */}
        {filteredExamples.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              No demos found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-600 dark:text-slate-400">
            <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
