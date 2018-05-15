import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export class HeaderForm extends Component {
  render() {
    return (
      <ContainerHeaderForm>
        <li>
          1
        </li>
        <li>
          2
        </li>
        <li>
          3
        </li>
        <li>
          4
        </li>
      </ContainerHeaderForm>
    );
  }
}

const ContainerHeaderForm = styled.ul`
  background-color: #e5e6d7;
  width: 100%;
  float: left;
  padding: 0.6rem 0;
  margin: 0;
`;

//#363435

export default HeaderForm;