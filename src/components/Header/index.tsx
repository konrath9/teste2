import React from "react";

import {
  Container, Menu, TopRow, LoginIcon, MapIcon, MiddleRow, Logo, HeaderSearch,
  SearchIcon, Cart, BasketIcon, NavBar, TopButtons, LoginMap, Drop1
} from "./styles";

import logoImage from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Menu>
        <TopRow>
          <TopButtons>
            <span><strong>Clique</strong> no que você busca:</span>
            <a href="https://suprevida.com.br/produtos">
              <button><strong>Produtos</strong> para saúde</button>
            </a>
            <a href="https://suprevida.com.br/blog">
              <button><strong>Biblioteca</strong> de saúde</button>
            </a>
            <a href="https://cuidados.suprevida.com.br/">
              <button><strong>Profissionais</strong> de saúde</button>
            </a>
            <a href="https://conteudo.suprevida.com.br/seja-parceiro-suprevida">
              <button><strong>Vender</strong> produtos</button>
            </a>
          </TopButtons>

          <LoginMap>
            <a className="login" href="https://suprevida.com.br/entrar">
              <LoginIcon />
              <span>Fazer Login</span>
            </a>

            <a className="location" href="">
              <MapIcon />
              <span><strong>São Paulo</strong> (trocar)</span>
            </a>
          </LoginMap>

        </TopRow>
        <MiddleRow>
          <Logo>
            <a href="https://suprevida.com.br/">
              <img src={logoImage} alt="Logo" />
            </a>
          </Logo>
          <HeaderSearch>
            <form action="">
              <input type="text" placeholder="Buscar conteúdo ou produto" />
              <button type="submit">
                <SearchIcon />
              </button>
            </form>
          </HeaderSearch>
          <Cart>
            <span className="cart-count">
              0
            </span>
            <a href="https://suprevida.com.br/comprar-agora">
              <button>
                <BasketIcon className="basket" />
                <span className="price">
                  <strong>R$ 0,00</strong><br />
                  Ver cesta
              </span>
              </button>
            </a>
          </Cart>
        </MiddleRow>

        <NavBar>
          <a href="https://suprevida.com.br/blog/mais-sobre-saude" className="main-menu">
            <button><h4>Mais sobre saúde</h4></button>
            <Drop1 className="dropdown">
              <ul>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/coronavirus">
                    <h4>
                      <span>Coronavirus</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/cancer">
                    <h4>
                      <span>Cancer</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/diabetes">
                    <h4>
                      <span>Diabetes</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/doencas-cardiacas">
                    <h4>
                      <span>Doenças cardiacas</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/doencas-neurologicas">
                    <h4>
                      <span>Doenças neurológicas</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/doencas-renais">
                    <h4>
                      <span>Doenças renais</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/doencas-respiratorias">
                    <h4>
                      <span>Doenças respiratórias</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/incontinencias">
                    <h4>
                      <span>Incontinencias</span>
                    </h4>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/infeccoes">
                    <h4>
                      <span>Infecções</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/obesidade">
                    <h4>
                      <span>Obesidade</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/sistema-digestivo">
                    <h4>
                      <span>Sistema digestivo</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/odontologia">
                    <h4>
                      <span>Odontologia</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/ortopedia">
                    <h4>
                      <span>Ortopedia</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/sexualidade">
                    <h4>
                      <span>Sexualidade</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/saude-mental">
                    <h4>
                      <span>Saúde Mental</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/prevencao">
                    <h4>
                      <span>Prevenção</span>
                    </h4>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/sobre-a-suprevida">
                    <h4>
                      <span>Sobre a suprevida</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/sobre-saude">
                    <h4>
                      <span>Sobre a saúde</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/mais-sobre-saude/palavra-do-especialista">
                    <h4>
                      <span>Palavra do especialista</span>
                    </h4>
                  </a>
                </li>
              </ul>
            </Drop1>
          </a>
          <a href="https://suprevida.com.br/blog/estomia" className="main-menu">
            <button><h4>Estomia</h4></button>
            <Drop1 className="dropdown">
              <ul>
                <li>
                  <a href="https://suprevida.com.br/blog/estomia/urostomia">
                    <h4>
                      <span>Urostomia</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/estomia/cuidados-essenciais">
                    <h4>
                      <span>Cuidados Essenciais</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/estomia/colostomia">
                    <h4>
                      <span>Culostomia</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/estomia/ileostomia">
                    <h4>
                      <span>Ileostomia</span>
                    </h4>
                  </a>
                </li>
              </ul>
            </Drop1>
          </a>
          <a href="https://suprevida.com.br/blog/sua-pele" className="main-menu">
            <button><h4>Sua pele</h4></button>
            <Drop1 className="dropdown">
              <ul>
                <li>
                  <a href="https://suprevida.com.br/blog/sua-pele/alergias">
                    <h4>
                      <span>Alergias</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/sua-pele/feridas">
                    <h4>
                      <span>Feridas</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/sua-pele/queimaduras">
                    <h4>
                      <span>Queimaduras</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/sua-pele/cuidados">
                    <h4>
                      <span>Cuidados</span>
                    </h4>
                  </a>
                </li>
              </ul>
            </Drop1>
          </a>
          <a href="https://suprevida.com.br/blog/circulacao" className="main-menu">
            <button><h4>Circulação</h4></button>
          </a>
          <a href="https://suprevida.com.br/blog/reabilitacao" className="main-menu">
            <button><h4>Reabilitação</h4></button>
            <Drop1 className="dropdown">
              <ul>
                <li>
                  <a href="https://suprevida.com.br/blog/reabilitacao/pre-operatorio">
                    <h4>
                      <span>Pré-operatório</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/reabilitacao/fisioterapia">
                    <h4>
                      <span>Fisioterapia</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/reabilitacao/pos-operatorio">
                    <h4>
                      <span>Pós-operatório</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/reabilitacao/cuidados-essenciais">
                    <h4>
                      <span>Cuidados essenciais</span>
                    </h4>
                  </a>
                </li>
              </ul>
            </Drop1>
          </a>
          <a href="https://suprevida.com.br/blog/nutricao-e-alimentacao" className="main-menu">
            <button><h4>Nutrição e Alimentação</h4></button>
            <Drop1 className="dropdown">
              <ul>
                <li>
                  <a href="https://suprevida.com.br/blog/nutricao-e-alimentacao/perda-de-peso">
                    <h4>
                      <span>Perda de peso</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/nutricao-e-alimentacao/suplementos">
                    <h4>
                      <span>Suplementos</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/nutricao-e-alimentacao/cuidados-essenciais">
                    <h4>
                      <span>Cuidados essenciais</span>
                    </h4>
                  </a>
                </li>
              </ul>
            </Drop1>
          </a>
          <a href="https://suprevida.com.br/blog/movimente-se" className="main-menu">
            <button><h4>Movimente-se</h4></button>
            <Drop1 className="dropdown">
              <ul>
                <li>
                  <a href="https://suprevida.com.br/blog/movimente-se/atividades-fisicas">
                    <h4>
                      <span>Atividades Físicas</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/movimente-se/necessidades-especificas">
                    <h4>
                      <span>Necessidades especificas</span>
                    </h4>
                  </a>
                </li>
              </ul>
            </Drop1>
          </a>
          <a href="https://suprevida.com.br/blog/longevidade" className="main-menu">
            <button><h4>Longevidade</h4></button>
          </a>
          <a href="https://suprevida.com.br/blog/familia" className="main-menu">
            <button><h4>Família</h4></button>
            <Drop1 className="dropdown">
              <ul>
                <li>
                  <a href="https://suprevida.com.br/blog/familia/adolescencia">
                    <h4>
                      <span>Adolescência</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/familia/bebe">
                    <h4>
                      <span>Bebê</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/familia/gestacao">
                    <h4>
                      <span>Gestação</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/familia/homem">
                    <h4>
                      <span>Homem</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/familia/infancia">
                    <h4>
                      <span>Infância</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/familia/mulher">
                    <h4>
                      <span>Mulher</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/familia/pet">
                    <h4>
                      <span>Pet</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/familia/para-todos">
                    <h4>
                      <span>Para todos</span>
                    </h4>
                  </a>
                </li>
              </ul>
            </Drop1>
          </a>
          <a href="https://suprevida.com.br/blog/negocios-da-saude" className=" main-menu">
            <button><h4>Negócios da Saúde</h4></button>
            <Drop1 className="dropdown">
              <ul>
                <li>
                  <a href="https://suprevida.com.br/blog/negocios-da-saude/profissionais">
                    <h4>
                      <span>Profissionais</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/negocios-da-saude/gestao">
                    <h4>
                      <span>Gestão</span>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="https://suprevida.com.br/blog/negocios-da-saude/tecnologia">
                    <h4>
                      <span>Tecnologia</span>
                    </h4>
                  </a>
                </li>
              </ul>
            </Drop1>
          </a>
          <a href="https://suprevida.com.br/produtos" className=" main-menu">
            <button className="shop"><h4>Nossa Loja</h4></button>
          </a>
        </NavBar>
      </Menu>

    </Container>
  );
};

export default Header;
