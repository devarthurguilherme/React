const DestructuringProps = ({brand, km, color, newCar}) => {
    return (
        <div>
            <h2>Destructuring Props</h2>
            <h3>Car Details</h3>
            <ul>
                <li>Brand: {brand}</li>
                <li>KM: {km}</li>
                <li>Color: {color}</li>
            </ul>
            {newCar && <p>This car is new!</p>}
        </div>
    )
};

export default DestructuringProps;