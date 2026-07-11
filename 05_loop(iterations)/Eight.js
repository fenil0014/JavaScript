const MyNums = [1, 2, 3, 4, 5, 6]


// acc means accumulator   and currval means Currentvalue 
// acc ne st karva = 0

// const Total = MyNums.reduce(function (acc , currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

const Total = MyNums.reduce( (acc , currval) =>
    (console.log(`acc: ${acc} and currval: ${currval}`),acc + currval), 0)

console.log(Total);

const shoppingCart =[
    {
        itemName: "jS Course",
        price: 12900
    },
    {
        itemName: "Java course",
        price: 1900
    },
    {
        itemName: "Data science course",
        price: 9999
    },
    {
        itemName: "Ai-Ml course",
        price: 900
    },
] 

const total = shoppingCart.reduce((acc, item ) => acc + item.price , 0)

console.log(total);
