import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Title from '../components/Title';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';

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
    const  { gender, rgNumber, dataNumber, orgaoEmissor } = this.state;
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
              <ContainerInputs>
                <div>
                  <Input
                    label={'Número do rg'}
                    name={'rgNumber'}
                    value={rgNumber}
                    mask="11.111.111-1" 
                    onChange={this.handleChange}
                    className={rgNumber.length < 9 ? 'inative' : 'active'}
                  />
                </div>

                <div>
                  <Input
                    label={'Data de emissão'}
                    name={'dataNumber'}
                    value={dataNumber}
                    mask="11/11/1111" 
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
              </ContainerInputs>

            <ContainerCheckbox>
              <div>
                <label className="labelFirst">Sexo</label>
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
            </ContainerCheckbox>

            {/*<button type="submit" disabled={!enabled}>Continuar</button>*/}
            <Button disabled={!enabled}>{'Continuar'}</Button>
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

const ContainerInputs = styled.div`
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

const ContainerCheckbox = styled.div`
  width: 64%;
  margin: 0 auto;
  > div {
    width: 100%;
    float: left;
    .labelFirst {
      width: auto;
      float: left;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 12px;
      padding: 0.6rem 0;
    }
  }
`;

export default Main;
