import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

export default function HeroCta() {
    return (
        <div className="mb-40">
            <Link as={NextLink} href="/projects" className="mr-3 block">
                <Button color="secondary" size="lg">
                    View My Work
                </Button>
            </Link>
        </div>
    );
}
