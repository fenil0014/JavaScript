// object mate forin use
// array mate forof use

const myObject = {
    js : 'JavaScript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by name'
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`); 
}

const programming = ["JS", "Rubby", "C++", "Python", "C"]

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

// const map = new Map()

// map.set('IN', "INDIA")
// map.set('USA', "United State of America")
// map.set('FR', "France")
// map.set('IN', "INDIA")

//forin ma work nai kartu

// for (const key in map) {
//    console.log(key);
// }