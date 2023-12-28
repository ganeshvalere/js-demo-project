// singleton

//object


const mySym = Symbol("key1")


const JsUser = {
    name: "Ganesh",
    "full name": "Ganesh Vadiya",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "ganesh@google.com",
    isLoggedIn: false,
    lastLoginDats: ["Monday", "Saterday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ganesh@chatghpt.com"
// Object.freeze(JsUser)
JsUser.email = "ganesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js User");
}


JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


