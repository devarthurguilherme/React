function LikeButton() {
    const [liked, setLiked] = React.useStage(false);

    if (liked) {
        return "You liked this!";
    }

    return React.createElement(
        "button",
        {
            onClick: () => setLiked(true),
        },
        'Like'
    );
}

const rootNode =  document.querySelector("like-button-root");
const root = ReactDOM.createRoot(rootNode);

root.render(React.createElement(LikeButton));


/*
What I've Understood

17 - I locate <div> where I wanna put my "bit" of React in my page;
18 - I create one root React to put my component; and
20 - I inserted property "render" my component created.

after to continue -> https://beta.reactjs.org/learn/add-react-to-a-website

*/