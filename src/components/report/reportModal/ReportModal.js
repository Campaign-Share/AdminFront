import React, { useCallback, useState } from 'react';
import * as S from './style';
import { useSelector, useDispatch } from 'react-redux';
import { transformModal } from '../../../modules/SuggestItemReducer';
import { transReportformModal } from '../../../modules/ReportReducer';
import { useHistory } from 'react-router-dom';
import { requestApiWithAccessToken } from '../../../APIrequest';
const ReportModal = () => {
	const [onClicked, setOnClicked] = useState('#9DC3C1');
	const dispatch = useDispatch();
	const history = useHistory();
	const {
		field,
		userName,
		title,
		reason,
		post_uri,
		agree_number,
		disagree_number,
		sub_title,
		introduction,
		nick_name,
		report_uuid,
	} = useSelector((store) => store.reportReducer.reportModalData);
	const goToCampaginModal = useCallback(() => {
		dispatch(
			transformModal({
				post_uri,
				agree_number,
				disagree_number,
				sub_title,
				introduction,
				nick_name,
			}),
		); //제안된 캠페인 모달 띄우기
		dispatch(transReportformModal()); //신고된 캠페인 모달 닫기
		history.push('./suggest');
	}, []);
	const approveReport = useCallback(async (e) => {
		if (e.target.id === 'approve') {
			try {
				const res = await requestApiWithAccessToken(
					`/v1/reports/uuid/${report_uuid}/actions/approve`,
					{},
					{},
					'post',
				);
				if (res.status === 200) {
					alert('제재되었습니다.');
					setOnClicked('#808B8B');
				} else {
					console.log(res);
					setOnClicked('#808B8B');//1
				}
			} catch (err) {
				console.log(err);
				if (err === 409) {
					alert('이미 검토한 캠페인입니다.');//2
				}
			}
		} else {
			try {
				const res = await requestApiWithAccessToken(
					`/v1/reports/uuid/${report_uuid}/actions/reject`,
					{},
					{},
					'post',
				);
				if (res.status === 200) {
					alert('기각되었습니다.');
					setOnClicked('#808B8B');
				} else {
					console.log(res);
					setOnClicked('#808B8B');//3
				}
				console.log(res);
			} catch (err) {
				console.log(err);
				if (err === 409) {
					alert('이미 검토한 캠페인입니다.');//4
				}
			}
		}
	}, []);
	return (
		<S.ModalContainer>
			<S.Title>Report</S.Title>
			<S.InfoBox>
				<S.InfoItem>{reason}</S.InfoItem>
				<S.MarginItem />
				<S.InfoItem>{userName}</S.InfoItem>
			</S.InfoBox>
			<S.Discription>
				<S.Link onClick={goToCampaginModal}>{title}</S.Link>
				<S.DiscripText>{field}</S.DiscripText>
			</S.Discription>
			<S.TailBox>
				<S.Button id="approve" onClick={approveReport} color={onClicked}>
					제재
				</S.Button>
				<S.Button id="reject" onClick={approveReport} color={onClicked}>
					기각
				</S.Button>
			</S.TailBox>
			<S.Placeholder>자세한 내용은 캠페인 제목을 클릭해 주세요.</S.Placeholder>
		</S.ModalContainer>
	);
};
export default ReportModal;
