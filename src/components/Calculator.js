import React, { useState } from 'react';
import '../components/Calculator.css';
const Calculator = () => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState(0);
    const [showExpression, setShowExpression] = useState(false);

    const handleOperation = (val) => {
      
        setExpression(expression + val);
        console.log(expression);
        setShowExpression(true);        
    }
    const getResults = () => {
        console.log("res",expression);
        setShowExpression(false);
        setResult(eval(expression));
    }
    const resetCalc = () => {
        setExpression('');
        setResult(0)
    }
    const handleBackSpace = () =>{
        setExpression(expression.slice(0,-1));
    }
    return (
        <section className="wrapper">
            <article className="innerWrapper">
                <div className="results">                    
                   { showExpression && <span>{expression}</span> } 
                   { !showExpression && <span>{result}</span> }   

                </div>
                <div className="values bg-white">
                    <div className="controls">
                        <span onClick={resetCalc}>C</span>
                        <span onClick={()=> handleBackSpace()}>Back</span>
                        <span onClick={()=> handleOperation("%")}>%</span>
                        <span onClick={ ()=> handleOperation("/")}>/</span>
                    </div>
                    <div className="controls-inner">
                        <div className="numbers">
                            <span onClick={()=>handleOperation(9)}>9</span>
                            <span onClick={()=>handleOperation(8)}>8</span>
                            <span onClick={()=>handleOperation(7)}>7</span>
                            <span onClick={()=>handleOperation(6)}>6</span>
                            <span onClick={()=>handleOperation(5)}>5</span>
                            <span onClick={()=>handleOperation(4)}>4</span>
                            <span onClick={()=>handleOperation(3)}>3</span>
                            <span onClick={()=>handleOperation(2)}>2</span>
                            <span onClick={()=>handleOperation(1)}>1</span>
                        </div>
                        <div className="rightControls">
                            <span onClick={()=>handleOperation("*")}>*</span>
                            <span onClick={()=>handleOperation("-")}>-</span>
                            <span onClick={()=>handleOperation("+")}>+</span>
                        </div>
                    </div>
                    <div className="controls-footer">
                        <span onClick={()=>handleOperation(0)}>0</span>
                        <span onClick={()=>handleOperation(".")}>.</span>
                        <span className="equals" onClick={()=>getResults("=")}>=</span>
                    </div>
                </div>
            </article>
        </section>
    )
}
export default Calculator;