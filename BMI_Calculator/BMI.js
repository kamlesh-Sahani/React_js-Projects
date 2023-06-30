    import "./style.css";
    import React, { useState } from "react";

    function BMI() {

        const [hvalue,setHvalue] =useState('');
        const [wvalue,setwvalue] =useState('');
        const [result,setResult]= useState('')
        const height=(event)=>{
            setHvalue(event.target.value);
        }
        const Weight=(event)=>{
            setwvalue(event.target.value);
        }
        const res=()=>{
            var res = (wvalue/(hvalue*hvalue)).toFixed(3);
            setResult(res);
        }
        return (
            <>
                <div className="bmi">
                    <div className="feild">
                    <h1>bmi calcultor</h1>
                    <input type="number" placeholder="Weight in Kg" onChange={Weight}/>
                    <input type="number" placeholder="height in M" onChange={height} />
                    <input type="submit" value="Calculate" onClick={res}/>
                    </div>
                    <div className="result">
                        <h3>Your result</h3>
                        <h1>{result}</h1>
                    </div>
                </div>

            </>
        )
    }

    export default BMI;