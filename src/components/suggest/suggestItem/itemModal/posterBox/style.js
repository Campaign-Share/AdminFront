import styled from 'styled-components';


export const PosterBox = styled.div`
	width: 40%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const PosterMargin = styled.div`
	height: 85%;
	width: 75%;

`;
export const PosterImg = styled.img`
	width: 100%;
	height: 90%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;
export const GoodBox = styled.div`
	margin: 0 auto;
	width: 100%;
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
    margin-top:20px;
`;
export const Good = styled.img`
	width: 9%;
	height: 30px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	display: flex;
	padding-right: 3px;
	justify-content: center;
	align-items: center;
`;
export const Bad = styled.img`
		width: 9%;
	height: 30px;
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
	height: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const GoodArea = styled.div`
	width: ${(props) => {
		if (props.width) {
			return `${props.width}%`;
		} else return '0%';

	}};
	background-color: #bed9d7;
	border-radius: ${(props) =>
		props.width === 100 ? '2rem 2rem 2rem 2rem' : '2rem 0rem 0rem 2rem'};
        height:100%;
`;
export const BadArea = styled.div`
	display: flex;
	justify-content: flex-end;
	flex: 1;
	min-width: 0px;
	border-radius: 0rem 2rem 2rem 0rem;
    height:100%;
`;
export const GoodText = styled.div`
	padding-left: 15px;
    font-size:18px;
`;
export const BadText = styled.div`
	padding-right: 15px;
    font-size:18px;
	border-radius: 0rem 2rem 2rem 0rem;
`;
