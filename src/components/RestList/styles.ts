import styled from "styled-components";
import { cores } from "../../styles.ts";

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    color: ${cores.salmao};
    margin-bottom: 120px;
`

export const ListItem = styled.li`
    border: 1px solid ${cores.salmao};
    margin-top: 80px;
    position: relative;
    background-color: ${cores.branco};

    .description {
        margin: 16px 8px;
        font-size: 14px;
    }

    > img {
        width: 472px;
        height: 216px;
    }

    button {
        font-weight: bold;
        color: ${cores.beje};
        margin-left: 8px;
        margin-bottom: 8px;
        background-color: ${cores.salmao};
        padding: 4px 6px;
        border-style: none;
        cursor: pointer;
    }
`

export const Title = styled.h3`
    display: flex;
    margin: 8px;
    font-size: 18px;
    font-weight: bold;
    justify-content: space-between;
`

export const Tags = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    flex-direction: row;
    gap: 8px;
`

export const Tag = styled.span`
    border: 1px solid ${cores.salmao};
    font-size: 12px;
    font-weight: bold;
    color: ${cores.beje};
    background-color: ${cores.salmao};
    padding: 6px 4px;
`