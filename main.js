/******************
 * YOUR CODE BELOW *
 ******************/
let myFirstName = "Radames";
let myLastName = "Rivera";
let myFavoriteCeleb = "Jessica Alba";

let mySentence = "Hi, I'm " + myFirstName + " " + myLastName + " and I love " + myFavoriteCeleb;

let myLuckyNum = 14;
let myAge = 39;
let myHeight = 180.34; 
let myFavoriteYear = 2007;

let mySum = 5 + 2317 +36;

let myProduct = 232 * 43 / 2 + 4;

let myHeightAndAge = myHeight + myAge ;

console.log(mySentence);
console.log("Lucky number: " + myLuckyNum);
console.log ("Age: " + myAge);
console.log("Height: " + myHeight);
console.log("Favorite year: " + myFavoriteYear);
console.log("Sum: " + mySum);
console.log("Product: " + myProduct);


/*********************************************************************************************************************

 * CODE BELOW HERE IS FOR INTERNAL USE ONLY! IT ENSURES THAT THE TESTING *
 * CAN READ AND EVALUATE YOUR CODE. *
 * DON'T CHANGE ANYTHING BELOW HERE, PLEASE! *

 *********************************************************************************************************************/

if (typeof myFirstName === "undefined") {
  myFirstName = undefined;
}

if (typeof myLastName === "undefined") {
  myLastName = undefined;
}

if (typeof myFavoriteCeleb === "undefined") {
  myFavoriteCeleb = undefined;
}

if (typeof mySentence === "undefined") {
  mySentence = undefined;
}

if (typeof myLuckyNum === "undefined") {
  myLuckyNum = undefined;
}

if (typeof myAge === "undefined") {
  myAge = undefined;
}

if (typeof myHeight === "undefined") {
  myHeight = undefined;
}

if (typeof myFavoriteYear === "undefined") {
  myFavoriteYear = undefined;
}

if (typeof mySum === "undefined") {
  mySum = undefined;
}

if (typeof myProduct === "undefined") {
  myProduct = undefined;
}

if (typeof myHeightAndAge === "undefined") {
  myHeightAndAge = undefined;
}

module.exports = {
  myFirstName,
  myLastName,
  myFavoriteCeleb,
  mySentence,
  myLuckyNum,
  myAge,
  myHeight,
  myFavoriteYear,
  mySum,
  myProduct,
  myHeightAndAge,
};
