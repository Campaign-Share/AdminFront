import React from 'react';
import SuggestItem from '../suggestItem/SuggestItem';
import {requestApiWithAccessToken} from '../../../APIrequest';
import * as S from './style';
import ItemModal from '../suggestItem/itemModal/ItemModal';

const SuggestItemFlex = ({useGood}) => {
	return (
		<S.CampaginBox>
		<S.Box>
			<S.FlexBox>
				<SuggestItem useGood={useGood}/>
				<SuggestItem />
				<SuggestItem />
				<SuggestItem />
				<SuggestItem />
				<SuggestItem />
				<SuggestItem />
				<SuggestItem />
				<SuggestItem />
				<SuggestItem />
				<SuggestItem />
				<SuggestItem />
				<SuggestItem />
				<SuggestItem />
				<SuggestItem />
				<SuggestItem />
				<SuggestItem />
				<SuggestItem />
			</S.FlexBox>
		</S.Box>
		</S.CampaginBox>

	);
};
export default SuggestItemFlex;
