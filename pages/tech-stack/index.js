import { fetchAllTechStacks } from '../../lib/contentful';
import Link from 'next/link';

export default function TechStackListing({ techStacks }) {
  return (
    <div className='container mt-5'>
      <h1 className='section-h1'>Tech Stack</h1>
        <div className='row'>
        {techStacks.map(tech => (
          <div key={tech} className='col col-lg-3 g-4'>
          <div className='card'>
            <div className='card-body'>
            <h5 class="card-title">{tech}</h5>
            <Link href={`/tech-stack/${tech}`} className='btn btn-primary'>View Posts</Link>
            </div>
          </div>
          </div>
        ))}
</div>
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
