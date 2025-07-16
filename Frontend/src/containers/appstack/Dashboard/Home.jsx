import NavBar from './NavBar';
import TopBar from './TopBar';

function Home() {
  return (
    <div className="flex h-screen w-screen bg-gradient-to-br from-blue-100 to-blue-300 items-center justify-center">
      <div className="flex bg-white w-[95%] h-[97%] rounded-[10px] shadow-lg shadow-blue-500/30 overflow-hidden">
        {/* Sidebar Nav */}
        <div className="h-full">
          <NavBar />
        </div>

        {/* Right Side Content with TopBar */}
        <div className="flex flex-col flex-1 h-full">
          <TopBar />
          <div className="flex-1 p-6 overflow-auto">
            {/* Main content goes here */}
            <h1 className="text-xl font-semibold text-gray-800">Dashboard Content</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
