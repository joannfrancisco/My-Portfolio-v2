import {
  SiThreads,
  SiLinkedin,
  SiInstagram,
  SiGithub,
  SiBehance,
} from "react-icons/si";

const SocialIcons = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/joannfrancisco",
      icon: <SiLinkedin size={20} />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/joannfrancisco.dev/",
      icon: <SiInstagram size={20} />,
    },
    {
      name: "Threads",
      href: "https://www.threads.net/@annf.dev",
      icon: <SiThreads size={20} />,
    },
    {
      name: "GitHub",
      href: "https://github.com/joannfrancisco",
      icon: <SiGithub size={20} />,
    },
    {
      name: "Behance",
      href: "https://www.behance.net/joannvfrancisco",
      icon: <SiBehance size={20} />,
    },
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1"
        >
          <div className="text-foreground/60 group-hover:text-(--cyan) transition-transform duration-500 ease-out transform group-hover:rotate-360 group-hover:scale-125">
            {social.icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
