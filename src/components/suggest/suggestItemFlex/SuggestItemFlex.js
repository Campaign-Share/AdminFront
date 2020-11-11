import React from 'react';
import SuggestItem from '../suggestItem/SuggestItem';

import * as S from './style';
import ItemModal from '../suggestItem/itemModal/ItemModal';

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
