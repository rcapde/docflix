import React, { Component } from 'react';
import styled from "styled-components";
import Header from './header';
import Card from './card';

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Container>
            <CardContainer>
              <Card />
              <Card />
              <Card />
              <Card />
            </CardContainer>
          </Container>
        </div>
    );
  }
}

export default App;

const CardContainer = styled.div`
  background-color: #f1f1f1;
  width:80%;
  min-height:600px;
  display:flex;
  flex-flow:row wrap;
  justify-content:space-around;
  align-items:flex-start;
  padding-top:100px;

`;
const Container = styled.div`
  background-color: #f1f1f1;
  width:100%;
  min-height:600px;
  display:flex;
  justify-content:center;
`;
