import styled from 'styled-components';

export const Main = styled.div`
width: 100%;
height: 100vh;
background-color: aliceblue;

`
export const Container = styled.div`
width: 80%;
height: 100vh;
margin: 0 auto;
background-color: aliceblue;
`
export const Title = styled.div`
font-size: 30px;
color: coral;
text-align: center;
padding: 30px;
`

export const Board = styled.div`
width: 80%;
margin: 0 auto;
padding: 50px 0 0;
display: flex;
justify-content: space-between;
align-items: center;
`
export const Button = styled.button`
padding: 10px;
background-color: lightcoral;
font-size: 20px;
outline: none;
border: none;
position: absolute;
top:85px;
left:50%;
transform: translateX(-50%);
cursor: pointer;
display: block;
border-radius: 8px;
transition: all 0.3s linear;
:active { 
    transform:  translateX(-50%) scale(0.9);
}
`

export const Modal = styled.div`
display: block;
width: 240px;
height: 240px;
background-color: lightgrey;
position: absolute;
left: 50%;
top:150px;
transform: translateX(-50%);
display: ${({display})=>display? 'block': 'none'};
border-radius: 8px;
cursor: pointer;
`

Board.Count = styled.div`
width: 180px;
height: 180px;
border-radius: 50%;
background-color: crimson;
font-size: 24px;
display: flex;
justify-content: center;
align-items: center;
color:cyan;
` 

Board.Item = styled.i`
cursor: pointer;
padding: 40px 30px ;
font-size: 130px;
`

Modal.Text = styled.h1`
text-align: center;
font-size: 30px;
`
Modal.I = styled.i`
text-align: center;
font-size: 95px;
margin-left:50%;
transform: translateX(-50%);
`