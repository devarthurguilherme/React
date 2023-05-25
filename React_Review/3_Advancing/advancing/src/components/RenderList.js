import {useState} from 'react';
const RenderList = () => {

    const listNames = ["Arthur", "Thávea", "Alexander JR", "Léa"];
    const [listPlayers, setPlayers] = useState([
        {id: 1, nome:"Arthur", age: 31},
        {id: 2, nome:"Alex", age: 29},
        {id: 3, nome:"André", age: 29},
        {id: 4, nome:"Bruno", age: 37}
    ]);

    const handleDeleteRandom = () => {
        const n = Math.floor( Math.random() * 5);

        setPlayers((prevPlayers) => {
            console.log(n)
            return prevPlayers.filter((player) => n !== player.id)
        })
    }
    
    return(
        <div>
            <h2>Render List here!</h2>
            <ul>
                {listNames.map((names, i) => (
                    <li key={i}> {names}</li>
                ))}
             </ul>
             <h3>List render Players here!</h3>
             <ul>
                {listPlayers.map((players) => (
                    <li key={players.id}>{players.nome} - {players.age}</li>
                ))}
             </ul>
             <button onClick={handleDeleteRandom}>Delete Random!</button>
        </div>
    );
};

export default RenderList;