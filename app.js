console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let x=1;x<=100;){
    if(x%2 == 1){
        console.log(x);
    }
    ++x;
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let div3 = null;
let div5 = null;
let prnt = "";
for(let x=1;x<=100;){
    div3 =false;
    div5 =false;
    prnt = x;   
    if(x%3 == 0){div3 =true; prnt= prnt + "FIZZ"}
    if(x%5 == 0){div3 =true; prnt= prnt + "BUZZ" }
    console.log(prnt)
    
    
    
    
    ++x;
}

