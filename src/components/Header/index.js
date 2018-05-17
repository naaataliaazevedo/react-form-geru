import React, { Component } from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import Logo from './Logo';
import HeaderUser from './HeaderUser';

export class Header extends Component {
  render() {
    return (
      <ContainerHeader>
        <div className="main-menu-logo">
          <BoxHeader>
            <Logo />
          </BoxHeader>
          <BoxHeader>
            <Menu />
          </BoxHeader>
        </div>
        <HeaderUser />
      </ContainerHeader>  
    );
  }
}

const ContainerHeader = styled.header`
  width: 100%;
  float: left;
  > .main-menu-logo {
    width: 100%;
    float: left;
    padding: 1rem 0;
    background-color: #000;
  }
`;

const BoxHeader = styled.div `
  width: calc((100%/2) - 40px);
  float: left;
  padding: 0 1rem;
  @media (max-width: 601px) { 
    width: 100%;
  }
    &:first-of-type {
      @media (max-width: 601px) { 
        padding-right: 0;
      }
    }
    &:nth-of-type(2n) {
      text-align: right;
      padding: 1rem 0;
      @media (max-width: 601px) { 
        padding-left: 0;
        text-align: left;
      }
    }
`;

export default Header;