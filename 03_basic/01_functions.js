

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");    
}

// sayMyName()

// function addTwoNumbers(number1, number2){ // parameters number2
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){ // parameters number2
//    let result =  number1 + number2
//    return result

return number1 + number2
 
}

const result = addTwoNumbers(3, 5) // aguments null

// console.log("Result:", result);

// function loginUserMessage(username){


function loginUserMessage(username = "Sam"){ // default name show 
    // if(username ===undefined){
        if(!username){
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage("hitesh"));


function calculateCartPrice(val1, val2, ...num1){
 return num1
}

console.log(calculateCartPrice(200, 400, 500, 676));

const user = {
    username: "ganesh",
    price: 199,
}

function handleObjext(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObjext(user)

handleObjext({
    username: "Same",
    price: 3999
})

const MyNewArray = [200, 400, 400,100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(MyNewArray));
console.log(returnSecondValue([200, 400, 400,100, 600]));

