// console.log("start");
// console.log("End");

// let age = 12;
// if (age >=18) {
//     console.log("You can vote"); 
// }else{
//     console.log("sorry you can't vote");
    
// }
// const balance = 1000
// if(balance > 500) console.log("Test"), console.log("Test2"); // yai tarika sahi ye but achha nai lagt



// let marks = 95;
// if (marks >= 90) {
    
//     console.log("First class");
    
// } else if(marks >=75){
//     console.log("Second class");
    
// }else if (marks >= 50){
//     console.log("Third class");   
// }else{
//     console.log("fail");
    
// }


const userLoggedIn = false;
const debitCard = false;
const loggedInGoogle = false;
const loggedInEmail = true;

if (userLoggedIn && debitCard && loggedInGoogle) {
    // console.log("\"Allow to buy the cource\"")
}else{
    // console.log("\"You not buy the cource\"");
    
}

if (userLoggedIn || debitCard ||loggedInEmail || loggedInGoogle) {
    console.log("\"Allow to buy the cource\"");
    
}
