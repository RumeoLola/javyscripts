var colors = ["red", "green", "blue", "yellow"];
var selectedColor = colors[6]; // going beyond the index

// switching between cases
// an if else statement with more accuracy
// break(s) are very necessary for some reason
switch(selectedColor){
    case "red": console.log("the color is red");
        break;
    case "blue": console.log("the color is blue");
        break;
    case "green": console.log("the color is green");
        break;
    case "yellow": console.log("the color is yellow");
        break;
    // [default] is used when all else fails 
    default: console.log("There was an error")
}