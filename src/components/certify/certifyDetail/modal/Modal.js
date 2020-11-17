import React from 'react';
import * as S from './style';

const Modal = () => {
    return(
        <S.Container>
            <S.Title>GO CRUELTY FREE: LET US BE!</S.Title>
            <S.Name>김해린</S.Name>
            <S.Discription>SNS, 인스타그램에 제품 리뷰를 올렸습니다.</S.Discription>
            <S.File>https://www.instagram.com/p/fFE11RFSi2fk/</S.File>
            <S.ButtonBox>
                <S.Button>수락</S.Button>
                <S.Button>거절</S.Button>
            </S.ButtonBox>
        </S.Container>
    )
}
export default Modal;