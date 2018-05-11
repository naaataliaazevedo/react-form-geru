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
      gender: '',
      orgaoEmissor: '',
      rgNumber: '',
      dataNumber: '',
      isFocus: '',
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

    this.setState({
      [name]: value
    });
  }

  onClick = (event) => {
    const el = event.target.value;
    event.preventDefault();

    this.setState({
      gender: el,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const  {gender: gender, rgNumber: rgNumber, dataNumber: dataNumber, orgaoEmissor: orgaoEmissor} = this.state;
    console.log('dados', gender, rgNumber, dataNumber, orgaoEmissor);

    fetch('http://5af36ad6cca5e20014bba4cd.mockapi.io/api/form/form/', {
      method: 'post',
      body: JSON.stringify({ gender: gender, rgNumber: rgNumber, dataNumber: dataNumber, orgaoEmissor: orgaoEmissor })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      //Success code goes here
      alert('form submited')
    }).catch(function (err) {
      //Failure
      alert('Error')
    });
  }

  render() {
    const { data, gender, rgNumber, dataNumber, orgaoEmissor } = this.state;
    const enabled = gender !== '' && rgNumber !== '' && dataNumber !== '' && orgaoEmissor !== '';
    console.log('rgNumber', rgNumber.length);
    return(
      <section>
        <Header />
        <ContainerMain>
          <ContainerHome>
            <Title>{'Dados Pessoais'}</Title>

            <form onSubmit={this.handleSubmit.bind(this)}>
              <ContainerForm>
                <div>
                  <Input
                    label={'Número do rg'}
                    name={'rgNumber'}
                    value={rgNumber}
                    mask="99.999.999-9" 
                    onChange={this.handleChange}
                    className={rgNumber.length < 9 ? 'inative' : 'active'}
                  />
                </div>

                <div>
                  <Input
                    label={'Data de emissão'}
                    name={'dataNumber'}
                    value={dataNumber}
                    mask="99/99/9999" 
                    onChange={this.handleChange}
                    className={dataNumber.length < 8 ? 'inative' : 'active'}
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
                  checked={gender}
                  className={gender === 'Feminino' ? 'active' : 'inative'} 
                />
                <Checkbox 
                  value={'Masculino'}
                  checked={gender}
                  onClick={event => this.onClick(event)}
                  className={gender === 'Masculino' ? 'active' : 'inative'} 
                />
              </div>
            </div>

            <button type="submit" disabled={!enabled}>Continuar</button>
          </form>

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
