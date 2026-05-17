'use client'
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      
      {/* 3D Background Geometric Shapes & Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000 -z-10"></div>

      {/* Main 3D Container Container */}
      <div className="relative max-w-2xl w-full text-center perspective-1000">
        
        {/* Huge 3D Text Effect */}
        <div className="relative mb-6 select-none transform-style-3d">
          {/* Shadow Behind for 3D depth */}
          <h1 className="text-[12rem] md:text-[16rem] font-black text-gray-200/40 dark:text-gray-800/30 absolute inset-0 flex items-center justify-center translate-y-4 blur-sm tracking-tighter">
            404
          </h1>
          {/* Foreground Animated Gradient Text */}
          <h1 className="text-[12rem] md:text-[16rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)] animate-float">
            404
          </h1>
        </div>

        {/* 3D Floating Isometric Card */}
        <div className="relative mx-auto max-w-md p-8 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-white dark:border-gray-800 shadow-[0_50px_50px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_50px_50px_-20px_rgba(0,0,0,0.7)] transform rotate-x-6 rotate-y-[-6deg] hover:rotate-x-0 hover:rotate-y-0 transition-transform duration-500 ease-out">
          
          {/* Decorative Corner Element */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-indigo-500 rounded-lg transform -rotate-12 animate-spin-slow shadow-lg shadow-indigo-500/50"></div>
          
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-gray-100 tracking-tight">
            Lost in Cyberspace?
          </h2>
          
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            The page you are looking for has drifted into deep space or never existed. Let&apos;s get you back to safety.
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-[0_10px_20px_-10px_rgba(79,70,229,0.6)] hover:shadow-[0_15px_25px_-5px_rgba(79,70,229,0.7)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <svg
                className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return Home
            </Link>

            <button
              onClick={() => typeof window !== 'undefined' && window.history.back()}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 font-semibold rounded-xl text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-transparent dark:border-gray-700 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Go Back
            </button>
          </div>
        </div>

        {/* 3D Base/Shadow Effect underneath the card */}
        <div className="w-64 h-4 bg-gray-900/10 dark:bg-black/40 mx-auto rounded-full blur-md mt-6 animate-pulse"></div>
      </div>
    </div>
  );
}