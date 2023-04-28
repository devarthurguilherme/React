import {useState} from 'react';

const ListRender = () => {

    const [List] = useState([
        "Arthur", "Thávea", "Alexander Jr", "Léa"
    ]);

    const [List2] = useState([
        {key: 1, nome: "Arthur Guilherme", age: 31, profission: "Web Developer"},
        {key: 2, nome: "Thave Santos", age: 27, profission: "Ecommerce Manager"},
        {key: 3, nome: "Alexander JR", age: 25, profission: "Mechanic"},
        {key: 4, nome: "Léa", age: 23, profission: "Wife House"}
    ]);

    return (
        <div>
            <h2>List Render here!</h2>
            <h3>List without Key</h3>
            <ul>
                {List.map(
                    (n, i) => (
                        <li key={i}>
                            {"Each leaner -> " + n}
                        </li>
                    )
                )}
            </ul>
            <h3>List with key</h3>
            <ul>
                {List2.map((n2) => (
                        <li key={List2.key}>
                            {n2.nome} - {n2.age} - {n2.profission} 
                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export default ListRender;