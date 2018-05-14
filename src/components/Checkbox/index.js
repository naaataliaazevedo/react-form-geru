import React, { Component } from 'react';
import styled from 'styled-components';

export class Checkbox extends Component {
  render() {
    const { value, onClick, checked, className } = this.props;
    //console.log('checked', checked);
    return (
      <ContainerCheckbox>
        <label>
          <input
            type="checkbox"
            value={value}
            checked={checked}
            onClick={onClick}
          />
          <span className={className}>{value}</span>
        </label>
      </ContainerCheckbox>
    );
  }
}

const ContainerCheckbox = styled.div `
  margin: 4px;
  border: 2px solid #000;
  //overflow: auto;
  float: left;
  width: 32.6%;
  @media (min-width: 601px) {
    &:nth-of-type(1n) {
      &:after {
        content: "-";
        position: absolute;
        top: 13.3rem;
        left: 47.1%;
      }
    }
  }
  &:hover {
    margin: 4px;
    float: left;
  }
  label {
    float: left;
    width: 100%;
  }
  label span {
    text-align: center;
    padding: 3px 0px;
    display: block;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    background-color: #fefff0;
  }
  .active {
    background-color: #1b7d8e;
  }
  label input {
    position: absolute;
    top: -20px;
  }
  > input:checked + span {
    background-color: blue;
    color: #fff;
  }
`;

export default Checkbox;