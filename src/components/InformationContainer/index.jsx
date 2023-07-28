import "./styles.sass"
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

export function InformationContainer () {
  return (
    <section className="information">
      <nav className="info-card">
        <AiFillPhone id="phone-icon"/>
        <div>
          <h3>Telefone</h3>
          <p>(11)94444-4442</p>
        </div>
      </nav>

      <nav className="info-card">
        <AiOutlineMail id="email-icon"/>
        <div>
          <h3>E-mail</h3>
          <p>hellou@email.com</p>
        </div>
      </nav>

      <nav className="info-card">
        <AiFillEnvironment id="pin-icon"/>
        <div>
          <h3>Localização</h3>
          <p>São Paulo / SP</p>
        </div>
      </nav>
    </section>
  )
};