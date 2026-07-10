const accountId = 20232345
let accountEmail = "feni@gmail.com"
var accountPassword = "12345"

// only use let 
//not use to var because of issue in block scope and funcitonal scope 
accountCity = "Mehsana" // variable na jode let lagavyu na hoy to pan print thay 
let accountState; // accountId = 2344

accountEmail = "fp1234@gmail.com"
accountPassword = 123456764
accountCity = "Surat"

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState])