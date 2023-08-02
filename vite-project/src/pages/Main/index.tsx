import { Container } from "./styled"
import logo from '../../../public/vite.svg'

function Main() {
    return (
    <Container>
     <header>
      <img src={logo} alt="" />
     </header>
     <main></main>
     <footer>
      <span>visite meu <a href="https://matheusmendes.vercel.app/">portifolio</a></span>
     </footer>
    </Container>
    )
}

export default Main
