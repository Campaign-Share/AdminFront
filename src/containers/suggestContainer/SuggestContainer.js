import React, { useCallback, useEffect, useState } from 'react';
import Suggest from '../../components/suggest/Suggest';
import { useSelector, useDispatch } from 'react-redux';
import { setList } from '../../modules/SuggestItemReducer';
import axios from 'axios';

const SuggestContainer = () => {
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	(async () => {
	// 		const res = await axios.get(
	// 			'http://52.79.186.241/v1/campaigns/sorted-by/famous',
	// 			{
	// 				headers: { Authorization: localStorage.getItem('access_token') },
	// 				params: { start: 0, count: 50, state:'pending' },
	// 			},
	// 		);
	// 		dispatch(setList(res.data.campaigns));
	// 		console.log(document.documentElement.scrollHeight);
	// 		console.log(document.body.scrollHeight);
	// 	})();
	// }, []);

	// useEffect(() => {
	// 	console.log('useEffect호출')

	// }, []);
	const { list } = useSelector((store) => store.suggestReducer);
	return <Suggest list={list}></Suggest>;
};
export default SuggestContainer;
