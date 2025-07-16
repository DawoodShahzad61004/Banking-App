import NavBar from "./NavBar";
import TopBar from "./TopBar";
import DebitCard from "./DebitCard";

function Home() {
  return (
    <div className="flex h-screen w-screen bg-gradient-to-br from-blue-100 to-blue-300 items-center justify-center">
      <div className="flex bg-white w-[95%] h-[97%] rounded-[10px] shadow-lg shadow-blue-500/30 overflow-hidden">
        {/* Sidebar Nav */}
        <div className="h-full">
          <NavBar />
        </div>

        {/* Right Side Content with TopBar and DebitCard */}
        <div className="flex flex-col flex-1 h-full">
          <TopBar />

          {/* Place DebitCard at top-left under TopBar */}
          <div className="flex flex-col p-6 gap-4">
            <DebitCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
