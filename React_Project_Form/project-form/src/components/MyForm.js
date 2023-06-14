import './MyForm.css'

const MyForm = () => {
    return (
        <div className="container__form">
            <form action="">
                <div className="form__input-box">
                    <label htmlFor="user-name">Name:</label>
                    <input type="text" name="user-name" placeholder="name" />
                </div>
                <div className="form__input-box">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default MyForm;