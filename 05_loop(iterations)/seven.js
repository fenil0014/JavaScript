const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = MyNums.map ((num) => num + 10)

// console.log(newNums);

// chaining

const newNumbers = MyNums
            .map((num) => num * 10)
            .map((num) => num + 1)
            .filter((num) => num >= 40 && num % 3 === 0 )

console.log(newNumbers);