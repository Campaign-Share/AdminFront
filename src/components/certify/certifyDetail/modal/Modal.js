import React, { useCallback, useState } from 'react';
import * as S from './style';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestApiWithAccessToken } from '../../../../APIrequest';
const Modal = () => {
	const {
		campaign_title,
		user_name,
		introduction,
		evidence_uri,
		participation_uuid,
	} = useSelector((store) => store.CertifyReducer.modalData);
	const [onClicked, setOnClicked] = useState('#9DC3C1');
	const onImgOpen = useCallback(() => {
		window.open(
			`http://campaignshare.s3.ap-northeast-2.amazonaws.com/${evidence_uri}`,
		);
	});
	const checkCertify = useCallback((e) => {
		(async () => {
			if (e.target.id === 'approve') {
				try {
					const res = await requestApiWithAccessToken(
						`/v1/participations/uuid/${participation_uuid}/actions/approve`,
						{},
						{},
						'post',
					);
					if (res.status === 200) {
						alert('수락되었습니다.');
						setOnClicked('#808B8B');
					}
				} catch (err) {
					console.log(err);
				}
			} else {
				try {
					const res = await requestApiWithAccessToken(
						`/v1/participations/uuid/${participation_uuid}/actions/reject`,
						{},
						{},
						'post',
					);
					if (res.status === 200) {
						alert('수락되었습니다.');
						setOnClicked('#808B8B');
					}
				} catch (err) {
					console.log(err);
				}
			}
		})();
	}, []);
	return (
		<S.Container>
			<S.Title>{campaign_title}</S.Title>
			<S.Name>{user_name}</S.Name>
			<S.Discription>{introduction}</S.Discription>
			<S.File onClick={onImgOpen}>{evidence_uri}</S.File>
			<S.ButtonBox>
				<S.Button onClick={checkCertify} id="approve" color={onClicked}>
					수락
				</S.Button>
				<S.Button onClick={checkCertify} id="reject" color={onClicked}>
					거절
				</S.Button>
			</S.ButtonBox>
		</S.Container>
	);
};
export default Modal;
