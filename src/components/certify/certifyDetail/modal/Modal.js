import React, { useCallback } from 'react';
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
                    console.log(res.data)
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
                    console.log(res);
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
			<S.File
				href={`http://campaignshare.s3.ap-northeast-2.amazonaws.com/${evidence_uri}`}
				download="haha">
				{evidence_uri}
			</S.File>
			<S.ButtonBox>
				<S.Button onClick={checkCertify} id="approve">
					수락
				</S.Button>
				<S.Button onClick={checkCertify} id="reject">
					거절
				</S.Button>
			</S.ButtonBox>
		</S.Container>
	);
};
export default Modal;
