import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import HomeSection from '@/components/Layout/Section/HomeSection';
import Container from '@/components/Layout/Container';
import Heading from '@/components/Layout/Heading/Heading';
import SkillsCard from './SkillsCard';
import SkillsData from './SkillsData';

export default function AppSkills() {
  return (
    <HomeSection id="skills">
      <Container>
      <Heading title="Technical Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SkillsData.map((skill, index) => (
            <SkillsCard key={index} {...skill} />
          ))}
        </div>
        <div className="mt-10">
          <Link as={NextLink} href="tech-stack">
            <Button size="lg" className="bg-gradient-to-tr from-[#FF1CF7] to-[#b249f8] text-white shadow-lg">
              Tech Stack
            </Button>
          </Link>
        </div>
      </Container>
    </HomeSection>
  );
}
