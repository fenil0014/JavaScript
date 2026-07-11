// const coding = ["Java", "Python", "C++", "Node.js", "C"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// } )
// console.log(values);


// const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = MyNums.filter((num) => num > 4)
//     console.log(newNums);

// {}scope open kariye etale return keyword no use karvo 

// const newNums = MyNums.filter((num) => {
    // return num > 4
// })
//  console.log(newNums);
    
// const newNums = []

// MyNums.forEach((num) => {
//     if (num % 2 ===0) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {title: 'Book One', genretion: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genretion: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genretion: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genretion: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genretion: 'Science', publish: 2009, edition: 2014},
    {title: 'Book Six', genretion: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven', genretion: 'History', publish: 1986, edition: 1996},
    {title: 'Book Eight', genretion: 'Science', publish: 2016, edition: 2011},
    {title: 'Book nine', genretion: 'Non-Fiction', publish: 1981, edition: 1989},
];

let userBooks = books.filter((bk) => bk.genretion ==='History')

    userBooks = books.filter((bk) => {
        return bk.publish >= 1995 && bk.genretion ==='History'
    })


console.log(userBooks);
