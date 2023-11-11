import Navbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';

function App() {
    return (
        <main className="flex">
            <Sidebar />
            <div className="flex flex-col flex-1 relative ">
                <Navbar />
                <div className="grid grid-cols-1 md:grid-cols-3  w-full">
                    {/* LEFT COLUMN */}
                    <div className="md:col-span-2">
                        <LeftColumn />
                    </div>
                    {/* RIGHT COLUMN */}
                    <div className="w-full">
                        <RightColumn />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
