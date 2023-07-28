import "./styles.sass";
import {FaLinkedinIn, FaInstagram, FaGithub} from "react-icons/fa";

export function SocialNetworks () {
  const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn />},
    {name: "github", icon: <FaGithub />},
    {name: "instagram", icon: <FaInstagram />}
  ]

  return(
   <section className="social-networks">
    {socialNetworks.map((network) => (
      <a href="#" className="social-btn" id={network.name} key={network.name}>
        {network.icon}
      </a>
    ))}
   </section> 
  )
}