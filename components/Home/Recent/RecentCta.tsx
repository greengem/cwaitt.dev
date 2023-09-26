import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import NextLink from 'next/link';

export default function RecentHeading() {
    return (
        <div className="mt-10">
            <Link href="/projects" as={NextLink}>
                <Button size="lg" className="bg-gradient-to-tr from-[#FF1CF7] to-[#b249f8] text-white shadow-lg">
                    View My Work
                </Button>
            </Link>
        </div>
    );
}
