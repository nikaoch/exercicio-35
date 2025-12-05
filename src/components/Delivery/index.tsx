import { Form, FormContent } from "./styles.ts";
import { Props } from "../FoodCard/index.tsx";
import { useState } from "react";
import Payment from "../Payment/index.tsx";

const Delivery = ({onClose}: Props) => {
    const [goPayment, setGoPayment] = useState(false)

    const goPay = () => {
        setGoPayment(true)
    }

    const closePay = () => {
        setGoPayment(false)
    }

    return (
        <Form>
            <FormContent>
                <h4>Entrega</h4> <br />
                <label htmlFor="name">Quem irá receber</label> <br />
                <input id="name" type="text" /> <br />
                <label htmlFor="address">Endereço</label> <br />
                <input id="address" type="text" /> <br />
                <label htmlFor="city">Cidade</label> <br />
                <input id="city" type="text" /> <br />
                <label htmlFor="cep">CEP</label> <br />
                <input className="small" id="cep" type="number" /> <br />
                <label htmlFor="number">Número</label> <br />
                <input className="small" id="number" type="number" /> <br />
                <label htmlFor="complement">Complemento (opcional)</label> <br />
                <input id="complement" type="text" /> <br />
                <button type="button" onClick={goPay}>Continuar com o pagamento</button> <br />
                {goPayment &&<Payment onBackDelivery={closePay} onFinish={() => {closePay(); onClose()}}/>}
                <button type="button" onClick={onClose}>Voltar para o carrinho</button>
            </FormContent>
        </Form>
    )
}

export default Delivery