// //scope

// let a = 10;
// const b = 20;
// // var c = 30; ye sabhi ke liye accsess deta hai 

// // console.log(a);
// // console.log(b);
// // console.log(c);

// // global scope    
// // let name = "Fenil";

// // function greet() {
// //     console.log(name);
// // }
// // greet();
// // console.log(name);

// // local scope      // fnction ke under ka variable accsess hota hai 
// function greet() {

//     let message = "Hello";
//     console.log(message);
// }
// greet();
// // console.log(message);  is liye ye line print nai hogi 

// // Block Scope   // yeai 

// {
//     let a = 10;
//     const b = 20;

//     console.log(a);
//     console.log(b);
// }

// // Global Scope = Outside world (sab dekh sakte hain)
// // Function Scope = House (sirf house ke andar)
// // Block Scope = Room (sirf room ke andar)



function one() {
    const username = "Fenil"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two();    
}

// one();

if (true) {
    const username = "Fenil"
    if (username === "Fenil") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);

}
// console.log(username);

// =========================== intrsting ==========================

console.log(addone(5))   //yai access ho jata hai 
function addone(num) {
    return num + 1
}

// console.log(addTwo(6));   yai ese acssess nai hoga 
const addTwo = function (num) {
    return num + 3
}
console.log(addTwo(6));

sayHello();

function sayHello() {

    console.log("Hello");

}
