import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
`;
export const ModalBackground = styled.div`
  background-color: rgb(43, 40, 40, 0.5);
  position: fixed;
  z-index:3;
  width: 100vw;
  height: 100vh;
`

export const ReportContainer = styled.div`
	padding-left: 300px;

	flex: 1;
	background-color: #c2d5cc;
`;
export const MarginContainer = styled.div`
	width: 92%;

	margin: 0 auto;
`;
export const TitleNav = styled.div`
	display: flex;
	width: 100%;
	margin-top: 4%;
	height: 40px;
	border-radius: 2rem;
	background-color: #8cb1a0;

	justify-content: space-around;
`;
export const Element = styled.div`
	width: 10%;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;
