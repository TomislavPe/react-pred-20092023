import "./App.css";

function App() {
    const niz = ["jedan", "dva", "tri"];

    return (
        <>
            {niz.map((stringBroj, index) => (
                <li key={index}>{stringBroj}</li>
            ))}
        </>
    );
}

export default App;
