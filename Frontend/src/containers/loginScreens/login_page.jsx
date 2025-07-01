import { useState, useEffect } from "react";
import appleSVg from "../../assets/apple.svg";
import googleSVG from "../../assets/google.svg";
import eyeSVG from "../../assets/eye.svg";
import Button from "../../components/customButton.jsx";
import InputField from "../../components/inputField.jsx";
import { Link } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handlePasswordToggle = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen bg-[linear-gradient(135deg,_#eff6ff_0%,_#ffffff_50%,_#dbeafe_100%)] flex items-center justify-center p-[8px] sm:p-[16px] transition-all duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-[#ffffff] w-full max-w-[500px] max-h-[700px] rounded-[16px] shadow-[0_10px_25px_rgba(0,0,0,0.15)] border border-[#e5e7eb] overflow-hidden transform transition-all duration-1000 delay-100 ${
          isLoaded ? "translate-y-0 scale-100" : "translate-y-8 scale-95"
        }`}
      >
        {/* Head */}
        <div
          className={`bg-[linear-gradient(90deg,_#2563eb_0%,_#1d4ed8_100%)] px-[16px] sm:px-[32px] py-[20px] text-center transform transition-all duration-800 delay-200 ${
            isLoaded ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <h1
            className={`text-[20px] sm:text-[24px] font-bold text-[#ffffff] mb-[8px] transform transition-all duration-800 delay-300 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            Welcome Back
          </h1>
          <p
            className={`text-[#dbeafe] text-[12px] sm:text-[14px] transform transition-all duration-800 delay-400 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            Sign in to your account
          </p>
        </div>
        {/* Form */}
        <div
          className={`px-[16px] sm:px-[32px] py-[24px] sm:py-[32px] transform transition-all duration-1000 delay-300 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <form className="space-y-[20px] sm:space-y-[24px]">
            <div
              className={`transform transition-all duration-800 delay-500 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              }`}
            >
              <InputField
                label="Username"
                type="text"
                name="username"
                value={formData.username}
                placeholder="Enter your username"
                required
                changeHandler={handleInputChange}
              />
            </div>
            <div
              className={`relative transform transition-all duration-800 delay-600 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              }`}
            >
              <InputField
                label="Password"
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                placeholder="Enter your password"
                required
                changeHandler={handleInputChange}
              />
              <button
                type="button"
                onClick={handlePasswordToggle}
                className="absolute right-[12px] top-[38px] bg-transparent border-none p-[4px] cursor-pointer hover:bg-[#f3f4f6] rounded-[4px] flex items-center justify-center transition-all duration-200"
              >
                <img
                  src={eyeSVG || "/placeholder.svg"}
                  alt="Toggle Password Visibility"
                  className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]"
                />
              </button>
            </div>
            {/* Remember Me & Forgot Password */}
            <div
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[12px] sm:gap-0 transform transition-all duration-800 delay-700 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
            >
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-[16px] w-[16px] text-[#2563eb] border-[#d1d5db] rounded-[4px]"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-[8px] text-[13px] sm:text-[14px] text-[#374151]"
                >
                  Remember me
                </label>
              </div>
              <div>
                <a
                  href="#"
                  className="text-[13px] sm:text-[14px] font-medium text-[#2563eb] hover:text-[#3b82f6] transition-colors duration-200"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            {/* Login Button */}
            <div
              className={`mt-[20px] sm:mt-[24px] transform transition-all duration-800 delay-800 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <Button text="Sign In" type="submit" />
            </div>
          </form>

          {/* Divider */}
          <div
            className={`mt-[20px] sm:mt-[24px] mb-[20px] sm:mb-[24px] transform transition-all duration-800 delay-900 ${
              isLoaded ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#d1d5db]" />
              </div>
              <div className="relative flex justify-center text-[13px] sm:text-[14px]">
                <span className="px-[8px] bg-[#ffffff] text-[#6b7280]">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-[12px] transform transition-all duration-800 delay-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <button className="flex items-center justify-center py-[12px] sm:py-[10px] px-[16px] border border-[#d1d5db] rounded-[8px] bg-[#ffffff] text-[13px] sm:text-[14px] font-medium text-[#6b7280] hover:bg-[#f9fafb] transition-all duration-200 hover:scale-105">
              <span className="text-[18px] mr-[8px]">
                <img
                  src={googleSVG || "/placeholder.svg"}
                  alt="Google Logo"
                  className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                />
                <span style={{ display: "none" }}>G</span>
              </span>
              Google
            </button>
            <button className="flex items-center justify-center py-[12px] sm:py-[10px] px-[16px] border border-[#d1d5db] rounded-[8px] bg-[#ffffff] text-[13px] sm:text-[14px] font-medium text-[#6b7280] hover:bg-[#f9fafb] transition-all duration-200 hover:scale-105">
              <span className="text-[18px] mr-[8px]">
                <img
                  src={appleSVg || "/placeholder.svg"}
                  alt="Apple Logo"
                  className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                />
              </span>
              Apple
            </button>
          </div>

          {/* Sign Up */}
          <div
            className={`mt-[24px] sm:mt-[32px] text-center transform transition-all duration-800 delay-1100 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <p className="text-[13px] sm:text-[14px] text-[#4b5563]">
              {"Don't have an account? "}

              <Link to="/signup">
                <button className="font-medium text-[#2563eb] hover:text-[#3b82f6] transition-colors duration-200">
                  Sign up here
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
