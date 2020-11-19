import React from 'react';
import * as S from './style';
import SideBar from '../../components/Navigation/sideBar/SideBar';
import SuggestItemFlex from '../../components/suggest/suggestItemFlex/SuggestItemFlex';

const Certify = ({list}) => {
    return(
        <S.Container>
            <SideBar num={2}/>
            <SuggestItemFlex list={list} useGood={false}/>
        </S.Container>
   
    )
}   
export default Certify;