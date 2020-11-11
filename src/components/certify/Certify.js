import React from 'react';
import * as S from './style';
import SideBar from '../../components/Navigation/sideBar/SideBar';
import SuggestItemFlex from '../../components/suggest/suggestItemFlex/SuggestItemFlex';
const Certify = () => {
    return(
        <S.Container>
            <SideBar num={2}/>
            <SuggestItemFlex useGood={false}/>
        </S.Container>
   
    )
}
export default Certify;