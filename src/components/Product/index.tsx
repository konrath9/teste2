import { info } from 'console';
import React from 'react';

import luvaImage from '../../assets/luva.png';
import ComparisonBox from '../ComparisonBox';
import ProductAction from '../ProductAction';

import {
  Container, Row, Panel, Column, Gallery,
  MoreInfo, Description, StockTable, ButtonMed, SpecInfo, ButtonSpec
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="https://suprevida.com.br/">Home</a>
        <span> > </span>
        <a href="https://suprevida.com.br/produtos">Produtos</a>
        <span> > </span>
        <span>Luvas para Banho e Limpeza em Geral Biosoma - 25 un - Hartmann</span>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="Luva" src={luvaImage} />
          </Gallery>
        </Column>

        <Column>
          <Info />
        </Column>

        <Column>
          <ProductAction />
        </Column>
      </Panel>
      <InfoLower />
      <Stock />
      <Specifications />
      <ComparisonBox />
    </Container>
  );
};

const Info = () => (
  <Description>
    <h2>LUVAS PARA BANHO E LIMPEZA EM GERAL BIOSOMA - 25 UN - HARTMANN</h2>

    <p>Código: CRWG01BR</p>

    <p>Marca: <strong><a href="">Hartmann</a></strong></p>

    <h3>Visão Geral:</h3>

    <p>Luva de higiene e limpeza em geral feita para promover uma higienização segura, completa e confortável sem lesionar a pele e promovendo conforto ao paciente que a utiliza. Possui bom custo benefício por ser descartável, o que elimina a necessidade de lavagem e reprocessamento, além de evitar a contaminação cruzada.</p>

  </Description>
)

const InfoLower = () => (
  <MoreInfo>
    <h2>Saiba Mais</h2>

    <p>
      <br /><strong>Indicação:</strong><br /><br />
      <ul><li>Indicada para limpeza geral e corporal em pacientes, sobretudo aos que possuem pele sensível.</li></ul>

      <br /><strong>Composição:</strong><br /><br />
      <ul><li>100% Poliéster.</li></ul>

      <br /><strong>Apresentação:</strong><br /><br />
      <ul><li>Embalagem com 25 unidades de luvas medindo 22,5 cm x 15 cm.</li></ul>

      <br /><strong>Instruções de uso:</strong><br /><br />
      <ul><li>Retirar uma unidade da embalagem. Umedecer com o produto indicado para higiene corporal ou a limpeza de superfícies. Aplicar sobre a pele ou superfície.</li></ul>

      <br /><strong>Precauções:</strong><br /><br />
      <ul><li>Produto descartável. Não descartar no vaso sanitário.</li></ul>
    </p>
  </MoreInfo>
)

const Stock = () => (
  <StockTable>
    <table>
      <tr>
        <th>SKU</th>
        <th>Medidas</th>
        <th>Quantidade</th>
      </tr>
      <tr>
        <td>CRWG01BR</td>
        <td>22,5 x 15 cm</td>
        <td>25 Unidades</td>
      </tr>
    </table>
    <ButtonMed>
      <a href="">Consultar bula</a>
    </ButtonMed>
  </StockTable>
)

const Specifications = () => (
  <SpecInfo>
    <h2>Especificações</h2>
    <p>Imagens meramente ilustrativas.</p>
    <p><strong> Cor:</strong> Branca</p>
    <p><strong>Material:</strong> 100% feita em Poliéster</p>
    <p><strong>Conteúdo:</strong> Selagem ultrassônica</p>
    <p><strong>Apresentação:</strong> Embalagem com 25 unidades de luva medindo 23 cm x 15 cm</p>
    <ButtonSpec>
      <a href="https://suprevida.com.br/manual/luvas-para-banho-e-limpeza-em-geral-biosoma-25-un-hartmann-manual.pdf">Baixe aqui as especificações do produto</a>
    </ButtonSpec>
  </SpecInfo>
)

export default Product;
