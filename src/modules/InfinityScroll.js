// import React, { useState, useCallback } from 'react';
// import { requestApiWithAccessToken } from '../APIrequest';

// const InfinityScroll = (list, useGood) => {
// 	const dispatch = useDispatch();
// 	const [length, setLength] = useState({ start: 0, count: 6 });
	
// 	useEffect(() => {
// 		if (length.start === 0) getData();
// 	}, []);

// 	useEffect(() => {
// 		const user_uuidList = list.map((ele) => ele.user_uuid);
// 		if (user_uuidList.length > 0) {
// 			requestApiWithAccessToken(
// 				'/v1/users/with-uuids',
// 				{ user_uuids: user_uuidList },
// 				{},
// 				'post',
// 			).then((res) => {
// 				useGood
// 					? dispatch(setUserInfo(res.data.user_informs)) //
// 					: dispatch(getCertifyPerson(res.data.user_informs)); //
// 			});
// 		}
// 	}, [list, length]);

// 	const getData = useCallback(async () => {
// 		const res = await axios.get(
// 			'http://52.79.186.241/v1/campaigns/sorted-by/famous', //url ㅇ나겹치고
// 			{
// 				headers: { Authorization: localStorage.getItem('access_token') },
// 				params: { start: length.start, count: length.count, state: 'pending' },
// 			},
// 		);
// 		dispatch(setList(res.data.campaigns)); //action함수 안ㄱ벼치고
// 	}, [length]);

// 	export const handleScroll = useCallback(
// 		(e) => {
// 			let scrollHeight = Math.max(e.target.scrollHeight, e.target.scrollHeight);
// 			let scrollTop = Math.max(e.target.scrollTop, e.target.scrollTop);
// 			let clientHeight = e.target.clientHeight;
// 			if (Math.ceil(scrollTop) + clientHeight === scrollHeight) {
// 				setLength((prev) => ({
// 					...prev,
// 					start: prev.start + 6,
// 					count: prev.count + 6,
// 				}));
// 				getData();
// 			}
// 		},
// 		[length],
// 	);
// };

// export default InfinityScroll;
