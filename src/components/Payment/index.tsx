import { useState } from "react";
import { PayForm, PayFormContent } from "./styles.ts";
import Message from "../Message/index.tsx";

type Props = {
    onBackDelivery: () => void
    onFinish: () => void
}

const Payment = ({onFinish, onBackDelivery}: Props) => {
    const [endPay, setEndPay] = useState(false)

    const goEndPayment = () => {
        setEndPay(true)
    }

    return (
        <PayForm>
            <PayFormContent>
                <h4>Pagamento - Valor a pagar: R$</h4> <br />
                <label htmlFor="cardName">Nome do cartão</label> <br />
                <input id="cardName" type="text" /> <br />
                <label htmlFor="cardNumber">Número do cartão</label> <br />
                <input id="cardNumber" type="number" /> <br />
                <label htmlFor="cvv">CVV</label> <br />
                <input className="small" id="cvv" type="number" /> <br />
                <label htmlFor="month">Mês de vencimento</label> <br />
                <input className="small" id="month" type="number" /> <br />
                <label htmlFor="year">Ano de vencimento</label> <br />
                <input className="small" id="year" type="text" /> <br />
                <button type="button" onClick={goEndPayment}>Finalizar pagamento</button> <br />
                {endPay &&<Message onClose={onFinish}/>}
                <button type="button" onClick={onBackDelivery}>Voltar para edição o endereço</button>
            </PayFormContent>
        </PayForm>
    )
}

export default Payment