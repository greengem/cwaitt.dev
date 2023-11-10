import { Card, CardHeader } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import SocialData from '@/components/Home/Social/SocialData';

const SocialCards: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SocialData.map((card, index) => (
                <Card key={index} shadow="none" className="shadow-lg">
                    <CardHeader className="flex gap-3">
                        <card.icon stroke={1} height="40" width="40" />
                        <div className="flex flex-col">
                            <p className="text-md">{card.title}</p>
                            <p className="text-small text-default-500">
                                {card.link
                                    ? <Link color="secondary" isExternal as={NextLink} href={card.link}>{card.username}</Link>
                                    : card.username
                                }
                            </p>
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
}

export default SocialCards;
