const accountId = 56765
let accountEmail = "ganesh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 not allowed

accountEmail = "jshd.com"
accountPassword = "46426"
accountCity = "Bengaluru"

/*
prefer not to use var
because of issue in bloxk scope and funtional scope
*/


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])