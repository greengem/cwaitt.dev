import { Button } from '@nextui-org/button';
import Link from 'next/link';

export default function RecentHeading() {
    return (
        <div className="mt-10">
            <Button href="/projects" as={Link} size="lg" className="bg-gradient-to-tr from-[#FF1CF7] to-[#b249f8] text-white shadow-lg">
                View My Work
            </Button>
        </div>
    );
}
