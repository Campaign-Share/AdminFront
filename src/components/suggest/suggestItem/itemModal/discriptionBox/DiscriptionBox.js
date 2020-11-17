import React, { useState } from 'react';
import * as S from './style';
import { useSelector } from 'react-redux';
import { requestApiWithAccessToken } from '../../../../../APIrequest';
const DiscritionBox = () => {
	const {
		nick_name,
		sub_title,
		title,
		introduction,
		campaign_uuid,
	} = useSelector((store) => store.suggestReducer.info);
	const [onClicked, setOnClicked] = useState('#9DC3C1');
	const discriminateCampaign = (e) => {
		if (e.target.id === 'approve') {
			try{
				requestApiWithAccessToken(
					`/v1/campaigns/uuid/${campaign_uuid}/actions/approve`,
					{},
					{},
					'post',
				).then((res) => {
					if (res.status === 200) {
						alert('수락되었습니다.');
						setOnClicked('#808B8B');
					} 
					else {
						console.log(res);
						setOnClicked('#808B8B');
					}
				});
			}catch(err){
				console.log("asddas")
				console.log(err);
			}
		} else {
			requestApiWithAccessToken(
				`/v1/campaigns/uuid/${campaign_uuid}/actions/reject`,
				{},
				{},
				'post',
			).then((res) => {
				if (res.status === 200) {
					alert('거절되었습니다.');
				} else {
					console.log(res);
				}
			});
		}
	};
	return (
		<S.DisBox>
			<S.UserName>{nick_name}</S.UserName>
			<S.TitleBox>
				<S.SmallTitle>{sub_title}</S.SmallTitle>
				<S.Title>{title}</S.Title>
				<S.Discription>{introduction}</S.Discription>
				<S.ButtonBox>
					<S.Button
						onClick={discriminateCampaign}
						id="approve"
						color={onClicked}>
						수락
					</S.Button>
					<S.Button
						onClick={discriminateCampaign}
						id="reject"
						color={onClicked}>
						거절
					</S.Button>
				</S.ButtonBox>
			</S.TitleBox>
		</S.DisBox>
	);
};
export default DiscritionBox;
