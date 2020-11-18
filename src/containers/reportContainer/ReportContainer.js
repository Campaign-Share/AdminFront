import React, { useEffect } from 'react';
import Report from '../../components/report/Report';
import { transformModal, getReportList } from '../../modules/ReportReducer';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
const ReportContainer = () => {
	const dispatch = useDispatch();
	const modalOn = () => {
		dispatch(transformModal());
	};
	useEffect(() => {
		(async () => {
			try {
				const res = await axios.get(
					'http://15.164.206.37:80/v1/reports/sorted-by/create-time',
					{
						headers: { Authorization: localStorage.getItem('access_token') },
						params: { start: 1, count: 50, state: 'pending' },
					},
                );
                dispatch(getReportList(res.data.campaign_reports));
            }
            catch(err){
                console.log(err);
            }
		})();
	}, []);
	return <Report modalOn={modalOn} />;
};
export default ReportContainer;
