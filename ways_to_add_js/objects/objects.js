// let userInformation = {
//     name:"somu",
//     IsLoggedIn:true,
//     age:23,

//     reading:function() {
//         console.log("Somu is reading");
//     },
//     sleeping:function() {
//         console.log("Somu is sleeping");
        
//     }
// }
// console.log(userInformation);


//1.Hospital Object


// let hospital = {
//     name: "City Hospital",
//     beds: 100,
//     available: true,
//     departments: ["ENT", "Dental", "Cardiology"],
//     doctor: {name: "Dr. Ravi", age: 35},
//     insurance: null
// };

// console.log(hospital);


// 2.laptop object


// let laptop = {
//     brand: "HP",
//     price: 55000,
//     touchscreen: false,
//     accessories: ["Mouse", "Keyboard", "Charger"],
//     processor: {name: "Intel", generation: "i5"},
//     warranty: null
// };

// console.log(laptop);

//3.college object


// let college = {
//     name: "ABC College",
//     students: 500,
//     affiliated: true,
//     courses: ["BCA", "BBA", "BCom"],
//     location: {city: "Belagavi", state: "Karnataka"},
//     principal: null
// };

// console.log(college);

// 4.Bank object


// let bank = {
//     name: "SBI",
//     accountNumber: 12345,
//     active: true,
//     services: ["ATM", "UPI", "Net Banking"],
//     branch: {city: "Bengaluru"},
//     loan: null
// };

// console.log(bank);

// 5.movie object


// let movie = {
//     title: "KGF",
//     year: 2022,
//     released: true,
//     actors: ["Yash", "Srinidhi", "Sanjay"],
//     director: {name: "Prashanth Neel"},
//     awards: null
// };

// console.log(movie);

// 6.school object


// let school = {
//     name: "Oxford School",
//     students: 800,
//     government: false,
//     subjects: ["Maths", "Science", "English"],
//     teacher: {name: "Anita", age: 30},
//     principal: null
// };

// console.log(school);


// 7.Restaurant object


// let restaurant = {
//     name: "Food Palace",
//     rating: 4.5,
//     open: true,
//     foodItems: ["Pizza", "Burger", "Dosa"],
//     address: {city: "Bengaluru"},
//     manager: null
// };

// console.log(restaurant);


//8.shopping object


// let shopping = {
//     customer: "Priya",
//     totalAmount: 2500,
//     paymentDone: false,
//     products: ["Shoes", "Watch", "Bag"],
//     delivery: {city: "Mysore", pincode: 570001},
//     discount: null
// };

// console.log(shopping);


// 8.Library object


// let library = {
//     name: "Central Library",
//     books: 5000,
//     open: true,
//     sections: ["Science", "History", "Computer"],
//     librarian: {name: "Anil", age: 40},
//     membership: null
// };

// console.log(library);


// Accessing the objects
//1.way using dat(.)notation

// let xyz={
//     name:"somu",
//     age:40,
//     flag:true
// }
// console.log(xyz.name);
// console.log(xyz.age);


// let userInformation = {
//      name:"somu",
//      IsLoggedIn:true,
//      age:23,

//      reading:function() {
//          console.log("Somu is reading");
//      },
//      sleeping:function() {
//          console.log("Somu is sleeping");
        
//      },
//      FavColors:['red','green','blue'],
//      address:{
//         city:"pune",
//         pincode:1235,
//      }
//  }
//  userInformation.reading()
//  console.log(userInformation.FavColors);
//  console.log(userInformation.FavColors[0]);
//  console.log(userInformation.address.pincode);
 
 
 // 2 by using square brackets([])notations

 
// let userInformation = {
//      name:"somu",
//      IsLoggedIn:true,
//      age:23,

//      reading:function() {
//          console.log("Somu is reading");
//      },
//      sleeping:function() {
//          console.log("Somu is sleeping");
        
//      },
//      FavColors:['red','green','blue'],
//      address:{
//         city:"pune",
//         pincode:1235,
//      },
//      7:'Fav_No'
//  }

// 1.dynamic accessing

//  let key='name'
//  console.log(userInformation[name]);
//  console.log(userInformation[key]);
//  console.log(userInformation["age"]);
//  console.log(userInformation.key);

 // 2.if we space it cannot be accessed

//  console.log(userInformation. IsLoggedIn);
//  console.log(userInformation["IsLoggedIn"]);

 // 3.special character can be accessed

//  console.log(userInformation.name%"");
//  console.log(userInformation["name%*"]);

 // 4.numbers can be accessed

//  console.log(userInformation["7"]);
//  console.log(userInformation["7"]);

// creating

// let userdata={
//     name:"Sneha",
//     age:24,
//     flag:true
// }

//adding

// userdata.luckyn0='4'
// console.log(userdata);

//updating

// userdata.age=60
// console.log(userdata);

//deleting

// delete userdata.flag
// console.log(userdata);


//! Methods of Objects

let userdata={
    name:"Sneha",
    age:24,
    flag:true
}

//~1. keys()
// console.log(Object.keys(userdata));

//~2. values()
// console.log(Object.values(userdata));

//~3.Entries()
// console.log(Object.entries(userdata));
let NewDataFormat = Object.entries(userdata)
console.log(NewDataFormat);

//~4.fromentries
console.log(Object.fromEntries(NewDataFormat));








 

 
 
 
 
 
 
 
 
 