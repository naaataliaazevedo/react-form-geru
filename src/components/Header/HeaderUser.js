import React, { Component } from 'react';
import styled from 'styled-components';

export class HeaderUser extends Component {
  render() {
    return (
      <ContainerHeaderUser>
        Header user
      </ContainerHeaderUser>
    );
  }
}

const ContainerHeaderUser = styled.div`
  width: 100%;
  float: left;
  background-color: #363435;
  color: #fff;
  padding: 1rem 0;
`;

export default HeaderUser;