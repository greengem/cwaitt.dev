'use client'
import Image from "next/image";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const CertData = [
  {
    title: "Google IT Automation with Python",
    icon: "GITAPC.png",
  },
  {
    title: "Google Project Management",
    icon: "GPMC.png",
  },
  
];

export default function SkillsCerts() {
    return (
        <AnimationOnScroll animateIn="animate__backInUp" animateOnce>
        <div className="flex justify-center gap-5">
            {CertData.map((cert) => (
                <Image 
                    key={cert.title}
                    src={`/images/certs/${cert.icon}`}
                    alt={`Icon for ${cert.title}`}
                    height={150} width={150}
                />
            ))}
        </div>
        </AnimationOnScroll>
    )
}
