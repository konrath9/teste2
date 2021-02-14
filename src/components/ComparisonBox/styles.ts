import styled from 'styled-components';

import { FaShoppingBasket, FaBell } from 'react-icons/fa';

export const Container = styled.div`

`;

export const AccordionSection = styled.div`

`;

export const AccordionHead = styled.div`
    background-color: var(--color-secondary);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    > h3 {
        color: var(--color-white);
        font-family: 'Advent Pro', sans-serif;
        font-size: 25px;
        padding: 8px;
    }
`;

export const AccordionBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Item1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 10px;
    max-width: 250px;

    > a {
        text-decoration: none;
        
        > p, strong {
            font-family: 'Advent Pro', sans-serif;
            font-size: 18px;
            text-align: center;
            color: black;
        }
    }

    .price {
        color: var(--color-secondary);
    }

    > a img {
        justify-content: center;
        width: auto;
        max-width: 400px;
        height: auto;
        max-height: 400px;
    }
`;

export const ButtonBuy = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px;
    margin: 20px 0;
    background-color: var(--color-secondary);
    border-radius: 5px;
    cursor: pointer;

    > a {
        text-decoration: none;
        text-align: center;
        color: white;
        
        > span {
            margin-left: 10px;
            font-family: 'Advent Pro', sans-serif;
            font-size: 18px;
        }
    }
`;

export const BuyIcon = styled(FaShoppingBasket)`
    font-size: 18px;
`;

export const OutButton = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px;
    margin: 20px 0;
    background-color: gray;
    border-radius: 5px;
    cursor: pointer;

    > a {
        text-decoration: none;
        text-align: center;
        color: white;
        
        > span {
            margin-left: 10px;
            font-family: 'Advent Pro', sans-serif;
            font-size: 18px;
        }
    }
`;

export const OutIcon = styled(FaBell)`
    font-size: 18px;
`;