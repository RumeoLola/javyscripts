// creating arrays
var firstColors = new Array("red", "yellow", "blue", "pink");
console.log(firstColors[1])
var secondColors = ["green", "purple", "cyan", "magenta"];
console.log(secondColors[2])


// using some methods associated with arrays
console.log(firstColors.length) // the length method gets the number of items in the array

// arrays within arrays
var vehicles = [["Ford Fiesta", "Ford Taurus", "Ford Focus"], ["Toyota Supra", "Toyota Supra", "Toyota Tacoma"], ["BMW M5", "BMW X3"]]
console.log(vehicles[2][1])

// other variable types can be threated like an array
var joke = ("The chicken crossed the road");
console.log(joke[5])

var animals = ["dog", "cow", "chicken", "cat"]
console.log(animals)

// add to an array
animals.push("llama")
console.log(animals)

// remove from an array
animals.splice(1,1)
console.log(animals)

// sort an array
console.log(animals.sort())

// last element of the array
console.log(animals[animals.length-1])