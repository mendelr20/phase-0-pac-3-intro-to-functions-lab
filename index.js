function shout(string) {
    return string.toUpperCase();
  }
function whisper(string) {
    return string.toLowerCase();
}  
function logShout(string) {
    console.log(string.toUpperCase())
}
function logWhisper(string) {
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string){
        return ('I can\'t hear you!')
    }
    if (string.toUpperCase() === string){
        return ("YES INDEED!")
    }
    if (string === "Let's have dinner together!") {
        return ("I would love to!")
    }
}

//function sayHiToGrandma(string) {
  //  if (string.toLowerCase() === string) {
    //    return ("I can't hear you!")
    //}else if (string.toUpperCase() === string) {
    //    return ("YES INDEED!")
   // } else if (string === "I love you, Grandma.") {
     //   return ("I love you, too.")
    //} 
//}

//this is what I wrote to have it return the correct values

//sayHiToGrandma("hey i'm lowercase")
//sayHiToGrandma("I love you, Grandma")
//sayHiToGrandma("I'M ALL CAPS'")

//everything worked :)