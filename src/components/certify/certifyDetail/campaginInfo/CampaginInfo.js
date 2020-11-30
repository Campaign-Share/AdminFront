import React from 'react';
import * as S from './style';
import CampaginTest from '../../../../assets/CampaginTest.png';
import {useSelector} from 'react-redux';
const CampaginInfo = () => {
	const {title, subTitle, introduction, postURI} = useSelector(store => store.CertifyReducer.campagin);
	return (
		<S.Container>
			<S.ImgBox>
				<S.Img src={postURI} />
			</S.ImgBox>
			<S.TitleBox>
				<S.SmallTitle>{subTitle}</S.SmallTitle>
                <S.Title>{title}</S.Title>
			</S.TitleBox>
            <S.Discription>{introduction} </S.Discription>
		</S.Container>
	);
};
export default CampaginInfo;
