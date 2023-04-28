//Hooks
import {useState} from 'react';

const ManageData = () => {
    let someData = 10;
    
    const HandleSomeData = () => {
        someData = 15;
        console.log("ManageData here!");
    };

    const HandleN = () => {
        setN(25);
        console.log("Handle N here!");
    };

    const HandleResetN = () => {
        setN(n);
        console.log("HandleReset N here!");
    };

    const [n, setN] = useState(20);

    return (
        <div>
            <h2>Manage Data here</h2>
            <p>Initial Value of somedata = {someData}</p>
            <button onClick={HandleSomeData}>Change somedata</button>
            <p>Initial Value of n = {n}</p>
            <button onClick={HandleN}>Change N</button>
            <button onClick={HandleResetN}>Reset N</button>
        </div>
    );
};

export default ManageData;