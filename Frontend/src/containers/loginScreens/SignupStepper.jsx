import { useState, useEffect } from "react";
import SignupStepOne from "./SignupStepOne";
import SignupStepTwo from "./SignupStepTwo";
import Button from "../../components/customButton";
import { Link } from "react-router-dom";

function SignupStepper() {
  const [step, setStep] = useState(1);
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordToggle = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleNext = () => {
    const { firstName, lastName, username, password, confirmPassword } =
      formData;
    const newErrors = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required.";
    if (!lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!username.trim()) newErrors.username = "Username is required.";
    if (!password) newErrors.password = "Password is required.";
    if (!confirmPassword)
      newErrors.confirmPassword = "Please confirm your password.";
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { phoneNumber, cnicNumber } = formData;
    const newErrors = {};

    const plainPhone = phoneNumber.replace(/-/g, "");
    const plainCnic = cnicNumber.replace(/-/g, "");

    if (!/^\d{11}$/.test(plainPhone) || !plainPhone.startsWith("03")) {
      newErrors.phoneNumber =
        "Phone number must start with 03 and be 11 digits.";
    }

    if (!/^\d{13}$/.test(plainCnic)) {
      newErrors.cnicNumber = "CNIC number must be exactly 13 digits.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("Submitted Data:", formData);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#eff6ff_0%,_#ffffff_50%,_#dbeafe_100%)] flex items-center justify-center p-[16px]">
      <div className="bg-white w-full max-w-[600px] rounded-[16px] shadow-md border border-[#e5e7eb] overflow-hidden">
        <div className="bg-[linear-gradient(90deg,_#2563eb_0%,_#1d4ed8_100%)] px-[32px] py-[20px] text-center">
          <h1 className="text-[24px] font-bold text-white mb-[8px]">
            Create an Account
          </h1>
          <p className="text-[#dbeafe] text-[14px]">Step {step} of 2</p>
        </div>
        <div className="px-[32px] py-[32px]">
          <form onSubmit={handleSubmit} className="space-y-[20px]">
            {step === 1 && (
              <SignupStepOne
                formData={formData}
                handleInputChange={handleInputChange}
                passwordVisible={passwordVisible}
                handlePasswordToggle={handlePasswordToggle}
                errors={errors}
              />
            )}
            {step === 2 && (
              <SignupStepTwo
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
              />
            )}

            <div className="flex justify-between gap-4 mt-[24px]">
              {step > 1 && (
                <Button text="Back" type="button" onClick={handleBack} />
              )}
              {step < 2 && (
                <Button text="Next" type="button" onClick={handleNext} />
              )}
              {step === 2 && <Button text="Sign Up" type="submit" />}
            </div>
            <div
              className={`mt-[24px] sm:mt-[32px] text-center transform transition-all duration-800 delay-1100 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <p className="text-[13px] sm:text-[14px] text-[#4b5563]">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-[#2563eb] hover:text-[#3b82f6] transition-colors duration-200"
                >
                  Log in here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupStepper;
