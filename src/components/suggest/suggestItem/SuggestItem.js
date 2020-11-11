import React, { useState, useCallback } from 'react';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import img from '../../../assets/CampaginTest.png';
import good from '../../../assets/good.png';
import bad from '../../../assets/bad.png';
import ItemModal from '../suggestItem/itemModal/ItemModal';
import { transformModal } from '../../../modules/SuggestItem';
import { useHistory } from 'react-router-dom';
const SuggestItem = ({ useGood }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const modalOn = useCallback(() => {
		dispatch(transformModal());
	}, []);
	const goToCertifyItem = () => {
		//history.push
	}
	return (
		<S.ItemBox onClick={useGood ? modalOn : goToCertifyItem}>
			<S.MarginItem>
				<S.Img src={img}></S.Img>
				<S.NickName>Klairs X jOGUMAN STUDiO</S.NickName>
				<S.discriptionBox>
					<S.smallTitle>클레어스 6th 기부 프로젝트</S.smallTitle>
					<S.Title>GO CRUELTY FREE: LET US BE!</S.Title>
				</S.discriptionBox>
				{useGood && (
					<S.GoodBox>
						<S.Good src={good} />
						<S.Graph>
							<S.GoodArea width={50}>
								<S.GoodText>10</S.GoodText>
							</S.GoodArea>
							<S.BadArea>
								<S.BadText>2</S.BadText>
							</S.BadArea>
						</S.Graph>
						<S.Bad src={bad} />
					</S.GoodBox>
				)}
			</S.MarginItem>
		</S.ItemBox>
	);
};
export default SuggestItem;
