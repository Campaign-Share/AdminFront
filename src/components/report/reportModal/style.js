import styled from 'styled-components';

export const ModalContainer = styled.div`
	background-color: white;
	width: 40vw;
	height: 75vh;
	position: absolute;
	z-index: 3;
	right: 28%;
	top: 11%;
`;
export const Title = styled.div`
	width: 100%;
	text-align: center;
	font-size: 28px;
	font-weight: 900;
	color: #ff1e1e;
	margin-top: 10%;
`;
export const InfoBox = styled.div`
	width: 100%;
	margin-top: 20px;

	display: flex;
	justify-content: space-between;
`;
export const InfoItem = styled.div`
	color: black;
	font-size: 25px;
	width: 40%;
	text-align: center;
`;
export const MarginItem = styled.div`
	width: 20%;
`;
export const Discription = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 35%;
`;
export const Link = styled.div`
	color: #9dc3c1;
	font-size: 20px;
	height: 30px;
	cursor: pointer;
`;
export const DiscripText = styled.div`
	font-size: 25px;
`;
export const TailBox = styled.div`
	display: flex;
	width: 80%;
	margin: 0 auto;
	margin-top: 100px;
	height: 50px;
	justify-content: space-around;
`;
export const Button = styled.div`
	background-color: #9dc3c1;
	cursor: pointer;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90px;
	outline: none;
	height: 40px;
	font-weight: bold;
`;
export const Placeholder = styled.div`
	color: #acacac;
    display:flex;
    justify-content:flex-end;
    margin-top:30px;
    margin-right:5px;
`;
