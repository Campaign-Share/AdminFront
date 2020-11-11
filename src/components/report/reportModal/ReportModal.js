import React from 'react';
import * as S from './style';

const ReportModal = () => {
    return(
        <S.ModalContainer>
            <S.Title>Report</S.Title>
            <S.InfoBox>
                <S.InfoItem>광고성 캠페인</S.InfoItem>
                <S.MarginItem/>
                <S.InfoItem>김해린</S.InfoItem>
            </S.InfoBox>
            <S.Discription>
                <S.Link>GO CRUELTY FREE: LET US BE!</S.Link>
                <S.DiscripText>광고 목적으로 올린 것 같습니다.</S.DiscripText>
            </S.Discription>
            <S.TailBox>
                <S.Button>제재</S.Button>
                <S.Button>기각</S.Button>
            </S.TailBox>
            <S.Placeholder>자세한 내용은 캠페인 제목을 클릭해 주세요.</S.Placeholder>
        </S.ModalContainer>
    )
}
export default ReportModal;