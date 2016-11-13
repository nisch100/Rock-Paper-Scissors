var userChoice = prompt("Do you choose rock, paper or scissors?");
var randomChoice = Math.random();
if (randomChoice < 0.34) {
	randomChoice = "rock";
} else if(randomChoice <= 0.67) {
	randomChoice = "paper";
} else {
	randomChoice = "scissors";
} console.log("Computer: " + randomChoice);

var compare = function(option1, option2) {
    if(option1 === option2) {
        return "The result is a tie!";
    }
    
    else if (option1==="rock") {
        if (option2 === "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
    
    else if (option1 === "paper") {
        if (option2 === "rock") {
            return "paper wins";
        }
        else {
            return "scissors wins";
        }
    }
    
    else if (option1 ==="scissors") {
        if (option2 === "rock") {
            return "rock wins";
        }
        else {
            return "scissors wins";
        }
    }
    else {
    	return "You have selected the wrong option";
    }
};

console.log(compare (userChoice,randomChoice));

while ( compare (userChoice,randomChoice) === "The result is a tie!") {
    userChoice = prompt("Do you choose rock, paper or scissors?");
    var randomChoice = Math.random();
if (randomChoice < 0.34) {
	randomChoice = "rock";
} else if(randomChoice <= 0.67) {
	randomChoice = "paper";
} else {
	randomChoice = "scissors";
} console.log("Computer: " + randomChoice);

var compare = function(option1, option2) {
    if(option1 === option2) {
        return "The result is a tie!";
    }
    
    else if (option1==="rock") {
        if (option2 === "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
    
    else if (option1 === "paper") {
        if (option2 === "rock") {
            return "paper wins";
        }
        else {
            return "scissors wins";
        }
    }
    
    else if (option1 ==="scissors") {
        if (option2 === "rock") {
            return "rock wins";
        }
        else {
            return "scissors wins";
        }
    }
    else {
        return "You have entered a wrong option";
    }
};
console.log(compare (userChoice,randomChoice));
};