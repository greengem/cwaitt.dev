import Container from '@/components/Layout/Container'
import {Link} from "@nextui-org/link";
import NextLink from "next/link";

export default function AppFooter() {
  return (
    <footer className="bg-[#121212] text-white py-20 mt-40">
        <Container>
            <h2 className="custom-heading from-[#5EA2EF] to-[#0072F5] text-3xl mb-8">Discover More</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Links</h3>
                    <ul className="space-y-3">
                        <li><Link href="/projects" as={NextLink} className="hover:text-[#FF1CF7]">Portfolio</Link></li>
                        <li><Link href="/tech-stack" as={NextLink} className="hover:text-[#FF1CF7]">Tech Stack</Link></li>
                        <li><Link href="/terms" as={NextLink} className="hover:text-[#FF1CF7]">Terms & Conditions</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">More About Me</h3>
                    <p>I&apos;m a developer passionate about creating impactful solutions and pushing the boundaries of technology. Explore further and dive deep into my experiences and creations.</p>
                </div>
            </div>
            <div className="text-center border-t border-gray-700 pt-8">
                <p className="text-sm">© 2023 Chris Waitt. All Rights Reserved.</p>
            </div>
        </Container>
    </footer>
  );
}
