import "./styles.sass"
import { AboutContainer } from "../AboutContainer"
import { TechnologiesContainer } from "../TechnologiesContainer"
import { ProjectsContainer } from "../ProjectsContainer"

export function MainContent () {
  return(
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  )
};