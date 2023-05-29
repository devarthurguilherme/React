import './MyForm.css';
/*Hooks*/
import {useState} from 'react';

const MyForm = ({user}) => {
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState(user ? user.bio : "");
    const [role, setRole] = useState(user ? user.role : "");

    const handleName = (e) => {
        setName(e.target.value);
    }

    console.log(name, email, bio, role)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, bio);
        setName("");
        setEmail("");
        setRole("");
    }

    return (
        <div className="Form-Container">
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Your Name"
                        onChange={handleName}
                        value={name}
                     />
                </div>
                <div className="input-box">
                    <label>
                        <span>E-mail</span>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>
                </div>
                <div className="input-box">
                    <label>
                        <span>Bio:</span>
                        <textarea
                            name="" 
                            placeholder="Digit here your bio..."
                            onChange={(e) => setBio(e.target.value)}
                            value={bio}
                            >
                        </textarea>
                    </label>
                </div>
                <div className="input-box">
                    <label>
                        <span>Sistem Function: </span>
                        <select 
                            name="role" 
                            id=""
                            onChange={(e) => {setRole(e.target.value)}}
                            value={role}
                            >
                            <option value="user">User</option>
                            <option value="edit">Edit</option>
                            <option value="admin">Admin</option>
                        </select>
                    </label>
                </div>
                
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default MyForm;