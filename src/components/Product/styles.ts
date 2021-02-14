import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Row = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px 0;

    > a, span {
        font-family: 'Advent Pro', sans-serif;
        font-size: 18px;
        text-decoration: none;
        color: var(--color-secondary);
        padding: 2.5px 0;
    
        & + span {
            padding-left: 6px;
            margin-left:6px;

            & + a {
                padding-left: 6px;
                margin-left: 6px;
            }
        }
    }    
`;

export const Panel = styled.div`
    background: var(--color-white);

    display: grid;
    grid-template-columns: 30fr 40fr 30fr;
    height: auto;
`;

export const Column = styled.div`
    
`;

export const Gallery = styled.div`
    display: flex;
    align-items: top;
    justify-content: center;
    height: 480px;

    > img {
        
        height: 70%;
        border: 1px solid #e4e4e4;
    }
`;

export const MoreInfo = styled.div`
    padding: 20px 0px;

    >h2 {
        font-family: 'Advent Pro', sans-serif;
        color: var(--color-primary);
        font-size: 21px;
        margin-bottom: 10px;
    }

    >p {
        font-size: 16px;

        >ul {
            margin-left: 33px;
        }
    }
`;

export const Description = styled.div`
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    font-size: 16px;

    >h2 {
        text-transform: uppercase;
        display: flex;
        width: 100%;
        font-family: 'Advent Pro', sans-serif;
        color: var(--color-primary);
        font-size: 25px;
        margin-bottom: 10px;
        text-align: center;
    }
    > h3 {
        margin: 10px 0;
        font-size: 16px;
    }

    > p {
        margin: 10px 0;
        text-decoration: none;
        text-align: justify;
    }

    > p a {
        font-family: 'Advent Pro', sans-serif;
        text-decoration: none;
        color: var(--color-black);
    }
`;

export const StockTable = styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > table {
        border-collapse: collapse;
        width: 100%;
        border: 1px solid var(--color-secondary);
        font-size: 16px;

        > tr th{
            background-color: var(--color-secondary);
            color: var(--color-white);
        }

        > tr th, td {
            padding: 5px;
            border: 1px solid var(--color-secondary);
            text-align: center;
    }
`;

type ButtonProps = { solid?: boolean };

export const ButtonMed = styled.button<ButtonProps>`
    width: 140px;
    height: 55px;
    margin: 30px;
    align-items: center;
    display: flex;
    background-color: var(--color-secondary);
    justify-content: center;
    border-radius: 5px;    

    > a {
        font-family: 'Advent Pro', sans-serif;
        font-size: 18px;
        font-weight: bold;
        color: var(--color-white);
        text-decoration: none;
        padding: 5px;
        margin: 5px;
    }
`;

export const SpecInfo = styled.div`
    > h2 {
        font-family: 'Advent Pro', sans-serif;
        font-size: 21px;
        color: var(--color-primary);
        margin-top: 10px;
    }

    > p {
        font-size: 16px;
        margin: 15px 0;
    }
`;

export const ButtonSpec = styled.button<ButtonProps>`
    width: 350px;
    height: 45px;
    margin: 50px 30px;
    align-items: center;
    display: flex;
    background-color: var(--color-secondary);
    justify-content: center;
    
    > a {
        font-family: 'Advent Pro', sans-serif;
        font-size: 18px;
        color: var(--color-white);
        text-transform: uppercase;
        text-decoration: none;
        padding: 5px;
        margin: 5px;
    }
`;