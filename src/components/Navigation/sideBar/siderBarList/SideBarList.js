import React from 'react';
import * as S from './style.js';
const ItemList = [
	{ text: '제안된 캠페인' },
	{
		text: '신고된 캠페인',
	},
	{ text: '참여 인증' },
];
const SideBarList = ({num}) => {
	return (
		<>
			{ItemList.map((item, index) => {
				return (
					<S.ItemBox activeImg={item.activeImg}>
						{index === num ? <S.ItemText color={'#707070'}>{item.text}</S.ItemText> : <S.ItemText color={'#FFFFFF'}>{item.text}</S.ItemText>}
					</S.ItemBox>
				);
			})}
		</>
	);
};
export default SideBarList;
