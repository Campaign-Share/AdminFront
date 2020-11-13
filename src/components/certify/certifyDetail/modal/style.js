import styled from 'styled-components';

export const Container = styled.div`
    width: 39vw;
    height: 70vh;
    background-color: white;
    z-index: 3;
    position: absolute;
    left: 34%;
    bottom: 16%;
`;
export const Title = styled.div`
    width:100%;
    height:15%;
    display:flex;
    justify-content:center;
    align-items:flex-end;
    font-size:20px;
    color:#9DC3C1;
`;
export const Name = styled.div`
margin-top:5%;
    width:90%;
    height:8%;
    display:flex;
    justify-content:flex-end;
    font-size:23px;
    margin-right:20px;
`

export const Discription = styled.div`
padding:8px;
    height:35%;
    width:75%;
    margin:0 auto;
    overflow:auto;
    border:1px solid #A8A8A8;
`
export const File = styled.div`
height:5%;
padding-top:8px;
padding-left:8px;
padding-right:8px;
     width:75%;
    margin:0 auto;
    border:1px solid #A8A8A8;
    margin-top:3%;
`
export const ButtonBox = styled.div`
    width:60%;
    height:10%;
    display:flex;
    margin:0 auto;
    justify-content:space-around;
    margin-top:5%;
`
export const Button = styled.div`
    background-color:#9DC3C1;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    width:80px;
    height:40px;
    font-size:17px;
`;