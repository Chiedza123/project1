var msg = 'Hello World';
msg.charAt(6)
msg.charAt(0)

function helloName(name) { 
    //toDo Hello to anyone whose name gets passed in 
    var greetingsPrefix = "hello "; 
    var person;  

    if (name && name.length) {
        person = name;  

        
    } else {
        person = "world"; 
    } 

    return greetingsPrefix + person; 

}

// helloName();
// helloName("aChiedza");
// helloName("");
// helloName("Rhianna");


function logType(type) {    
    console.log(typeof type); 
}

var names = [undefined, "aChiedza", "", "Rhianna"];

console.log("\n", "we are going to say hello");

for (var count = 0; count < names.length; count = count + 1) {

    //we are going to say hello to some people 
    console.log(helloName(names[count]));
} 

console.log("\n", "we are going to log some types");
logType(true)
logType("window")
logType(100)
logType("")
var x;

var types = [undefined, "", "dog", 10, true, NaN, null, {}, [], function() {}, false];

console.log("we are defining types");

for (var count = 0; count < types.length; count = count + 1) {

    //we are going to log some types 
    logType(types[count]);

} 

/*{}
new Object()
new Object

[]
new Array()
new Array*/
