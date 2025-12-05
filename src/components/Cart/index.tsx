import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { Cart, CartContent, CartItem, Infos } from "./styles.ts";
import { remove, increment } from "../../store/reducers/cart.ts";
import { useState } from "react";
import Delivery from "../Delivery/index.tsx";
import { Props } from "../FoodCard/index.tsx";

const FoodCart = ({onClose}: Props) => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);
    const [mostrarDelivery, setMostrarDelivery] = useState(false)

    const total = items.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

    const GoDelivery = () => {
        setMostrarDelivery(true)
    }

    const CloseDelivery = () => {
        setMostrarDelivery(false)
    }

    return (
        <Cart>
        <CartContent>
            <ul>
                {items.map((item) => (
                    <CartItem key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <Infos>
                        <h4>{item.title}</h4>
                        <p>R$ {item.preco.toFixed(2)} x {item.quantidade}</p>
                    </Infos>
                    <div>
                        <button onClick={() => dispatch(increment(item.id))}>+</button>
                        <button onClick={() => dispatch(remove(item.id))}>Remover</button>
                    </div>
                    </CartItem>
                ))}
            </ul>
            <p>
                Valor total: <span>R$ {total.toFixed(2)}</span>
            </p>
            <button type="button" onClick={GoDelivery}>Continuar com a entrega</button>
            {mostrarDelivery &&<Delivery onClose={CloseDelivery}/>}
            <button type="button" onClick={onClose}>Fechar</button>
        </CartContent>
        </Cart>
    );
};

export default FoodCart;
