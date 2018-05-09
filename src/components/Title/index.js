import React, { Component } from 'react';
import styled from 'styled-components';

export class Title extends Component {
  render() {
    return (
      <TitleH1>{this.props.children}</TitleH1>
    );
  }
}

const TitleH1 = styled.h1`
  text-transform: uppercase;
`;

export default Title;