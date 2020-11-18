import React, { useEffect, useState } from 'react';
import * as S from './style';
import SideBar from '../Navigation/sideBar/SideBar';
import { useSelector } from 'react-redux';
import ReportList from './reportList/ReportList';
import ReportModal from './reportModal/ReportModal';
import { requestApiWithAccessToken } from '../../APIrequest';
const Report = ({ modalOn }) => {
	const { reportOnModal, reportList } = useSelector(
		(store) => store.reportReducer,
	);
	const [reportCampaginList, setReportCampaignList] = useState([]);
	const [userDataList, setUserDataList] = useState([]);
	useEffect(() => {
		const CampaginList = reportList.map((ele) => ele.target_uuid);
		if (CampaginList.length > 0) {
			try {
				(async () => {
					const campaignRes = await requestApiWithAccessToken(
						'/v1/campaigns/with-uuids',
						{ campaign_uuids: reportList.map((ele) => ele.target_uuid) },
						{},
						'post',
					);
					setReportCampaignList(campaignRes.data.campaigns);
					const userRes = await requestApiWithAccessToken(
						`/v1/users/with-uuids`,
						{
							user_uuids: campaignRes.data.campaigns.map(
								(ele) => ele.user_uuid,
							),
						},
						{},
						'post',
					);

					setUserDataList(userRes.data.user_informs);
				})();
			} catch (err) {
				console.log(err);
			}
		}
	}, [reportList]);
	return (
		<S.Container>
			{reportOnModal && <S.ModalBackground onClick={modalOn} />}
			<SideBar num={1}></SideBar>
			<S.ReportContainer>
				<S.MarginContainer>
					<S.TitleNav>
						<S.Element>캠페인 제목</S.Element>
						<S.Element>신고자</S.Element>
						<S.Element>분야</S.Element>
						<S.Element>사유</S.Element>
					</S.TitleNav>
					{reportCampaginList.length > 0 &&
						reportList.length > 0 &&
						userDataList.length > 0 &&
						reportList.map((element, index) => (
							<ReportList
								modalOn={modalOn}
								element={element}
								reportCampaginInfo={reportCampaginList[index]}
								nick_name={userDataList[index].nick_name}
							/>
						))}
				</S.MarginContainer>
			</S.ReportContainer>
		</S.Container>
	);
};
export default Report;
