import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import React from "react";

type SkillsCardProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
  technologies: string[];
};

const SkillCard: React.FC<SkillsCardProps> = ({ title, icon, description, technologies }) => {
  return (
    <Card shadow="lg" className="p-4 card-container">
      <CardHeader className="text-xl font-semibold tracking-tight">
        {icon} {title}
      </CardHeader>
      <CardBody className="text-default-700 tracking-tight card-body relative">
        <p>{description}</p>
        <div className="flex flex-wrap mt-6">
          {technologies.map((tech: string, index: number) => (
            <Chip key={index} color="success" variant="dot" className="mr-2">
              {tech}
            </Chip>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default SkillCard;
