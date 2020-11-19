import React, { useEffect } from 'react';
import SuggestItem from '../suggestItem/SuggestItem';
import { useSelector, useDispatch } from 'react-redux';
import { requestApiWithAccessToken } from '../../../APIrequest';
import { setUserInfo } from '../../../modules/CampaginInfoReducer';
import { getCertifyPerson } from '../../../modules/CertifyReducer';
import axios from 'axios';
import * as S from './style';

const SuggestItemFlex = ({ list, useGood }) => {
	const dispatch = useDispatch();
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
	}, [list]);

	const { nick_name } = useSelector((store) =>
		useGood ? store.CampaginInfoReducer : store.CertifyReducer,
	);

	return (
		<S.CampaginBox>
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
								nick_name={nick_name[index].nick_name}
							/>
						))}
				</S.FlexBox>
			</S.Box>
		</S.CampaginBox>
	);
};
export default SuggestItemFlex;
