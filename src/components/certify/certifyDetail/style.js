import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
    height:100vh;
    background-color:#C2D5CC;
`;
export const DetailContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-left: 300px;
`;

export const Box = styled.div`
	background-color: white;
	height: 80vh;
	width: 70vw;
    display:flex;
	border: 1px solid #707070;
`;
export  const Line = styled.div`
    width:1px;
    height:90%;
    background-color:#707070;
    display:flex;
    align-items:center;
    margin-top:3%;
`
export const ModalBackground = styled.div`
     background-color: rgb(43, 40, 40, 0.5);
  position: fixed;

  z-index:3;
  width: 100vw;
  height: 100vh;
    
`