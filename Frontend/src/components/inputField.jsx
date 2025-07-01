import React, { useState } from "react";

function InputField(props) {
  let inputClass = "w-" + (props.width || "full") + " max-w-[540px] px-[16px] py-[12px] border-[2px] border-[#d1d5db] rounded-[8px] focus:border-[#3b82f6] focus:outline-none text-[black] bg-[#f9fafb] focus:bg-[#ffffff] transition-all duration-[200ms] text-[16px]";
  return (
    <div>
      <label
        htmlFor={props.name || "input-field"}
        className="block text-[14px] font-medium text-[#374151] mb-[8px]"
      >
        {props.label || "Input Label"}
      </label>
      <input
        type={props.type || "text"}
        id={props.name || "input-field"}
        name={props.name || "input-field"}
        value={props.value || ""}
        onChange={props.changeHandler || (() => {})}
        required
        className={`${inputClass}`}
        placeholder={props.placeholder || "input-placeholder"}
      />
    </div>
  );
}

export default InputField;
