import React from 'react';
import SidebarGitHub from './SidebarGitHub/SidebarGitHub';
import SidebarLatestPost from './SidebarLatestPost/SidebarLatestPost';

export default function AppSidebar({ githubData, demoUrl, latestCommit }) {
  return (
    <div className="sidebar">
        <SidebarGitHub githubData={githubData} demoUrl={demoUrl} latestCommit={latestCommit} />
        <SidebarLatestPost />
    </div>
  );
}
