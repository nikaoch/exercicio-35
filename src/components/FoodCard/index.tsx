import { Container } from "../../styles.ts";
import pizza from '../../images/pizza.png'
import { BtnAdd, BtnClose, Card, CardContent, Description } from "./styles.ts";
import { useDispatch } from "react-redux";
import { add } from "../../store/reducers/cart.ts";
import { Food } from "../../App.tsx";

export type Props = {
    onClose: () => void
}

const FoodCard = ({onClose}: Props) => {
    const dispatch = useDispatch();

    const product: Food = {
        id: 1,
        title: "Pizza Marguerita",
        preco: 60.9,
        quantidade: 0,
        image: pizza,
};

    const AddToCart = () => {
        dispatch(add(product));
    };

    return (
        <Card>
            <Container>
                <CardContent>
                    <div>
                        <img src={pizza} alt="Pizza" />
                    </div>
                    <Description>
                        <h3>{product.title}</h3>
                        <p>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.</p>
                        <p>Serve: <strong>de 2 a 3 pessoas</strong></p>
                        <BtnAdd type="button" onClick={AddToCart}>Adicionar ao carrinho - R$ {product.preco}</BtnAdd>
                        <BtnClose type="button" onClick={onClose}>X</BtnClose>
                    </Description>
                </CardContent>
            </Container>
        </Card>
    )
}


export default FoodCard