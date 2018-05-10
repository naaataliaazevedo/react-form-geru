import React, { Component } from 'react';
import styled from 'styled-components';
import Label from '../Label';
export class Select extends Component {
  render() {
    const { data, label, onChange, name } = this.props;

    return (
      <div>
        <Label>{label}</Label>
        <SelectOption onChange={onChange} name={name}>
          {data.map((options) => {
            return (
              <option key={options.value} value={options.value}>{options.label}</option>
            )
          })}
        </SelectOption>
      </div>
    );
  }
}

const SelectOption = styled.select`
  width: 100%;
  float: left;
  background-color: #fff;
  border: 2px solid #000;
  height: 1.5rem;
`;

export default Select;