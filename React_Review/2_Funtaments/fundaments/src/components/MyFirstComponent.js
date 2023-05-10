import MySonComponent from './MySonComponent';

const MyFirstComponent = () => {
    
    const hello = "hello";
    const hanbleEventHere = () => {
        console.log("Event here!");
    };

    const handleRender = (x) => {
        if(x) {
            return <h2>Render That when it is true</h2>
        } else {
            return <h2>Render That when it is false</h2>
        }
    }
    return(
        <div>
            {/*Comment here!*/}
            <h2>My First Component here!</h2>
            <button onClick={hanbleEventHere}>Event Here!</button>
            <button onClick={() => {console.log("Inline Event here")}}>Inline Here!</button>
            {console.log(hello)}
            <h2>Function Render here!</h2>
            {handleRender(true)}
            {handleRender(false)}
            <MySonComponent />
        </div>
    );
};

export default MyFirstComponent;