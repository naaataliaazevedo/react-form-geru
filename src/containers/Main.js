import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';

const ContainerMain = styled.div`
  width: 90%;
  margin: 0 auto;
`;

class Main extends Component {
  render() {
    return(
      <section>
        <ContainerMain>
          <Header />
          asdasdasd
        </ContainerMain>
      </section>
    );
  }
}

export default Main;