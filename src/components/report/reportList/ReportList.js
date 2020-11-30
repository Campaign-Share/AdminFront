import React, { useEffect, useState } from 'react';
import ReportModal from '../reportModal/ReportModal';
import * as S from './style';
import { useSelector } from 'react-redux';
import { requestApiWithAccessToken } from '../../../APIrequest';
const ReportList = ({ modalOn, element, reportCampaginInfo, nick_name }) => {
	const { reportOnModal } = useSelector((store) => store.reportReducer);
	const [campaginInfo, setCampaginInfo] = useState(reportCampaginInfo);
	return (
		<>
			{reportOnModal && <ReportModal />}
			{campaginInfo && (
	
					<S.Item //리스트 리덕스에 저장하는 방법 (배열? 배열에 action발생하면 concat?)
						onClick={() => {
							modalOn({
								field: element.field,
								userName: element.user_name,
								title: element.campaign_title,
								reason: element.reason,
								post_uri: campaginInfo.post_uri,
								agree_number: campaginInfo.agree_number,
								disagree_number: campaginInfo.disagree_number,
								sub_title: campaginInfo.sub_title,
								introduction: campaginInfo.introduction,
								nick_name: nick_name,
								report_uuid: element.report_uuid,
							}); //클릭시 매개변수로 캠페인 정보를 넘겨줌
						}}>
						<S.Element>{element.campaign_title}</S.Element>
						<S.Element>{element.user_name}</S.Element>
						<S.Element>{element.field}</S.Element>
						<S.Element>{element.reason}</S.Element>
					</S.Item>
			
			)}
		</>
	);
};
export default ReportList;
