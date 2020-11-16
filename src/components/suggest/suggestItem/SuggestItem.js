import React, { useCallback, useEffect } from 'react';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import good from '../../../assets/good.png';
import bad from '../../../assets/bad.png';
import { setCampaginInfo } from '../../../modules/CampaginInfoReducer';
import { transformModal } from '../../../modules/SuggestItemReducer';
import { useHistory } from 'react-router-dom';

const SuggestItem = ({ useGood, listItem, nick_name }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const modalOn = useCallback(() => {
		dispatch(transformModal());
	}, []);
	const goToCertifyItem = () => {
		history.push('./certifyDetail');
	};
	useEffect(() => {
		dispatch(setCampaginInfo(listItem));
	}, []);
	const {
		post_uri,
		sub_title,
		title,
		agree_number,
		disagree_number,
	} = useSelector((store) => store.CampaginInfoReducer);

	return (
		<S.ItemBox onClick={useGood ? modalOn : goToCertifyItem}>
			<S.MarginItem>
				<S.Img
					src={`https://campaignshare.s3.ap-northeast-2.amazonaws.com/${post_uri}`}></S.Img>
				<S.NickName>{nick_name}</S.NickName>
				<S.discriptionBox>
					<S.smallTitle>{sub_title}</S.smallTitle>
					<S.Title>{title}</S.Title>
				</S.discriptionBox>
				{useGood && (
					<S.GoodBox>
						<S.Good src={good} />
						<S.Graph>
							<S.GoodArea
								width={agree_number / (agree_number + disagree_number)}>
								<S.GoodText>{agree_number}</S.GoodText>
							</S.GoodArea>
							<S.BadArea>
								<S.BadText>{disagree_number}</S.BadText>
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
