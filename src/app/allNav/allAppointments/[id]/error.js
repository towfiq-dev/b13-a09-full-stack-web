"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("DocAppointment Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md w-full">
        {/* Error Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-8 mb-6">
          {/* Animated warning icon */}
          <div className="w-20 h-20 mx-auto mb-6 relative">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center animate-pulse">
              <svg
                className="w-10 h-10 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full border-2 border-red-200 animate-ping opacity-30"></div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Something went wrong!
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-2">
            An unexpected error has occurred. We apologize for the inconvenience.
          </p>

          {/* Error message (dev-only style) */}
          {error?.message && (
            <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-100 text-left">
              <p className="text-xs font-mono text-red-500 break-all">
                {error.message}
              </p>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:opacity-90 hover:shadow-md"
            style={{
              background: "linear-gradient(135deg, #0d9488 0%, #06b6d4 100%)",
            }}
          >
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
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Try Again
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-teal-600 text-sm font-medium border border-teal-200 bg-white transition-all duration-200 hover:bg-teal-50"
          >
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go to Homepage
          </Link>
        </div>

        {/* Support note */}
        <p className="mt-8 text-xs text-gray-400">
          If the problem persists, please contact our{" "}
          <Link href="/contact" className="text-teal-500 hover:underline">
            Support Team
          </Link>
          .
        </p>
      </div>
    </div>
  );
}