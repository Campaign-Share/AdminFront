import React, { useEffect } from 'react';
import Certify from '../../components/certify/Certify';
import axios from 'axios';
import { requestApiWithAccessToken } from '../../APIrequest';
import { useDispatch, useSelector } from 'react-redux';
import { transformModal,getCampaginList } from '../../modules/CertifyReducer';
const CertifyContainer = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		(async () => {
			// const res = await requestApiWithAccessToken('/v1/campaigns/sorted-by/famous',{start:1, count:30,state:'approved'},{},)
			const res = await axios.get(
				'http://15.164.206.37:80/v1/campaigns/sorted-by/famous',
				{
					headers: { Authorization: localStorage.getItem('access_token') },
					params: { start: 9, count: 50, state: 'approved' },
				},
			);
			dispatch(getCampaginList(res.data.campaigns));
			
		})();
	}, []);
	return <Certify list={useSelector(store=>store.CertifyReducer.list)}/>;
};
export default CertifyContainer;
