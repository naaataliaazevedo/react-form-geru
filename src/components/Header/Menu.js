import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ContainerMenu = styled.div`
  width: 90%;
  margin: 0 auto;
  > a {
    color: #fff;
    text-decoration: none;
    font-size: 0.8rem;
    position: relative;
    padding-right: 1.2rem;
    transition: all ease-in-out 1s;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #1b7d8e;
    }
    &:first-of-type,
    &:nth-of-type(2n) {
      &:after {
        content: '';
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 7.5px;
        border: 2px solid #1b7d8e;
        position: absolute;
        right: 5px;
        top: 3px;
      }
    }
  }
`;

export class Menu extends Component {
  render() {
    return (
      <ContainerMenu>
        <NavLink to="/item1">
          COMO FUNCIONA
        </NavLink>
        <NavLink to="/item2">
          PRIVACIDADE
        </NavLink>
        <NavLink to="/item3">
          AJUDA
        </NavLink>
      </ContainerMenu>
    );
  }
}

export default Menu;