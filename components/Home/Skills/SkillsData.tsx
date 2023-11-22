import { IconPalette, IconBraces, IconServer } from '@tabler/icons-react';

const SkillsData = [
  {
    title: "Designer",
    icon: <IconPalette className='mr-2' />,
    description: "Combining aesthetics with functionality to create intuitive and compelling designs. Passionate about user-centric designs, with a keen eye for detail and a strong understanding of modern UX/UI principles.",
    technologies: ["Figma", "Photoshop", "Tailwind"],
    animation: "animate__rotateInDownLeft"
  },
  {
    title: "Frontend Developer",
    icon: <IconBraces className='mr-2' />,
    description: "Crafting responsive, interactive, and user-friendly interfaces that bring designs to life. Skilled in HTML, CSS, and modern JavaScript frameworks to ensure optimal web performance and engaging user.",
    technologies: ["React", "Next.js", "Vite", "Three.js"],
    animation: "animate__fadeInUpBig"
  },
  {
    title: "Backend Developer",
    icon: <IconServer className='mr-2' />,
    description: "Expert in server-side logic, ensuring smooth data integration and building robust APIs. Proficient in various back-end languages and database management, delivering secure and scalable solutions.",
    technologies: ["Python", "PHP", "Postgres", "ORM"],
    animation: "animate__rotateInDownRight"
  }
];

export default SkillsData;
