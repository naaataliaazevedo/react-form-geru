import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import swal from 'sweetalert';

import Title from '../components/Title';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import HeaderForm from '../components/HeaderForm';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      gender: '',
      orgaoEmissor: '',
      rgNumber: '',
      rgNumberInvalid: false,
      dataNumber: '',
      dataNumberInvalid: false,
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
    if (name === 'rgNumber' && value.replace(/\D/g, '').length < 9) {
      console.log('rgNumber value', value.replace(/\D/g, '').length);
      this.setState({
        rgNumberInvalid: true,
      })
    } else {
      this.setState({
        rgNumberInvalid: false,
      })
    }

    if (name === 'dataNumber' && value.replace(/\D/g, '').length < 6) {
      console.log('dataNumber value', value.replace(/\D/g, '').length);
      this.setState({
        dataNumberInvalid: true,
      })
    } else {
      this.setState({
        dataNumberInvalid: false,
      })
    }

    this.setState({
      [name]: value
    });
  }

  onClick = (event) => {
    event.preventDefault();
    const el = event.target.value;

    this.setState({
      gender: el,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const  { gender, rgNumber, dataNumber, orgaoEmissor } = this.state;

    fetch('http://5af36ad6cca5e20014bba4cd.mockapi.io/api/form/form/', {
      method: 'post',
      body: JSON.stringify({ gender: gender, rgNumber: rgNumber, dataNumber: dataNumber, orgaoEmissor: orgaoEmissor })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      swal({
        text: 'Formulário enviado com sucesso!',
        content: 'aaa',
        button: {
          text: 'Ok',
          closeModal: true,
        }
      })
    }).catch(function (err) {
      swal({
        text: 'Erro ao enviar o formulário. Por favor, tente novamente.',
        content: 'aaa',
        button: {
          text: 'Ok',
          closeModal: true,
        }
      })
    });
  }

  render() {
    const { data, gender, rgNumber, dataNumber, orgaoEmissor, rgNumberInvalid, dataNumberInvalid } = this.state;
    const enabled = gender !== '' && (rgNumber !== '' || rgNumberInvalid === true) && (dataNumber !== '' || dataNumberInvalid === true) && orgaoEmissor !== '';

    return(
      <section>
        <Header />
        <HeaderForm />
        <ContainerMain>
          <ContainerHome>
            <Title>{'Dados Pessoais'}</Title>

            <form onSubmit={this.handleSubmit.bind(this)}>
              <ContainerInputs>
                <div>
                  <Input
                    label={'Número do rg'}
                    name={'rgNumber'}
                    mask="11.111.111-1"
                    onChange={this.handleChange}
                    value={rgNumber}
                    className={rgNumberInvalid}
                  />
                </div>

                <div>
                  <Input
                    label={'Data de emissão'}
                    name={'dataNumber'}
                    mask="11/1111"
                    onChange={this.handleChange}
                    value={dataNumber}
                    className={dataNumberInvalid}
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
  @media (max-width: 601px) {
    width: 90%;
  }
`;

const ContainerInputs = styled.div`
  width: 100%;
  float: left;
  > div {
    width: calc((100%/3) - 20px);
    float: left;
    padding: 0 10px;
    @media (max-width: 601px) {
      width: 100%;
      padding: 0;
    }
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
  @media (max-width: 601px) {
    width: 90%;
  }
  > div {
    width: 100%;
    float: left;
    margin: 0.8rem 0;
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
