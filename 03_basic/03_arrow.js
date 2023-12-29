const user = {
    username: "Ganesh",
    price: 999,
    
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`);
     
    }
   
}

// user.welcomeMessage()
// user.username = "Same"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "ganesh"
//     console.log(this.username);
// }

// chai()


// const chai = function () {
//     let username = "ganesh"
//     console.log(this.username);
// }


const chai =  () => {
    let username = "ganesh"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "Ganesh"})


console.log (addTwo (3, 4))


