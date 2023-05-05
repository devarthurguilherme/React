const Children = ({children, myValue}) => {
    return(
        <div>
            <h2>Children Here!</h2>
            {children}
            <p>{myValue}</p>
        </div>
    );
};

export default Children;