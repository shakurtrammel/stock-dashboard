import styled from 'styled-components';
import SymbolSubmit from './SymbolSubmit.js';


const StyledHeader = styled.header`
    width: 830px;
    padding: 20px;
    vertical-align: bottom;
    color: #F4F5F8;
    font-weight: 300;
    font-size: 9pt;
`;


const LinkBtn = styled.a`
    display: inline-block;
    width: 75px;
    padding: 5px 0;
    border-radius: 2px;
    margin-left: 550px;
    text-align: center;
    background-color: #4D6173;
    cursor: default;
    :link { text-decoration: none; color: #F4F5F8; }
    :visited { text-decoration: none; color: #F4F5F8; }
    :hover { text-decoration: none; color: #F4F5F8; }
    :active { text-decoration: none; color: #F4F5F8; }
`;


const Header = (props) => {
    return (
        <StyledHeader>
            <SymbolSubmit />
            <LinkBtn href='http://google.com'>Log Out</LinkBtn>
        </StyledHeader>
    );
}

export default Header;