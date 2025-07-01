import InputField from "../../components/inputField";

function SignupStepTwo({ formData, handleInputChange }) {
  return (
    <>
      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        placeholder="Enter your email"
        required
        changeHandler={handleInputChange}
      />
      <div className="grid grid-cols-2 gap-[16px]">
        <InputField
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          placeholder="03XX-XXXXXXX"
          required
          changeHandler={handleInputChange}
        />
        <InputField
          label="CNIC Number"
          name="cnicNumber"
          value={formData.cnicNumber}
          placeholder="XXXXX-XXXXXXX-X"
          required
          changeHandler={handleInputChange}
        />
      </div>
    </>
  );
}

export default SignupStepTwo;
