import "./styles.sass";
import {DiHtml5,DiCss3,DiJsBadge,DiNodejsSmall,DiMysql,DiReact} from "react-icons/di";

export function TechnologiesContainer(){
  const technologies = [
    {id: "html", name: "HTML5", icon: <DiHtml5 />},
    {id: "css", name: "CSS3", icon: <DiCss3 />},
    {id: "js", name: "JavaScript", icon: <DiJsBadge />},
    {id: "node", name: "Node.js", icon: <DiNodejsSmall/>},
    {id: "mysql", name: "MySQL", icon: <DiMysql />},
    {id: "react", name: "React", icon: <DiReact />},
  ]

  return(
    <section className="technologies">
      <h2>Technologies</h2>
      <main className="technologies-grid">
        {technologies.map((tech) =>(
          <div className="technology-card" id= {tech.id} key = {tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        ))}
      </main>
    </section>
  )
};