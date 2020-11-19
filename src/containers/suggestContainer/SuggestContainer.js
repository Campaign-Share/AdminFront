import React, { useCallback, useEffect } from 'react';
import Suggest from '../../components/suggest/Suggest';
import { useSelector, useDispatch } from 'react-redux';
import { setList } from '../../modules/SuggestItemReducer';
import axios from 'axios';

const SuggestContainer = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		(async () => {
			const res = await axios.get(
				'http://15.164.206.37:80/v1/campaigns/sorted-by/famous',
				{
					headers: { Authorization: localStorage.getItem('access_token') },
					params: { start: 0, count: 50, state:'pending' },
				},
			);
			dispatch(setList(res.data.campaigns));
		})();
	}, []);
	const {list} = useSelector(store=> store.suggestReducer)
	return <Suggest list={list}></Suggest>;
};
export default SuggestContainer;
