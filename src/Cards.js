import React, { Component } from 'react';
import styled from "styled-components";
import Card from './card';

class Cards extends Component {

  render() {
    const Items = this.state.cards.map(card => (
      <div key={card.id}>
        <h3>{card.title}</h3>
        <p>{card.body}</p>
      </div>
    ));
    return (
        <div>
          <Container>
            <CardContainer>
              <h1>Recent Movies</h1>
              {Items}
            </CardContainer>
          </Container>
        </div>
    );
  }
}

export default Cards;

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
