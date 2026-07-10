const marvel = ["Thor", "Ironman", "Spiderman"]
const dc = ["Superman", "Flash", "Batman"]

// marvel.push(dc)

// console.log(marvel);

const AllHeros = marvel.concat(dc)
console.log(AllHeros);

const allnew = [...marvel, ...dc]
console.log(allnew);

const myNewArr = [1, 3, 4, [56, 4, 5, [678] ,[34, 78, 77, [123, 456, 876],63],45]]
const my2New = myNewArr.flat(Infinity)

console.log(my2New);

console.log(Array.isArray("Fenil"));
console.log(Array.from("Fenil"));

let score1 = 1000
let score2 = 4000
let score3 = 2300

console.log(Array.of(score1, score2, score3));


