import InputField from "../../components/inputField";
import eyeSVG from "../../assets/eye.svg";

function SignupStepOne({
  formData,
  handleInputChange,
  passwordVisible,
  handlePasswordToggle,
}) {
  return (
    <>
      <div className="grid grid-cols-2 gap-[16px]">
        <InputField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          placeholder="Enter your first name"
          changeHandler={handleInputChange}
        />
        <InputField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          placeholder="Enter your last name"
          changeHandler={handleInputChange}
        />
      </div>

      <InputField
        label="Username"
        name="username"
        value={formData.username}
        placeholder="Choose a username"
        changeHandler={handleInputChange}
      />

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
          className="absolute right-[12px] top-[56px] -translate-y-1/2 bg-transparent p-[4px] cursor-pointer"
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
    </>
  );
}

export default SignupStepOne;
