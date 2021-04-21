import React from 'react';
import styled from 'styled-components';
import S1Container from './S1Container';
import DataSpan from './DataSpan.js';
import LabelSpan from './LabelSpan.js';



const ProfileDiv = styled.div`
    width: 270px;
    height: 180px;
    padding: 5px;
    border-radius: 4px;
    background-color: #222B33;
`;


const Profile = (props) => {
    return (
        <S1Container>
             <ProfileDiv>
                <DataSpan>{props.data[0].symbol}</DataSpan>
                <LabelSpan>Symbol</LabelSpan>
                <DataSpan>{props.data[0].name}</DataSpan>
                <LabelSpan>Company Name</LabelSpan>
                <DataSpan>{'$' + props.data[0].price}</DataSpan>
                <LabelSpan>Latest Price</LabelSpan>
                <DataSpan>{props.data[0].exchange}</DataSpan>
                <LabelSpan>Exchange</LabelSpan>
            </ProfileDiv>
        </S1Container>  
    );
};

export default Profile;