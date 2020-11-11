import React from 'react';
import * as S from './style';
import CampaginTest from '../../../../../assets/CampaginTest.png';
import good from '../../../../../assets/good.png';
import bad from '../../../../../assets/bad.png';
const PosterBox = () => {
	return (
		<S.PosterBox>
			<S.PosterMargin>
				<S.PosterImg src={CampaginTest} />
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
			</S.PosterMargin>
		</S.PosterBox>
	);
};
export default PosterBox;
