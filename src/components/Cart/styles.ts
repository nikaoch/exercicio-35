import styled from "styled-components";
import { cores } from "../../styles.ts";

export const Cart = styled.div`
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    padding-right: 8px;
`

export const CartContent = styled.div`
    display: block;
    padding: 32px 8px;
    background-color: ${cores.salmao};
    color: ${cores.beje};

    p {
        margin-top: 40px;

        span {
            margin-left: 208px;
        }
    }

    button {
        border: none;
        background-color: ${cores.beje};
        color: ${cores.salmao};
        width: 100%;
        margin-top: 16px;
        padding: 4px 0;
        cursor: pointer;
        font-weight: bold;
    }
`

export const CartItem = styled.li`
    display: flex;
    padding: 8px;
    background-color: ${cores.beje};
    color: ${cores.salmao};
    margin-top: 16px;

    img {
        width: 80px;
        height: 80px;
    }
`

export const Infos = styled.div`
    display: block;
    margin-left: 8px;
    margin-right: 108px;

    p {
        margin-top: 16px;
    }  
`