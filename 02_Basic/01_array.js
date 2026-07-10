// // array

// const myArray = [0, 1, 2, 3, 4, 5]
// const myHeros = ["spiderman", "Hanuman", "Saktiman"]

// const myArr = new Array(1, 2, 3, 4)
// // console.log(myArray[6]);

// // Array method

// // myArray.push("Fenil")
// // myArray.push(7)
// // myArray.pop()

// // push & pop kariye to back side thi value add & remove thay and
// // unshift & shift kariye to front mathi value add & remove thay

// // myArray.unshift(89)
// // myArray.shift()

// // console.log(myArray.includes(4));
// // console.log(myArray.indexOf(3));

// const newArray = myArray.join()


// // console.log(typeof myArray);
// // console.log(typeof newArray);

// // slice and splice

// console.log("A ", myArray);

// const myn1 = myArray.slice(1, 4)

// console.log(myn1);
// console.log("B ", myArray);


// const myn2 = myArray.splice(1, 4)
// console.log("C ", myArray);

// console.log(myn2);

// let arr = new Array(1, 2, 3)

// console.log(arr)

// let fruits = ["Banana", "Mango"];

// fruits.unshift("Apple");
// fruits.unshift("Mango")

// console.log(fruits);

// console.log(Array.isArray([1,2,3,4,5,6,7,8,]));
// console.log(Array.isArray(["fenil", "patel"]));
// console.log(Array.isArray(["patel"]));

// let frutis = "mango" 

// console.log(typeof frutis);
// console.log(Array.isArray(frutis));


// const user = {
//   name: "Fenil",
//   skills: ["HTML", "CSS", "JavaScript"],
//   address: {
//     city: "Deesa"
//   }
// };

// console.log(user.skills[2]); // "javascript"
// console.log(user.address.city); // deesa

// user.age = 21;
// delete user.name;

// console.log(user);


// const user = {
//     name: "Fenil",
//     Hobbies:[
//         "Coding",
//         "Cricket",
//         "kubbadi"
//     ]

// };

// console.log(user.Hobbies[2]);


const user = {
    name: "Fenil",

    greet: function(){
        console.log(this.name);
    }
};

user.greet();