import './MyForm.css'
import {useState} from 'react';

const MyForm = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o Formulário . . .");
        console.log(name, email);
    }


    

    return (
        <div className="container__form">
            <form onSubmit={handleSubmit}>
                <div className="form__input-box">
                    <label htmlFor="user-name">Name:</label>
                    <input 
                        type="text" 
                        name="user-name" 
                        placeholder="digite seu nome"
                        onChange={(e) => {setName(e.target.value)}} />
                </div>
                <div className="form__input-box">
                    <label>
                        <span>e-mail</span>
                        <input 
                            type="email" 
                            placeholder="digite seu email"
                            onChange={(e) => {setEmail(e.target.value)}}
                            />
                    </label>
                </div>
                <div className="form__input-box">
                    <input type="submit" value="enviar" />
                </div>
            </form>
        </div>
    );
};

export default MyForm;