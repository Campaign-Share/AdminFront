import styled from 'styled-components';

export const ItemBox = styled.div`
	background-color: white;
	width: 30%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;
export const MarginItem = styled.div`
	width: 85%;
	height: 93%;
`;
export const Img = styled.img`
	display: block;
	width: 100%;
	height: 75%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;
export const NickName = styled.div`
	font-size: 12px;
	border: none;
	display: inline-block;
	border-bottom: 1px solid #b8d4c8;
`;
export const discriptionBox = styled.div`
	margin-top: 2%;
	height: 10%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const smallTitle = styled.div`
	width: 100%;
	font-size: 13px;
	text-align: center;
	color: #535353;
`;
export const Title = styled.div`
	margin-top: 1%;
	width: 100%;
	text-align: center;
`;
export const GoodBox = styled.div`
	margin: 0 auto;
	width: 90%;
	height: 20px;
	margin-top: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const Good = styled.img`
	width: 8%;
	height: 20px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	display: flex;
	padding-right: 3px;
	justify-content: center;
	align-items: center;
`;
export const Bad = styled.img`
	width: 8%;
	height: 20px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	display: flex;
	padding-left: 3px;
	justify-content: center;
	align-items: center;
`;
export const Graph = styled.div`
	border: none;
	border-radius: 2rem;
	background-color: #e3e3e3;
	width: 80%;
	height: 20px;
	display: flex;

	justify-content: center;
	align-items: center;
`;

export const GoodArea = styled.div`
	width: 50%;
	background-color: #bed9d7;
	border-radius: 2rem 0rem 0rem 2rem;
`;
export const BadArea = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 50%;
	border-radius: 0rem 2rem 2rem 0rem;

`;
export const GoodText = styled.div`
    padding-left:15px;
`;
export const BadText = styled.div`
    padding-right:15px;
`;