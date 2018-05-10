import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Title from '../components/Title';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import Checkbox from '../components/Checkbox';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      checkboxValue: '',
      orgaoEmissor: '',
      rgNumber: '',
      dataNumber: ''
    };
  }

  componentDidMount() {
    fetch('/orgao_emissor.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.orgao_emissor,
        });
      })
      .catch((error) => {
        return error
      });
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log('name', name);
    console.log('value', value);

    this.setState({
      [name]: value
    });
  }

  onClick = (event) => {
    const el = event.target.value;
    event.preventDefault();

    this.setState({
      checkboxValue: el,
    });
  }

  render() {
    const { data, checkboxValue, rgNumber, dataNumber, orgaoEmissor } = this.state;
    console.log('rgNumber', rgNumber);
    console.log(' dataNumber', dataNumber);
    console.log('orgaoEmissor', orgaoEmissor);
    console.log('checkboxValue', checkboxValue);
    return(
      <section>
        <Header />
        <ContainerMain>
          <ContainerHome>
            <Title>{'Dados Pessoais'}</Title>

            <ContainerForm>
              <div>
                <Input
                  label={'Número do rg'}
                  name={'rgNumber'}
                  value={rgNumber}
                  mask="99.999.999-9" 
                  onChange={this.handleChange}
                  className={rgNumber !== '' ? 'active' : ''}
                />
              </div>

              <div>
                <Input
                  label={'Data de emissão'}
                  name={'dataNumber'}
                  value={dataNumber}
                  mask="99/99/9999" 
                  onChange={this.handleChange}
                />
              </div>

              <div>
                <Select
                  name={'orgaoEmissor'}
                  label={'Orgão expeditor'}
                  onChange={this.handleChange}
                  data={data}
                />
              </div>
            </ContainerForm>

            <div>
              <label>aaa</label>
              <div>
                <Checkbox 
                  value={'Feminino'}
                  onClick={event => this.onClick(event)} 
                  checked={checkboxValue}
                  className={checkboxValue === 'Feminino' ? 'active' : 'inative'} 
                />
                <Checkbox 
                  value={'Masculino'}
                  checked={checkboxValue}
                  onClick={event => this.onClick(event)}
                  className={checkboxValue === 'Masculino' ? 'active' : 'inative'} 
                />
              </div>

            </div>

          </ContainerHome>
        </ContainerMain>
      </section>
    );
  }
}

const ContainerMain = styled.div`
  width: 100%;
  float: left;
`;

const ContainerHome = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const ContainerForm = styled.form`
  width: 100%;
  float: left;
  > div {
    width: calc((100%/3) - 20px);
    float: left;
    padding: 0 10px;
    &:first-of-type{
      padding-left: 0;
    }
    &:last-of-type {
      padding-right: 0;
    }
  }
`;

export default Main;
