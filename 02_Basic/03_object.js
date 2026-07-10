// singleton
// object.create


// object literals 
const mysym = Symbol("key1")


const JsUser = {
    name:"Fenil",
    "Full Name": "Fenil Patel",
    [mysym]: "mykey1", 
    age: 19,
    location: "Mehsana",
    email: "fenilp123@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Sunday"]
}

// console.log(JsUser.email);
// console.log(JsUser["location"]);
// console.log(JsUser["Full Name"]);

JsUser.email = "fenil123@google.com"
// Object.freeze(JsUser)
// JsUser.age = 41
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
