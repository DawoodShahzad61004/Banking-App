"use client"

import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function LandingPage() {
  const navigate = useNavigate()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 w-full min-h-screen flex items-center justify-center p-4 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <div
        className={`bg-white w-full max-w-7xl min-h-[600px] rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-1000 delay-100 ${isLoaded ? "translate-y-0 scale-100" : "translate-y-8 scale-95"}`}
      >
        {/* Header */}
        <div
          className={`px-6 py-4 md:px-8 md:py-6 border-b border-slate-100 transform transition-all duration-800 delay-200 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            Apna <span className="text-blue-700 italic">BANK</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between p-6 md:p-10 lg:p-12 gap-8 lg:gap-12">
          {/* Left Content */}
          <div
            className={`w-full lg:w-1/2 flex flex-col space-y-6 lg:space-y-8 text-center lg:text-left transform transition-all duration-1000 delay-300 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
          >
            <div className="space-y-4 lg:space-y-6">
              <h2
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight transform transition-all duration-1000 delay-400 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              >
                Digital Banking
                <br />
                <span className="text-blue-700 italic">Experience</span>
              </h2>
              <p
                className={`text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 transform transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              >
                Experience effortless banking with our powerful, all-in-one app — built for speed, security, and
                control. Manage your money smarter, anytime, anywhere.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start transform transition-all duration-1000 delay-600 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-700 hover:bg-blue-800 w-full sm:w-48 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl shadow-blue-700/30 hover:shadow-blue-700/40"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-white hover:bg-slate-50 w-full sm:w-48 border-2 border-blue-700 px-8 py-4 rounded-full text-blue-700 hover:text-blue-800 font-semibold text-base transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg shadow-blue-700/20 hover:shadow-blue-700/30"
              >
                Sign Up
              </button>
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 pt-6 transform transition-all duration-1000 delay-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm md:text-base text-slate-600 font-medium">Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm md:text-base text-slate-600 font-medium">24/7 Customer Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-sm md:text-base text-slate-600 font-medium">Instant Transfers</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div
            className={`w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0 transform transition-all duration-1000 delay-500 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
          >
            <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] lg:w-96 lg:h-[480px]">
              {/* Main Phone */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-800 rounded-3xl shadow-2xl shadow-blue-700/40 transform rotate-6 hover:rotate-3 transition-all duration-500 ${isLoaded ? "scale-100" : "scale-90"}`}
              >
                <div className="absolute inset-4 bg-white rounded-2xl flex flex-col p-4 sm:p-6 space-y-4 sm:space-y-5">
                  {/* App Header */}
                  <div
                    className={`flex items-center justify-between transform transition-all duration-800 delay-800 ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-700 rounded-md"></div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                      <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                      <div className="w-1 h-1 bg-blue-700 rounded-full"></div>
                    </div>
                  </div>

                  {/* Balance Card */}
                  <div
                    className={`bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl p-4 sm:p-5 text-white transform transition-all duration-800 delay-900 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
                  >
                    <div className="text-xs sm:text-sm opacity-80 mb-1">Total Balance</div>
                    <div className="text-lg sm:text-2xl font-bold">$12,450.00</div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-3">
                    <div
                      className={`h-10 sm:h-12 bg-blue-700 rounded-xl flex items-center justify-center transform transition-all duration-800 delay-1000 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
                    >
                      <div className="w-24 sm:w-30 h-1 bg-white rounded-sm opacity-80"></div>
                    </div>
                    <div
                      className={`h-10 sm:h-12 bg-slate-100 rounded-xl flex items-center justify-center transform transition-all duration-800 delay-1100 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
                    >
                      <div className="w-20 sm:w-25 h-1 bg-slate-400 rounded-sm"></div>
                    </div>
                    <div
                      className={`h-10 sm:h-12 bg-slate-100 rounded-xl flex items-center justify-center transform transition-all duration-800 delay-1200 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
                    >
                      <div className="w-16 sm:w-20 h-1 bg-slate-400 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div
                className={`absolute -top-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 animate-bounce transform transition-all duration-1000 delay-800 ${isLoaded ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
              >
                <span className="text-white font-bold text-sm sm:text-lg">$</span>
              </div>
              <div
                className={`absolute -bottom-4 -left-4 w-8 h-8 sm:w-10 sm:h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 animate-pulse transform transition-all duration-1000 delay-900 ${isLoaded ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
              >
                <span className="text-white font-bold text-xs sm:text-sm">★</span>
              </div>
              <div
                className={`absolute top-1/2 -right-6 w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 transform transition-all duration-1000 delay-1000 ${isLoaded ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
