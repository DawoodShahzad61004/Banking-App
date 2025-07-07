import InputField from "../../components/inputField";

function SignupStepTwo({ formData, handleInputChange, errors }) {
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // remove non-digits
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 4 && value.length <= 7)
      value = `${value.slice(0, 4)}-${value.slice(4)}`;
    else if (value.length > 7)
      value = `${value.slice(0, 4)}-${value.slice(4, 7)}-${value.slice(7)}`;

    handleInputChange({ target: { name: "phoneNumber", value } });
  };

  const handleCnicChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 13) value = value.slice(0, 13);
    if (value.length > 5 && value.length <= 12)
      value = `${value.slice(0, 5)}-${value.slice(5, 12)}`;
    else if (value.length > 12)
      value = `${value.slice(0, 5)}-${value.slice(5, 12)}-${value.slice(12)}`;

    handleInputChange({ target: { name: "cnicNumber", value } });
  };

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
          value={formData.phoneNumber}
          placeholder="03XX-XXXXXXX"
          changeHandler={handlePhoneChange}
          error={errors.phoneNumber}
        />
        <InputField
          label="CNIC Number"
          name="cnicNumber"
          value={formData.cnicNumber}
          placeholder="XXXXX-XXXXXXX-X"
          changeHandler={handleCnicChange}
          error={errors.cnicNumber}
        />
      </div>
    </>
  );
}

export default SignupStepTwo;
