import { useMemo, useState } from "react";

function UseMemoComponent() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1);
    }

    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    const resetButton = () => {
        setCounterOne(0);
        setCounterTwo(0);
    }

    const additionWithMemo = useMemo(() => {
        console.log("Triggered UseMemo!")
        return counterOne + counterTwo;
    }, [counterOne, counterTwo])


    return (
    <>
    <h3>UseMemo-Hook</h3>
    <p className="infotext">Memorizes reults from ressource intense functions <br />Takes in two arguments: <br />1: Function to calculate Value 2: Array of values to triggert recalculation</p>
    <p>Counter One: {counterOne}</p>
    <p>Counter Two: {counterTwo}</p>
    <p>One + Two: {additionWithMemo}</p>
    <button onClick={incrementCounterOne}>One +</button>
    <button onClick={incrementCounterTwo}>Two +</button>
    <button onClick={resetButton}>Reset</button>
    </>
    )
}

export default UseMemoComponent;