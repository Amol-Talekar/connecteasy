import React from "react";
import { IMG, SideBarBox, SidebarContainer, SidebarTitle } from "./style";
import house from "../../../../assets/images/house.png";
import bookmark from "../../../../assets/images/bookmark.png";
import explore from "../../../../assets/images/explore.png";
import more from "../../../../assets/images/more.png";
import notification from "../../../../assets/images/notification.png";
import messages from "../../../../assets/images/messages.png";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SideBarBox>
        <IMG src={house} alt="Home" />
        <SidebarTitle>Home</SidebarTitle>
      </SideBarBox>
      <SideBarBox>
        <IMG src={explore} alt="Explore" />
        <SidebarTitle>Explore</SidebarTitle>
      </SideBarBox>
      <SideBarBox>
        <IMG src={notification} alt="Notification" />
        <SidebarTitle>Notification</SidebarTitle>
      </SideBarBox>
      <SideBarBox>
        <IMG src={messages} alt="Messages" />
        <SidebarTitle>Messages</SidebarTitle>
      </SideBarBox>
      <SideBarBox>
        <IMG src={bookmark} alt="Bookmarks" />
        <SidebarTitle>Bookmarks</SidebarTitle>
      </SideBarBox>
      <SideBarBox>
        <IMG src={more} alt="More" />
        <SidebarTitle>More</SidebarTitle>
      </SideBarBox>
    </SidebarContainer>
  );
};
