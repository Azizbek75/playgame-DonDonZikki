import React, { useContext, useState } from 'react';
import { Main,Container,Title,Board,Modal,Button} from './Style'
import {DATA} from '../Context/Context'

const Game = () => {

    const [data] = useContext(DATA);
    const [youScore,setYouScore] = useState(0);
    const [compyuterScore,setComyuterScore] = useState(0);
    const [display,setDisplay] = useState(false);
    const [answer,setAnswer] = useState('');

    const hindleClick = (value) => {

        const compyuterChoose = Math.floor(Math.random()*3+1);
        console.log(value.id,'you');
        console.log(compyuterChoose,'compyuter');

      if(!display) {
        if((value.id === 1 && compyuterChoose===2) 
        || (value.id === 2 && compyuterChoose === 3 ) || 
        (value.id === 3 && compyuterChoose === 1)) {
             if(compyuterChoose===2){
                 setAnswer({name:'You Lose',class:data[1].class,color:'red'})
             }else if(compyuterChoose===3) {
                 setAnswer({name:'You Lose',class:data[2].class,color:'red'})
             }else {
                 setAnswer({name:'You Lose',class:data[0].class,color:'red'})
             }
             setComyuterScore(compyuterScore+1);
         }else if ((value.id === 2 && compyuterChoose === 1) || 
         (value.id === 3 && compyuterChoose === 2 ) ||
          (value.id === 1 && compyuterChoose === 3)) {
            if(compyuterChoose===1){
                setAnswer({name:'You Win',class:data[0].class,color:'green'})
            }else if(compyuterChoose===2) {
                setAnswer({name:'You Win',class:data[1].class,color:'green'})
            }else {
                setAnswer({name:'You Win',class:data[2].class,color:'green'})
            }
             setYouScore(youScore+1);
         }else {
                setYouScore(youScore+1);
                setComyuterScore(compyuterScore+1);    
            setAnswer({name:'Draw',class:value.class});
                
         }
         setDisplay(true);
      }else {
      }  
    }

    const startGame = () => {
        setYouScore(0);
        setComyuterScore(0);
        setAnswer('');
        setDisplay(false);
    }



    return (
        <Main>
            <Container>
                <Title>
                    Play The Game
                    </Title>
                    {
                       ( youScore!== 0 || compyuterScore!==0) && <Button onClick={startGame}>Start Game</Button>
                    }
                    <Board>
                        <Board.Count>Preson:{youScore} </Board.Count>
                        <Modal onClick={()=>setDisplay(false)} display={display}>
                            <Modal.Text style={{color:answer.color}}>{answer.name}</Modal.Text>
                            <Modal.I className={answer.class}></Modal.I>
                        </Modal>
                        <Board.Count>Compyuter:{compyuterScore}</Board.Count>
                    </Board>
                    <Board>
                        {
                            data.map(value=>{
                                return <Board.Item key={value.id} className={value.class} onClick={()=>hindleClick(value)}></Board.Item>
                            })
                        }
                    </Board>
              
            </Container>
        </Main>
        
    );
};

export default Game;