const TemplateExpressions = () => {

    const name = "Arthur";
    const data = {
        arthur: {n: "Arthur Guilherme", old: 31, birthday: 4 + " April"},
        thavea: {n: "Thavea Santos", old: 27, birthday: 12 + " December"}
    };

    return(
        <div>
            <h2>Template Expressions below!</h2>
            <h3>Hello {name}, how are you doing?</h3>
            <h4> {data.arthur.n}</h4>
            <p>{data.arthur.old}</p>
            <p><i>{data.arthur.birthday}</i></p>
            <h4> {data.thavea.n}</h4>
            <p>{data.thavea.old}</p>
            <p><i>{data.thavea.birthday}</i></p>
            {console.log(data.arthur, data.thavea)}
        </div>
    );
};

export default TemplateExpressions;