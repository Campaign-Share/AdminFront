import React from 'react';
import * as S from './style';
import good from '../../../../../assets/good.png';
import bad from '../../../../../assets/bad.png';
import { useSelector } from 'react-redux';
const PosterBox = () => {
	const {post_uri, agree_number, disagree_number} = useSelector((store) => store.suggestReducer.info); 
	return (
		<S.PosterBox>
			<S.PosterMargin>
				<S.PosterImg src={`https://campaignshare.s3.ap-northeast-2.amazonaws.com/${post_uri}`} />
				<S.GoodBox>
					<S.Good src={good} />
					<S.Graph>
						<S.GoodArea width={agree_number / (agree_number + disagree_number)}>
							<S.GoodText>{agree_number}</S.GoodText>
						</S.GoodArea>
						<S.BadArea>
							<S.BadText>{disagree_number}</S.BadText>
						</S.BadArea>
					</S.Graph>
					<S.Bad src={bad} />
				</S.GoodBox>
			</S.PosterMargin>
		</S.PosterBox>
	);
};
export default PosterBox;
