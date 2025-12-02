import logo from '../../images/logo.png'
import { Container } from '../../styles.ts'
import { Fundo, HeaderContent } from './styles.ts'
import fundo from '../../images/fundo.png'

const Header = () => (
    <Fundo style={{ backgroundImage: `url(${fundo})` }}>
        <Container>
            <HeaderContent>
                <img src={logo} alt="Efood" />
                <p>Viva experiências gastronômicas <br /> no conforto da sua casa</p>
            </HeaderContent>
        </Container>
    </Fundo>
)

export default Header