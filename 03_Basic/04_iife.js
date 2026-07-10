// NORMAL CODE

// function Chai() {
    //     console.log(`DB CONNECTED`);
    // }
    // Chai();
    
    
// Immediately Invoked Function Expressions (IIFE)

(function Chai(name) {  //Named iife because anu nae che (chai)

    console.log(`DB CONNECTED ${name}`);
})('Fenil');      //; anathhi code kya end thay ae khabar pade computer ne 
                     // first code end karva mate (;)


( () => {       // unnamed iief
    console.log(`DB CONNECTED TWO`);
})();

const result = (() => {

    return 10 + 20;

})();

console.log(result);

const price = (() => {
    return 10 + 30;
})();

console.log(price);

