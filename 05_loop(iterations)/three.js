// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello WOrld!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// maps

const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "United State of America")
map.set('FR', "France")

map.set('IN', "INDIA")
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}