// 1. Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადასცემთ
// მასივს, და ეს ფუნქცია შეავსებს მასივს 20 ცალი რენდომული
// რიცხვით
let arr = []
fillArr(arr)
function fillArr(arr){
    while(arr.length < 20)
    {
        let rand = Math.round(Math.random()*100)
        arr.push(rand)
    }
}
// 2. Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადასცემთ 20
// ცალი რენდომული რიცხვისგან შევსებულ მასივს და ეს ფუნქცია
// დაბეჭდავს ამ მასივში მოთავსებულ ყველა ლუწ რიცხვს
// printEvens(arr)
// function printEvens(arr){
//     console.log(arr)
//     for(let i of arr){
//         if( i % 2 === 0) console.log(i)
//     }
// }
// 3. Შექმენით ფუნქცია რომელსაც პარამეტრის სახით გადასცემთ
// რიცხვების რაოდენობას და ეს ფუნქცია დააბრუნებს მასივს რომელიც
// შევსებული იქნება იმ რაოდენობის რენდომული რიცხვებით რაც
// მომხმარებელმა აგდასცა ფუნქციას
// let userNum = prompt("Enter user Number")
// console.log(fillArrWithNElements([],userNum))
// function fillArrWithNElements(arr,n){
//     while(arr.length < n)
//     {
//         let rand = Math.round(Math.random()*100)
//         arr.push(rand)
//     }
//     return arr
// }
// 4. Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადასცემთ 20
// ცალი რენდომული რიცხვისგან შევსებულ მასივს და ეს ფუნქცია
// ამოარჩევს ყველა 3 ის ჯერად რიცხვს და გადაწერს მათ მეორე
// მასივში რომელსაც დააბრუნებს ეს ფუნქცია
// console.log(divisorsOfThree(arr))
// function divisorsOfThree(arr){
//     let divisors = []
//     for(let i of arr){
//         if( i % 3 === 0) divisors.push(i)
//     }
// return divisors
// }
// 5. Შექმენით ფუნქცია რომელსაც პარამეტრის სახით გადასცემთ მასივს
// და რიცხვს, ამ ფუნქციის დანიშნულება იქნება რომ დაადგინოს
// მასივი შეიცავს თუ არა ამ გადაცემულ რიცხვს.
includes(arr,5)
function includes(arr,num){
    console.log(arr)
    let includes = false
    for(let i of arr){
        if (i === num){
            includes = true;
            console.log("number is not in array")
            break;
        }
    }
    if(!includes)console.log("number is not in array")
}