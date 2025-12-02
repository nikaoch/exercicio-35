import styled, { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: Roboto, sans serif;

        body {
            background-color: #FFF8F2;
        }
    } 
`

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
`