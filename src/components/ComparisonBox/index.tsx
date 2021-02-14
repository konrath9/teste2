import React from 'react';

import luvaBanhoImage from '../../assets/luvaBanho.png';
import lencoImage from '../../assets/lenco.png';

import { Container, AccordionSection, AccordionHead, AccordionBody, 
  BuyIcon, ButtonBuy, Item1, OutIcon, OutButton } from './styles';
  

const ComparisonBox: React.FC = () => {
  return (
    <Container>
      <AccordionSection>
        <AccordionHead>
          <h3>Outras pessoas também compraram:</h3>
        </AccordionHead>

        <AccordionBody>
          <Item1>
            <a href="">
              <img src={luvaBanhoImage} alt="" />
              </a>
            <a href="">
              <p>Luva de Banho by Take Care - 20 un - WipeDerm</p>
              <p><strong>Wipederm</strong></p>
              <p>Por: <strong className="price">R$ 161,14</strong></p>
            </a>
            <ButtonBuy>
              <a href="">
                <BuyIcon />
                <span>Comprar</span>
              </a>
            </ButtonBuy>
          </Item1>
          
          <Item1>
            <a href="">
              <img src={lencoImage} alt="" />
              </a>
            <a href="">
              <p>Lenços Umedecidos FeelClean Antissépticos - 2un - Feel Clean</p>
              <p><strong>Feel Clean</strong></p>
              <p>Por: <strong className="price">R$ 8,00</strong></p>
            </a>
            <OutButton>
              <a href="">
                <OutIcon />
                <span>Avise-me quando chegar</span>
              </a>
            </OutButton>
          </Item1>
        </AccordionBody>

      </AccordionSection>
    </Container>
  );
};

export default ComparisonBox;