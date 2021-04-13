import React, { useState } from 'react';
export default Calculator = () => {
    const [frstValue, setfrstValue] = useState(0);
    const [nextValue, setnextValue] = useState('');
    const [operator, setOperator] = useState(null);
    const [result, setResult] = useState(0);
    const performOperation = (operator) => {
        if (operator === '+') {
            setResult(parseInt(nextValue) + parseInt(frstValue));
        } else if (operator === '-') {
            setResult(parseInt(nextValue) - parseInt(frstValue));
        } else if (operator === '*') {
            setResult(parseInt(nextValue) * parseInt(frstValue));
        } else if (operator === '/') {
            setResult(parseInt(nextValue) / parseInt(frstValue));
        } else if (operator === '%') {
            setResult(parseInt(nextValue) % parseInt(frstValue));
        }
    }
    const addition = () => {
        console.log(frstValue);
        setnextValue(frstValue);
        setfrstValue("");

        if (frstValue && operator && nextValue) {
            performOperation(operator);
        }

    }
    const resetCalc = () => {
        setnextValue("0");
        setfrstValue(0);
        setResult('');
    };

    const handleOperation = (val) => {
        if (Number.isInteger(parseInt(val.target.innerHTML))) {
            setfrstValue((frstValue) === 0 ? String(val.target.innerHTML) : frstValue + val.target.innerHTML)

            console.log('frstValue', frstValue);
        } else {
            console.log(val.target.innerHTML);
            setOperator(val.target.innerHTML);
            addition()
        }
    }
    return (
        <section className="wrapper">
            <article className="innerWrapper">
                <div className="results">
                    {/* <input type="text" value={display} /> */}
                    {frstValue}

                    {result}

                </div>
                <div className="values bg-white">
                    <div className="controls">
                        <span onClick={resetCalc}>C</span>
                        <span>Back</span>
                        <span onClick={handleOperation}>%</span>
                        <span onClick={handleOperation}>/</span>
                    </div>
                    <div className="controls-inner">
                        <div className="numbers">
                            <span onClick={handleOperation}>9</span>
                            <span onClick={handleOperation}>8</span>
                            <span onClick={handleOperation}>7</span>
                            <span onClick={handleOperation}>6</span>
                            <span onClick={handleOperation}>5</span>
                            <span onClick={handleOperation}>4</span>
                            <span onClick={handleOperation}>3</span>
                            <span onClick={handleOperation}>2</span>
                            <span onClick={handleOperation}>1</span>
                        </div>
                        <div className="rightControls">
                            <span onClick={handleOperation}>*</span>
                            <span onClick={handleOperation}>-</span>
                            <span onClick={handleOperation}>+</span>
                        </div>
                    </div>
                    <div className="controls-footer">
                        <span>0</span>
                        <span>.</span>
                        <span className="equals" onClick={handleOperation}>=</span>
                    </div>

                    {/* <div className="numbers">
                         <span>9</span>
                    <span>8</span>
                    <span>7</span>
                    <span>6</span>
                    <span>5</span>
                    <span>4</span>
                    <span>3</span>
                    <span>2</span>
                    <span>1</span>
                    </div>
                    <div className="controls">
                        <span>C</span>
                        <span>C</span>
                        <span>%</span>
                        <span>/</span>
                    </div>
                    */}

                </div>
            </article>
        </section>
    )
}
