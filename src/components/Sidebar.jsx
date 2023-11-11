import {
    HiHome,
    HiChartBar,
    HiDocumentSearch,
    HiMail,
    HiCreditCard,
    HiBell,
    HiArrowUp,
    HiExternalLink,
} from 'react-icons/hi';

function Sidebar() {
    return (
        <div className="bg-slate-800 flex-none w-14 sm:w-20 h-screen">
            <div className="h-20 items-center flex">
                <HiHome className="text-gray-300 left-3 sm:left-6 fixed " size={'40px'} />
            </div>
            <div className="fixed left-3 sm:left-6 top-[100px]">
                <HiChartBar size={'40px'} className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300" />
                <HiDocumentSearch size={'40px'} className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300" />
                <HiMail size={'40px'} className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300" />
                <HiCreditCard size={'40px'} className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300" />
                <HiBell size={'40px'} className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300" />
            </div>
            <div className="fixed bottom-4 left-3 sm:left-6">
                <a href="#top">
                    <HiArrowUp size={'40px'} className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300" />
                </a>
                <HiExternalLink size={'40px'} className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300" />
            </div>
        </div>
    );
}

export default Sidebar;
