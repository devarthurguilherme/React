const CarDetails = ({brand, km, color, newCar}) => {
    return(
        <div>
            <h2>Car Details here, now props more modern</h2>
            <ul>
                <li>Brand: {brand}</li>
                <li>KM: {km}</li>
                <li>Color: {color}</li>
            </ul>
            {newCar && <p>It is a New Car!</p>}
        </div>
    );
};

export default CarDetails;