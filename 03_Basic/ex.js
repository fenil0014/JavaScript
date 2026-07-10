const customer ={
    name: "Fenil",
    tabel: 5
}


const order = [
    "Pizza",
    "Burger",
    "Cold Drink"
];

function serve(customer, order) {
    console.log("Name:",customer.name);
    console.log("Order:",order[1]);
    console.log("Tabel No:",customer.tabel);
    
}

serve(customer, order);