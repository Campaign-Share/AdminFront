import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style.js';
const ItemList = [
	{ text: '제안된 캠페인', path:'/suggest'},
	{
		text: '신고된 캠페인', path:'/report'
	},
	{ text: '참여 인증', path:'/certify'  },
];
const SideBarList = ({num}) => {
	const history = useHistory();
	return (
		<>
			{ItemList.map((item, index) => {
				return (
					<S.ItemBox >
						{index === num ? <S.ItemText color={'#707070'}>{item.text}</S.ItemText> : <S.ItemText color={'#FFFFFF'} onClick={()=>{history.push(item.path)}}>{item.text}</S.ItemText>}
					</S.ItemBox>
				);
			})}
		</>
	);
};
export default SideBarList;
