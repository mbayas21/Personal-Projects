console.log("Testing");

var todos = [];
var add = [];

var input = prompt("Would you like to add or view cars or quit?");

while(input !== "quit"){
    
    if(input === "add"){
        var add = prompt("What car would you like to add?")
        todos.push(add);
    }
    
    else if(input === "view"){
        console.log(todos);
    }
    
    input = prompt("Would you like to add or view cars or quit?");
}
console.log("Quit App");
console.log(todos);
