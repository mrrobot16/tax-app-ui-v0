import { SidebarProps } from 'types';

const Sidebar2 = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
    return (
      <div className={`absolute md:relative z-10 h-screen bg-gray-800 md:static md:h-auto ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <div className="text-gray-100">
          {/* Your sidebar items */}
        </div>
      </div>
    );
  };

export default Sidebar2;
