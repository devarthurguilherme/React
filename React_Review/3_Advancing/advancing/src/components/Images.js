import FrontEnd from "../assets/front_end_developer.jpg";
const Images = () => {
    return (
        <div>
            <h2>Images here!</h2>
            <h3>Image Public</h3>
            <img src="/img_1.jpg" alt="Playstation" />
            <h3>Image Assets</h3>
            <img src={FrontEnd} alt="FrontEnd" />
           
           
        </div>
    );
};

export default Images;