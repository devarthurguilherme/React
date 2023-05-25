import { useState } from "react";
const Hook = () => {
    const [n, setN] = useState("Arthur");
    const nome = "Arthur";
    const lastNome = "Silva"
    return(
        <div>
            <h2>Hook here!</h2>
            <h3>{n}</h3>
            <button onClick={() => (setN(nome + " " + lastNome))}>Change Here!</button>
        </div>
    );
};

export default Hook;