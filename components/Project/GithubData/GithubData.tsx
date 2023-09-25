import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { 
  IconGitFork, 
  IconStar,  
  IconEye 
} from '@tabler/icons-react';

interface SidebarGitHubProps {
  githubData: {
    name?: string;
    html_url?: string;
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
    <div className="grid grid-cols-3 mb-3">
      <div className="col-span-2">
        <h4 className="text-xl font-semibold mb-1">
          <span className="mr-2">Github Repository:</span>
          <Link 
            color="danger" 
            className="text-xl font-semibold" 
            as={NextLink} 
            href={githubData.html_url} 
            isExternal
          >
            {githubData.name}
          </Link>
        </h4>
        <p>
          <strong>Latest commit: </strong><span className="mr-2">{latestCommit}</span>
          <Link 
            as={NextLink}
            href={latestCommitUrl} 
            isExternal 
            color='danger'
          >
            View
          </Link>
        </p>
      </div>
      
      <div className="text-right col-span-1">
        <div className="mb-2">
        {
          demoUrl ? (
            <Link 
              as={NextLink} 
              href={demoUrl} 
              isExternal 
            >
              <Button size="sm" color='danger'>Live Demo</Button>
            </Link>
          ) : (
            <Button size="sm" isDisabled color='default'>Demo not Available</Button>
          )
        }
        </div>
        <div>
          <Chip 
            size='sm'  
            radius="sm" 
            color="warning" 
            className='mx-1 mb-1' 
            variant="bordered"
          >
            <IconStar stroke={2} height={16} className="inline" /> {githubData.stargazers_count}
          </Chip>
          
          <Chip 
            size='sm'  
            radius="sm" 
            color="primary" 
            className='mx-1 mb-1' 
            variant="bordered"
          >
            <IconEye stroke={2} height={16} className="inline" /> {githubData.watchers_count}
          </Chip>
          
          <Chip 
            size='sm'  
            radius="sm" 
            color="success" 
            className='mx-1 mb-1' 
            variant="bordered"
          >
            <IconGitFork stroke={2} height={16} className="inline" /> {githubData.forks_count}
          </Chip>
        </div>
      </div>
    </div>
  );
}

export default SidebarGitHub;
