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
  width: calc((100%/2) - 240px);
  float: left;
  @media (max-width: 601px) { 
    width: 100%;
  }
    &:first-of-type {
      padding-right: 240px;
      @media (max-width: 601px) { 
        padding-right: 0;
      }
    }
    &:nth-of-type(2n) {
      padding-left: 240px;
      @media (max-width: 601px) { 
        padding-left: 0;
      }
    }
`;

export default Header;