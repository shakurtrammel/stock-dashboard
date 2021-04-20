import React from 'react';
import styled from 'styled-components';
import S1Container from './S1Container';
import DataSpan2 from './DataSpan2.js';
import LabelSpan2 from './LabelSpan2.js';



const DateDiv = styled.div`
    height: 30px;
    padding: 10px;
    border: 2px solid #A7F2EB;
    border-radius: 4px;
    background-color: #5D778C;
    font-weight: 700;
    font-size: 13pt;
    font-style: oblique;
    color: #222B33;
    text-align: center;
`;


const Week52Div = styled.div`
    width: 260px;
    height: 105px;
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
    background-color: #222B33;
`;


const Week52 = (props) => {
    return (
        <S1Container>
            <div>
                <DateDiv>{props.data[0].date}</DateDiv>
                <Week52Div>
                    <div style={{ marginBottom: '8px'}}>
                    <DataSpan2>{'$' + props.data[0].w52high}</DataSpan2>
                    <LabelSpan2>Week 52 High</LabelSpan2>
                    </div>
                    <div style={{ marginBottom: '8px'}}>
                    <DataSpan2>{'$' + props.data[0].w52low}</DataSpan2>
                    <LabelSpan2>Week 52 Low</LabelSpan2>
                    </div>
                    <div style={{ marginBottom: '8px'}}>
                    <DataSpan2>{'$' + props.data[0].ytdchange}</DataSpan2>
                    <LabelSpan2>YTD Change</LabelSpan2>
                    </div>
                </Week52Div>
            </div>
        </S1Container>
    )
}

export default Week52;