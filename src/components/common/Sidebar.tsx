import { SidebarProps, SidebarToggleButtonProps } from 'types';


export const SidebarToggleButton = ({ isSidebarOpen, setIsSidebarOpen }: SidebarToggleButtonProps) => {
  const onClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

   return (
    <button onClick={onClick} type="button" className="p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-gray-800"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  );
};

const sidebarItems = new Array(5).fill(null).map((_, index) => ({
    id: index,
    label: `Item ${index + 1}`,
    href: `/path-for-item-${index + 1}`, // You can dynamically set the path as needed
}));

export const Sidebar = ({ isSidebarOpen }: SidebarProps) => {
  return (
    <div className={`absolute md:relative z-10 h-screen bg-gray-800 md:static md:h-auto ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
      <ul className="text-gray-100">
        {sidebarItems.map((item) => (
          <li key={item.id} className="relative" style={{ opacity: 1, height: 'auto', transform: 'none' }}>
            <div className="group relative active:opacity-90">
              <a href={item.href} className="flex items-center gap-2 rounded-lg p-2 hover:bg-token-surface-primary">
                <div className="relative grow overflow-hidden whitespace-nowrap">
                  {item.label}
                  <div className="absolute bottom-0 right-0 top-0 w-8 bg-gradient-to-l from-token-surface-primary to-transparent" />
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
