import { IconPalette, IconBraces, IconServer } from '@tabler/icons-react';

const SkillsData = [
  {
    title: "Designer",
    icon: <IconPalette className='mr-1' />,
    description: "Combining aesthetics with functionality to create intuitive and compelling designs. Passionate about user-centric designs, with a keen eye for detail and a strong understanding of modern UX/UI principles.",
    technologies: ["Figma", "Photoshop"]
  },
  {
    title: "Frontend Developer",
    icon: <IconBraces className='mr-1' />,
    description: "Crafting responsive, interactive, and user-friendly interfaces that bring designs to life. Skilled in HTML, CSS, and modern JavaScript frameworks to ensure optimal web performance and engaging user.",
    technologies: ["React", "Vue"]
  },
  {
    title: "Backend Developer",
    icon: <IconServer className='mr-1' />,
    description: "Expert in server-side logic, ensuring smooth data integration and building robust APIs. Proficient in various back-end languages and database management, delivering secure and scalable solutions.",
    technologies: ["PHP", "DB"]
  }
];

export default SkillsData;
