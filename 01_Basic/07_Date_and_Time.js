// // Dates

// let myDate = new Date()

// // console.log(myDate);
// // console.log(myDate.toString());
// // console.log(myDate.toDateString()); //useable
// // console.log(myDate.toLocaleDateString()); //useable
// // console.log(myDate.toISOString());//avoid
// // console.log(myDate.toJSON()); //aviod
// // console.log(myDate.toLocaleTimeString()); 
// // console.log(myDate.toTimeString()); 
// // console.log(myDate.toUTCString()); 

// // console.log(typeof myDate);

// // let myCreatedDate = new Date(2006 , 5, 14)
// // let myCreatedDate = new Date("2006-06-11") 
// // let myCreatedDate = new Date("06-14-2006")

// // console.log(myCreatedDate.toDateString());



// let myTimeStamp = Date.now()
// // console.log(myTimeStamp);

// // console.log(myCreatedDate.getTime());
// // console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate.toDateString());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and time is....`

// newDate.toLocaleString('default', {
//     weekday: "long"
// })
// console.log(newDate.toLocaleString());


let today = new Date()

// console.log(today.toDateString())
console.log(today.toLocaleDateString())


console.log(today.toLocaleTimeString())
console.log(today.toLocaleString("en-IN"))