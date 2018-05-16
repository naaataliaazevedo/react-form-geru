import React, { Component } from 'react';
import styled from 'styled-components';

export class HeaderForm extends Component {
  render() {
    return (
      <ContainerHeaderForm>
        <ul>
          <li>
            <span>1</span> simule
          </li>
          <li>
            <span>2</span> preencha o cadastro
          </li>
          <li>
            <span>3</span> revise seu pedido
          </li>
          <li>
            <span>4</span> finalize seu pedido
          </li>
        </ul>
      </ContainerHeaderForm>
    );
  }
}

const ContainerHeaderForm = styled.div`
  background-color: #e5e6d7;
  width: 100%;
  float: left;
  padding: 0.6rem 0;
  margin: 0;
  ul {
    width: 70%;
    margin: 0 auto;
    list-style-type: none;
    @media (max-width: 601px) { 
      width: 90%;
    }
    li {
      width: calc(100%/4);
      float:left;
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: bold;
      @media (max-width: 601px) { 
        width: 100%;
        float: left;
        margin-bottom: 0.6rem;
        &:last-of-type {
          margin-bottom: 0;
        }
      }
      span {
        background-color: #363435;
        color: #00d0d7;
        border-radius: 100%;
        padding: 0.2rem 0.5rem;
      }
    }
  }
`;



export default HeaderForm;