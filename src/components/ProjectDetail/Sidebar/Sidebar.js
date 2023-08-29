// Sidebar.js
import React from 'react';
import SidebarGitHub from './SidebarGitHub/SidebarGitHub';
import SidebarAboutMe from './SidebarAboutMe/SidebarAboutMe';
import SidebarLatestPost from './SidebarLatestPost/SidebarLatestPost';

function AppSidebar() {
  return (
    <div className="sidebar">
      <SidebarAboutMe />
      <SidebarGitHub />
      <SidebarLatestPost />
    </div>
  );
}

export default AppSidebar;
