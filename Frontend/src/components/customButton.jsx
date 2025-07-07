function Button(prop) {
  return (
    <button
      type = {prop.type || "submit"}
      onClick = {prop.onClick || (() => {})}
      className="w-full bg-[linear-gradient(90deg,_#2563eb_0%,_#1d4ed8_100%)] text-[#ffffff] py-[12px] px-[16px] rounded-[8px] font-medium hover:bg-[linear-gradient(90deg,_#1d4ed8_0%,_#1e40af_100%)] transition-all duration-[200ms] shadow-[0_4px_12px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_16px_rgba(37,99,235,0.4)] text-[16px]"
    >
      {prop.text || "Temp Text"}
    </button>
  );
}

export default Button;