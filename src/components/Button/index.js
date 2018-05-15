import React, { Component } from 'react';
import styled from 'styled-components';

export class Button extends Component {
  render() {
    const { disabled } = this.props;
    console.log('disabled', disabled);
    return (
      <BtnSubmit type="submit" disabled={disabled}>{this.props.children}</BtnSubmit>
    );
  }
}

const BtnSubmit = styled.button`
  display: block;
  width: 12rem;
  height: 1.6rem;
  margin: 0 auto;
  background-color: green;
  margin-bottom: 2rem;
  &:after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    width: 0; 
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent; 
    border-left: 5px solid gray; 
  }
  &:disabled {
    background-color: #c1c4b8;
    border: transparent;
  }
`;

export default Button;