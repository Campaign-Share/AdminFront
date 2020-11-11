import styled from 'styled-components';

export const ItemBox = styled.div`
	padding-top: 10px;
	width: 80;
	height: 50px;
	margin-top: 30px;
	display: flex;
	width:180px;
	cursor:pointer;
	justify-content:center;
	align-items:center;
`;
export const ItemText = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	font-size:20px;
	color: ${props=>props.color};
`;
