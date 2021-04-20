import React from 'react';
import styled from 'styled-components';



const Nav = styled.nav`
    width: 150px;
    height: 560px;
    padding: 22px 20px 18px 20px;
    border-radius: 2px;
    background-color: #2A3640;
    color: #F4F5F8;;
`;


const Logo = styled.span`
    display: inline-block;
    padding: 5px;
    border-radius: 4px;
    background-color: #A7F2EB;
    font-weight: 800;
    font-size: 12pt;
    font-style: oblique;
    color: #2A3640;
`;


const StyledUL = styled.ul`
    list-style: none;
    margin-top: 30px;
    font-weight: 200;
    font-size: 9pt;
`;


const StyledLI = styled.li`
  margin-bottom: 40px;
`;



class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      names: ['Home', 'Markets', 'Events', 'Settings'],
    }
  }

  render() {
    return (
      <Nav>
        <Logo>Stock Dash</Logo>
        <StyledUL>
            { this.state.names.map((name, index) => { return <StyledLI key={index}>{name}</StyledLI> }) }
        </StyledUL>
      </Nav>
    )
  }
}

export default Menu