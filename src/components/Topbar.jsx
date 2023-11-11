import { TextInput } from '@tremor/react';
import { HiSearch } from 'react-icons/hi';

function Topbar() {
    return (
        <nav id="top" className="relative w-full sm:flex justify-between items-center p-2">
            <h1 className="font-bold text-gray-300">Dashboard</h1>
            <div className="py-2">
                <TextInput icon={HiSearch} placeholder="Search..." />
            </div>
        </nav>
    );
}

export default Topbar;
