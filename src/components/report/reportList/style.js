import styled from 'styled-components';

export const Item = styled.div`
    background-color:white;
    display:flex;
    width:100%;
    height:80px;
    border-radius:2rem;
    justify-content:space-around;
    margin-top:10px;
    cursor: pointer;
    margin-bottom:20px;
    align-items:center;
`;  
export const Element = styled.div`
        width: 20%;
    height: 80px;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    text-overflow: ellipsis;
    margin-top: 54px;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    font-size: 15px;
`