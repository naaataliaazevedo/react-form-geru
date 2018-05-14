import React, { Component } from 'react';
import styled from 'styled-components';

export class HeaderUser extends Component {
  render() {
    return (
      <ContainerHeaderUser>
        <MainUser>
          <div>
            <p className="text-blue">ME CHAMO:</p>
            <p className="fnt-bigger">Paul Irish</p>
            <p><span className="text-blue">cpf:</span> 762.882.176.92</p>
          </div>
          <div>
            <p className="text-blue">Preciso de:</p>
            <p className="fnt-bigger">R$ 2.000</p>
          </div>
          <div>
            <p className="text-blue">Quero pagar em:</p>
            <p className="fnt-bigger">12 vezes</p>
          </div>
          <div>
            <p className="text-blue">Para:</p>
            <p className="fnt-bigger">Comprar uma bike</p>
        </div>
        </MainUser>
      </ContainerHeaderUser>
    );
  }
}

const ContainerHeaderUser = styled.div`
  width: 100%;
  float: left;
  background-color: #363435;
  color: #eceedf;
  padding: 1rem 0;
`;

const MainUser = styled.div`
  width: 80%;
  margin: 0 auto;
  > div {
    float: left;
    width: calc(100% / 4);
    p {
      margin: 0;
      color: #fff;
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: bold;
      &.fnt-bigger {
        font-size: 1.3rem;
        padding: 0.2rem 0;
      }
    }
    .text-blue {
      color: #1b7d8e;
    }
  }
`;

export default HeaderUser;