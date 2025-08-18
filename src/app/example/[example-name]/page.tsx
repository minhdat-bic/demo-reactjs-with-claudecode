import Link from "next/link";
import { notFound } from "next/navigation";
import { demoExamples } from "@/data/examples";
import TodoDemo from "@/components/TodoDemo";
import BeincomApiGuide from "@/components/BeincomApiGuide";

interface ExamplePageProps {
  params: Promise<{
    'example-name': string;
  }>;
}

export async function generateStaticParams() {
  return demoExamples.map((example) => ({
    'example-name': example.name,
  }));
}

export default async function ExamplePage({ params }: ExamplePageProps) {
  const { 'example-name': exampleName } = await params;
  const example = demoExamples.find(ex => ex.name === exampleName);

  if (!example) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            <div className="text-sm text-slate-500 dark:text-slate-400">
              {example.category}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${example.gradient} mb-6`}>
            <span className="text-3xl">{example.icon}</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {example.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            {example.description}
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className={`px-3 py-1 text-sm rounded-full ${
              example.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
              example.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
              'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
            }`}>
              {example.difficulty}
            </span>
            <div className="flex flex-wrap gap-2">
              {example.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Demo Container */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-8">
          <div className="bg-slate-50 dark:bg-slate-700 px-6 py-4 border-b border-slate-200 dark:border-slate-600">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-mono">
                {example.name}.demo
              </div>
            </div>
          </div>
          <div className="p-8">
            {/* Render specific demo or generic placeholder */}
            {example.name === 'todo-app' ? (
              <TodoDemo />
            ) : example.name === 'beincom-api-guide' ? (
              <BeincomApiGuide />
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">{example.icon}</div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Demo: {example.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                  This is a placeholder for the actual demo implementation. In a real scenario, 
                  you would implement the specific functionality for &quot;{example.title}&quot; here.
                </p>
                
                {/* Demo-specific content based on the example type */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <div className="w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded-full mx-auto mb-2"></div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Feature {item}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Try Demo
                  </button>
                  <button className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    View Code
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
              📚 About This Demo
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              This demo showcases {example.title.toLowerCase()} functionality with modern web technologies. 
              It demonstrates key concepts and best practices for building similar applications.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
              🛠️ Tech Stack
            </h3>
            <div className="space-y-2">
              {example.tags.map((tag) => (
                <div key={tag} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}