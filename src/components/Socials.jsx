import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaTwitter />, path: "" },
  { icon: <FaDiscord />, path: "" }
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};
export default Socials;
