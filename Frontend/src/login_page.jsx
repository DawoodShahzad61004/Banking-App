import { useState } from "react";
import appleSVg from "./assets/apple.svg";
import googleSVG from "./assets/google.svg";
import eyeSVG from "./assets/eye.svg";

function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  //     const passwordInput = document.getElementById("toggle-password-visibility");
  //   btn.addEventListener("click", () => {
  //     const passwordField = document.getElementById("password");
  //     if (passwordField.type === "password") {
  //       passwordField.type = "text";
  //     }
  //     else {
  //       passwordField.type = "password";
  //     }
  //     });

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#eff6ff_0%,_#ffffff_50%,_#dbeafe_100%)] flex items-center justify-center p-[16px]">
      <div className="bg-[#ffffff] w-full max-w-[500px] max-h-[700px] rounded-[16px] shadow-[0_10px_25px_rgba(0,0,0,0.15)] border border-[#e5e7eb] overflow-hidden">

        {/* Head */}
        <div className="bg-[linear-gradient(90deg,_#2563eb_0%,_#1d4ed8_100%)] px-[32px] py-[20px] text-center">
          <h1 className="text-[24px] font-bold text-[#ffffff] mb-[8px]">
            Welcome Back
          </h1>
          <p className="text-[#dbeafe] text-[14px]">Sign in to your account</p>
        </div>
        {/* Form */}
        <div className="px-[32px] py-[32px]">
          <form className="space-y-[24px]">
            <div>
              <label
                htmlFor="username"
                className="block text-[14px] font-medium text-[#374151] mb-[8px]"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                className="w-full max-w-[400px] px-[16px] py-[12px] border-[2px] border-[#d1d5db] rounded-[8px] focus:border-[#3b82f6] focus:outline-none text-[black] bg-[#f9fafb] focus:bg-[#ffffff] transition-all duration-[200ms] text-[16px]"
                placeholder="Enter your username"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-[14px] font-medium text-[#374151] mb-[8px]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full max-w-[400px] px-[16px] py-[12px] border-[2px] border-[#d1d5db] rounded-[8px] focus:border-[#3b82f6] focus:outline-none text-[#000000] bg-[#f9fafb] focus:bg-[#ffffff] transition-all duration-[200ms] text-[16px]"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-[12px] top-[37px] bg-transparent border-none p-[4px] cursor-pointer hover:bg-[#f3f4f6]"
              >
                <img
                  src={eyeSVG}
                  alt="Toggle Password Visibility"
                  className="w-[24px] h-[24px]"
                />
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-[16px] w-[16px] text-[#2563eb] border-[#d1d5db] rounded-[4px]"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-[8px] text-[14px] text-[#374151]"
                >
                  Remember me
                </label>
              </div>
              <div>
                <a
                  href="#"
                  className="text-[14px] font-medium text-[#2563eb] hover:text-[#3b82f6]"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[linear-gradient(90deg,_#2563eb_0%,_#1d4ed8_100%)] text-[#ffffff] py-[12px] px-[16px] rounded-[8px] font-medium hover:bg-[linear-gradient(90deg,_#1d4ed8_0%,_#1e40af_100%)] transition-all duration-[200ms] shadow-[0_4px_12px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_16px_rgba(37,99,235,0.4)] text-[16px]"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="mt-[24px] mb-[24px]">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#d1d5db]" />
              </div>
              <div className="relative flex justify-center text-[14px]">
                <span className="px-[8px] bg-[#ffffff] text-[#6b7280]">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-[12px]">
            <button className="flex items-center justify-center py-[10px] px-[16px] border border-[#d1d5db] rounded-[8px] bg-[#ffffff] text-[14px] font-medium text-[#6b7280] hover:bg-[#f9fafb] transition-colors duration-[200ms]">
              <span className="text-[18px] mr-[8px]">
                <img
                  src={googleSVG}
                  alt="Google Logo"
                  className="w-[20px] h-[20px]"
                />
              </span>
              Google
            </button>
            <button className="flex items-center justify-center py-[10px] px-[16px] border border-[#d1d5db] rounded-[8px] bg-[#ffffff] text-[14px] font-medium text-[#6b7280] hover:bg-[#f9fafb] transition-colors duration-[200ms]">
              <span className="text-[18px] mr-[8px]">
                <img
                  src={appleSVg}
                  alt="Apple Logo"
                  className="w-[20px] h-[20px]"
                />
              </span>
              Apple
            </button>
          </div>

          {/* Sign Up */}
          <div className="mt-[32px] text-center">
            <p className="text-[14px] text-[#4b5563]">
              {"Don't have an account? "}
              <a
                href="./signup_page"
                className="font-medium text-[#2563eb] hover:text-[#3b82f6] transition-colors duration-[200ms]"
              >
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
