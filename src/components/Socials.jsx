import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/izzymadethat" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/isaiah-vickers/" },
  { icon: <FaTwitter />, path: "https://x.com/swe_izzyv" },
  { icon: <FaDiscord />, path: "https://discord.com/channels/isaiah_vickers" }
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noreferrer">
          {item.icon}
        </Link>
      ))}
    </div>
  );
};
export default Socials;
