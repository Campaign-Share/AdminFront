import React from 'react';
import SuggestItem from '../suggestItem/SuggestItem';
import * as S from './style';

const SuggestItemFlex = () => {
	return (
		<S.Box>
			<S.FlexBox>
				<SuggestItem />
                <SuggestItem />
                <SuggestItem />
			</S.FlexBox>
		</S.Box>
	);
};
export default SuggestItemFlex;
