import React, { Component } from 'react';
import styled from 'styled-components';

export class Label extends Component {
  render() {
    return (
      <LabelText>{this.props.children}</LabelText>
    );
  }
}

const LabelText = styled.label`
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;
`;

export default Label;