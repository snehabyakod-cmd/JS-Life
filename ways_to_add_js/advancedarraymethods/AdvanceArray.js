let array = [1,2,3,4,5]
// for(let i = 0;i<array.length;i++){
//     console.log(array[i]);
    
// }


// function multiply(x){

//     return x*5
// }
// let newArray = array.map(multiply)
// console.log("New array " + newArray);
// console.log("Org array " + array);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let newArray = array.map(x => x * 5)

// array.map((item,index,orgarray) =>{
//     console.log(item,index,orgarray);
    
// })

//to cube of the array

// let arr = [10,20,30,40,50]
// let result  = arr.map((item,index,org)=>item*item)
// console.log(result);


//!Filter

// let data = [1,2,3,4,5,6,7,8,9,10]
// let newData = data.map((item)=>{
//     if(item%2==0) return item
// })
// console.log(newData);

// let result = data.filter((item,index,org)=> item%2 ===0)
// console.log(result);


// let data = ["Apple","Banana","Grapes","Orange","Mango"];
// let result = data.filter((item) => item.length > 5);
// console.log(result);

// let arr = ["Sneha","Raju","Pratibha","Ramu"];
// let result = arr.filter(str=>str.startsWith('R'));
// console.log(result);

// let arr = ["sneha"," ","raja"," ","Siddu"];
// let result=arr.filter(str=>str!=" ")
// console.log(result);

// let arr = ["Sneha","Somu","Deepa","Jyoti","Rani","nalani"];
// let result = arr.filter(str=>str.includes('a'));
// console.log(result);

// let arr = [2,25,3,35,4,45,5,55,6,65];
// let result = arr.filter(item => item.toString().includes('5'));
// console.log(result);

//! Reduce()


// let data = [1,2,3,4,5,6,7,8,9,10];

// // Using for loop
// let sum = 0;
// for(let i = 0; i < data.length; i++)
// {
//     sum = sum + data[i];
// }
// console.log(sum);

// // Using reduce() for addition
// let result = data.reduce((sum, currnum) => sum + currnum);
// console.log(result);

// // Using reduce() for multiplication
// let result1 = data.reduce((acc, curr) => acc * curr, 1);
// console.log(result1);

// Using reduce() with return
// let newdata = data.reduce((acc, x) => {
//     return acc + x;
// }, 100);

// console.log(newdata);


//count of odd numbers in the array
//  let arr = [1,2,5,8,9,4,6,7];
//  let result = arr.filter(n => n % 2 !== 0).reduce((count) => count + 1, 0);
//  console.log(result);

//find the sum of square of a given element
// let arr = [1, 2, 3, 4, 5];
// let result = arr.map(n => n * n).reduce((sum, n) => sum + n, 0);
// console.log(result);

//count how many numbers are divisible by 2 and 3
// let arr = [6, 10, 12, 15, 18, 20, 24];
// let result = arr.filter(n => n % 2 === 0 && n % 3 === 0).reduce(count => count + 1, 0);
// console.log(result);

//find total number of characters in all the string
// let arr = ["hello", "world", "javascript"];
// let result = arr.map(str => str.length).reduce((sum, n) => sum + n, 0);
// console.log(result);