//! Block scope

// let flag = true
// if (flag)
// {
//     let data = 100
//     console.log("value of data is" + data);
    
// }
// else
// {
//     let data = 200
//     console.log("value of data is" + data);
    
// }

//! var keyword

// let flag = true
// if (flag)
// {
//     var data = 100
//     console.log("value of data is" + data);
    
// }
// else
// {
//     var data = 200
//     console.log("value of data is" + data);
    
// }
// console.log(data);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let data1 = 'somu'
function outerfunction()
{
    let data2 = 'rani'
    function innerfunction()
    {
        let data3 = "raja"
        console.log(data1);
        console.log(data2);
        console.log(data3);    
    }
    innerfunction()    
}
outerfunction()