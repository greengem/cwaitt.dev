import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { Code } from "@nextui-org/code";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { IconBrandGithub } from '@tabler/icons-react';
import { IconEye } from '@tabler/icons-react';

interface SidebarGitHubProps {
  githubData: {
    name?: string;
    html_url?: string;
    language?: string;
    stargazers_count?: number;
    watchers_count?: number;
    forks_count?: number;
  };
  demoUrl?: string;
  latestCommit?: string;
  latestCommitUrl?: string;
}

const SidebarGitHub: React.FC<SidebarGitHubProps> = ({ githubData, demoUrl, latestCommit, latestCommitUrl }) => {

  return (
    <aside>
      <Card className='mb-5 py-4' shadow='lg'>
        <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
          <p><Code size='lg'>{githubData.name}</Code></p>
        </CardHeader>
        <CardBody>
          <p className='my-4'>
            <code className='text-sm'>
              <span className='text-danger'><Link href={latestCommitUrl} isExternal color='danger' className='text-sm mr-1'>Latest commit: </Link></span>
              <span>{latestCommit}</span>
            </code>
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <Link as={NextLink} href={githubData.html_url} isExternal className='w-full'>
              <Button size='sm' className='w-full' color='danger'>View Repo</Button>
            </Link>
            {demoUrl && (
              <Link as={NextLink} href={demoUrl} isExternal className='w-full'>
                <Button size='sm' className='w-full' color='secondary'>View Demo</Button>
              </Link>
            )}
          </div>
        </CardBody>
        <CardFooter>
          <div className='flex flex-wrap'>
            <Chip size='sm' radius="sm" color="default" className='mx-1 mb-1'>{githubData.language}</Chip>
            <Chip size='sm' variant="dot" radius="sm" color="warning" className='mx-1 mb-1'>
              Stars: {githubData.stargazers_count}
            </Chip>
            <Chip size='sm' variant="dot" radius="sm" color="primary" className='mx-1 mb-1'>
              Watchers: {githubData.watchers_count}
            </Chip>
            <Chip size='sm' variant="dot" radius="sm" color="success" className='mx-1 mb-1'>Forks: {githubData.forks_count}</Chip>
          </div>
        </CardFooter>
      </Card>
    </aside>
  );
}

export default SidebarGitHub;
