import React, { Component } from 'react';
import logoGeru from '../../assets/logo.png'
import styled from 'styled-components';
export class Logo extends Component {
  render() {
    return (
      <H1><img src={logoGeru} alt="Geru" /></H1>
    );
  }
}

const H1 = styled.h1`
  width: 100%;
  float: left;
  margin: 0;
  img {
    width: 150px;
    float: left;
  }
`;

export default Logo;