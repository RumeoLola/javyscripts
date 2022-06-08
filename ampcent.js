var goodMood = true;
var gotSleep = true;
var hadBreakfast = false;

//using the ampercent, both variable have to be true else the else will run
if(goodMood && gotSleep){
    console.log("Off to a good start")
}
else{
    console.log("Off to a bad start")
}

//at least one has to be true for it to be a nice day
if(goodMood || gotSleep || hadBreakfast){
    console.log("nice day")
}
else{
    console.log("bad day")
}