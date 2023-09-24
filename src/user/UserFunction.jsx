export default function UserFunction({id, name, years, changeName }) {
    return (
        <>
            <p>
                Pozdrav, moje ime je {name} i imam {years} godina
            </p>
            <label htmlFor="nameText">Upiši novo ime: </label>
            <input type="text" value={name} onChange={(event) => {
                changeName(event, id);
            }} />
            <br />
            <br />
        </>
    );
}
