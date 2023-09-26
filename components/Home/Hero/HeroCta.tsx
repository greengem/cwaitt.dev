import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

export default function HeroCta() {
    return (
        <div>
            <Link as={NextLink} href="/projects">
                <Button size="lg" className="bg-gradient-to-tr from-[#FF1CF7] to-[#b249f8] text-white shadow-lg">
                    View My Work
                </Button>
            </Link>
        </div>
    );
}
