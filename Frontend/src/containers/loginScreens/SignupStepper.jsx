import { useState } from "react";
import SignupStepOne from "./SignupStepOne";
import SignupStepTwo from "./SignupStepTwo";
import Button from "../../components/customButton";
// import eyeSVG from "../../assets/eye.svg";

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

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#eff6ff_0%,_#ffffff_50%,_#dbeafe_100%)] flex items-center justify-center p-[16px]">
      <div className="bg-white w-full max-w-[600px] rounded-[16px] shadow-md border border-[#e5e7eb] overflow-hidden">
        <div className="bg-[linear-gradient(90deg,_#2563eb_0%,_#1d4ed8_100%)] px-[32px] py-[20px] text-center">
          <h1 className="text-[24px] font-bold text-white mb-[8px]">Create an Account</h1>
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
              />
            )}
            {step === 2 && (
              <SignupStepTwo
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}

            <div className="flex justify-between mt-[24px]">
              {step > 1 && <Button text="Back" type="button" onClick={handleBack} />}
              {step < 2 && <Button text="Next" type="button" onClick={handleNext} />}
              {step === 2 && <Button text="Sign Up" type="submit" />}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupStepper;
