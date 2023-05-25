import './FormReact.css'

const FormReact = () => {
   return(
    <div>
        <form className="container-form" action="">
            <div className="container-form__input-box">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" placeholder="Digit your name" />
            </div>
            {/* Better Way for creating inputs */}
            <div className="container-form__input-box">
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email" placeholder="Digit your email" />
                </label>
            </div>
            <input type="button" value="send" />
        </form>
    </div> 
   ) 
};

export default FormReact;