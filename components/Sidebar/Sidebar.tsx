import SidebarGitHub from './SidebarGitHub/SidebarGitHub';
import SidebarLatestPost from './SidebarLatestPost/SidebarLatestPost';

export default function AppSidebar({ githubData, demoUrl, latestCommit, latestProject }) {
  return (
    <div className="sidebar">
        <SidebarGitHub githubData={githubData} demoUrl={demoUrl} latestCommit={latestCommit} />
        <SidebarLatestPost latestProject={latestProject} />
    </div>
  );
}
