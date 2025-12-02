import { Container } from "../../styles.ts";
import logo from '../../images/logo.png'
import redesSociais from '../../images/redes_sociais.png'
import { FooterContent } from "./styles.ts";

const Footer = () => (
    <FooterContent>
        <Container>
            <img className="logo" src={logo} alt="Efood"/> <br />
            <img className="redesSociais" src={redesSociais} alt="Redes sociais" />
            <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br /> dos produtos é toda do estabelecimento contratado. </p>
        </Container>
    </FooterContent>
)

export default Footer