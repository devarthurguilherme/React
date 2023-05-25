import './CarDetails.css'

const CarDetails = ({brand, km, color, year}) => {
    return (
        <div className="container-car-details">
            <h1>Car Details</h1>
            <ul style={{color: "blue"}}>
                <li>Brand: {brand}</li>
                <li>km: {km}</li>
                <li>color: {color}</li>
                <li>Year: {year}</li>
            </ul>
        </div>
    );
};

export default CarDetails;
