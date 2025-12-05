import styled from "styled-components";
import { cores } from "../../styles.ts";

export const Fundo = styled.div`
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;

    h2 {
        margin-bottom: 160px;
        padding-top: 24px;
        font-size: 32px;
        font-weight: 100;
        color: ${cores.branco};
    }

    h1 {
        padding-bottom: 32px;
        font-weight: 900;
        font-size: 32px;
        color: ${cores.branco};
    }
`

export const HeaderContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 64px 0;

    button {
        border: none;
        background-color: transparent;
        color: ${cores.salmao};
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
    }
`

export const RestButton = styled.div`
    display: flex;
    align-items: center;
    grid-column: 1;
`

export const CarrinhoInfo = styled.div`
    display: flex;
    align-items: center;
    grid-column: 3;
`

export const FoodList = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    color: ${cores.beje};
    margin-bottom: 120px;
`

export const Food = styled.div`
    margin-top: 80px;
    background-color: ${cores.salmao};
    padding: 8px;

    .description {
        margin: 8px 0;
        font-size: 14px;
    }

    .button {
        width: 100%;
        font-weight: bold;
        color: ${cores.salmao};
        background-color: ${cores.beje};
        padding: 4px 6px;
        border-style: none;
        cursor: pointer;
    }
`