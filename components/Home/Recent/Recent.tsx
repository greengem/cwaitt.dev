import HomeSection from '@/components/Layout/Section/HomeSection'
import Container from '@/components/Layout/Container'
import RecentHeading from '@/components/Home/Recent/RecentHeading';
import RecentPosts from '@/components/Home/Recent/RecentPosts';
import RecentCta from '@/components/Home/Recent/RecentCta';

export default function RecentWork({ twoProjects }) {
  return(
    <HomeSection id='recent'>
      <Container>
        <RecentHeading />
        <RecentPosts twoProjects={twoProjects} />
        <RecentCta />
      </Container>
    </HomeSection>
  )
}