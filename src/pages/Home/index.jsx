import { Sidebar } from "../../components/Sidebar"
import { MainContent } from "../../components/MainContent"

import "./styles.sass"

export function Home () {
  return(
    <div id="portfolio">  
    <h1>Marcos</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}