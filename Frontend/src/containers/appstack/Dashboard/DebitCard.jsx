import { useState } from "react";
import eyeSVG from "../../../assets/eye.svg";

function DebitCard({
  name = "Dawood Shahzad",
  balance = 12500.75,
  accountNumber = "1234 5678 9012 3456",
}) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <div className="relative w-full max-w-[340px] h-[200px] rounded-[20px] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-xl p-6 transition-all duration-500 hover:scale-[1.02]">
      {/* Bank Logo or Label */}
      <div className="flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-bold text-slate-100">
          Apna <span className="text-sky-200 italic">BANK</span>
        </div>

        <img
          src={eyeSVG}
          alt="Toggle"
          onClick={toggleVisibility}
          className="w-[20px] h-[20px] cursor-pointer hover:scale-110 transition"
        />
      </div>

      {/* Spacer */}
      <div className="mt-4 text-sm opacity-90">Account Balance</div>

      {/* Balance */}
      <div className="text-2xl sm:text-3xl font-bold tracking-wide my-1">
        {isVisible ? `$${balance.toLocaleString()}` : "••••••••"}
      </div>

      {/* Account Number */}
      <div className="text-sm opacity-90 mb-6">
        {isVisible ? accountNumber : "•••• •••• •••• ••••"}
      </div>

      {/* Card Footer */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-sm opacity-90">
        <span>Card Holder</span>
        <span>{name}</span>
      </div>
    </div>
  );
}

export default DebitCard;
