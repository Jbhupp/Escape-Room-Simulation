var readline = require('readline-sync');
var playerName = readline.question("What is your name? ");

console.log(`${playerName}, "Welcome to the Escape Room Simulation!`);
var isAlive = true;
var hasKey = false;

while (isAlive == true) {
    var menuId = readline.keyIn(' Press 1 to Put hand in hole, Press 2 to find the key, or, Press 3 to open door', { limit: '$<1-3>' });

    switch (menuId) {
        case "1": //put hand in hole.
            console.log(`${playerName} you put your hand in the hole. GAME OVER!`)
            isAlive = false;
            break;
        case "2": // Find the key
            if (hasKey == false) {
                console.log(`${playerName}, you have found the key, please proceed to opening the door.`);
                hasKey = true;
            }
            else {
                console.log(`${playerName}, you've already found the key, YOU'RE WASTING TIME! GO TO THE DOOR!`);
            }
            break;
        case "3": // Open the door.
            if (hasKey == false) {
                console.log(`${playerName}, you can't open the door without finding the key first!`)
            }
            else {
                console.log(`${playerName}, you have successfully opened the door, CONGRATULATIONS!`);
                isAlive = false;
            }
            break;
        default:
            console.log(`${playerName} you need to make a selection!`)
    }
}