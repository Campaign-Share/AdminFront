import React, { useEffect } from 'react';
import CertifyDetail from '../../components/certify/certifyDetail/CertifyDetail';
import { requestApiWithAccessToken } from '../../APIrequest';
import {
	getCertifyCampagin,
	getCertifylist,
} from '../../modules/CertifyReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const CertifyDetailContainer = ({ match }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		(async () => {
			const { data } = await requestApiWithAccessToken(
				`/v1/campaigns/uuid/${match.params.campaginUUID}`,
				{},
				{},
				'get',
			);

			dispatch(
				getCertifyCampagin({
					title: data.title,
					subTitle: data.sub_title,
					introduction: data.introduction,
					postURI: `https://campaignshare.s3.ap-northeast-2.amazonaws.com/${data.post_uri}`,
				}),
			);
			const res = await axios.get(
				`http://52.79.186.241/v1/campaigns/uuid/${match.params.campaginUUID}/participations`,
				{
					headers: { Authorization: localStorage.getItem('access_token') },
					params: { start: 0, count: 50, state: 'pending' },
				},
			);
			dispatch(getCertifylist(res.data.participations));
		})();
	}, []);
	return <CertifyDetail />;
};
export default CertifyDetailContainer;
