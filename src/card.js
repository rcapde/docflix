import styled from "styled-components";
import React, { Component } from 'react';



const Info = styled.div`
  width: 60%;
  height:50px;
  font-size:1.6em;
  background-color:royalblue;
  color: white;
  border:none;
  border-color:royalblue;
`;
const Image = styled.div`
  background-image: url(./supersize.jpg);
  background-size: 200px 260px;
  width:200px;
  height:260px;

`;
const Overlay = styled.div`
  background-color: #111;
  width:200px;
  height:260px;
  opacity: 0;
  transition: .5s ease-in-out;

  &:hover ${Overlay} {
     opacity: 0.8;
     transition: .5s ease-in-out;

   }
   color:white;
`;

class Card extends Component {
  render(){
    return(
      <div>
        <Image>
          <Overlay>
            <h2>Titol</h2>
            <span> Descripcio inicial ...</span>
          </Overlay>
        </Image>
      </div>
    )
  }
}

export default Card;
