var foods = ["milk", "egg", "burger", "pizza"];
var myString = "I am hungry for ";

for(var i=0; i<foods.length; i++){
    if(i % 2 === 0){
        console.log(myString + foods[i].toUpperCase());
    }
    else{
        console.log(myString + foods[i])
    }
}