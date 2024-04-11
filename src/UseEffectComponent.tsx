import { useState } from "react";

function UseEffectComponent() {

    type dataType = { 
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }

    // UseEffect is useful for executing code which is not directly rendering jsx, like fetching data

    const [data, setData] = useState<dataType>();

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/' + randomInteger)
        console.log('fetched with id ' + randomInteger);
        const json = await response.json();
        setData(json);
    }

    function generateRandomNumner(min: number, max:number) {
        return Math.floor(Math.random() * (max - min + 1) + min );
    }

    const randomInteger = generateRandomNumner(1, 99);

    return (
        <>
        <h3>UseEffect-Hook</h3>
        <p className="infotext">UseEffect is useful for executing code which is not directly rendering jsx, like fetching data</p>
        <button onClick={fetchData}>Fetch Data</button>
        <p>userId: {data?.userId} <br /> id: {data?.id} <br /> title: {data?.title} <br /> completed {String(data?.completed)}</p>
        </>
    )
}

export default UseEffectComponent;