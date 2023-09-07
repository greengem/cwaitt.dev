import React from 'react';
import SidebarAboutMe from './SidebarAboutMe/SidebarAboutMe';
import SidebarGitHub from './SidebarGitHub/SidebarGitHub';

function AppSidebar({ gitHubLink }) {
  return (
    <div className="sidebar">
        <SidebarAboutMe />
        <SidebarGitHub gitHubLink={gitHubLink} />
    </div>
  );
}

export default AppSidebar;
