import React from 'react';
import * as S from './style';
import CampaginTest from '../../../../assets/CampaginTest.png';
const CampaginInfo = () => {
	return (
		<S.Container>
			<S.ImgBox>
				<S.Img src={CampaginTest} />
			</S.ImgBox>
			<S.TitleBox>
				<S.SmallTitle>클레어스 6th 기부 프로젝트</S.SmallTitle>
                <S.Title>GO CRUELTY FREE: LET US BE!</S.Title>
			</S.TitleBox>
            <S.Discription>세계 실험동물의 날을 맞아 진행하는 GO CRUELTY FREE: LET US BE!는 클레어스의 여섯
번째 기부 프로젝트입니다. 반려동물과의 산책이 컨셉인 캠페인 굿즈는 풉백으로 사용 가능한
미니 파우치, 손수건, 드링크 백 등으로 조구만 스튜디오의 일러스트가 그러져있습니다. 
클레어스 공식몰에서 캠페인 굿즈를 구매하면 자동으로 참여할 수 있습니다. 더불어 
SNS 제품 리뷰, 해시태그 포스팅 등의 방법으로 캠페인에 동참하실 수 있습니다. </S.Discription>
		</S.Container>
	);
};
export default CampaginInfo;
