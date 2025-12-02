import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    color: #E66767;
    margin-bottom: 120px;
`

export const ListItem = styled.li`
    border: 1px solid #E66767;
    margin-top: 80px;
    position: relative;

    .description {
        margin: 16px 8px;
    }

    button {
        font-weight: bold;
        color: #FFEBD9;
        margin-left: 8px;
        margin-bottom: 8px;
        background-color: #E66767;
        padding: 4px 6px;
        border-style: none;
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
    border: 1px solid #E66767;
    font-size: 12px;
    font-weight: bold;
    color: #FFEBD9;
    background-color: #E66767;
    padding: 6px 4px;
`