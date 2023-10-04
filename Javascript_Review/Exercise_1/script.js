const answer = document.querySelector("#answer");
const btn = document.querySelector("#btn");

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response => console.log(response));