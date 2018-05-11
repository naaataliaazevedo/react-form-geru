import React, { Component } from 'react';
import styled from 'styled-components';

export class HeaderUser extends Component {
  render() {
    return (
      <ContainerHeaderUser>
        <div>1</div>
        <div>2</div>
        <div>3</div>
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

export default HeaderUser;