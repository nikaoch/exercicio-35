import { Container } from "../../styles.ts";
import hioki from '../../images/hioki.png'
import laDolce from '../../images/laDolce.png'
import estrela from '../../images/estrela.png'
import { List, ListItem, Tag, Tags, Title } from "./styles.ts";
import { useNavigate } from "react-router-dom";

const RestList = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/ladolcevitatrattoria')
    }

    return (
    <Container>
        <List>
            <ListItem>
                <img src={hioki} alt="Hioki"/>
                <Tags>
                    <Tag>Destaque da semana</Tag>
                    <Tag>Japonesa</Tag>
                </Tags>
                <Title>Hioki Sushi <span>4.9 <img src={estrela} alt="Estrela" /></span></Title>
                <p className="description">Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</p>
                <button type="button">Saiba mais</button>
            </ListItem>
            <ListItem>
                <img src={laDolce} alt="la Dolce"/>
                <Tags>
                    <Tag>Italiana</Tag>
                </Tags>
                <Title>La Dolce Vita Trattoria <span>4.6 <img src={estrela} alt="Estrela" /></span></Title>
                <p className="description">A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                <button type="button" onClick={handleClick}>Saiba mais</button>
            </ListItem>
            <ListItem>
                <img src={laDolce} alt="la Dolce"/>
                <Tags>
                    <Tag>Italiana</Tag>
                </Tags>
                <Title>La Dolce Vita Trattoria <span>4.6 <img src={estrela} alt="Estrela" /></span></Title>
                <p className="description">A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                <button type="button" onClick={handleClick}>Saiba mais</button>
            </ListItem>
            <ListItem>
                <img src={laDolce} alt="la Dolce"/>
                <Tags>
                    <Tag>Italiana</Tag>
                </Tags>
                <Title>La Dolce Vita Trattoria <span>4.6 <img src={estrela} alt="Estrela" /></span></Title>
                <p className="description">A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                <button type="button" onClick={handleClick}>Saiba mais</button>
            </ListItem>
            <ListItem>
                <img src={laDolce} alt="la Dolce"/>
                <Tags>
                    <Tag>Italiana</Tag>
                </Tags>
                <Title>La Dolce Vita Trattoria <span>4.6 <img src={estrela} alt="Estrela" /></span></Title>
                <p className="description">A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                <button type="button" onClick={handleClick}>Saiba mais</button>
            </ListItem>
            <ListItem>
                <img src={laDolce} alt="la Dolce"/>
                <Tags>
                    <Tag>Italiana</Tag>
                </Tags>
                <Title>La Dolce Vita Trattoria <span>4.6 <img src={estrela} alt="Estrela" /></span></Title>
                <p className="description">A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</p>
                <button type="button" onClick={handleClick}>Saiba mais</button>
            </ListItem>
        </List>
    </Container>
)}

export default RestList