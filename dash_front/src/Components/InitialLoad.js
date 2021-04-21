import React from 'react';
import styled from 'styled-components';
import PageWrapper from './PageWrapper.js';
import MainWrap from './MainWrap.js';
import S1Wrap from './S1Wrap.js';
import S1Container from './S1Container';
import DataSpan from './DataSpan.js';
import LabelSpan from './LabelSpan.js';
import DataSpan2 from './DataSpan2.js';
import LabelSpan2 from './LabelSpan2.js';
import Menu from './Menu.js';
import Header from './Header.js';


// Styles
const ProfileDiv = styled.div`
    width: 270px;
    height: 180px;
    padding: 5px;
    border-radius: 4px;
    background-color: #222B33;
`;

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


const LoadingProfile = (props) => {
    return (
        <S1Container>
             <ProfileDiv>
                <DataSpan></DataSpan>
                <LabelSpan>Symbol</LabelSpan>
                <DataSpan></DataSpan>
                <LabelSpan>Company Name</LabelSpan>
                <DataSpan></DataSpan>
                <LabelSpan>Latest Price</LabelSpan>
                <DataSpan></DataSpan>
                <LabelSpan>Exchange</LabelSpan>
            </ProfileDiv>
        </S1Container>  
    );
};


const LoadingWeek52 = (props) => {
    return (
        <S1Container>
            <div>
                <DateDiv></DateDiv>
                <Week52Div>
                    <div style={{ marginBottom: '8px'}}>
                    <DataSpan2></DataSpan2>
                    <LabelSpan2>Week 52 High</LabelSpan2>
                    </div>
                    <div style={{ marginBottom: '8px'}}>
                    <DataSpan2></DataSpan2>
                    <LabelSpan2>Week 52 Low</LabelSpan2>
                    </div>
                    <div style={{ marginBottom: '8px'}}>
                    <DataSpan2></DataSpan2>
                    <LabelSpan2>YTD Change</LabelSpan2>
                    </div>
                </Week52Div>
            </div>
        </S1Container>
    )
}


const LoadingIndicator = (props) => {
    return (
        <S1Container>
            <div style={{ width: '280px', height: '290px' }}>
                <IndicatorDiv>
                    <BulbDiv>
                        <BulbTitle>Buy</BulbTitle>
                        <BulbPrice></BulbPrice>
                    </BulbDiv>
                    <BulbDiv>
                        <BulbTitle>Hold</BulbTitle>
                        <BulbPrice></BulbPrice>
                    </BulbDiv>
                    <BulbDiv>
                        <BulbTitle>Sell</BulbTitle>
                        <BulbPrice></BulbPrice>
                    </BulbDiv>
                </IndicatorDiv>
                <MCapDiv>
                    <DataSpan></DataSpan>
                    <LabelSpan>Market Cap</LabelSpan>
                    <DataSpan></DataSpan>  
                    <LabelSpan>Volume</LabelSpan>
                    <DataSpan></DataSpan>      
                    <LabelSpan>PE Ratio</LabelSpan>
                </MCapDiv>
            </div>
        </S1Container>       
    )
}


const InitialLoad = () => {
    return (
        <PageWrapper>
          <Menu />
          <MainWrap>
            <Header />
            <S1Wrap>
              <LoadingProfile />
              <LoadingWeek52 />
              <LoadingIndicator />
            </S1Wrap>
          </MainWrap>
        </PageWrapper>
    );
}


export default InitialLoad;