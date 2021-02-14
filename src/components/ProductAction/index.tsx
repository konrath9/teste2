import React from 'react';

import {
  Container,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  ArrowDown,
  Actions,
  Button,
  Tax,
  Buyer,
  Share,
  FacebookIcon,
  TwitterIcon,
  WhatsAppIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  MailIcon,
  CopyIcon,
  BasketIcon,
  ButtonQuantity,
  ButtonAdd,
  AddIcon,
  ButtonRemove,
  RemoveIcon
} from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <PriceCard>
        <PriceRow>
          <span>Por:</span>
          <span className="symbol"><strong>R$</strong></span>
          <span className="fraction"><strong>10,00*</strong></span>
        </PriceRow>

        <InstallmentsInfo>
          <strong>Em até 12x de R$ 0,98</strong>
          <span>Ver parcelas <ArrowDown /></span>
        </InstallmentsInfo>
      </PriceCard>

      <Actions>
        <Button solid>
          <BasketIcon />
          <span>Comprar</span>
        </Button>
        <span className="count"><p>1</p></span>

        <ButtonQuantity>
          <ButtonAdd>
            <AddIcon />
          </ButtonAdd>

          <ButtonRemove>
            <RemoveIcon />
          </ButtonRemove>
        </ButtonQuantity>
      </Actions>

      <Tax><p>(Taxas inclusas)</p></Tax>

      <Buyer>
        <p>Venda permitida para:</p>
        <span>Pessoa Física</span>
      </Buyer>
      <Share>
        <h2>Compartilhe nas redes sociais!</h2>
        <FacebookIcon />
        <TwitterIcon />
        <WhatsAppIcon />
        <LinkedinIcon />
        <PinterestIcon />
        <TelegramIcon /><br />
        <MailIcon />
        <CopyIcon />
      </Share>
    </Container>
  );
};

export default ProductAction;
