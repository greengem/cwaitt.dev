import React from 'react';
//import SidebarAboutMe from './SidebarAboutMe/SidebarAboutMe';
//import SidebarGitHub from './SidebarGitHub/SidebarGitHub';
import SidebarLatestPost from './SidebarLatestPost/SidebarLatestPost';

function AppSidebar({ gitHubLink, demoUrl, latestPost }) {
  return (
    <div className="sidebar">
        {/*<SidebarAboutMe />*/}
        {/*<SidebarGitHub gitHubLink={gitHubLink} demoUrl={demoUrl} />*/}
        <SidebarLatestPost />
    </div>
  );
}

export default AppSidebar;
