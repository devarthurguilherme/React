//Import
import MyComponent from './MyComponent';

//Coment's example here . . .

const FirstComponent = () => {

//This function is to do test just.
/*Multiline here! */

    return (
        <div className="Father">
        {/* Some coment here, just to test, It doesn't appear to user! */}
        {/* This is a Template Expressions -> '{}' */}
            <h2>My First Component</h2>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;