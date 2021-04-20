import React from 'react';
import styled from 'styled-components';
import CSRFToken from './CSRFToken.js';



const SymbolForm = styled.form`
    display: inline-block;
    padding: 7px 0;
    width: 175px;
    border-radius: 3px;
    background-color: #4D6173;
`;



const SymbolSubmit = () => {
    return (
        <SymbolForm action="http://localhost:8000/quote" method="post">
            <CSRFToken />
            <label htmlFor="search" style={{ margin: '0 10px 0 20px' }}>Symbol: </label>
            <input type="text" name="search" size="5" style={{ borderRadius: '2px'}}></input>
            <input type="submit" style={{ display: 'none' }}></input>
        </SymbolForm>
    );
};


export default SymbolSubmit;
