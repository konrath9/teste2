import styled from "styled-components";

import { FaCreditCard, FaCcVisa, FaCcMastercard, FaBarcode, FaLock, FaHome } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  height: 230px;
  background: var(--color-secondary);
  border-top: 1px solid var(--color-border);
  padding: 0px 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .footer-header {
    font-size: 18px;
    margin-bottom: 15px;
  
    > h4 {
      display: flex;
      align-items: center;
      span {
      margin-left: 20px;
      font-family: 'Advent Pro', sans-serif;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;

  > a {
    text-decoration: none;
    font-family: 'Advent Pro', sans-serif;
    color: white;
    font-size: 18px;
    padding: 3px;
  }
`;

export const PaymentMethods = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  height: 80%;
`;

export const PaymentHeader = styled.div`
  
`;

export const CardIcon = styled(FaCreditCard)`

  font-size: 28px;
`;

export const PaymentIcons = styled.div`
  > ul {
    display: flex;
    justify-content: center;

    > li {
      font-size: 35px;
      margin: 2px 13px;
    }
  }

  > .list-cards {
    list-style: none outside none;
  }
`;

export const VisaIcon = styled(FaCcVisa)``;

export const MasterIcon = styled(FaCcMastercard)``;

export const HiperIcon = styled(FaCreditCard)``;

export const AmericanIcon = styled(FaCreditCard)``;

export const EloIcon = styled(FaCreditCard)``;

export const TicketIcon = styled(FaBarcode)``;

export const Security = styled.div``;

export const SecurityHeader = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  height: 80%;
`;

export const SecIcon = styled(FaLock)`
  font-size: 28px;
`;

export const Company = styled.div``

export const CompanyHeader = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  height: 80%;
`

export const CompanyIcon = styled(FaHome)`
  font-size: 28px;
`

export const CompanyInfo = styled.div`
  > p, strong {
    color: white;
    font-family: 'Advent Pro', sans-serif;
  }
`;