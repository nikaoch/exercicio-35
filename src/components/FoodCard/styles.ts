import styled from "styled-components";
import { cores } from "../../styles.ts";

export const Card = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`


export const CardContent = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 0.6fr 1.4fr;
    grid-gap: 24px;
    padding: 32px;
    background-color: ${cores.salmao};

    img {
        width: 280px;
        height: 280px;
    }
`



export const Description = styled.div`
    grid-column: 2;

    h3 {
        font-size: 18px;
        color: ${cores.beje};
    }

    p {
        font-size: 14px;
        line-height: 22px;
        color: ${cores.beje};
        margin: 16px 0;
    }
`

export const BtnAdd = styled.button`
    background-color: ${cores.beje};
    color: ${cores.salmao};
    padding: 4px 6px;
    border: none;
    cursor: pointer;
`

export const BtnClose = styled.button`
    position: absolute;
    top: 4px;
    right: 8px;
    font-size: 24px;
    color: ${cores.beje};
    background-color: transparent;
    border: none;
    font-weight: 200;
    cursor: pointer;
`