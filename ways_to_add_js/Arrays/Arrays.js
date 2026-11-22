// let data = [1,2,3,4,5]
// console.log(data);

//  let data = ["somu",80,true,function(){console.log("Hello I am inside array as item of array")}]

//  console.log(data);
//  console.log(typeof data);

// data[1]="90"
// console.log(data);

// console.log(data.length);
// console.log(data[3]());

//constructor way to array

// let array = new Array(10,20,30,40,50)
// console.log(array);

// let array = new Array(100)
// console.log(array);
// console.log(array.length);


//array static methods

// 1.array.from()

// let data = "javascript"
// console.log(Array.from(data));

// let data = true
// console.log(Array.from(data));

// let data = 56
// console.log(Array.from(data));

// let data = "javascript"
// Array.from(Arrayref,function)

// let data = [1,2,3,4,5]
// console.log(Array.from(data,(num)=>num*5));

// let data = "javascript"
// console.log(Array.from(data,(string)=>string+0));
// console.log(Array.from(data,(string)=>string+0).toString().replaceAll(",",""));

//2.Array.isArray

// let data = [1,2,3,4,54,5]
// console.log(Array.isArray(data));
// if(Array.isArray(data)){
//     console.log("data received in the form of Array");
    
// }
// else{
//     console.log("data not received in the form of array");
    
// }


// 3.Array.of()

// console.log(Array.of(1,2,3,4,4,4));
// console.log(Array.of(10));

// Array Instance Methods

// 1.push():add the element end of the array

// let array = [1,2,3,4,5]
// array.push("sneha")
// console.log(array);

//2.pop():remove the element end of the array

//  let array = [1,2,3,4,5]
//   array.pop("sneha")
//   console.log(array);

//3.shift:remove the first element of array

//  let array = [1,2,3,4,5]
//  array.shift()
//  console.log(array);

//4.unshift():

//  let array = [1,2,3,4,5]
//   array.unshift("sneha")
//   console.log(array);

//5.slice():

// let array = [10,20,30,40,50]
// console.log(array.slice(2));
// console.log(array.slice(2,4));
// console.log(array.slice(-2));
// console.log(array.slice(4,2));
// console.log(array.slice(-2,-4));
// console.log(array.slice(-5,-2));

//6.splice():It does not return original array and when it returns it gives the deleted values array

// let array = [10,20,30,40,50]
// let deletedata = array.splice(1,2)
// // let deletedata = array.splice(1,0,'somu',"rani","raju")
// console.log("deletedata"+deletedata);
// console.log(array);

//7.concat():merges two or more array

// let arr1 = [10]
// let arr2 = [20]
// console.log(arr1.concat(arr2));

//8.reverse():reverse the order of

// let array = [10,20,30,40,50,60,70]
// console.log(array.reverse());

//9.join()

// let array = [10,20,30,40,50,60,70]
// console.log(array.join());
// console.log(array.join(""));
// console.log(array.join("%"));

//10.indexof()

// let array = [10,20,30,40,50,60,70]
// console.log(array.indexOf(30));
// console.log(array.indexOf(300));

//11.lastindexof()

// let array = [10,20,30,40,50,60,70,30]
// console.log(array.lastIndexOf(30));
// console.log(array.indexOf(3));

//12.includes()

// let arr = [1,2,3];
// console.log(arr.includes(2));
// console.log(arr.includes(4));

//13.entries

// let arr = [10,20,30,40,50]
// for(let x of arr.entries()){
// console.log(x);

// }

//14.keys()

// let arr = [10,20,30,40,50]
// for(let x of arr.keys()){
//     console.log(x);
    
// }

//15.values

// let arr = [10,20,30,40,50]
// for(let x of arr.values()){
//     console.log(x);
    
// }

//16.every()

let arr1 = [2,4,6,7]
let data = ['red','white','green']
console.log(arr1.every((num)=>num%2==0));
console.log(arr1.every((data)=>data!==undefined));












 

