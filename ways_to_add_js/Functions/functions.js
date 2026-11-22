// function print(){
// console.log("Hello Javascript");
// console.log("How are you");
// }
// print()

// function greet()
// {
//     console.log("Good Morning");
        
// }
// greet()

// function greet()
// {
//     console.log("Good Afternoon");
        
// }
// greet()

//! Function 2

// function greet(anything)
// {
//     console.log("Welcome " + anything);
    
// }
// greet("rani")



// function greet(time)
// {
//     if (time<12)
//     {
//         console.log("Good Morning ");
        
//     }
//     else if(time<17)
//     {
//         console.log("Good Afternoon");
        
//     }
//     else if(time<20)
//     {
//         console.log("Good Evening ");
        
//     } 
//     else
//         {
//             console.log("Invalid Timing");
            
//         }   
// }
// greet(6)

//! Function 3

// function Totalmarks(m,c,p,e,k)
// {
//     return m+c+p+e+k
// }
// let result = Totalmarks(60,40,80,35,99)
// console.log(result + 5);

//! Function 4

// let Bhoot = function ()
// {
//     console.log("Hello I am Bhoot");
    
// }
// Bhoot()


//* Arrow Function

//!  1

// let addition = (a,b) => a+b
//  console.log(addition(10,20));

//! 2

// let addition = a => a+20
// console.log(addition(10));

//! 3

// let addition = _ => 20+20
// console.log(addition());

//* Implicit return

// let addition = (a,b) => a+b
// console.log(addition(10,20));

//* Explicit return

// let addition = (a,b) => 
//         {return a+b}
// console.log(addition(10,20));

//* Function Expression

// let addition = function printAdd(){
//     console.log(10+20);
    
// }
// addition()

//* Callback Function 

// function add()
// {
//     console.log(10+20);    
// }
// function task(fun){
//     fun()
    
// }
// task(add)

//&+&&&&&&&

// function Task(fun) {
//     fun()
    
// }
// Task( 
//     function() {
//         console.log(10+20);
        
//     }
// )


// function Task(somu) {
//     somu()
    
// }
// Task( 
//     function() {
//         console.log(10+20);
        
//     }
// )

//* Higher Order Function

// function Task() {
//     return function () {
//         console.log("Thank you");
        
//     }
// }
// let result = Task()
// result()

//* Calculator
// function add(a,b){
//     return a+b
// }
// function sub(a,b){
//     return a-b
// }
// function multp(a,b){
//     // return a*b
//     console.log(a*b);
    
// }
// function div(a,b){
//     return a/b
// }
// function calsi(calback,a,b){
//     calback(a,b)
// }
// calsi(multp,10,5)


//! Exp for hof and callback

function greeting(callback,takeaway){
    console.log("Welcome to xyz cafe");
    console.log("you can order here....");
    callback(takeaway)    
}
function chickenBiryani(takeaway){
    setTimeout(() => {
    console.log("thank you for your order...");
    console.log("your order Biryani is getting ready");
    console.log("Here is your order....");   
    takeaway()
    }, 5000) 
}
function VegBiryani(){
    setTimeout(() =>{
    console.log("thank you for your order...");
    console.log("your order Veg-Biryani is getting ready");
    console.log("Here is your order...."); 
    takeaway()
    }, 5000)   
}
function takeaway()
{
    console.log("you can takeaway your order");
    
}
greeting(VegBiryani,takeaway)













