/*Var is function-scoped, let and const are block scoped
var has hoisting, let and const do not */
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"]; 


/* The querySectlor() method returns the first child element that matches a specified
CSS selector(s) of an element */
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");


// object are indicated by curly braces {}
//object properties are written as (name of the property) key: value (value that property holds) pairs
const weapons = [
    {
    name: "stick",
    power: 5
},
{
    name: "dagger",
    power: 30
}, 
{
    name: "claw hammer",
    power: 50
}, 
{
    name: "sword",
    power: 100
}
];

const monsters = [
    {
    name: "slime",
    level: 2,
    health: 15
},
    {
    name: "fanged beast",
    level: 8,
    health: 60
},
    {
    name: "dragon",
    level: 20,
    health: 300
}
]

const locations = [
    {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"], //surround the property name with quotes because it has more than one word
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
},
{
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."

},
{
    name: "cave",
    "button text": ["Fight slime", "fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
},
{
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster"
},
{
    name: "kill monster",
    "button text": ["Go to town", "go to town", "go to town"],
    "button functions": [goTown, goTown, easterEgg],
    text: 'The monster screams "Arg!" as it dies. You gain experience and find gold.'
},
{
    name: "lose",
    "button text": ["REPLAY", "REPLAY", "REPLAY"],
    "button functions": [restart, restart, restart],
    text: "You die ☠️."
}, 
{
    name: "win",
    "button text": ["REPLAY", "REPLAY", "REPLAY"],
    "button functions": [restart, restart, restart],
    text: "You defeat the dragon! YOU WIN THE GAME! 🎉."
}, 
{
    name: "easter egg",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goTown],
    "text": "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"

}
]; 


// initialize button
/*The onclick event generally occurs when the user clicks an element.It allows the programmer to
execute a javascript's function when an element gets clicked */
button1.onclick = goStore; // When you click this button you go to store
button2.onclick = goCave; // When you click this button you go to cave
button3.onclick = fightDragon;// when you click this button you fight dragon

// innerText returns all text contained by an element and all its child elements.
// It controls the text that appears in an HTML element.
// innerHtml on the other hand returns all text, including html tags, that is contained by an element. 

//The update function updates the buttons to point specific locations options
function update(location) {
    monsterStats.style.display = "none";
    button1.innerText = location["button text"][0]; // using bracket notation to get the button text property of location object passed into the function
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];

    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];

    text.innerText = location.text;


}
/* The values that are declared within a function when the function is called are known as an argument
The variables that are defined when the function is declared are known as parameters 
These are used in function call statements to send value from the calling function to receiving function.*/
function goTown() {
    update(locations[0]); // This is passing the first element of the locations array into update function
    }

function goStore() {
    update(locations[1]);

}

function goCave() {
    update(locations[2]);
}


function buyHealth() {
    if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
    } else {
        text.innerText = "You do not have enough gold to buy health.";

    }
}


/* array indexing starts at zero.The index of the last element in an array is
one less than the length of the array that's why we use .length -1  */
function buyWeapon() {
    if (currentWeapon < weapons.length -1){
    if (gold >= 30) {
        gold -=30;
        currentWeapon ++;
        goldText.innerText = gold;
        let newWeapon = weapons[currentWeapon].name;
        text.innerText = "You now have a " + newWeapon + ".";
        inventory.push(newWeapon);// The push() method adds new items to the end of an array.
        text.innerText += "In your inventory. You have: " + inventory;


    }
    else{
        text.innerText = "You do not have enough gold to buy a weapon.";
    }
}
else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
}

}

/* shift() removes the first element from an array and returns it, 
while unshift() adds one or more elements to the beginning of an array and returns the new length. */
/* The pop() method removes the last element from an array and returns the value to caller*/
function sellWeapon() {
    if ( inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = "You sold a " + currentWeapon + ".";
        text.innerText += "In your inventory you have: " + inventory;
     } else {
        text.innerText = "Don't sell your only weapon!";
     }

}


function fightSlime() {
    fighting = 0;
    goFight();

}

function fightBeast() {
    fighting = 1;
    goFight();

}

function fightDragon() {
    fighting = 2;
    goFight();
   
}

/* both dot notation(.) and square bracket notation ([]) are
 used to access properties of methods and objects */
 /*The style property is used to access the inline style of an element
 and the display property is used to set the visibility of an element */

function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterName.innerText = monsters[fighting].name; /*sets the innerText property of monsterName to be
     the name property of the current monster */

    monsterHealthText.innerText = monsterHealth; //sets health of current monsters

}

//math.random(), generates a random number from 0(inclusive) to 1 (exclusive).
//math.floor (),rounds a given number down to the nearest integer.
//math.floor(math.random() * 10); returns a random integer from 0 to 9.
// math.floor(math.random() * 100) + 1; returns a random integer from 1 to 100.
/*The parameters, in a function call, are the function's arguments.Javascript arguments
are passed by value:The function only gets to know the values, not the argument's locations.
If a function changes an argument's value , it does not change the parameter's original value.*/
function attack() {
    text.innerText = "The " + monsters[fighting].name + "attacks.";
    text.innerText = " You attack it with your " + weapons[currentWeapon].name + ".";
    /* health -= monsters[fighting].level; // -> sets health to equal health minus the monster's level. */
    health -= getMonsterAttackValue(monsters[fighting].level); /* This sets health equal to health minus the 
    return value of the getMonsterAttackValue function, and passes the level of the monster as an argument*/
    if (isMonsterHit()){
        monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    } else {
        text.innerText += "You miss.";
    }
  
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;


    //The attack of the monster will be based on the monster's level and the player's xp
    function getMonsterAttackValue(level){
        const hit = (level * 5) - (Math.floor(Math.random() * xp)); /*This will set the monster's attack to five times
        their level minus a random number between 0 and the player's xp*/
        console.log(hit);
        return hit > 0 ?  hit: 0; //returns hit if if hit is grater than 0, or returns 0 if its not

    }

    /*The player should hit if either Math.random() > .2 
or if the player's health is less than 20 */
/*The logical OR operator will use the first value if it's truthy
.otherwise it will use the second*/
function isMonsterHit () {
    return Math.random() > .2 || health < 20;
}


    if (health <= 0){
        lose();
     } else if (monsterHealth <= 0) {
        defeatMonster();

        //The strict equality operator checks if values are equal and same data type
        if(fighting === 2) {
            winGame();
        } else {
            defeatMonster();
        }

     }

     // invontory.pop() Removes the last item in an array AND return it so it appears in your string
     if (Math.random() <= .1 && inventory.length !== 1) {
        text.innerText += " Your " + inventory.pop() + "breaks.";
        currentWeapon --;
         
     }

}

function dodge() {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name;

}

function defeatMonster() {
    gold += Math.floor (monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4]);

}

function lose() {
    update(locations[5]);

}

function winGame() {
    update(locations[6]);

}

function restart() {
    xp = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = ["stick"];

    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    
    goTown();
    
}

// A hidden feature
function easterEgg() {
    update(locations[7]);
}

/*A while loop accepts a condition, and will run the code in the block 
until the condition is no longer true */
/*for loops are declared with three expressions separated by semicolons. for (a; b; c) 
where a - the inialization expression 
      b - the condition
      c - the final expression 
      */
     /*The .includes() method determines if an array contains an element and will return either true or false. */
function pick(guess) {
    const numbers = [];
    while (numbers.length < 10) {
        numbers.push(Math.floor(Math.random() * 11));
        text.innerText = "You picked \n" + guess + ". Here are the random numbers:";

        /*A for loop runs for a specific number of times*/
        for (let i = 0; i < 10; i++) {
            text.innerText += numbers[i] + "\n";

        }

        if (numbers.includes(guess)) {
            "Right! You win 29 gold!";
            gold += 20;
            goldText.innerText = gold;

        } else {
            "Wrong! You lose 10 health!";
            health += 10;
            healthText.innerText = health;

            if (health <= 0) {
                lose();
            }
        }

    }
    
}

function pickTwo() {
    pick(2);

}

function pickEight() {
    pick(8);

}



