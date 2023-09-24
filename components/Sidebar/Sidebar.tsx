import SidebarGitHub from '@/components/Sidebar/SidebarGitHub/SidebarGitHub';
import SidebarLatestPost from '@/components/Sidebar/SidebarLatestPost/SidebarLatestPost';

export default function AppSidebar({ githubData, demoUrl, latestCommit, latestCommitUrl, latestProject }) {
  return (
    <div className="sidebar">
        <SidebarGitHub 
            githubData={githubData} 
            demoUrl={demoUrl} 
            latestCommit={latestCommit}
            latestCommitUrl={latestCommitUrl} 
        />
        <SidebarLatestPost latestProject={latestProject} />
    </div>
  );
}
