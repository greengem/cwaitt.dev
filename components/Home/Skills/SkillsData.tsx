import { IconPalette, IconBraces, IconServer, IconTimeline } from '@tabler/icons-react';

const SkillsData = [
  {
    title: "Designer",
    icon: <IconPalette className='mr-2' />,
    description: "Expert in blending aesthetics with functionality, crafting intuitive and visually compelling designs. Proficient in user-centric design principles, with a focus on creating engaging user experiences. Skilled in utilizing design tools to conceptualize and prototype innovative solutions. Strong collaborator, adept at translating client requirements into impactful designs. Experienced in responsive design, maintaining brand consistency across various platforms, and optimizing visual elements for different devices.",
    technologies: ["Figma", "Photoshop", "Tailwind"],
    animation: "animate__rotateInDownLeft"
  },
  {
    title: "Frontend Developer",
    icon: <IconBraces className='mr-2' />,
    description: "Specialized in developing responsive, interactive, and visually appealing user interfaces. Proficient in leveraging modern JavaScript frameworks and libraries to build seamless web experiences. Expertise in optimizing web performance, ensuring cross-browser compatibility, and implementing accessible web standards. Collaborates closely with designers to transform designs into functional websites. Capable of integrating with backend services and APIs, and experienced in using version control systems for efficient project management.",
    technologies: ["React", "Next.js", "Vite", "Three.js"],
    animation: "animate__zoomIn"
  },
  {
    title: "Backend Developer",
    icon: <IconServer className='mr-2' />,
    description: "Proficient in server-side development, focusing on building efficient, scalable, and maintainable backend systems. Expertise in various programming languages, database management, and API development. Skilled in creating secure backend architectures, implementing data storage solutions, and optimizing server responses. Experienced in deploying and maintaining applications in cloud environments. Strong understanding of RESTful services and microservices architectures. Committed to following best practices in coding, testing, and documentation.",
    technologies: ["Python", "PHP", "Postgres", "ORM"],
    animation: "animate__zoomIn",
    cert: "GITAPC.png"
  },
  {
    title: "Project Manager",
    icon: <IconTimeline className='mr-2' />,
    description: "Experienced in orchestrating diverse projects from conception to completion. Adept at resource allocation, deadline management, and leading cross-functional teams. Utilizes strong communication skills to ensure alignment of project goals with business objectives, fostering an environment of collaboration and innovation. Excels in agile methodologies, risk management, and stakeholder engagement to deliver projects on time and within budget.",
    technologies: ["Agile", "JIRA", "MS Project"],
    animation: "animate__rotateInDownRight",
    cert: "GPMC.png"
  }
  
];

export default SkillsData;
