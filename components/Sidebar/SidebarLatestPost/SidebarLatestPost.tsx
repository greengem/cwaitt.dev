import ProjectCard from '../../../components/ProjectCard/ProjectCard';

export default function SidebarLatestPost({ latestProject }) {
  return (
    <aside>
      <ProjectCard
        key={latestProject.slug}
        slug={latestProject.slug}
        projectTitle={latestProject.projectTitle}
        shortDescription={latestProject.shortDescription}
        featuredImageUrl={latestProject.featuredImage.url}
        techStacks={latestProject.techStacksCollection.items}
        projectTags={latestProject.projectTags}
      />
    </aside>
  );
}
