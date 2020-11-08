import React from 'react';
import * as S from './style';
import img from '../../../assets/CampaginTest.png';
import good from '../../../assets/good.png';
import bad from '../../../assets/bad.png';
const SuggestItem = () => {
	return (
		<S.ItemBox>
			<S.MarginItem>
				<S.Img src={img}></S.Img>
				<S.NickName>Klairs X jOGUMAN STUDiO</S.NickName>
				<S.discriptionBox>
					<S.smallTitle>클레어스 6th 기부 프로젝트</S.smallTitle>
					<S.Title>GO CRUELTY FREE: LET US BE!</S.Title>
				</S.discriptionBox>
				<S.GoodBox>
					<S.Good src={good} />
					<S.Graph>
						<S.GoodArea>
							<S.GoodText>10</S.GoodText>
						</S.GoodArea>
						<S.BadArea>
							<S.BadText>2</S.BadText>
						</S.BadArea>
					</S.Graph>
					<S.Bad src={bad} />
				</S.GoodBox>
			</S.MarginItem>
		</S.ItemBox>
	);
};
export default SuggestItem;
