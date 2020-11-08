import React from 'react';
import * as S from './style.js';
const ItemList = [
	{ text: '제안된 캠페인' },
	{
		text: '신고된 캠페인',
	},
	{ text: '참여 인증' },
];
const SideBarList = () => {
	return (
		<>
			{ItemList.map((item) => {
				return (
					<S.ItemBox activeImg={item.activeImg}>
						<S.ItemText>{item.text}</S.ItemText>
					</S.ItemBox>
				);
			})}
		</>
	);
};
export default SideBarList;
