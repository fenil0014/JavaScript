const tinderUser = new Object()  //singleton object

// const tinderUser = {}  //nonsingleton object


tinderUser.id = "123abc"
tinderUser.name = "fenil"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regulerUser = {
    email: "uses@gmail.com",
    fullName: {
        userfullname: {
            firstname: "Fenil",
            lastname: "Patel"
        }
    }
}
// console.log(regulerUser.fullName.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 5: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1 , obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "fenil@gmail.com"
    },
    {
        id: 1,
        email: "fenil@gmail.com"
    },
    {
        id: 1,
        email: "fenil@gmail.com"
    },
    {
        id: 1,
        email: "fenil@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));




