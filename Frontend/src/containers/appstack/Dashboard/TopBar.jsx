import { useState } from "react";
import { BellIcon, Settings, UserCircle, Search } from "lucide-react";

function TopBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full bg-white rounded-2xl mt-2 mr-2 ml-2 h-[72px] px-6 flex items-center justify-between shadow-md border border-gray-200">
      {/* Search Field*/}
      <div className="relative w-full max-w-md">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </span>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 "
        />
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <BellIcon className="w-6 h-6 text-gray-700" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Settings className="w-6 h-6 text-gray-700" />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition text-sm font-medium text-gray-700">
          <UserCircle className="w-6 h-6" />
          <span>Dawood</span>
        </button>
      </div>
    </div>
  );
}

export default TopBar;
