// let userInfo = {
//     name:"ramu",
//     age:80,
//     flag:false,

//     working : function (){
//         console.log("Ramu is Working");
        
//     }
// }
// console.log(userInfo);


// function add(a,b){
//     console.log(a+b);
// }
// add(10,20);
// console.log(add.name);
// console.log(add.length);


//! pass data as value

// let data1=10
// let data2=data1
// console.log(data1);
// console.log(data2);
// console.log("After update>>> ");
// data2 = 100
// console.log("data1 " + data1);
// console.log("data2 " + data2);

//! passing data as reference

// let obj1={
//     name:"somu",
//     age:10
// }
// obj2 = obj1
// console.log(obj1);
// console.log(obj2);
// console.log("After update >>>>>>>");

// obj2.age = 100
// console.log(obj1.age);
// console.log(obj2);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function outerFunction(){
//     let outerFunctionData = 10
//     function innerFunction(){
//         console.log("Accessing outerfunction value :" +outerFunctionData);
        
//     }
//     return innerFunction
// }
// let result = outerFunction()
// result()


function outerFunction(){
    console.log("outerFunction exe started");
    

    let impData = 10
    function innerFunction(){
        console.log("InnerFunction exe started");
        console.log("Accessing outerfunction value :" + impData);
        console.log("Innerfunction exe ended");
           
    }
    console.log("outerfunction exe ended");
    
    return innerFunction
}
let result = outerFunction()
result()





