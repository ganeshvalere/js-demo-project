
// let a = 10
// const b = 20
// var c = 30

// var c = 300

let a = 300

if (true){
    let a = 10
    const b = 20
    // console.log("INNER:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = "Ganesh"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
}

// one()
 

if (true){
    const username = "Ganesh"
    
    if (username === "Ganesh"){
        const website = " YouTube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// ++++++++++++ interesting +++++++++++++++++++

function addone (num){
    return num + 1
}

console.log(addone (5));

const addTwo = function(num){ 
    return num + 2
}

addTwo (5)