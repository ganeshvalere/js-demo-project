// Immediatly invoked function Expression (IIFE)

 (function chai (){
    // named IIFE
    console.log(`DB Connected`);
 } ) ();
//  chai ()


(   (name)  => {
    // unname IIFE
    console.log(`DB Connected Two ${name}`);
} )("Ganesh")