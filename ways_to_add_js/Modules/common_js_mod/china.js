// let toys = "car"

// function print(){
//     console.log("hello public");
    
// }

//module.exports = print
//module.exports = toys

//! exporting multiple data form common js
// module.exports={print,toys}


let toys = "car";
function print(){
    console.log("hello public");
    
}
module.exports = {print,toys}