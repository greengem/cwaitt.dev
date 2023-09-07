import React from 'react';
import SidebarAboutMe from './SidebarAboutMe/SidebarAboutMe';
import SidebarGitHub from './SidebarGitHub/SidebarGitHub';
import SidebarLatestPost from './SidebarLatestPost/SidebarLatestPost';

function AppSidebar({ gitHubLink }) {
  return (
    <div className="sidebar">
        <SidebarAboutMe />
        <SidebarGitHub gitHubLink={gitHubLink} />
        <SidebarLatestPost />
    </div>
  );
}

export default AppSidebar;
