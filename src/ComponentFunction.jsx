import { useEffect, useState } from "react";

const ComponentFunction = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Algebra");

    const func = () => {
        console.log("use effect");

        return () => {
            console.log("Function useEffect, clean up")
        };
    };

    useEffect(func,[]);

    useEffect(() => {
        console.log("nesto")
        return () =>{
            console.log("nestane")
        }
    }, [name]);

    return (
        <>
            <div>ComponentFunction</div>
            <div>{count}</div>
            <h3>{name}</h3>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button
                onClick={() => {
                    setCount((count) => count + 1);
                }}
            >
                Change state
            </button>
        </>
    );
};

export default ComponentFunction;
