import React, { useEffect } from 'react';
import SuggestItem from '../suggestItem/SuggestItem';
import { useSelector, useDispatch } from 'react-redux';
import { requestApiWithAccessToken } from '../../../APIrequest';
import {setUserInfo} from '../../../modules/CampaginInfoReducer'
import axios from 'axios';
import * as S from './style';

const SuggestItemFlex = ({ list }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		const user_uuidList = list.map((ele, index) => ele.user_uuid);
		if (user_uuidList.length > 0) {
			requestApiWithAccessToken(
				'/v1/users/with-uuids',
				{ user_uuids: user_uuidList },
				{},
				'post',
			).then((res) => dispatch(setUserInfo(res.data.user_informs)));
		}
	}, [list]);
	const {nick_name} = useSelector(store => store.CampaginInfoReducer);

	return (
		<S.CampaginBox>
			<S.Box>
				<S.FlexBox>
					{nick_name[0] && list.map((element, index) => (//여기서 맵돌리면서 캠페인 하나씩 생성
						<SuggestItem useGood={true} listItem={element} key={index} nick_name={nick_name[index].nick_name}/>
					))}
				</S.FlexBox>
			</S.Box>
		</S.CampaginBox>
	);
};
export default SuggestItemFlex;
