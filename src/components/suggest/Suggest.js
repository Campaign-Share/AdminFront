import React from 'react';
import * as S from './style';
import SuggestItem from './suggestItem/SuggestItem';
import SuggestItemFlex from './suggestItemFlex/SuggestItemFlex';
import SideBar from '../Navigation/sideBar/SideBar';
const Suggest = () => {
	return (
		<S.Body>
			<SideBar></SideBar>
			<S.CampaginBox>
				<SuggestItemFlex/>
				
			</S.CampaginBox>
		</S.Body>
	);
};
export default Suggest;
