import "./styles.sass"
import Avatar from "../../assets/garou.jpg"

import { SocialNetworks } from "../SocialNetworks";
import { InformationContainer } from "../InformationContainer";

export function Sidebar () {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Marcos" />
      <p className="title">Desenvolvedor Frontend</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">Download currículo</a>
    </aside>
  )
}