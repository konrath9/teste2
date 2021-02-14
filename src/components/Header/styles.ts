import styled from "styled-components";
import { FaUser, FaMapMarkerAlt, FaSearch, FaShoppingBasket } from 'react-icons/fa';

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Menu = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  top: 0;
`;

export const TopRow = styled.div`
  background-color: var(--color-white);
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;

  * {
    white-space: nowrap;
  }  
`;

export const TopButtons = styled.div`
> span {
  font-size: 14px;
  margin: 0 20px;
}

> a button {
  font-size: 14px;
  color: var(--color-secondary);
  padding: 5px 12px 5px 12px;
  margin: 5px 12px;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: 0.2s;
  cursor: pointer;
  justify-content: center;
}

> a button:hover {
  border-color: var(--color-primary);
}
`;

export const LoginMap = styled.div`
  > .login, .location {
  margin-left: 50px;
  margin-right: 50px;
  color: #777777;
  text-decoration: none;
  align-items: center;
}
`;

export const LoginIcon = styled(FaUser)`
  margin-right: 4px;
`;

export const MapIcon = styled(FaMapMarkerAlt)`
`;

export const MiddleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-white);
  padding-top: 10px;
`;

export const Logo = styled.div`
padding: 0px 20px;

  > a img {
    width: 164px;
    height: 90px;
    margin: 20px 50px;
  }
`;

export const HeaderSearch = styled.div`
  padding: 0px 20px;

  > form {
    width: 150%;

    input {
      height: 45px;
      width: 35vw;
      font-size: 20px;
      align-items: center;
      padding: 0 71px 0 10px;
      border-radius: 7px;
      border: 1px solid var(--color-secondary);
    }
    
    button {
      width: 60px;
      height: 45px;
      background-color: var(--color-secondary);
      border-radius: 7px;
      border: 2px solid var(--color-secondary);
      position: relative;
      left: -30px;
      top: 4px;
      cursor: pointer;
    }

  }
`;

export const SearchIcon = styled(FaSearch)`
  color: var(--color-white);
  font-size: 24px;
`;

export const Cart = styled.div`
display: flex;
align-items: center;
margin: 0 150px 0 10px;
padding: 0px 20px;
  
  > .cart-count {
    position: relative;
    align-items: center;
    font-size: 16px;
    color: black;
    border: 1px solid #a5a19e;
    text-align: center;
    width: 32px;
    height: 32px;
    line-height: 32px;
    overflow: hidden;
    border-radius: 6px 0 0 6px;
  }

  > a {
    display: flex;
    text-decoration: none;
  }

  > a button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 168px;
    height: 77px;
    background-color: var(--color-secondary);
    border-radius: 5px;
    color: var(--color-white);
    font-size: 18px;
    cursor: pointer;

    > .basket {
      font-size: 50px;
    }
    
    > .price {
      margin-left: 10px;
      align-items: center;
    }
  }
`;

export const BasketIcon = styled(FaShoppingBasket)`
  
`;

export const NavBar = styled.div`
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  position: relative;

  .main-menu:hover .dropdown {
    display: flex;
  }

  > .main-menu button:hover {
    background-color: var(--color-secondary);
  }

  > .main-menu .shop {
    background-color: var(--color-secondary);
    cursor: pointer;
  }
  
  > .main-menu button {
    padding: 15px 20px;
    color: var(--color-white);
    cursor: pointer;
    
    > h4 {
      font-family: 'Advent Pro', sans-serif;
      text-transform: uppercase;
      display: inline-block;
      white-space: nowrap;
      margin: 0 10px;
    }
  }

   .dropdown {
    display: none;
    background: #f4efea;
    border: solid #aaa 1px;
    position: absolute;
    left: auto;
    top: auto;
    width: auto;
    z-index: 10;
    padding: 10px 0 0 10px;
    color: #f29200;

  a {
    text-decoration: none;
  }

  ul {
    list-style: none outside none;

    li {
      padding: 10px 20px;

      a h4 span:hover {
        color: var(--color-secondary);
      }
      
      > a h4 span {
        font-family: 'Advent Pro', sans-serif;
        color: var(--color-primary);
        font-weight: 500;
        font-size: 18px;
        text-transform: uppercase;
      }
    }
  }
`;

export const Drop1 = styled.div`

`;
