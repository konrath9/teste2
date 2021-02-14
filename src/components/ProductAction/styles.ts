import styled from 'styled-components';
import { FaFacebookSquare, FaTwitter, FaWhatsapp, FaLinkedin, 
    FaPinterest, FaTelegram, FaMailBulk, FaCopy, 
    FaShoppingBasket, FaAngleDown, FaPlus, FaMinus } from 'react-icons/fa';

export const Container = styled.div`
    padding: 32px;
    display: flex;
    flex-direction: column;
`;

export const PriceCard = styled.div`
    width: 100%;
    color: #009292;
`;

export const PriceRow = styled.div`
    width: 100%;
    
    > span {
        font-size: 28px;

        & + span {
            font-size: 34px;
            margin-left: 10px;
        }
    }
`;

export const ArrowDown = styled(FaAngleDown)`
    width: 12px;
    height: 12px;
`;

export const InstallmentsInfo = styled.div`
    font-size: 12px;

    > span {
        background-color: #009292;
        color: var(--color-white);
        padding: 0px 5px;
        margin-left: 5px;
    }
`;

export const Actions = styled.div`
    padding: 15px 0px;
    max-width: 100%;
    display: flex;

    > span {
        border: 1px solid var(--color-secondary);
        width: 60px;

        > p {
            font-size: 20px;
            margin: 15px 23px;
        }
    }
`;

type ButtonProps = { solid?: boolean };

export const Button = styled.button<ButtonProps>`
    background-color: var(--color-secondary);
    color: var(--color-white);
    font-size: 20px;
    border-radius: 5px 0 0 5px;
    padding: 13px 25px 17px 25px;
    text-decoration: none;
    display: flex;
    max-width: 100%;
    align-items: center;
    cursor: pointer;

    > span {
        margin-left: 10px;
        font-family: 'Advent Pro', sans-serif;
    }
`;

export const BasketIcon = styled(FaShoppingBasket)`
    width: 20px;
    height: 20px;
`;

export const ButtonQuantity = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonAdd = styled.button<ButtonProps>`
    height: 35px;
    width: 32px;
    border: 1px solid var(--color-secondary);
    border-radius: 0 5px 0 0;
    position: relative;
    left: -1px;
    cursor: pointer;
`;

export const AddIcon = styled(FaPlus)`
    font-size: 18px;
    color: #737373;
    margin: 7px 7px;
    position: relative;
    left: -1px;
    top: -1px;
`;

export const ButtonRemove = styled.button<ButtonProps>`
    height: 23px;
    width: 32px;
    border: 1px solid var(--color-secondary);
    border-top: none;
    border-radius: 0 0 5px 0;
    position: relative;
    left: -1px;
    cursor: pointer;
`;

export const RemoveIcon = styled(FaMinus)`
    flex-direction: column;
    font-size: 18px;
    color: #737373;
`;


export const Tax = styled.div`
    width: 100%;
    padding: 0 0 12px 0;

    > p {
        font-size: 20px;
        font-family: 'Advent Pro', sans-serif;
        color(--color-secondary);
        cursor: pointer;
    }
`;

export const Buyer = styled.div`
    color: var(--color-secondary);
    max-width: 70%;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    text-align: center;

    >p {
        margin-bottom: 5px;
    }

    > span {
        background-color: var(--color-secondary);
        color: var(--color-white);
        border-radius: 5px;
        padding: 3px 5px;
        margin: 5px;
    }
`;

export const Share = styled.div`    
    display: inline;
    justify-content: center;
    align-items: center;

    > h2 {
        font-size: 20px;
        color: var(--color-secondary);
        margin: 10px 0 10px 0;
    }
`;

export const FacebookIcon = styled(FaFacebookSquare)`
    width: 30px;
    height: 30px;
    color: #4267b2;
    cursor: pointer;
`;

export const TwitterIcon = styled(FaTwitter)`
    width: 30px;
    height: 30px;
    color: #1da1f2;
    margin-left: 20px;
    cursor: pointer;
`;

export const WhatsAppIcon = styled(FaWhatsapp)`
    width: 30px;
    height: 30px;    
    color: #2fb140;
    margin-left: 20px;
    cursor: pointer;
`;

export const LinkedinIcon = styled(FaLinkedin)`
    width: 30px;
    height: 30px;
    color: #1277b5;
    margin-left: 20px;
    cursor: pointer;
`;

export const PinterestIcon = styled(FaPinterest)`
    width: 30px;
    height: 30px;
    color: #b70b1a;
    border-radius: 50%;
    margin-left: 20px;
    cursor: pointer;
`;

export const TelegramIcon = styled(FaTelegram)`
    width: 30px;
    height: 30px;
    color: #0c85d7;
    margin-left: 20px;
    cursor: pointer;
`;

export const MailIcon = styled(FaMailBulk)`
    width: 30px;
    height: 30px;
    color: #aaa;
    margin-left: 24%;
    cursor: pointer;
`;

export const CopyIcon = styled(FaCopy)`
    width: 30px;
    height: 30px;
    color: #333;
    margin-left: 20px;
    cursor: pointer;
`;
