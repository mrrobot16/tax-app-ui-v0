import { useState } from 'react';
import { SideNavBar, HamburgerButton, NewChatButton } from 'components';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="container sticky top-0 z-40 bg-white invisible">
      <div className="h-16 border-b border-b-slate-200 py-4">
        <nav className="ml-4 pl-6">
          {/* NOTE: This will be removed and replaced with SideNavBar component  */}
          {/* <a href="/" className="hover:text-slate-600 cursor-pointer font-bold">
            New Chat
          </a> */}
          {/* Top Section */}
          {/* TODO: For Mobile TopNavbar will only contain:
            - hamburger button toggle SideNavBar
            - new chat button
          */}
          <HamburgerButton isMobile={isMobile} />
          <NewChatButton isMobile={isMobile} />
        </nav>
        {/* Left Side Section */}
        {/* TODO: Add SideNavBar component with:
            - list of chats
            - new chat button
            - exit slider
        */}
        <SideNavBar />
      </div>
    </header>
  );
}
