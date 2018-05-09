import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Title from '../components/Title';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
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

  render() {
    const { data } = this.state;

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
                <Select label={'Orgão expeditor'} data={data} />
              </div>
            </ContainerForm>

            <div>
              select
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
