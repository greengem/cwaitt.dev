import Link from 'next/link';
import { Card, CardHeader, CardBody, Image, Skeleton } from "@nextui-org/react";

function SidebarLatestPost({ post }) {
  // If the post data hasn't loaded yet, render the Skeleton placeholders.
  if (!post) {
    return (
      <Card className="py-4">
        <Skeleton isLoaded={false}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold"></p>
            <h4 className="font-bold text-large whitespace-nowrap overflow-hidden overflow-ellipsis w-full"></h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="rounded-xl bg-gray-200" style={{ height: "621px", width: "828px" }}></div>
            <p className="card-text mt-5 text-sm"></p>
          </CardBody>
        </Skeleton>
      </Card>
    );
  }

  // Otherwise, render the actual content.
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
