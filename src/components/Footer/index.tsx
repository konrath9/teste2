import React from "react";

import {
  Container, Links, PaymentMethods, PaymentHeader, CardIcon, PaymentIcons, VisaIcon,
  MasterIcon, HiperIcon, AmericanIcon, EloIcon, TicketIcon, Security, SecurityHeader, SecIcon,
  Company, CompanyHeader, CompanyIcon, CompanyInfo
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <Links>
        <a href="https://suprevida.com.br/institucional/fale-conosco">Fale Conosco > </a>
        <a href="https://suprevida.com.br/institucional/como-funcionamos">Como funcionamos > </a>
        <a href="https://suprevida.com.br/institucional/perguntas-frequentes">Perguntas frequentes > </a>
        <a href="https://suprevida.com.br/institucional/termos-e-condicoes-de-uso">Termos e Condições de Uso > </a>
        <a href="https://suprevida.com.br/institucional/frete-gratis">Frete Grátis > </a>
        <a href="https://suprevida.com.br/institucional/troca-e-devolucoes">Troca e Devoluções > </a>
        <a href="https://suprevida.com.br/institucional/termos-de-uso-e-politica-de-privacidade">Termos de Uso e Política de Privacidade > </a>
      </Links>
      <PaymentMethods>
        <PaymentHeader className="footer-header">
          <h4>
            <CardIcon />
            <span>FORMAS DE PAGAMENTO</span>
          </h4>
        </PaymentHeader>
        <PaymentIcons>
          <ul className="list-cards">
            <li><VisaIcon /></li>
            <li><MasterIcon /></li>
            <li><HiperIcon /></li>
          </ul>
          <ul className="list-cards">
            <li><AmericanIcon /></li>
            <li><EloIcon /></li>
            <li><TicketIcon /></li>
          </ul>
        </PaymentIcons>
      </PaymentMethods>
      <Security>
        <SecurityHeader className="footer-header">
          <h4>
            <SecIcon />
            <span>SEGURANÇA</span>
          </h4>
        </SecurityHeader>
      </Security>
      <Company>
        <CompanyHeader className="footer-header">
          <h4>
            <CompanyIcon />
            <span>SEGURANÇA</span>
          </h4>
        </CompanyHeader>
        <CompanyInfo>
          <p>
            Suprevida Agenciamento e Intermediação LTDA<br/>
            CNPJ: 05.192.032/0001-50<br/>
            <strong>Distrito InovaHC - Hospital das Clínicas</strong><br/>
            Av. Dr Enéas Carvalho de Aguiar, 255<br/>
            Cerqueira César, São Paulo/SP - 05403-000<br/>
            Telefone/WhatsApp: (11) 4200-0432<br/>
            E-mail: ajuda@suprevida.com.br
          </p>
        </CompanyInfo>
      </Company>
    </Container>
  );
};

export default Footer;
