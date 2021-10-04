import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        /* --maxWidth: 100%; */
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1.em;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }
    }
`;


export const Button = styled.button`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#fff' : '#a02d2b')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #000;
    font-size: ${({fontBig}) => (fontBig ? '32px' : '24px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        /* background: #fff; */
        color: #fff;
        background: ${({primary}) => (primary ? '#a02d2b' : '#a02d2b')};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;


export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 50px;

    @media screen and (max-width: 991px) {
        padding-left: 30px;
        padding-right: 30px;
    }
`;