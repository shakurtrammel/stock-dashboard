import React from 'react';
import styled from 'styled-components';
import S1Container from './S1Container';
import DataSpan from './DataSpan.js';
import LabelSpan from './LabelSpan.js';



const BulbDiv = styled.div`
    width: 50px;
    padding: 5px 0;
`;

const BulbTitle = styled.span`
    display: block;
     color: #F4F5F8
`;

const BulbPrice = styled.span`
    display: block;
    color: #222B33;
`;

const IndicatorDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-radius: 4px;
    background-color: #5D778C;
`;

const MCapDiv = styled.div`
    height: 121px;
    padding: 5px 10px 0 10px;
    border-radius: 4px;
    margin-top: 15px;
    background-color: #222B33;
`;


function formatCommas(x) {
    if (x === null) { return 'N/A'}
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const Indicator = (props) => {
    return (
        <S1Container>
            <div style={{ width: '280px', height: '290px' }}>
                <IndicatorDiv>
                    <BulbDiv>
                        <BulbTitle>Buy</BulbTitle>
                        <BulbPrice>{Number(props.data[0].price * .50).toFixed(2)}</BulbPrice>
                    </BulbDiv>
                    <BulbDiv>
                        <BulbTitle>Hold</BulbTitle>
                        <BulbPrice>{Number(props.data[0].price * .80).toFixed(2)}</BulbPrice>
                    </BulbDiv>
                    <BulbDiv>
                        <BulbTitle>Sell</BulbTitle>
                        <BulbPrice>{Number(props.data[0].price * 1.50).toFixed(2)}</BulbPrice>
                    </BulbDiv>
                </IndicatorDiv>
                <MCapDiv>
                    <DataSpan>{'$' + formatCommas(props.data[0].marketcap)}</DataSpan>
                    <LabelSpan>Market Cap</LabelSpan>
                    <DataSpan>{'$' + formatCommas(props.data[0].volume)}</DataSpan>  
                    <LabelSpan>Volume</LabelSpan>
                    <DataSpan>{'$' + formatCommas(props.data[0].peratio)}</DataSpan>      
                    <LabelSpan>PE Ratio</LabelSpan>
                </MCapDiv>
            </div>
        </S1Container>       
    )
}

export default Indicator;