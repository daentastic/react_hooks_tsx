import { useState } from "react";

function UseStateComponent() {

    // useState saves statas of variables

    const [counter, setCounter] = useState(0);

    // considers previous value to increase value. Safe method during parallel updates
    const handleIncrease = () => {
        setCounter((currentValue) => {return currentValue +1})
    }

    
    // straight decrease of counter by one. Working but unsafe for parallel updates
    const handleDecrease = () => {
        setCounter(counter - 1);
    }


    return (
        <>
    <h3>UseState-Hook</h3>
    <p className="infotext">UseState saves statas of variables</p>
    <p>Counter: {counter}</p>
    <button onClick={handleIncrease}>Increase</button>
    <button onClick={handleDecrease}>Decrease</button>
    </>
    )
}

export default UseStateComponent;