const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task 
    // DataBase calls, network, cryptography 

    setTimeout(function () {
        console.log('Async task compelete');
        resolve()
    }, 1000)

})

promiseOne.then(function () {
    console.log("Promise consumed")
})

// promise Two
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function () {
    console.log("Task 2 resolved");
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve({username: "Fenil", email: "fnp123@gmail.com"})
    } ,1000)
}).then(function (user) {
    console.log(user);
})
// or 
// promiseThree.then()

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({username: "Fenil", password: "1234"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
        console.log(user);
        return user.username
    }).then((username)=>{
        console.log(username);
    }).catch((error)=>{
        console.log(error);   
    }).finally(() => {
        console.log("The promice is either resolved or rejected");
})


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username: "JavaScript", password: "1234"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },3000)
})

async function consumePromiseFive() {
    try {
        const responce = await promiseFive
    console.log(responce);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();