import {useState} from 'react';

const ListRender = () => {

   const [list] = useState(["Arthur", "Thávia", "Alexander JR", "Léa", "Nathan"]);

   const [users, setUsers] = useState([
    {id: 1, nome: "Arthur", age: 31, profission: "Developer"},
    {id: 2, nome: "Thávia", age: 27, profission: "Manager"},
    {id: 3, nome: "Jr", age: 25, profission: "Mecanic"},
    {id: 4, nome: "Léa", age: 23, profission: "Wife House"}
   ]);

   const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * users.length);

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
   }

    return (
        <div>
            <h2>List Render here!</h2>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <h3>List Render with single key</h3>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.nome} - {user.age} - {user.profission}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete Random User</button>            
        </div>
    );
};

export default ListRender;