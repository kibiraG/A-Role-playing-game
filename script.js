let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

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
//object properties are written as(name of the property) key: value (value that property holds) pairs
const locations = [{
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"] //surround the property name with quotes because it has more than one word
}]; 

// initialize button
/*The onclick event generally occurs when the user clicks an element.It allows the programmer to
execute a javascript's function when an element gets clicked */
button1.onclick = goStore; // When you click this button you go to store
button2.onClick = goCave; // When you click this button you go to cave
button3.onClick = fightDragon;// when you click this button you fight dragon


function update(location) {

}

function goTown() {
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";

    button1.onClick = goStore;
    button2.onClick = goCave;
    button3.onClick = fightDragon;

    text.innertext = "You are in the town square. You see a sign that says Store.";

    
}


// innerText returns all text contained by an element and all its child elements.
// It controls the text that appears in an HTML element.
// innerHtml on the other hand returns all text, including html tags, that is contained by an element. 

//When you click "Go to store" button it changes the buttons and text to the following
function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";

    button1.onClick = buyHealth;
    button2.onClick = buyWeapon;
    button3.onClick = goTown;

    // Escape sequence for double quote is \"
    text.innerText = "You enter the \"store\"";

}

function goCave() {
    console.log("Going to cave");
}

function fightDragon() {
    console.log("Fighting dragon.");
}

function buyHealth() {

}

function buyWeapon() {

}


