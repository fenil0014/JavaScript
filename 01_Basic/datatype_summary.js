// Primitive

// 7 type : String, Number, Null, Boolean, Undifined, symbol, BigInt

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// Reference (Non Primitive)

// type : Array = [] na under hoy ae bada array,
//        Objects = {}na under hoy ae bada object, Funcitons 

// JavaScript Dynamically type language hee

const GodName = ["hanuman", "Krishna", "Mahadev"];

let myObj ={
    name: "Fenil",
    age: 19

}

// ==========================================

// memory


//  type: Stack (Primitive) , Heap(Non Primitive)

let myYoutubename = "Fenil"

let anothername = myYoutubename

anothername = "Patel" 

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email : "fenilp123@gmail.come",
    upi : "fenil@ybl"

};
let userTwo = userOne

userTwo.email = "patel@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);