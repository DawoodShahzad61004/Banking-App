import React, { useState } from "react";
import Button from "../../components/customButton";
import InputField from "../../components/inputField";
import eyeSVG from "../../assets/eye.svg";
import googleSVG from "../../assets/google.svg";
import appleSVg from "../../assets/apple.svg";

function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    cnicNumber: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const handlePasswordToggle = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#eff6ff_0%,_#ffffff_50%,_#dbeafe_100%)] flex items-center justify-center p-[16px]">
      <div className="bg-[#ffffff] w-full max-w-[500px] max-h-[700px] rounded-[16px] shadow-[0_10px_25px_rgba(0,0,0,0.15)] border border-[#e5e7eb] overflow-hidden">
        {/* Header */}
        <div className="bg-[linear-gradient(90deg,_#2563eb_0%,_#1d4ed8_100%)] px-[32px] py-[20px] text-center">
          <h1 className="text-[24px] font-bold text-[#ffffff] mb-[8px]">
            Create an Account
          </h1>
          <p className="text-[#dbeafe] text-[14px]">Sign up to get started</p>
        </div>

        {/* Form */}
        <div className="px-[32px] py-[32px]">
          <form className="space-y-[20px]">
            {/* First Name & Last Name in one row */}
            <div className="grid grid-cols-2 gap-[16px]">
              <InputField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                placeholder="Enter your first name"
                changeHandler={handleInputChange}
                width="[20%]"
              />
              <InputField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                placeholder="Enter your last name"
                changeHandler={handleInputChange}
                width="[20%]"
              />
            </div>
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="Enter your email"
              changeHandler={handleInputChange}
            />
            <InputField
              label="Username"
              name="username"
              value={formData.username}
              placeholder="Choose a username"
              changeHandler={handleInputChange}
            />

            {/* Password + Confirm */}
            <div className="relative">
              <InputField
                label="Password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                value={formData.password}
                placeholder="Enter password"
                changeHandler={handleInputChange}
              />
              <button
                type="button"
                onClick={handlePasswordToggle}
                className="absolute right-[12px] top-[37px] bg-transparent border-none p-[4px] cursor-pointer hover:bg-[#f3f4f6]"
              >
                <img
                  src={eyeSVG}
                  alt="Toggle Password"
                  className="w-[24px] h-[24px]"
                />
              </button>
            </div>
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type={passwordVisible ? "text" : "password"}
              value={formData.confirmPassword}
              placeholder="Re-enter password"
              changeHandler={handleInputChange}
            />

            {/* Phone Number & CNIC in one row */}
            <div className="grid grid-cols-2 gap-[16px]">
              <InputField
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                placeholder="03XX-XXXXXXX"
                changeHandler={handleInputChange}
                width="auto"
              />
              <InputField
                label="CNIC Number"
                name="cnicNumber"
                value={formData.cnicNumber}
                placeholder="XXXXX-XXXXXXX-X"
                changeHandler={handleInputChange}
                width="auto"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-[24px]">
              <Button text="Sign Up" type="submit" />
            </div>
          </form>

          {/* Divider */}
          <div className="mt-[24px] mb-[24px]">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#d1d5db]" />
              </div>
              <div className="relative flex justify-center text-[14px]">
                <span className="px-[8px] bg-white text-[#6b7280]">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-[12px]">
            <button className="flex items-center justify-center py-[10px] px-[16px] border border-[#d1d5db] rounded-[8px] bg-white text-[14px] font-medium text-[#6b7280] hover:bg-[#f9fafb]">
              <img src={googleSVG} alt="Google" className="w-[20px] h-[20px] mr-[8px]" />
              Google
            </button>
            <button className="flex items-center justify-center py-[10px] px-[16px] border border-[#d1d5db] rounded-[8px] bg-white text-[14px] font-medium text-[#6b7280] hover:bg-[#f9fafb]">
              <img src={appleSVg} alt="Apple" className="w-[20px] h-[20px] mr-[8px]" />
              Apple
            </button>
          </div>

          {/* Redirect to Login */}
          <div className="mt-[32px] text-center">
            <p className="text-[14px] text-[#4b5563]">
              Already have an account?{" "}
              <a
                href="./login_page"
                className="font-medium text-[#2563eb] hover:text-[#3b82f6]"
              >
                Log in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
