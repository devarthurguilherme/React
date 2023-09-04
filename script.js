const ages = [15, 22, 17, 30, 12];

const person = ages.find(age => age > 18);

if (person) {
    console.log(`This person has ${person} years old!`);
} else {
    console.log(`This person has ${person} years old!`)
};

console.log("__________")

const blocks = ["blue", "red", "dark", "blue", "red", "dark"];
const blocksRed = blocks.filter((color) => {return color === "red"});

console.log(blocksRed);