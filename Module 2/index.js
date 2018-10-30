const geometry = require("./geometry");
const utilities = require("./utilities");

console.log("------------------Checking Geometry Functions----------------------");
console.log("Volume of Rectangular Prism");
console.log(geometry.volumeOfRectangularPrism(2, 3, 5));
console.log(geometry.volumeOfRectangularPrism(3, 3, 3));
console.log(geometry.volumeOfRectangularPrism(20, 100, 50));
console.log(geometry.volumeOfRectangularPrism(1, 1, 1));
console.log(geometry.volumeOfRectangularPrism(0, 2, 3));


console.log("\nSurface Area of Rectangular Prism");
console.log(geometry.surfaceAreaOfRectangularPrism(2, 3, 5));
console.log(geometry.surfaceAreaOfRectangularPrism(3, 3, 3));
console.log(geometry.surfaceAreaOfRectangularPrism(20, 100, 50));
console.log(geometry.surfaceAreaOfRectangularPrism(1, 1, 1));
console.log(geometry.surfaceAreaOfRectangularPrism(0, 2, 3));

console.log("\nVolume of Sphere");
console.log(geometry.volumeOfSphere(2));
console.log(geometry.volumeOfSphere(0));
console.log(geometry.volumeOfSphere(1));
console.log(geometry.volumeOfSphere(50));
console.log(geometry.volumeOfSphere(20));

console.log("\nSurface Area of Sphere");
console.log(geometry.surfaceAreaOfSphere(2));
console.log(geometry.surfaceAreaOfSphere(0));
console.log(geometry.surfaceAreaOfSphere(1));
console.log(geometry.surfaceAreaOfSphere(50));
console.log(geometry.surfaceAreaOfSphere(20));


console.log("\n------------------Checking Geometry Functions----------------------");
console.log("Deep Equality Check");
let obj1 = { a: 3, b: 4 };
let obj2 = { 'a': 3, 'b': 4 };
console.log(utilities.deepEquality(obj1, obj2));
obj1 = {};
obj2 = { a: 3, b: 4 };
console.log(utilities.deepEquality(obj1, obj2));
obj1 = {};
obj2 = {};
console.log(utilities.deepEquality(obj1, obj2));
obj1 = { a: 3, b: 4 };
obj2 = { a: 3, c: 4 };
console.log(utilities.deepEquality(obj1, obj2));
obj1 = { a: 3, b: 4, c: 5 };
obj2 = { a: 3, b: 4 };
console.log(utilities.deepEquality(obj1, obj2));

console.log("\nChecking if Elements are Unique");
console.log(utilities.uniqueElements(['a', 'b', 'c', 'a']));
console.log(utilities.uniqueElements([""]));
console.log(utilities.uniqueElements(["addition"]));
console.log(utilities.uniqueElements(["add","sub"]));
console.log(utilities.uniqueElements(["", ""]));

console.log("\nCount of Each Character in String");
console.log(utilities.countOfEachCharacterInString("Some string"));
console.log(utilities.countOfEachCharacterInString("S0me str1ng wit# symb()12s"));
console.log(utilities.countOfEachCharacterInString("Stevens Institute of Technology"));
console.log(utilities.countOfEachCharacterInString("Random fjdjkskd adfa; fad@"));
console.log(utilities.countOfEachCharacterInString("numbers 123456789"));
console.log(utilities.countOfEachCharacterInString("122333444455555"));