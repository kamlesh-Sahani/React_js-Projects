import React, { useState } from 'react';
import styled from 'styled-components';

const Start = () => {
  const ArrayNumber = [1, 2, 3, 4, 5, 6];
  const [Score, setScore] = useState(0);
  const [randNumber, setrandNumber] = useState(4);
  const [DiceBtnIndex, setDiceBtnIndex] = useState();
  const [c, setc] = useState(true);
  const [rule, setrule] = useState(false);

  const getrandNumber = (max, min) => {
    if (DiceBtnIndex !== undefined) {
      setrandNumber(Math.floor(Math.random() * (max - min) + min));

      if (randNumber === DiceBtnIndex) {
        setScore((pre) => pre + randNumber);
      } else {
        setScore((pre) => pre - 2);
      }

      setDiceBtnIndex(undefined);
    } else {
      setc(false);
    }
  };

  const DiceBtn = (value) => {
    setDiceBtnIndex(value);
    setc(true);
  };
  const stylebtn = (value) => {
    if (value === DiceBtnIndex) {
      return {
        backgroundColor: 'black',
        color: 'white',
      };
    }
  };


  const reset = () => {
    setDiceBtnIndex(undefined);
    setScore(0);
    setrandNumber(4);

  }



  const rules = () => {
    setrule((pre) => !pre);
    console.log(rule);
  }
  return (
    <>
      <Container className="container">
        <div className="top">
          <ScoreDiv className="Score">
            <h1>{Score}</h1>
            <p>Total Score</p>
          </ScoreDiv>
          <Button className="btn" check={c}>
            <p>You have not selected any number</p>
            {ArrayNumber.map((value, index) => (
              <button
                key={index}
                onClick={() => DiceBtn(value)}
                style={stylebtn(value)}
              >
                {value}
              </button>
            ))}
          </Button>
        </div>
        <Main className="bottom">
          <img
            src={`dice_${randNumber}.png`}
            alt="Dices"
            onClick={() => getrandNumber(7, 1)}
          />
          <p>Click on Dice to roll</p>
          <button className="unactive" onClick={reset}>Reset Score</button>
          <button className="active" onClick={rules} > Show Rules</button>
        {rule &&
          <Box >
            <h1>How to play dice game</h1>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
          </Box>
}
        </Main>
      </Container>
    </>
  );
};

export default Start;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

const ScoreDiv = styled.div`
  position: absolute;
  top: -30px;
  left: 50px;
  h1 {
    font-size: 100px;
    font-weight: 500;
  }
  p {
    font-size: 24px;
    font-weight: 500;
    margin-top: -40px;
  }
`;

const Button = styled.div`
  position: absolute;
  top: 40px;
  right: 30px;

  button {
    height: 80px;
    width: 80px;
    margin: 0px 20px;
    font-size: 25px;
    font-weight: 600;
    background-color: #fff;
  }
  p {
    position: absolute;
    top:80px;
    font-size: 24px;
    font-weight: 500;
    color: #ff0c0c;
    right: 0;
    display: ${(props) => (props.check ? 'none' : 'block')};
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  p {
    font-size: 24px;
    font-weight: 500;
  }
  button {
    width: 242px;
    height: 44px;
    font-size: 24px;
    font-weight: 600;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid black;
    transition: 0.4s;
    padding: 10px 18px;
  }
  .active {
    background-color: black;
    border: 1px solid #fff;
    color: #fff;
    transition: 0.4s;
    border-radius: 5px;
  }
  .active:hover {
    background-color: #fff;
    border: 1px solid black;
    color: black;
    transition: 0.4s;
    border-radius: 5px;
  }
  .unactive:hover {
    color: gray;
  }
`;

const Box = styled.div`
  position: absolute;
  height: 224px;
  width: 794px;
  background: #fbf1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 1px gray;
  bottom: 20px;
  h1 {
    font-size: 24px;
    font-weight: 700;
    color: black;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
`;