import { useState } from 'react';
const ConditionalRender = () => {

    const [user] = useState(false);
    const [n, setN] = useState("Arthur");
    const handleName = () => {
        setN("Guilherme")
    }
    return(
        <div>
            <h2>Conditional Render here!</h2>
            {user && <p>If user for true, to print here!</p>}
            {!user && <p>If user for false, to print here!</p>}
            {n === "Arthur" ? (
                <p>Hello {n}, how are you doing?</p>
            ) : (
                <p>Who are you {n}?</p>
            )}
            <button onClick={handleName}>Set Name here!</button>
        </div>
    );
};

export default ConditionalRender;