import React, { useCallback } from 'react';
import * as S from './style';
import SuggestItemFlex from './suggestItemFlex/SuggestItemFlex';
import SideBar from '../Navigation/sideBar/SideBar';
import { transformModal } from '../../modules/SuggestItemReducer';
import { useSelector, useDispatch } from 'react-redux';

import ItemModal from './suggestItem/itemModal/ItemModal';
const Suggest = ({list}) => {
	const modal = useSelector((store) => store.suggestReducer.suggestOnModal);
	const dispatch = useDispatch();
	const modalOn = useCallback(() => {
		dispatch(transformModal());
	}, []);
	return (
		<S.Body>
			<SideBar num={0}></SideBar>
			{modal && <S.ModalBackGround onClick={modalOn} />}

			<SuggestItemFlex list={list} useGood={true}/>

			{modal && <ItemModal />}
		</S.Body>
	);
};
export default Suggest;
