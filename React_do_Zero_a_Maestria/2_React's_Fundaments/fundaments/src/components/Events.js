const Event = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Event here!")
    };

    const renderSomething = (x) => {
        if(x) {
            return(
                <h1>Render that!</h1>
            )
        } else {
            return (
                <h1>Render that if that is false!</h1>
            )
        }
    }
    
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Event here!</button>
            </div>
            <div>
                <button onClick={() => {console.log("Event Inline here!")}}>Event inline here!</button>
            </div>
            <div>
                <button onClick={() => {
                    //Events this way might became harder to read your code!
                    if(true) {
                        console.log("Don't do this way, please!")
                    }
                }}>Don't do Events this way!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )

};

export default Event