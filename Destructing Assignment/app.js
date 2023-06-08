// 1. Count the occurrences.
// const myStr = "You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces."

// function wordsCounter(myStr){
//     const words = myStr.split(" ")
//     const map = new Map()

//     for(const word of words){
//         if(map.has(word)){
//             map.set(word, map.get(word) + 1)
//         }else{
//             map.set(word, 1)
//         }
//     }
//     return map
// }

// console.log(wordsCounter(myStr));


// function countTheOccurrences(input){
//     const myMap = new Map(input)
//     return myMap
// }
// console.log(countTheOccurrences(myStr))



// 2. Only unique items are allowed.

// const arrOfNumbers = [1, 2, 3, 4, 2, 3, 5, 6, 4, 9, 8, 7, 8, 9, 6]

// function findUniqueItems(arr){
//     const newArray = new Set(arr)
//     return newArray
// }

// console.log(findUniqueItems(arrOfNumbers))


// 3. Swap the values.
// function swapingValues(a, b){
//     [a, b] = [b, a]
//     return [a , b]
// }

// let x = 5;
// let y = 10;
// [x, y] = swapingValues(x, y)
// console.log(x, y)


// 4. Access random elements.

// function accessRandomElements(arr){
//     const [el1, el2, , , , elLast] = arr;
//     return [el1, el2, elLast];
// }

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(accessRandomElements(arr));


// 5. Min and max values.
// function findMaxMin(arr){
//     return {
//         max : Math.max(...arr),
//         min : Math.min(...arr)
//     };
// }

// const myArr = [2, 4, 1, 6, 9, 8]
// console.log(findMaxMin(myArr))


// 6. Nested Objects.
// const person = {
//     name: "Abhishek",
//     age: 23,
//     address: {
//         street: "Rajiv Nagar, Road No. 9 c",
//         city: "Keshri Nagar, Patna",
//          state: "Bihar"
//     }
// }

// function extractNameStreet(obj){
//     const {name, address: {street}} = obj;
//     return {name, street};  
// }

// console.log(extractNameStreet(person));

