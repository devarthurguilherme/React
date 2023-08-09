import { useState } from "react";

function ListGroup() {

    let items = [
        "Rio de Janeiro",
        "Lisbon",
        "Tokio",
        "Paris",
        "Canada"
    ];
    
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found!</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                <li 
                    key={item} 
                    onClick={() => {setSelectedIndex(index);}} 
                    className={ 
                        selectedIndex === index ? "list-group-item active" : "list-group-item"
                    }>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ListGroup;