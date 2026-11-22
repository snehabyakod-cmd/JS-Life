//*  Strings

//! 1.By using single quotes

// let name='Ramu'
// console.log(name);
// console.log(typeof name);

//! 2.By using double quotes

// let name="Ramu"
// console.log(name);
// console.log(typeof name);

//! 3.By using template literal(backtick)

// let name=`Ramu`
// console.log(name);
// console.log(typeof name);

//! 

//  let first_name = "sneha"
//  let last_name = "Byakod"
// console.log("My first name is " + first_name + " and my last name is " + last_name);
// console.log("My full name is " + (first_name+last_name));


//! By Template
//! ${} -- string interpolation
//  let first_name = "sneha"
//  let last_name = "Byakod"
//  console.log(`My first name is ${first_name} and my last name is ${last_name}` );
//  console.log(`My full name is ${first_name+last_name}`);

//& 2. Using string object

// let str = new String("Javascript")
// console.log(str);
// console.log(typeof str);

//& Length

// let data = "Sneha"
// console.log(data.length);
// console.log(data[0]);
// console.log(data[data.length-1]);


//! Static methods

//& 1.string.fromcharcode

// let str = String.fromCharCode(83,110,101,104,97)
// console.log(str);

//& 2.string.fromcodepoint()

// let str = String.fromCodePoint(128526)
//  console.log(str);

//& 3.string.raw

// let str = String.raw `hello\n"@56787oihoih`
// console.log(str);

//* Instance methods of strings

// 1.at()

// let str = 'Javascript'
// console.log(str.at(0));
// console.log(str.at(-1));

// 2.CharAt()

// let str1 = 'Javascript'
//  console.log(str1.charAt(0));
//  console.log(str1.charAt(-1));

 // 3.charcodeAt()

// let str1 = 'Javascript'
// console.log(str1.charCodeAt(1));

// 4. concat()

// let str1 = "Java"
// let str2 = "Script"
// let newStr = str1.concat(str2)
// console.log(newStr);


// 5.includes

// let str = "Javascript is wonderful language"
// console.log(str.includes('is'));
// console.log(str.includes('idcfs',20));


// 6.indexof()

// let str = "Javascript is wonderful language"
// console.log(str.indexOf("j"));
// console.log(str.indexOf("a"));
// console.log(str.indexOf("a",5));


// 7.lastindexof()

// let data = "somu rajo"
// console.log(data.lastIndexOf("o"));

// 8.split()

// let str = "Javascript is Wonderful Language"
//  console.log(str.split("i"));
//  console.log(str.split(""));
//  console.log(str.split("",5));
//  console.log(str.split("",2));
//  console.log(str.split("a"));

// 9. toUpperCase()

// let str = "Javascript is Wonderful Language"
// console.log(str.toUpperCase());

// 10.toLowerCase()

// let str = "Javascript is Wonderful Language"
// console.log(str.toLowerCase());

// 11.trim()

// let str = "    Javascript is Wonderful Language    "
// console.log(str.trim());
// console.log(str);
// console.log(str.trim());
// console.log(str.trim().length);

// 12.trimStart()

// let str = "    javascript is wonderful language  "
// console.log(str.trimStart());

// 13.trimEnd()

// let str = "    javascript is wonderful language    "
// console.log(str.trimEnd());

// 14.startWith()

// let link = "https://www.google.com"
// console.log(link.startsWith("https"));

// let link = "http://www.google.com"
// console.log(link.startsWith("https"));

// 15. endWith()

//  let data = "images.jpg"
//  console.log(data.endsWith("jpg"));
// console.log(data.endsWith("png"));

// 16. Repeat()

// let data = ' sneha '
// console.log(data.repeat(5));

// 17.padStart()

// let data = 'sneha'
// console.log(data.padStart(10,'o'));

// 18.padEnd()

// let data = 'sneha'
//  console.log(data.padEnd(10,'a'));

// 19.replace()

// let data = "ramu raju"
// console.log(data.replace("ra","so"));
// console.log(data.replaceAll("ra","so"));

// 20.toString()

// let data = new String("hello")
// console.log(data);
// console.log(typeof data);
// console.log(typeof data.toString());


// 21.slice() and substring()

// let str = "Javascript is Wonderful Language"
// console.log(str.slice(4));
// console.log(str.slice(-19));
// console.log(str.slice(11,22));
// console.log(str.slice(-15,-7));
// console.log(str.slice(22,11));
// console.log(str.slice(-7,-15));

// substring()

// let str = "Javascript is Wonderful Language"
// console.log(str.substring(4));
// console.log(str.substring(-19));
// console.log(str.substring(11,22));
// console.log(str.substring(-15,-7));
// console.log(str.substring(22,11));
// console.log(str.substring(-7,-15));


//! 1 count the letters in the given string without using length method?

// let data = "Javascript is wonderful language"
// let count = 0;
// for(i=0;i<data.length;i++)
// {
//     count++;
// }
// console.log("length",count);


// let data = "Javascript is wonderful language"
// let count = 0;
// let i=0;
// for(let i in data)
// {
//     count++;
// }
// console.log(count);


// let data = "Javascript is wonderful language"
// let count = 0
// for(let i in data)
// {
//     if(data[i]=='A'|| data[i]=='E'|| data[i]=='I'|| data[i]=='O'|| data[i]=='U'|| data[i]=='a'||data[i]=='e'|| data[i]=='i'|| data[i]=='o'|| data[i]=='u')
//     {
//         count++;
//     }
// }
// console.log("v0wels",count);


// let data = "Javascript is wonderful language"
// let count = 0
// for(let i=0;i<data.length;i++)
// {
//     if("aeiou".includes(data[i]))
//     {
//         count++;
//     }
// }
// console.log("vowels",count);


// let data = "Javascript is wonderful language"
// console.log(data.charAt(0).toUpperCase()+data.slice(1));

// in the given string remove the spaces

// let data = "Javascript is wonderful language"
// console.log(data.split(" ").join(""));

let data = "Javascript is wonderful language"
console.log(data.replaceAll(" ",' '));




























