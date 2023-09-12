import React from 'react';
import {Link} from "@nextui-org/react";
import NextLink from "next/link";
import { Gem } from 'react-bootstrap-icons';

function AppFooter() {
  return (
    <section id="footer">
        <footer className="bg-[#121212] text-white py-20">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="custom-heading from-[#5EA2EF] to-[#0072F5] text-3xl mb-8">Discover More</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/portfolio" as={NextLink} className="hover:text-[#FF1CF7]">Portfolio</Link></li>
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
                    <p className="text-sm">© {new Date().getFullYear()} Chris Waitt. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    </section>
  );
}

export default AppFooter;
