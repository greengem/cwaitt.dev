// Sidebar.js
import React from 'react';
import SidebarGitHub from './SidebarGitHub';
import SidebarAboutMe from './SidebarAboutMe';
import SidebarLatestPost from './SidebarLatestPost';

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
