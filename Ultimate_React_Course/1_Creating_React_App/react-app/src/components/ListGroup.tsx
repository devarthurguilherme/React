function ListGroup() {

    let items = [
        "Rio de Janeiro",
        "Lisbon",
        "Tokio",
        "Paris",
        "Canada"
    ];


    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found!</p>}
            <ul className="list-group">
                {items.map(item => (<li key={item} className="list-group-item">{item}</li>))}
            </ul>
        </>
    );
};

export default ListGroup;