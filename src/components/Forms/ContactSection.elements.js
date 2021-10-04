import styled from 'styled-components';
import bkImg from '../../images/one-hand-driver1.png';

export const ContactSecWrapper = styled.div`
    width: 100vw;
    /* background: #000; */
    background-image: url(${bkImg});
    background-position: center center;
    background-repeat: no-repeat;
    padding: 100px 0;
`;

export const ContactSecRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 3px;
`;

export const ContactCol = styled.div`
    margin: 0 auto;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;