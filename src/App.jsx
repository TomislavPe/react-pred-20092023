import "./App.css";
import { useState } from "react";
import { UserFunction } from "./user";

function App() {
    const initialUsers = [
        { id: 1, name: "Ivan", years: 30 },
        { id: 2, name: "Marko", years: 35 },
        { id: 3, name: "Ana", years: 25 },
    ];

    const [users, setUsers] = useState(initialUsers);

    const tekst = "Proizvoljan tekst";

    const uvecajGodine = () => {
        setUsers((prevState) => {
            const updatedUsers = prevState.map((user) => {
                return { ...user, years: user.years + 1 };
            });
            return updatedUsers;
        });
    };

    const handleChangeName = (event, index) => {
        const tempUsers = [...users];
        const newUser = tempUsers.find((user) => user.id == index);
        newUser.name = event.target.value;
        setUsers(tempUsers);
    };

    return (
        <>
            <h1>Liste</h1>
            {users.map((user) => {
                return (
                    <UserFunction
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        years={user.years}
                        changeName={handleChangeName}
                    />
                );
            })}
            <div>
                <button onClick={uvecajGodine}>Uvecaj godine</button>
            </div>
        </>
    );
}

export default App;
