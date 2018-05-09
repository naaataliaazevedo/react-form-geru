import React, { Component } from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import Logo from './Logo';

export class Header extends Component {
  render() {
    return (
      <ContainerHeader>
        <BoxHeader>
          <Logo />
        </BoxHeader>
        <BoxHeader>
          <Menu />
        </BoxHeader>
      </ContainerHeader>
    );
  }
}

const ContainerHeader = styled.header`
  width: 100%;
  float: left;
  background-color: #000;
  padding: 1rem 0;
`;

const BoxHeader = styled.div `
  width: calc((100%/2) - 240px);
  float: left;
    &:first-of-type {
      padding-right: 240px;
    }
    &:nth-of-type(2n) {
      padding-left: 240px;
    }
`;

export default Header;