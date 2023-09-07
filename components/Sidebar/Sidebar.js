import React from 'react';
import SidebarAboutMe from './SidebarAboutMe/SidebarAboutMe';
import SidebarGitHub from './SidebarGitHub/SidebarGitHub';
import SidebarLatestPost from './SidebarLatestPost/SidebarLatestPost';

function AppSidebar({ gitHubLink, latestPost }) {
  return (
    <div className="sidebar">
        <SidebarAboutMe />
        <SidebarGitHub gitHubLink={gitHubLink} />
        <SidebarLatestPost post={latestPost} />
    </div>
  );
}

export default AppSidebar;
