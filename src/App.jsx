import ComponentClass from "./ComponentClass";
import ComponentFunction from "./ComponentFunction";
import "./App.css";
import { useState } from "react";

function App() {
    const [isCompVisible, setIsCompVisible] = useState(true);

    const handleToggleComponent = () => {
        setIsCompVisible((prev) => !prev);
    };

    return (
        <>
            {isCompVisible ? <ComponentClass /> : <ComponentFunction />}
            <button onClick={handleToggleComponent}>Toggle Component</button>
        </>
    );
}

export default App;
