import styled from "styled-components";
import React, { Component } from 'react';


const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background: royalblue;
  display:flex;
  flex-flow:row wrap;
  justify-content: space-around;
  align-items: center;

`;

const Input = styled.input`
  width: 60%;
  height:50px;
  font-size:1.6em;
  background-color:royalblue;
  color: white;
  border:none;
  border-color:royalblue;
`;
const Logo = styled.div`
  background-image: url(./D.jpg);
  background-size: 60px 60px;
  width:60px;
  height:60px;
`;

class Header extends Component {
  render(){
    return(
      <div>
        <Wrapper>
          <Logo />
          <Input placeholder="Search"/>

        </Wrapper>
      </div>
    )
  }
}

export default Header;