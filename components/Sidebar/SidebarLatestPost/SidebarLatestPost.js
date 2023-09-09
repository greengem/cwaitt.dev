import Link from 'next/link';
//import Image from 'next/image'
import {Card, CardHeader, CardBody, CardFooter, Chip, Image} from "@nextui-org/react";

function SidebarLatestPost({ post }) {
  if (!post) return <p>Loading latest project...</p>;

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Latest Post</p>
        <h4 className="font-bold text-large whitespace-nowrap overflow-hidden overflow-ellipsis w-full">{post.projectTitle}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Link href={`/projects/${post.slug}`}>
              <Image
                src={`https:${post.featuredImage.fields.file.url}?fit=fill&w=828&h=621`}
                className='object-cover rounded-xl'
                alt={`Featured image for ${post.projectTitle}`}
                width={828}
                height={621}
              />
          </Link>
          <p className="card-text mt-5 text-sm">{post.shortDescription}</p>
      </CardBody>
    </Card>
  );
}

export default SidebarLatestPost;
