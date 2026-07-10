// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 4

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("Feb");
        break;

    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Defult value");
        
        break;
}


// Nullish coalescing Operater (??): null undefined

// let val1 = 10 ?? 5
// let val1 = null ?? 10 ?? 89
let val1 = undefined ?? 10 
console.log(val1);


//Terniary Operater

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less then  80") : console.log("More than 80");
;
