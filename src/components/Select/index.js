import React, { Component } from 'react';
import styled from 'styled-components';

export class Select extends Component {
  render() {
    return (
      <SelectOption>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </SelectOption>
    );
  }
}

const SelectOption = styled.select`
  width: 100%;
  float: left;
`;

export default Select;