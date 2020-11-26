import React, { useEffect } from 'react';
import Report from '../../components/report/Report';
import { transReportformModal , getReportList } from '../../modules/ReportReducer';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
const ReportContainer = () => {
	const dispatch = useDispatch();
	const modalOn = ({ field, userName, title, reason, post_uri,agree_number,disagree_number,sub_title,introduction,nick_name, report_uuid}) => {
		dispatch(transReportformModal({ field, userName, title, reason,  post_uri,agree_number,disagree_number,sub_title,introduction,nick_name ,report_uuid}));
	};
	useEffect(() => {
		(async () => {
			try {
				const res = await axios.get(
					'http://52.79.186.241/v1/reports/sorted-by/create-time',
					{
						headers: { Authorization: localStorage.getItem('access_token') },
						params: { start: 0, count: 50, state: 'pending' },
					},
				);
				dispatch(getReportList(res.data.campaign_reports));
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);
	return <Report modalOn={modalOn} />;
};
export default ReportContainer;
