import styled from "styled-components";
import { cores } from "../../styles.ts";

export const Fundo = styled.div`
    width: 100%;
    background-size: cover;
    height: 384px;
    background-repeat: no-repeat;
`

export const HeaderContent = styled.div`
    display: block;
    text-align: center;

    img {
        margin-bottom: 140px;
        margin-top: 64px;
    }

    p {
        color: ${cores.salmao};
        font-size: 36px;
        font-weight: 900;
    }
`