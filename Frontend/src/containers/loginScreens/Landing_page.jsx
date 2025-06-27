import LoginPage from "./login_page";

function LandingPage() {
  return (
    <div className="bg-[linear-gradient(135deg,_#2563eb_0%,_#1d4ed8_50%,_#1e40af_100%)] w-full min-h-[100vh] flex items-center justify-center p-[16px]">
      <div className="bg-[white] w-[95%] max-w-[1200px] min-h-[700px] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
        {/* Header */}
        <div className="p-[24px] border-b-[1px] border-[#f1f5f9]">
          <h1 className="text-[28px] font-bold text-[#1e293b]">
            Apna <span className="text-[#1d4ed8] italic">BANK</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg: flex-row items-center justify-between p-[40px] gap-[40px]">
          {/* Left Content */}
          <div className="w-full lg:w-[50%] flex flex-col space-y-[24px]">
            <div className="space-y-[16px]">
              <h2 className="text-[42px] lg:text-[48px] font-bold text-[#1e293b] leading-[1.1]">
                Digital Banking
                <br />
                <span className="text-[#1d4ed8] italic">Experience</span>
              </h2>
              <p className="text-[20px] text-[#64748b] leading-[1.6] max-w-[480px]">
                Experience effortless banking with our powerful, all-in-one app
                — built for speed, security, and control. Manage your money
                smarter, anytime, anywhere.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row sm:flex-row gap-[16px] pt-[8px]">
              <button className="bg-[#1d4ed8] hover:bg-[#1e40af] w-[200px] sm:w-[200px] px-[32px] py-[16px] rounded-[50px] text-[white] font-semibold text-[16px] transition-all duration-[200ms] transform hover:scale-[1.05] shadow-[0_8px_20px_rgba(29,78,216,0.3)] hover:shadow-[0_12px_30px_rgba(29,78,216,0.4)]">
                Sign In
              </button>
              <button className="bg-[white] hover:bg-[#f8fafc] w-[200px] sm:w-[200px] border-[2px] border-[#1d4ed8] px-[32px] py-[16px] rounded-[50px] text-[#1d4ed8] hover:text-[#1e40af] font-semibold text-[16px] transition-all duration-[200ms] transform hover:scale-[1.05] shadow-[0_4px_15px_rgba(29,78,216,0.2)] hover:shadow-[0_8px_25px_rgba(29,78,216,0.3)]">
                Sign Up
              </button>
            </div>

            {/* Trust Indicators */}
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="w-full lg:w-[50%] flex items-center justify-center">
            <div className="relative w-[320px] h-[400px] lg:w-[380px] lg:h-[480px]">
              {/* Main Phone */}
              <div className="absolute inset-[0] bg-[linear-gradient(135deg,_#1d4ed8_0%,_#1e40af_100%)] rounded-[32px] shadow-[0_25px_60px_rgba(29,78,216,0.4)] transform rotate-[6deg] hover:rotate-[3deg] transition-transform duration-[300ms]">
                <div className="absolute inset-[16px] bg-[white] rounded-[24px] flex flex-col p-[24px] space-y-[20px]">
                  {/* App Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-[40px] h-[40px] bg-[#dbeafe] rounded-[12px] flex items-center justify-center">
                      <div className="w-[20px] h-[20px] bg-[#1d4ed8] rounded-[6px]"></div>
                    </div>
                    <div className="flex gap-[4px]">
                      <div className="w-[4px] h-[4px] bg-[#e2e8f0] rounded-[50%]"></div>
                      <div className="w-[4px] h-[4px] bg-[#e2e8f0] rounded-[50%]"></div>
                      <div className="w-[4px] h-[4px] bg-[#1d4ed8] rounded-[50%]"></div>
                    </div>
                  </div>

                  {/* Balance Card */}
                  <div className="bg-[linear-gradient(135deg,_#1d4ed8_0%,_#3b82f6_100%)] rounded-[16px] p-[20px] text-[white]">
                    <div className="text-[14px] opacity-[0.8] mb-[4px]">
                      Total Balance
                    </div>
                    <div className="text-[24px] font-bold">$12,450.00</div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-[12px]">
                    <div className="h-[48px] bg-[#1d4ed8] rounded-[12px] flex items-center justify-center">
                      <div className="w-[120px] h-[4px] bg-[white] rounded-[2px] opacity-[0.8]"></div>
                    </div>
                    <div className="h-[48px] bg-[#f1f5f9] rounded-[12px] flex items-center justify-center">
                      <div className="w-[100px] h-[4px] bg-[#cbd5e1] rounded-[2px]"></div>
                    </div>
                    <div className="h-[48px] bg-[#f1f5f9] rounded-[12px] flex items-center justify-center">
                      <div className="w-[80px] h-[4px] bg-[#cbd5e1] rounded-[2px]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-[-16px] right-[-16px] w-[48px] h-[48px] bg-[#10b981] rounded-[50%] flex items-center justify-center shadow-[0_8px_20px_rgba(16,185,129,0.3)] animate-bounce">
                <span className="text-[white] font-bold text-[18px]">$</span>
              </div>
              <div className="absolute bottom-[-16px] left-[-16px] w-[40px] h-[40px] bg-[#f59e0b] rounded-[50%] flex items-center justify-center shadow-[0_6px_15px_rgba(245,158,11,0.3)] animate-pulse">
                <span className="text-[white] font-bold text-[14px]">★</span>
              </div>
              <div className="absolute top-[50%] right-[-24px] w-[32px] h-[32px] bg-[#ef4444] rounded-[50%] flex items-center justify-center shadow-[0_4px_12px_rgba(239,68,68,0.3)]">
                <div className="w-[8px] h-[8px] bg-[white] rounded-[50%]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-[24px] pt-[24px] m-[24px]">
              <div className="flex items-center gap-[8px]">
                <div className="w-[8px] h-[8px] bg-[#10b981] rounded-[50%]"></div>
                <span className="text-[14px] text-[#64748b] font-medium">Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-[8px]">
                <div className="w-[8px] h-[8px] bg-[#10b981] rounded-[50%]"></div>
                <span className="text-[14px] text-[#64748b] font-medium">24/7 Customer Support</span>
              </div>
              <div className="flex items-center gap-[8px]">
                <div className="w-[8px] h-[8px] bg-[#10b981] rounded-[50%]"></div>
                <span className="text-[14px] text-[#64748b] font-medium">Instant Transfers</span>
              </div>
            </div>
      </div>
    </div>
  );
}

export default LandingPage;
