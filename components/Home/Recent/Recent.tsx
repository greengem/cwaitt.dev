import HomeSection from '@/components/Layout/Section/HomeSection'
import Container from '@/components/Layout/Container'
import Heading from '@/components/Layout/Heading/Heading';
import RecentPosts from '@/components/Home/Recent/RecentPosts';
import RecentCta from '@/components/Home/Recent/RecentCta';

export default function RecentWork({ twoProjects }) {
  return(
    <HomeSection id='recent'>
      <Container>
        <Heading title="My Recent Work" />
        <RecentPosts twoProjects={twoProjects} />
        <RecentCta />
      </Container>
    </HomeSection>
  )
}