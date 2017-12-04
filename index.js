var string = "hello!"

var Grandma1 = "I can't hear you!"

var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true
 
var lowercase = 'hello!'
 
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'Hello!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase // false


function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log("HELLO")
}

function logWhisper(string){
  console.log("hello")
}

function sayHiToGrandma(string){
  if(string.toLowerCase() === string){
    return(Grandma1)

  }else if(string.toUpperCase === string){
    console.log("YES INDEED!")
  }else if(string === "I love you, Grandma."){
    console.log("I love you, too.")
  }
  }
  
