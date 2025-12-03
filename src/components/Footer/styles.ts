import styled from "styled-components";
import { cores } from "../../styles.ts";

export const FooterContent = styled.div`
    background-color: ${cores.beje};
    display: block;
    text-align: center;
    padding-bottom: 40px;

    .logo {
        margin: 40px 0;
    }

    .redesSociais {
        margin-bottom: 80px;
    }

    p {
        font-size: 10px;
        color: ${cores.salmao};
    }
`