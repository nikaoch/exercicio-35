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
    width: 360px;
    max-width: 100%;
    padding: 32px 8px 16px;
    background-color: ${cores.salmao};
    color: ${cores.beje};

    p {
        margin-top: 40px;

        span {
            margin-left: 8px;
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 0;
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

    img {
        width: 80px;
        height: 80px;
    }
`

export const EditButtons = styled.div`
    display: block;
    text-align: end;
    padding-left: 48px; 

    img, button {
        max-width: 16px;
        max-height: 16px;
        margin: 8px;
        margin-left: 16px;
    }

    img {
        margin-top: 16px;
    }
`

export const Infos = styled.div`
    margin-left: 8px;

    p {
        margin-top: 16px;
    }  
`