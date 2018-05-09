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
      orgaoEmissor: ''
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
    console.log('event', event.target.value);
    this.setState({
      orgaoEmissor: event.target.value,
    });
  }

  onClick = (event) => {
    event.preventDefault();
    const el = event.target.value;
    this.setState({
      checkboxValue: el,
    });
  }

  render() {
    const { data, checkboxValue } = this.state;

    return(
      <section>
        <Header />
        <ContainerMain>
          <ContainerHome>
            <Title>{'Dados Pessoais'}</Title>

            <ContainerForm>
              <div>
                <Input label={'Número do rg'}/>
              </div>

              <div>
                <Input label={'Data de emissão'} />
              </div>

              <div>
                <Select
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

const ContainerForm = styled.div`
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
