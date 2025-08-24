
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen" style={{background: 'radial-gradient(ellipse at center, #fefefe 0%, #fdfdfc 25%, #fcfcf9 50%, #faf9f4 75%, #f8f7f0 100%)'}}>
      {/* Header */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-fit">
        <nav className="flex items-center bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 shadow-lg mx-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2 mr-6">
            <span className="text-lg font-semibold text-gray-900">Float</span>
          </div>
          
          {/* Navigation Links - Hidden on small screens */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 rounded-full hover:bg-gray-100">
              Features
            </a>
            <a href="#dashboard" className="text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 rounded-full hover:bg-gray-100">
              Dashboard
            </a>
          </div>
          
          {/* Download Button */}
          <a 
            href="/Float_0.1.0_aarch64.dmg" 
            download="Float_0.1.0_aarch64.dmg"
            className="bg-green-700 hover:bg-green-800 text-white px-4 md:px-6 py-2 rounded-full transition-colors ml-2 md:ml-4 text-sm md:text-base"
          >
            Download
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-48 pb-32">
        <div className="text-center">
          {/* Announcement Bar */}
          <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-8">
            <span className="text-green-700 text-sm font-medium">
              Loved by productive people worldwide
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Keep your thoughts<span className="bg-gradient-to-r from-green-300 to-green-700 bg-clip-text text-transparent"> visible</span> while you work
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Float creates translucent notes that stay on top of any application without breaking your focus.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href="/Float_0.1.0_aarch64.dmg" 
              download="Float_0.1.0_aarch64.dmg"
              className="bg-green-700 hover:bg-green-800 text-white px-2 py-4 rounded-3xl text-lg font-semibold transition-colors inline-flex items-center justify-center w-full sm:w-[220px] whitespace-nowrap"
            >
              <svg className="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>Get for Mac</span>
            </a>

            <button className="bg-green-700 hover:bg-green-800 text-white px-2 py-4 rounded-3xl text-lg font-semibold transition-colors inline-flex items-center justify-center w-full sm:w-[220px] whitespace-nowrap">
              <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 1h10v10H1V1zm12 0h10v10H12V1zM1 13h10v10H1V13zm12 0h10v10H12V13z"/>
              </svg>
              <span>Get for Windows</span>
            </button>
          </div>

          {/* Product Demo Section */}
          <div className="relative mb-16">
            <div className="bg-gradient-to-b from-gray-100 to-transparent rounded-3xl p-8 md:p-16 relative overflow-hidden">
              {/* Background Content - Gray Text Bubbles */}
              <div className="absolute inset-0 p-8 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div className="h-6 bg-gray-300 rounded-lg w-4/5"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    <div className="mt-6 space-y-3">
                      <div className="h-4 bg-gray-300 rounded w-full"></div>
                      <div className="h-4 bg-gray-300 rounded w-4/5"></div>
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    </div>
                    <div className="mt-8 space-y-2">
                      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                      <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                      <div className="h-3 bg-gray-300 rounded w-1/3"></div>
                    </div>
                  </div>
                  
                  {/* Right Column */}
                  <div className="space-y-4">
                    <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    <div className="mt-6 space-y-3">
                      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-300 rounded w-4/5"></div>
                      <div className="h-4 bg-gray-300 rounded w-full"></div>
                      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-3">
                      <div className="h-8 bg-gray-300 rounded"></div>
                      <div className="h-8 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Float App Screenshot Overlay */}
              <div className="relative z-10 flex justify-center items-center min-h-[400px]">
                <div className="relative">
            <Image
                    src="/product.png" 
                    alt="Float app interface showing floating notes"
                    width={350}
                    height={350}
                    className="max-w-full h-auto rounded-3xl shadow-2xl opacity-70"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <section id="how-it-works" className="mb-32 mt-32">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">How it works</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Float is like sticky notes, but they stay visible across all your apps
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Create translucent notes that float above your work without interrupting your flow. 
                Perfect for tracking thoughts, ideas, and reminders while you code, design, or write.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Always on top, never intrusive</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Translucent design preserves focus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Works across all applications</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 relative">
              <div className="bg-white rounded-lg shadow-sm border p-6 h-64">
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
              {/* Floating notes demonstration */}
              <div className="absolute inset-0 p-8 pointer-events-none">
                <div className="floating-note bg-yellow-100 bg-opacity-90 border border-yellow-200 rounded-lg p-3 shadow-lg absolute top-12 right-12 transform rotate-3 float-animation">
                  <p className="text-sm text-gray-800 font-medium">💡 Check error logs</p>
                </div>
                <div className="floating-note bg-green-100 bg-opacity-90 border border-green-200 rounded-lg p-3 shadow-lg absolute top-32 left-12 transform -rotate-2 float-animation" style={{animationDelay: '1s'}}>
                  <p className="text-sm text-gray-800 font-medium">📝 Update docs</p>
                </div>
                <div className="floating-note bg-green-100 bg-opacity-90 border border-green-200 rounded-lg p-3 shadow-lg absolute bottom-16 right-16 transform rotate-1 float-animation" style={{animationDelay: '2s'}}>
                  <p className="text-sm text-gray-800 font-medium">✅ Feature complete</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-32 mt-32 pt-40">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Built for focused productivity</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Always Visible</h3>
              <p className="text-gray-600">Your notes stay on top of every application, ensuring your thoughts are never out of sight.</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Non-Intrusive</h3>
              <p className="text-gray-600">Translucent design ensures notes are visible but don&apos;t interfere with your work underneath.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered (Soon)</h3>
              <p className="text-gray-600">Coming soon: Automatic page summarization and intelligent note organization with personal dashboard.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center mt-32 mb-32">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready for more focused work?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Try Float today and keep your thoughts visible while you work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/Float_0.1.0_aarch64.dmg" 
              download="Float_0.1.0_aarch64.dmg"
              className="bg-green-700 hover:bg-green-800 text-white px-2 py-4 rounded-3xl text-lg font-semibold transition-colors inline-flex items-center justify-center w-full sm:w-[220px] whitespace-nowrap"
            >
              <svg className="mr-2 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>Get for Mac</span>
            </a>

            <button className="bg-green-700 hover:bg-green-800 text-white px-2 py-4 rounded-3xl text-lg font-semibold transition-colors inline-flex items-center justify-center w-full sm:w-[220px] whitespace-nowrap">
              <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 1h10v10H1V1zm12 0h10v10H12V1zM1 13h10v10H1V13zm12 0h10v10H12V13z"/>
              </svg>
              <span>Get for Windows</span>
            </button>
        </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-32">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-xl font-semibold">Float</span>
              </div>
              <p className="text-gray-400 mb-4">
                Keep your thoughts visible while you work with persistent, translucent notes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#dashboard" className="hover:text-white transition-colors">Dashboard</a></li>
                <li><a href="/Float_0.1.0_aarch64.dmg" download="Float_0.1.0_aarch64.dmg" className="hover:text-white transition-colors">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Float. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}