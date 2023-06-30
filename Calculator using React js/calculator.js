import { useState } from 'react';
import './style.css'

function Calculator() {
    const [inputValue, setInputValue] = useState(['0']);
    const [preValue, setpreValue] = useState('');
    let result='';
    const cal = (value) => {
        if (value == '*' || value == '+' ||value=='/' || value == '-') {
            
            switch(value){
                case '*':{
                    setpreValue(preValue+value);
                } 
                case '+': {
                    setpreValue(preValue+value);
                }
                case '-':{
                    setpreValue(preValue+value);
                }
                case '.': {
                    setpreValue(preValue+value);
                }
                case '/': {
                    setpreValue(preValue+value);
                }

            }
        setInputValue('');
        }
        else {
            setInputValue(inputValue + value);
            setpreValue(preValue+value);
            
   
        }

      
    }

    const output=()=>{
        result=parseFloat(eval(preValue)).toFixed(5);
        setInputValue(result);
    }
    const clear=()=>{
        setInputValue('0');
        setpreValue('0');
    }

    const delvalue=()=>{
       const [,...newInput]=inputValue;
       setInputValue(inputValue.slice(0,-1));
       setpreValue(preValue.slice(0,-1));
    }
    return (
        <>
            <div className='calculator-grid'>
                <div className='output'>
                    <div className='previous-operands'>
                        {preValue}
                    </div>
                    <div className='current-operands'>{inputValue}</div>
                </div>
                <div className='btn'>
                    <button className='grid-2 color' onClick={()=>clear()}>AC</button>
                    <button onClick={()=> delvalue()} className="color">DEL</button>
                    <button onClick={() => cal('/')} className="color">/</button>
                    <button onClick={() => cal('1')}>1</button>
                    <button onClick={() => cal('2')}>2</button>
                    <button onClick={() => cal('3')}>3</button>
                    <button onClick={() => cal('*')} className="color">X</button>
                    <button onClick={() => cal('4')}>4</button>
                    <button onClick={() => cal('5')}>5</button>
                    <button onClick={() => cal('6')}>6</button>
                    <button onClick={() => cal('+')} className="color">+</button>
                    <button onClick={() => cal('7')}>7</button>
                    <button onClick={() => cal('8')}>8</button>
                    <button onClick={() => cal('9')}>9</button>
                    <button onClick={() => cal('.')} className="color">.</button>
                    <button onClick={() => cal('-')} className="color">-</button>
                    <button onClick={() => cal('0')}>0</button>
                    <button className='grid-2 color' onClick={()=>output()}>=</button>
                </div>
            </div>
        </>
    )
}

export default Calculator;