function name(){
    console.log("F");
    console.log("E");
    console.log("N");
    console.log("I");
    console.log("L");
}
// name()
// console.log(name());

// function addTwoNumber(num1, num2) {   //(num1, num2) perameter
//      console.log(num1 + num2);
// }

// addTwoNumber(4,5)    //(4,5)argument
// addTwoNumber(4,"5")


function addTwoNumber(num1, num2) {   //(num1, num2) perameter
    let result = num1 + num2

    return result; //aana pasi lakelelu 
    // console.log("Fenil");
    
}

// const result = addTwoNumber(4,5)
// console.log("Result:",result);
// console.log("Fenil");


function loginUserMessage(username = "Guest") {
    if (username === undefined) {
        console.log("Please enter a usename");
        return
    }
    return `${username} just logged in `
}

// loginUserMessage("FENIL")    // deirect lakhelu print nai thay 

// console.log( loginUserMessage("\"FENIL\""));
console.log( loginUserMessage());




