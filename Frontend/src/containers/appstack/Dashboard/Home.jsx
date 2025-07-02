import NavBar from './NavBar';

function Home() {
    return (
            <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300'>
                <div className='flex items-center bg-white w-[95%] h-[97%] rounded-[10px] shadow-lg shadow-blue-500/30 overflow-hidden p-4'>
                    <NavBar />
                </div>
            </div>
    );
}

export default Home;