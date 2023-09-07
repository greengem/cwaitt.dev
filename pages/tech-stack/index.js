import { fetchAllTechStacks } from '../../lib/contentful';
import Link from 'next/link';

export default function TechStackListing({ techStacks }) {
  return (
    <div>
      <h1>All Tech Stacks</h1>
      <ul>
        {techStacks.map(tech => (
          <li key={tech}>
            <Link href={`/tech-stack/${tech}`}>{tech}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const techStacks = await fetchAllTechStacks();

  return {
    props: {
      techStacks,
    },
    revalidate: 60,
  };
}
