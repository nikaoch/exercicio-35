import { Container } from "../../styles.ts";
import logo from '../../images/logo.png'
import fundo from '../../images/fundo.png'
import laDolce from '../../images/laDolce.png'
import pizza from '../../images/pizza.png'
import { CarrinhoInfo, Food, FoodList, Fundo, HeaderContent, RestButton } from "./styles.ts";
import Footer from "../Footer/index.tsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FoodCard from "../FoodCard/index.tsx";
import FoodCart from "../Cart/index.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index.ts";

const RestPage = () => {
    const [mostrarCard, setMostrarCard] = useState(false)
    const [mostrarCart, setMostrarCart] = useState(false)
    const items = useSelector((state: RootState) => state.cart.items);

    const navigate = useNavigate()

    const Click = () => {
        setMostrarCard(true)
    }
    const Close = () => [
        setMostrarCard(false),
        setMostrarCart(false)
    ]

    const handleClick = () => {
        navigate('/')
    }

    const ShowCart = () => {
        setMostrarCart(true)
    }

    return (
        <>
        <Fundo style={{ backgroundImage: `url(${fundo})` }}>
            <Container>
                <HeaderContent>
                    <RestButton>
                        <button type="button" onClick={handleClick}>Restaurantes</button>
                    </RestButton>
                    <img src={logo} alt="Efood" />
                    <CarrinhoInfo>
                        <button type="button" onClick={ShowCart}>{items.length} produto(s) no carrinho</button>
                        {mostrarCart &&<FoodCart onClose={Close} />}
                    </CarrinhoInfo>
                </HeaderContent>
            </Container>
        </Fundo>
        <Fundo style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${laDolce})` }}>
            <Container>
                <h2>Italiana</h2>
                <h1>La Dolce Vita Trattoria</h1>
            </Container>
        </Fundo>
        <Container>
            <FoodList>
                <Food>
                    <img src={pizza} alt="Pizza" />
                    <h4>Pizza Marguerita</h4>
                    <p className="description">A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                    <button className="button" type="button" onClick={Click}>Mais detalhes</button>
                    {mostrarCard && <FoodCard onClose={Close}/>}
                </Food>
                <Food>
                    <img src={pizza} alt="Pizza" />
                    <h4>Pizza Marguerita</h4>
                    <p className="description">A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                    <button className="button" type="button" onClick={Click}>Mais detalhes</button>
                    {mostrarCard && <FoodCard onClose={Close}/>}
                </Food>
                <Food>
                    <img src={pizza} alt="Pizza" />
                    <h4>Pizza Marguerita</h4>
                    <p className="description">A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                    <button className="button" type="button" onClick={Click}>Mais detalhes</button>
                    {mostrarCard && <FoodCard onClose={Close}/>}
                </Food>
                <Food>
                    <img src={pizza} alt="Pizza" />
                    <h4>Pizza Marguerita</h4>
                    <p className="description">A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                    <button className="button" type="button" onClick={Click}>Mais detalhes</button>
                    {mostrarCard && <FoodCard onClose={Close}/>}
                </Food>
                <Food>
                    <img src={pizza} alt="Pizza" />
                    <h4>Pizza Marguerita</h4>
                    <p className="description">A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                    <button className="button" type="button" onClick={Click}>Mais detalhes</button>
                    {mostrarCard && <FoodCard onClose={Close}/>}
                </Food>
                <Food>
                    <img src={pizza} alt="Pizza" />
                    <h4>Pizza Marguerita</h4>
                    <p className="description">A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                    <button className="button" type="button" onClick={Click}>Mais detalhes</button>
                    {mostrarCard && <FoodCard onClose={Close}/>}
                </Food>
            </FoodList>
        </Container>
        <Footer/>
        </>
    )
}

export default RestPage