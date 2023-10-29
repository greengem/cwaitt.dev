import Link from "next/link";
import { Button } from "@nextui-org/button";

export default function HeroCta() {
    return (
        <div>
            <Button as={Link} href="/projects" size="lg" className="bg-gradient-to-tr from-[#FF1CF7] to-[#b249f8] text-white shadow-lg">
                View My Work
            </Button>
        </div>
    );
}
