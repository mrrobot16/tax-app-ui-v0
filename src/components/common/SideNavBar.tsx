import { UserInfo, SideNavBarChatList } from 'components';

export default function SideNavbar() {
    return (
      <div className="hidden">
            {/*
            TODO: SideNavBar contains:
            - list of chats
            - new chat button
            - exit slider
            - UserInfoComponent
            */}
        <UserInfo />
      </div>
    );
  }
