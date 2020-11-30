import React, { useEffect, useState, useCallback } from 'react';
import SuggestItem from '../suggestItem/SuggestItem';
import { useSelector, useDispatch } from 'react-redux';
import { requestApiWithAccessToken } from '../../../APIrequest';
import { setUserInfo } from '../../../modules/CampaginInfoReducer';
import {
	getCertifyPerson,
	getCampaginList,
} from '../../../modules/CertifyReducer';
import axios from 'axios';
import * as S from './style';
import { setList } from '../../../modules/SuggestItemReducer';

const SuggestItemFlex = ({ list, useGood }) => {
	const dispatch = useDispatch();
	const [length, setLength] = useState({ start: 0, count: 6 });
	const { nick_name } = useSelector((store) =>
		useGood ? store.CampaginInfoReducer : store.CertifyReducer,
	);
	// console.log(list);
	useEffect(() => {
		if (length.start === 0) getData();
		return () => {
			useGood
				? dispatch(setList({ start: false }))
				: dispatch(getCampaginList({ start: false }));
		};
	}, []);

	useEffect(() => {
		const user_uuidList = list.map((ele, index) => ele.user_uuid);
		if (user_uuidList.length > 0) {
			requestApiWithAccessToken(
				'/v1/users/with-uuids',
				{ user_uuids: user_uuidList },
				{},
				'post',
			).then((res) => {
				useGood
					? dispatch(setUserInfo(res.data.user_informs))
					: dispatch(getCertifyPerson(res.data.user_informs));
			});
		}
	}, [list, length]);

	const getData = useCallback(async () => {
		setLength((prev) => ({
			...prev,
			start: prev.start + 6,
			count: prev.count + 6,
		}));
		const res = await axios.get(
			useGood
				? 'http://52.79.186.241/v1/campaigns/sorted-by/famous'
				: 'http://52.79.186.241/v1/campaigns/sorted-by/pending-participation',
			{
				headers: { Authorization: localStorage.getItem('access_token') },
				params: { start: length.start, count: length.count, state: 'pending' },
			},
		);
		useGood
			? dispatch(setList({ listArr: res.data.campaigns, start: true }))
			: dispatch(getCampaginList({ listArr: res.data.campaigns, start: true }));
	}, [length]);

	const handleScroll = useCallback(
		(e) => {
			const scrollHeight = Math.max(e.target.scrollHeight, e.target.scrollHeight);
			const scrollTop = Math.max(e.target.scrollTop, e.target.scrollTop);
			const clientHeight = e.target.clientHeight;
			if (Math.ceil(scrollTop) + clientHeight === scrollHeight) {
				// setLength((prev) => ({
				// 	...prev,
				// 	start: prev.start + 6,
				// 	count: prev.count + 6,
				// }));
				getData();
			}
		},
		[length],
	);

	return (
		<S.CampaginBox onScroll={handleScroll}>
			<S.Box>
				<S.FlexBox>
					{nick_name[0] &&
						list.map((
							element,
							index, //여기서 맵돌리면서 캠페인 하나씩 생성
						) => (
							<SuggestItem
								useGood={useGood}
								listItem={element}
								key={index}
								nick_name={nick_name[index] && nick_name[index].nick_name}
							/>
						))}
				</S.FlexBox>
			</S.Box>
		</S.CampaginBox>
	);
};
export default SuggestItemFlex;
