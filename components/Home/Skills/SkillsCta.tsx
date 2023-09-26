import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

export default function SkillsCta() {
    return (
        <div className="mt-10">
            <Link as={NextLink} href="tech-stack">
                <Button size="lg" className="bg-gradient-to-tr from-[#FF1CF7] to-[#b249f8] text-white shadow-lg">
                    Projects by Tech Stack
                </Button>
            </Link>
        </div>
    );
}
