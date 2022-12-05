function receivesAFunction(callback){
    return callback();
}


function add(a, b) {
    return a + b;
}

function returnsANamedFunction() {
    return add;
} 

function returnsAnAnonymousFunction() {
    return function (){
        console.log("Anonymous!")
    }
}