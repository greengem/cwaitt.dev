// Sidebar.js
import React from 'react';
import SidebarGitHub from './SidebarGitHub'; // Import the new component
import SidebarAboutMe from './SidebarAboutMe';
import SidebarLatestPost from './SidebarLatestPost'; // Update the file path if needed


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
