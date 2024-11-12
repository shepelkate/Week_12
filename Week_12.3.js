const alphabet = "abcdefghijklmnopqrstuvwxyz";

let index1 = Math.floor(Math.random() * alphabet.length);
let index2 = Math.floor(Math.random() * alphabet.length);
let index3 = Math.floor(Math.random() * alphabet.length);
let index4 = Math.floor(Math.random() * alphabet.length);

let randomWord = alphabet[index1] + alphabet[index2] + alphabet[index3] + alphabet[index4];

console.log(randomWord); 